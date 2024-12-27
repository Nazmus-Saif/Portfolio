import React from "react";
import ContactForm from "./contactForm";

const ContactPage = () => {
  return (
    <article className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Intro section */}
      <section>
        <h3 className="h3 contact-intro-title">DON'T BE SHY!</h3>
        <p className="contact-intro-text">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </section>

      {/* Mapbox section */}
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d179215.98518874!2d91.08519252680544!3d23.934362628090835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1734417782879!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      {/* Contact section */}
      <ContactForm />
    </article>
  );
};

export default ContactPage;
