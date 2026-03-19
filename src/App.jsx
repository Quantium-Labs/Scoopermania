import { useState } from 'react'
import Navbar from './Navbar.jsx'

function App() {

  return (
      <>
      <head>
        <title>Scoopermania</title>
      </head>

      <body>

      <div id="screen-dimmer" onClick="exitInfo()"></div>

      <Navbar/>

      <div id="center" className="glass">
        <div id="countdown-container">
          <div className="time-unit">
            <span className="number" id="days">00</span>
            <span className="label">Days</span>
          </div>
          <span className="colon">:</span>
          <div className="time-unit">
            <span className="number" id="hours">00</span>
            <span className="label">Hours</span>
          </div>
          <span className="colon">:</span>
          <div className="time-unit">
            <span className="number" id="minutes">00</span>
            <span className="label">Minutes</span>
          </div>
          <span className="colon">:</span>
          <div className="time-unit">
            <span className="number" id="seconds">00</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      </div>

      <div id="scrollBtn">
        <button className="mainBtn" id="scroll" onClick="mainBtnClick()">More Info</button>
      </div>

      <div className="infoRight glass">
        <p id="exit" onClick="exitInfo()">X</p>
        <h2 id="infoTitle">More Info</h2>
        <h3 className="larger">What even is Scoopermania?</h3>
        <p className="info">Scoopermania is an annual all-you-can-eat ice cream fundraiser for the Jimmy Fund and
          Dana-Farber Cancer Institute!</p>
        <h3 className="larger">When is it?</h3>
        <p className="info">Scoopermania will be held on Saturday, May 17, 2025, from 11:00 AM to 4:00 PM at the <a
            id="map" href="https://maps.apple.com/directions?destination=42.415726%2C+-71.15239&mode=driving">Cyrus
          Dallin Art Museum.</a></p>
      </div>

      </body>
      <script src="script.js"></script>
      </>
  )
}

export default App
