import React from 'react'

export default function Projects() {
  return (
    <div className="projects" id="projects">
    <div className="container-3">
      <h1>My Projects</h1>
      <div className="main-box">
        <div className="box">
          <img src="images/calculator.jpg" alt="" />
          <div className="sub-details">
            <h3>Calculator</h3>
            <p>In this app you can solve your mathematical queries efficiently</p>
            <a href="https://kunalroy123.github.io/Calculator" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </div>
        </div>
        <div className="box">
          <img src="/images/currency-converter.jpg" alt="" />
          <div className="sub-details">
            <h3>Currency Converter</h3>
            <p>In this app you can fetch up-to-date exchange rates from an API and provides instant conversion results</p>
            <a href="https://kunalroy123.github.io/Currency-Converter" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/text-to-speech.jpg" alt="" />
          <div className="sub-details">
            <h3>Text To Speech</h3>
            <p>In this app you can converts written text into spoken words</p>
            <a href="https://kunalroy123.github.io/Text-To-Speech-Converter" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/todo-list.jpg" alt="" />
          <div className="sub-details">
            <h3>Todo List</h3>
            <p>This app helps users organize tasks and manage their daily activities efficiently.</p>
            <a href="https://kunalroy123.github.io/To-Do-List" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/quote-generator.jpg" alt="" />
          <div className="sub-details">
            <h3>Quote Generator</h3>
            <p>In this app you can read the random quotes from an API</p>
            <a href="https://quote-fusion.netlify.app" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/weather.jpg" alt="" />
          <div className="sub-details">
            <h3>Weather App</h3>
            <p>In this app you can know the weather conditions of all places</p>
            <a href="https://kunalroy123.github.io/Weather-App" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </div>
        </div>
      </div>
      <button className="btn2">See More</button>
    </div>
  </div>
  )
}
