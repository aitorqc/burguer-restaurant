import React from 'react'
import aboutImage from "../images/about.png"

export default function About() {
  return (
    <div id="about">
        <div className="about-text">
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum cum expedita. Voluptas ratione beatae sunt incidunt, in delectus doloremque aliquid, iure tempora ad nobis.</p>
            <button>Read More</button>
        </div>
        <div className="about-image">
            <img src={aboutImage} alt="" />
        </div>
    </div>
  )
}
