import React from "react";

const ErrorPage = () => {
  return (
    <article className="error">
      <header>
        <h2 class="h2 article-title">Error</h2>
      </header>
      <section className="error-page-wrapper">
        <div className="error-page">
          <h2>404 - Content Not Found</h2>
          <p>The content you're looking for does not exist.</p>
        </div>
      </section>
    </article>
  );
};

export default ErrorPage;
