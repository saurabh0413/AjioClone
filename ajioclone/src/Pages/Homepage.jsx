import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import "../Components/index.css";
import Carousal from "../Components/Carousal";
const Homepage = () => {
  return (
    <HomeCss>
      <Navbar />
      <Carousal />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-rewards-header.jpg"
        alt=""
      />
      <div className="invite-friends">
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-rewards-referearnupto1500.jpg"
          alt=""
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/1609-rewards-AJIOEgiftcard.jpg"
          alt=""
        />
      </div>
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-brandsinthespotlight-header.jpg"
        alt=""
      />
      <div className="below-brand-spotlight">
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-brandsinthespotlight-campus.jpg"
          alt=""
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/D-brandsinthespotlight-adidas-UPDATED.jpg"
          alt=""
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-brandsinthespotlight-puma.jpg"
          alt=""
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-brandsinthespotlight-levis.jpg"
          alt=""
        />
      </div>
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/16092022-UHP-D-sponsorcarousel-sectionheader.jpg"
        alt=""
      />
      <img src="https://assets.ajio.com/cms/AJIO/WEB/16092022-D-MHP-freedelivery-alloreders.jpg" alt="" />
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-shipping.jpg" alt="" />
      <img src="https://assets.ajio.com/cms/AJIO/WEB/1609-D-BestSellers-Header.jpg" alt="" />
    </HomeCss>
  );
};

export default Homepage;

const HomeCss = styled.div``;
