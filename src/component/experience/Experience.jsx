import React from 'react'
import "./experience.scss"


export default function Experience() {

  const data =[
    {
      id: "1",
      icon:"assets/TDT.png",
      title: "Developer",
      place: "AI LAB Ton Duc Thang University",
      desc : "description",
      featured: true

    },
    {
      id: "2",
      icon:"assets/TDT.png",
      title: "Developer",
      place: "NewAI",
      desc : "description",
      featured: true
    }
  ]

  return (
    <div className="experience" id = "experience">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d)=>(
          <div className= {d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.icon} alt="" className="logo"/>
            </div>
            <div className="center">
              <h3>{d.title}</h3>
              <h4>{d.place}</h4>
            </div>
            <div className="bottom">
                {d.desc}
            </div>
          </div>
        ))}

      </div>
      
    </div>
  )
}
