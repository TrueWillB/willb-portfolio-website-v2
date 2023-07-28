import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const submitContactForm = (e) => {
    e.preventDefault();
    console.log("contact submit pressed");
    setContactSubmitted(true); //State has been changed to "true"
  };

  return (
    <div className="main-content-holder">
      <h1>Contact Me</h1>
      <div className="contact-form">
        {/* A ternary operator. Renders a brief thank you if the form is submitted, otherwise leaves the form up to view */}
        {contactSubmitted ? (
          <p>
            Thank you for your message. I will get back to you as soon as
            possible.
          </p>
        ) : (
          <form onSubmit={submitContactForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                className="form-control"
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                placeholder="Enter message"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
