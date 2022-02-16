import React from 'react'
import "./aboutme.scss"
import {Facebook, Instagram, LinkedIn} from "@material-ui/icons"
import { saveAs } from "file-saver";



export default function Aboutme() {

  const saveFile = () =>{
    saveAs("assets/NguyenHoangNam-_CV.pdf","NguyenHoangNam_CV.pdf");
  }

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
                <h2>I'm a computer science student at Ton Duc Thang University
                <br />
                I strive for a software engineer and web developer.</h2>
                <br />
                <h2 className='specifich2'>Connect with me</h2>
                <br />
                <h2  className='specifich2' ><a href="https://www.facebook.com/Tony.nhnam/"><Facebook fontSize="large"/></a>
                <a href="https://www.linkedin.com/in/nhnam3004/"><LinkedIn fontSize="large"/></a>
                <a href="https://www.instagram.com/hoangnam_3004/"><Instagram fontSize="large"/></a>
                </h2>
                <br />
                <h2  className='specifich2' >My CV</h2>
                <br />
                <button onClick={saveFile}>Download My CV</button>
                

            </div>

      </div>
    </div>
  )
}
