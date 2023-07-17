import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div>
          <p className="review-text">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            corrupti error at sed sit inventore libero autem assumenda,
            quibusdam quisquam culpa sint cum pariatur, rem impedit unde ad
            laborum non?"
          </p>
        </div>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava01} alt="ava01" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <div>
          <p className="review-text">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            corrupti error at sed sit inventore libero autem assumenda,
            quibusdam quisquam culpa sint cum pariatur, rem impedit unde ad
            laborum non?"
          </p>
        </div>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava02} alt="ava02" />
          <h6>Mitchell Marsch</h6>
        </div>
      </div>
      <div>
        <div>
          <p className="review-text">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            corrupti error at sed sit inventore libero autem assumenda,
            quibusdam quisquam culpa sint cum pariatur, rem impedit unde ad
            laborum non?"
          </p>
        </div>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava03} alt="ava03" />
          <h6>Steven Crock</h6>
        </div>
      </div>
      <div>
        <div>
          <p className="review-text">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            corrupti error at sed sit inventore libero autem assumenda,
            quibusdam quisquam culpa sint cum pariatur, rem impedit unde ad
            laborum non?"
          </p>
        </div>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava04} alt="ava04" />
          <h6>John Doe</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;

