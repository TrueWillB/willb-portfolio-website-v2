import React, { useState, useRef } from "react";

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const submitContactForm = (e) => {
    e.preventDefault();
    console.log("contact submit pressed");
  };

  return (
    <div className="main-content-holder">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <form onSubmit={submitContactForm}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              id="name"
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              className="form-control"
              placeholder="Enter email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
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
      </div>
    </div>
  );
}
