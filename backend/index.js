import express, { json } from "express";
import mongoose from "mongoose";
import { createTransport } from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import winston from "winston";
import helmet from "helmet";
import Comment from "./models/commentStore.js";

dotenv.config();
const app = express();

// Function to check for required environment variables
const checkEnvVariables = (vars) => {
  vars.forEach((envVar) => {
    if (!process.env[envVar]) {
      console.error(`Missing required environment variable: ${envVar}`);
      process.exit(1);
    }
  });
};

// Check if required environment variables are set
checkEnvVariables([
  "FRONTEND_URL",
  "EMAIL",
  "PASSWORD",
  "LOG_LEVEL",
  "MONGODB_URI",
]);

// Middlewares
app.use(json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Helmet middleware for additional security
app.use(helmet());

// Rate limiter for comment submissions
const commentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per window
  message: "Too many requests, please try again later.",
});

// Rate limiter for email submissions
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: "Too many emails sent, please try again later.",
});

// Connect to MongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};
connectMongoDB();

// Nodemailer transporter setup
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Winston logger setup with better default behavior
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "combined.log",
      level: "debug", // Ensure that the file transport captures all logs
    }),
  ],
});

// Helper function to handle errors consistently
const handleError = (res, message, status = 500) => {
  logger.error(message);
  res.status(status).json({ error: message });
};

// Hello for successful setup on Vercel
app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

// Endpoint to handle comment form submission
app.post("/submit-comment", commentLimiter, async (req, res) => {
  const { name, comment } = req.body;

  if (!name || !comment) {
    return handleError(res, "Name and comment are required", 400);
  }

  try {
    const newComment = new Comment({ name, comment });
    await newComment.save();
    logger.info(`New comment submitted: ${name} - ${comment.slice(0, 50)}...`);
    res.status(200).json({ message: "Comment saved successfully to database" });
  } catch (error) {
    logger.error("Failed to save comment:", error);
    handleError(res, "Failed to save comment", 500);
  }
});

// Endpoint to get all comments
app.get("/get-comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    logger.error("Error fetching comments:", error);
    handleError(res, "Failed to fetch comments", 500);
  }
});

// Contact form submission endpoint with rate limiter applied
app.post(
  "/send-email",
  emailLimiter,
  [
    body("email").isEmail().withMessage("Invalid email address."),
    body("name").notEmpty().withMessage("Name is required."),
    body("subject").notEmpty().withMessage("Subject is required."),
    body("message").notEmpty().withMessage("Message is required."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, subject, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject,
      text: `From: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      logger.info(`Email Sent: ${info.response}`);
      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      logger.error("Error Sending Email:", error);
      handleError(res, "Failed to send email.", 500);
    }
  }
);

const server = app.listen(process.env.PORT, () => {
  logger.info("Server is running...");
});

// Graceful shutdown the server
const shutdown = () => {
  logger.info("Shutting down gracefully...");
  server.close((err) => {
    if (err) {
      logger.error("Error during shutdown:", err);
      process.exit(1);
    }
    logger.info("Server shut down gracefully.");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
