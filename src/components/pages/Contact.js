import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="contact-form">
        <form>
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
