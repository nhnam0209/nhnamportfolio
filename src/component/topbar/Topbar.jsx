import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="left">
                <a href="#intro" className= "logo">
                   NHNAM.
                </a>
                <div className="itemContainer">
                    <Person className = "icon"/>
                    <span>+84 773 196 729</span>
                </div>
                <div className="itemContainer">
                    <Mail className = "icon"/>
                    <span>nhnam3004@gmail.com</span>
                </div>
          </div>
          <div className="right">
              <div className="menuhamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
          </div>
      </div>
    </div>
  )
}
