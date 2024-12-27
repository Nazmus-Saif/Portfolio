import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the form data to the backend
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/send-email`,
        contactFormData
      );

      setAlertMessage("Mail Sent Successfully.");
      setAlertVisible(true);

      // Clear form fields
      setContactFormData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
    } catch {
      setAlertMessage("Message Sending Failed!");
      setContactFormData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
      setAlertVisible(true);
    } finally {
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
      setIsSubmitting(false); // Reset loading state
    }
  };

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isContactFormValid =
    isEmailValid.test(contactFormData.email) &&
    contactFormData.name &&
    contactFormData.subject &&
    contactFormData.message;

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Your Email"
            value={contactFormData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Your Name"
            value={contactFormData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            className="input-field"
            placeholder="Your Subject"
            value={contactFormData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="input-field"
          placeholder="Your Message"
          value={contactFormData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button
          className="form-btn"
          type="submit"
          name="send"
          disabled={!isContactFormValid || isSubmitting}
        >
          <span>{isSubmitting ? "Sending..." : "Send"}</span>
        </button>
      </form>

      {/* Alert message */}
      {alertVisible && (
        <div
          className={`alert ${alertVisible ? "show" : "hide"}`}
          aria-live="assertive"
        >
          <b>{alertMessage}</b>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
