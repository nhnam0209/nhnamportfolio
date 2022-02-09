import React from 'react'
import "./aboutme.scss"
import {Facebook, Instagram, LinkedIn} from "@material-ui/icons"


export default function Aboutme() {
  return (
    <div className='aboutme' id='aboutme'>
      <div className="left">
        <div className="imgContainer">
            <img src="assets/aboutmepic.png" alt="" />
        </div>
      </div>
      <div className="right">
            <div className="wrapper">
                <h1>Nguyen Hoang Nam (Tony)</h1>
                <br />
                <br />
                <h2>Computer science student in Ton Duc Thang University</h2>
                <br />
                <h2>I strive for a software engineer and web developer.</h2>
                <br />
                <br />
                <h2>Connect with me</h2>
                <br />
                <h2><a href="https://www.facebook.com/Tony.nhnam/"><Facebook fontSize="large"/></a>
                <a href="https://www.linkedin.com/in/nhnam3004/"><LinkedIn fontSize="large"/></a>
                <a href="https://www.instagram.com/hoangnam_3004/"><Instagram fontSize="large"/></a>
                </h2>

            </div>

      </div>
    </div>
  )
}
