import React from 'react'

export default function Home() {
  return (
<div className="home" id="home">
    <div className="bg-image">
      <img className="image" src="images/bg2.png" alt="" />
    </div>
    <div className="text">
      <p id="name">
        Hi, I'm{" "}
        <span id="bold" className="animate-name">
          Kunal
        </span>
      </p>
      <p id="role">Front-End Developer</p>
      <p id="summary">
        Passionate front-end developer with experience in building responsive
        and user-friendly web interfaces. Skilled in HTML, CSS, JavaScript, and
        modern frameworks like React.{" "}
      </p>
      <div className="icons">
        <a href="https://github.com/Kunalroy123" target="_blank" rel="noopener noreferrer">
          <i
            className="icon fa-brands fa-github"
            style={{ color: "#ff004f" }}
          />
        </a>
        <a href="https://www.instagram.com/its.kunal_roy" target="_blank" rel="noopener noreferrer">
          <i
            className="icon fa-brands fa-instagram"
            style={{ color: "#ff004f" }}
          />
        </a>
        <a href="https://linkedin.com/in/kunalroy9987" target="_blank" rel="noopener noreferrer">
          <i
            className="icon fa-brands fa-linkedin-in"
            style={{ color: "#ff004f" }}
          />
        </a>
        <a href="https://wa.me/+918744904979" target="_blank" rel="noopener noreferrer">
          <i
            className="icon fa-brands fa-whatsapp"
            style={{ color: "#ff004f" }}
          />
        </a>
      </div>
      <div className="btn">
        <a href="#about">
          <button>More About Me</button>
        </a>
      </div>
    </div>
  </div>
  )
}
