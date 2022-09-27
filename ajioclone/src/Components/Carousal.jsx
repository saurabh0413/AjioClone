import React, { Component } from "react";
import Slider from "react-slick";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomArrows = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          height: "45px",
          width: "45px",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          height: "45px",
          width: "45px",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="sliderComing">
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div className="slideImage">
              <img src={img} alt="" />
            </div>
          );
        })}
      </Slider>
      
    </div>
  );
};

export default CustomArrows;
