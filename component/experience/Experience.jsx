import React from 'react'
import "./experience.scss"


export default function Experience() {

  const data =[
    {
      id: "1",
      icon:"assets/TDT.png",
      title: "Developer",
      place: "AI LAB Ton Duc Thang University",
      desc : "Joined AI LAB since 2019 with a work such as research AI technology and trainee guide for new student.",
      featured: true

    },
    {
      id: "2",
      icon:"assets/NewAi.png",
      title: "Developer",
      place: "NewAI",
      desc : "Joined NewAI since 2020 until October 2021 with a work such as applying AI technology on web application.",
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
