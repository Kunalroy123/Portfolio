import React from 'react'

export default function Contact() {
  return (
    <div className="contact" id="contact">
    <div className="container-4">
      <div className="row">
        <div className="contact-left">
          <h1>Contact Me</h1>
          <p>
            <i className="fas fa-paper-plane" style={{ color: "#ff004f" }} />{" "}
            kunalroy9987@gmail.com
          </p>
          <p>
            <i
              className="fas fa-phone-square-alt"
              style={{ color: "#ff004f" }}
            />{" "}
            +91-8744904979
          </p>
          <div className="footer-icons">
            <a href="https://github.com/Kunalroy123" target="_blank" rel="noopener noreferrer">
              <i
                className="icon fa-brands fa-github"
                style={{ color: "#fff" }}
              />
            </a>
            <a href="https://www.instagram.com/its.kunal_roy" target="_blank" rel="noopener noreferrer">
              <i
                className="icon fa-brands fa-instagram"
                style={{ color: "#fff" }}
              />
            </a>
            <a href="https://linkedin.com/in/kunalroy9987" target="_blank" rel="noopener noreferrer">
              <i
                className="icon fa-brands fa-linkedin-in"
                style={{ color: "#fff" }}
              />
            </a>
            <a href="https://wa.me/+918744904979" target="_blank" rel="noopener noreferrer">
              <i
                className="icon fa-brands fa-whatsapp"
                style={{ color: "#fff" }}
              />
            </a>
          </div>
          <a href="Kunal's CV.pdf" download="" className="download-btn">
            Download CV
          </a>
        </div>
        <div className="contact-right">
          <form name="submit-to-google-sheet">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required=""
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required=""
            />
            <textarea
              name="Message"
              rows={8}
              placeholder="Your Message"
              defaultValue={""}
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
 
  )
}
