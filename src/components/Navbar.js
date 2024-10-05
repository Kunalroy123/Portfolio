import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar" id="home">
    <ul className="sidebar">
      <li>
        <p className="hide">
          <i className="fa-solid fa-xmark" />
        </p>
      </li>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <ul className="menu" id="menu">
      <li>
        <a href="#">
          <span id="bold">P</span>ortfolio
        </a>
      </li>
      <li className="hideMenu">
        <a href="#home">Home</a>
      </li>
      <li className="hideMenu">
        <a href="#about">About</a>
      </li>
      <li className="hideMenu">
        <a href="#projects">Projects</a>
      </li>
      <li className="hideMenu">
        <a href="#contact">Contact</a>
      </li>
      <li className="show">
        <p>
          <i className="fa-solid fa-bars" />
        </p>
      </li>
    </ul>
  </nav>
  )
}
