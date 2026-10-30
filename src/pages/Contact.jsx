
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Frontend demonstration only.
    // A backend or email service is needed to deliver messages.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact <span>Me</span></h1>
        <p>Have a question or an idea? Send me a message.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's work together.</h2>
          <p>
            I'm interested in frontend projects, learning
            opportunities, and collaborating with other developers.
          </p>

          <div className="contact-item">
            <span className="contact-icon">@</span>
            <div>
              <strong>Email</strong>
              <p>shah25priyanshu@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">{"</>"}</span>
            <div>
              <strong>Availability</strong>
              <p>Open to learning and projects</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your idea..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Demo submitted successfully! No email has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
