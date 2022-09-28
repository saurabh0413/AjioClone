import React from "react";
import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Header>
      <div className="home-logo-div">
        <img
          src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
          alt="ajio-logo"
        />
      </div>
      <Menulist>
        <ul>
          <Link to="/shop/men">
            <li>MEN</li>
          </Link>
          <Link to="/shop/women">
            <li>WOMEN</li>
          </Link>
          <Link to="/shop/kids">
            <li>KIDS</li>
          </Link>
          <Link to="/shop/indie">
            <li>INDIE</li>
          </Link>
          <Link to="/shop/kitchen">
            <li>HOME AND KITCHEN</li>
          </Link>
        </ul>
      </Menulist>

      <InputSearch>
        <div className="visit-ajio"></div>
        <input type="text" placeholder="search AJIO" className="headerSearch" />
        <ShopLogo>
          <img
            src="https://assets.ajio.com/static/img/wishlistIcon.svg"
            alt=""
          />
          <img
            src="https://assets.ajio.com/static/img/wishlistIcon.svg"
            alt=""
            style={{ marginLeft: "-40px" }}
          />
        </ShopLogo>
      </InputSearch>
    </Header>
  );
};

const Header = styled.div`
  //   border: 1px solid red;
  height: 90px;
  border-top: 3px solid rgb(47, 66, 84);
  display: flex;
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 1;
`;

const Menulist = styled.div`
  margin-left: 15%;
  height: 25px;
  margin-top: 2.4%;
`;
const InputSearch = styled.div`
  //   border: 1px solid black;
  width: 30%;
  display: flex;
  height: 40px;
  margin-top: 45px;
  padding-left: 50px;
`;

const ShopLogo = styled.div`
  margin-left: 50px;
  // border:1px solid black;
  width: 30%;
  display: flex;
  padding-bottom: 5px;
  margin-left: -5px;
`;
export default Navbar;
