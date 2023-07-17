import React from 'react'
import Slider from "react-slick"

import ava01 from "../../../assets/images/ava-1.jpg"
import ava02 from "../../../assets/images/ava-2.jpg"
import ava03 from "../../../assets/images/ava-3.jpg"
import ava04 from "../../../assets/images/ava-4.jpg"



import "../../../styles/slider.css"

import { useContext } from "react";
import { AppContext } from "../../../AppContext";

const UnsereTeamSlider = () => {
    const { loadedEmployees} =
    useContext(AppContext);
    let imagePath;
    const settings = {
        dots:true,
        autoplay:true,
        infinite:true,
        speed:3000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1,
    }
  return (
    <Slider {...settings}>
        {
            loadedEmployees.map((employee)=>{
                if(employee.employeeID === 1 || employee.employeeID === 9) {
                    imagePath = ava01
                } else if (employee.employeeID === 2 || employee.employeeID === 6) {
                    imagePath = ava02
                } else if (employee.employeeID === 3 || employee.employeeID === 7 || employee.employeeID === 5) {
                    imagePath = ava03
                } else if (employee.employeeID === 4 || employee.employeeID === 8) {
                    imagePath = ava04
                }
                return <div key={employee.employeeID}>

  
                <div>
                    <p className="review-text">{`Hey, Ich bin ${employee.firstName}  
                    ${employee.lastName}. `}</p>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
                    <img src={imagePath} alt={`ava-${employee.employeeID}`} style={{width:"250px"}}/>
                </div>
                <div className="slider-content d-flex align-items-center justify-content-center gap-3">

                    <h6>{employee.title}</h6>
        
                </div>
                </div>
            })
        }
    </Slider>
  )
}

export default UnsereTeamSlider