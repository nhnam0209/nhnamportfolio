import React from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist'
import "./portfolio.scss"
import { useEffect, useState } from 'react'


export default function Portfolio() {

    const[selected,setSelected] = useState("featured")

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "photography",
            title: "Photography"
        }
    ]
  return(
    <div className="portfolio" id = "portfolio">
      <h1>Portfolio</h1>
      <ul>
          {list.map((item) =>(
              <Portfoliolist title={item.title} 
              active={selected === item.id} 
              setSelected ={setSelected}
              id = {item.id}/>
          ))}

      </ul>
      <div className="container">
          <div className="item">
              <img src="assets/Mylogo.jpg" alt="" />
              <h3>Banking App</h3>
          </div>
      </div>

    </div>
  )
}
