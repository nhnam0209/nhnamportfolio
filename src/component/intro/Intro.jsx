import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();
  
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings:["Developer", "Filmmaker", "Photographer"],
        })
    }, [])

  return (
    <div className="intro" id = "intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/profilepic.png" alt="Profile Pic"/>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Nguyen Hoang Nam</h1>
                <h3><span ref={textRef}></span></h3>
            </div>
            <a href="#aboutme">
                
                <img src="assets/downarrow.png" alt="" />
            </a>
        </div>
      
    </div>
  )
}
