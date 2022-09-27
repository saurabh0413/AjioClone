import React, { Component } from "react";
import Slider from "react-slick";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomArrows = () => {
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

  const images = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-Sponsorbrands-p1-ritukumar-upto50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-Sponsorbrands-p2-levis-30to50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-Sponsorbrands-p3-campus-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-Sponsorbrands-p4-superdry-30to50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-Sponsorbrands-p5-zivame-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Home.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Formal-Shoes.jpg",
  ];
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
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-sponsorcarousel-sectionheader.jpg"
        alt=""
      />
    </div>
  );
};

export default CustomArrows;
