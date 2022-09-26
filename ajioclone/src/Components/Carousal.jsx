import React, { Component } from "react";
import Slider from "react-slick";
import { ChevronLeftIcon } from '@chakra-ui/icons'
export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    const images = [
      "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Sports-&-Casual-Shoes.jpg",
      "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Flip-Flops-&-Sandals.jpg",
      "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Sneakers.jpg",
      "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Watches.jpg",
      "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Sunglasses.jpg",
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
        <button className="sliderButton">
          <ChevronLeftIcon />
        </button>
      </div>
    );
  }
}
