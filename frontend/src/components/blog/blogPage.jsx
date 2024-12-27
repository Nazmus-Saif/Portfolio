import React from "react";

const blogEntries = [
  {
    imageSource: "./images/hope.jpg",
    blogCategory: "Life",
    publishedDate: "04 Feb, 2024",
    blogTitle: "Opodesh",
    blogText: "There is always room to grow. So don't be disappointed in life.",
  },
  {
    imageSource: "./images/technology.jpg",
    blogCategory: "Technology",
    publishedDate: "16 Dec, 2024",
    blogTitle: "Tech Innovations",
    blogText:
      "Technology is evolving at an exponential rate, making life easier every day.",
  },
  {
    imageSource: "./images/health.jpg",
    blogCategory: "Health",
    publishedDate: "17 Dec, 2024",
    blogTitle: "Healthy Living",
    blogText:
      "A healthy lifestyle can significantly improve your quality of life.",
  },
  {
    imageSource: "./images/artificial intelligence.jpg",
    blogCategory: "Technology",
    publishedDate: "18 Dec, 2024",
    blogTitle: "The Future of Artificial Intelligence",
    blogText:
      "Artificial Intelligence is revolutionizing industries, from healthcare to finance, and shaping the way we interact with technology.",
  },
  {
    imageSource: "./images/advise.jpg",
    blogCategory: "Business",
    publishedDate: "18 Dec, 2024",
    blogTitle: "Quality and Consistency Drive Long-Term Success",
    blogText:
      "In today's world, many businesses focus heavily on creating visually stunning websites, banners, and advertisements. While these elements are important, they won't guarantee long-term success if the product or service lacks quality and consistency. Ultimately, it's the value and reliability of what you offer that drives profits. A great product or service that genuinely meets customer needs will always outshine flashy marketing. The key to sustained success isn’t just about the look—it’s about the quality behind the business.",
  },
  {
    imageSource: "./images/motivation.jpg",
    blogCategory: "Motivation / Personal Growth",
    publishedDate: "19 Dec, 2024",
    blogTitle:
      "Everyone shares the result of their success no one tells about the process",
    blogText:
      "In today’s world, social media and public forums are flooded with success stories. From entrepreneurial triumphs to academic achievements, we often see the end results of hard work and dedication. However, what’s rarely shared is the process behind these successes. People tend to focus on the final outcome, but few are willing to reveal the struggles, setbacks, and challenges they encountered along the way.\n\nWhy is that?\n\nThe truth is, people prefer to showcase their victories rather than the difficulties they faced to achieve them. The journey to success is often riddled with failures, doubts, and moments of vulnerability. It's easier to celebrate the finish line, but harder to talk about the obstacles that made the journey difficult. Moreover, no one likes to appear weak or vulnerable, especially when there is competition around. There’s a tendency to hide the process, fearing it might give competitors an advantage.\n\nSuccess is often seen as the end of a battle, but the battle itself is where growth, learning, and resilience happen. Sharing the process can inspire others to push through their own challenges. By talking about the hard times, we not only give others hope but also remind ourselves of how far we've come.\n\nIn the end, the journey is just as important as the destination. It’s time to share both – the successes and the struggles.",
  },
  {
    "imageSource": "./images/motivation.jpg",
    "blogCategory": "Inspiration",
    "publishedDate": "19 Dec, 2024",
    "blogTitle": "The Power of Belief",
    "blogText": "The difference between Jadoo and Chamatkar is Jadoo occurs by chance and Chamatkar occurs by belief."
}
];

const BlogPage = () => {
  return (
    <article className="blogs">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-list">
        <ul className="blog-items">
          {blogEntries.map((post, index) => (
            <li className="blog-item" key={index}>
              <div>
                <figure className="blog-banner-box">
                  <img
                    src={post.imageSource}
                    alt={`Blog Poster ${index + 1}`}
                    loading="lazy"
                  />
                </figure>
                <div className="blog-item-content">
                  <div className="blog-post-meta">
                    <p className="blog-item-category">{post.blogCategory}</p>
                    <span className="separator-dot"></span>
                    <time>{post.publishedDate}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.blogTitle}</h3>
                  <p className="blog-text">{post.blogText}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default BlogPage;
