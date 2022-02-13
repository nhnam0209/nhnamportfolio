import React, { useState } from 'react'
import "./work.scss"

export default function Work() {
    const [currentSlide,setCurrentSlide] = useState(0)

    const data =[
        {
            id: "1",
            icon : "../../assets/webworkimg.png",
            title: "Smart CV",
            desc: " Applying Artificial Intelligence techniques to develop a CV maker tool in order to enhance the way of making CV.",
            img: "../../assets/smartcv.png",
            project : "https://smartcv.com.vn/"

        },
        {
            id: "2",
            icon : "../../assets/webworkimg.png",
            title: "Jade Emporium Web Ecomerce",
            desc: "Ecomerce website to take order from customer.",
            img: "../../assets/jelogo.png",
            // project : "https://smartcv.com.vn/"

        },
        {
            id: "3",
            icon : "../../assets/webworkimg.png",
            title: "My Portfolio Website",
            desc: "My portfolio to introduce myself.",
            img: "../../assets/myportfolio.png",
            // project : "https://smartcv.com.vn/"

        }
    ]

    const handleClick = (way) =>{

        //if currentSlide > 0 & left 
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
        //if currentSlide < {length of data -1} if not +1
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0)
    };

  return (
    <div className="work" id  = "work"> 
      <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
          {data.map(d=>(
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <span><a href= {d.project}>Project</a></span>
                        </div>

                    </div>
                    <div className="right">
                        <img src={d.img}alt="" />

                    </div>
                </div>
            </div> 
          ))}

      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}
