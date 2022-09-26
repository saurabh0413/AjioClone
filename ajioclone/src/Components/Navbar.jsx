import React from "react";
import styled from "styled-components";
import "./index.css";
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
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>INDIE</li>
          <li>HOME AND KITCHEN</li>
        </ul>
      </Menulist>

      <InputSearch>
        <input type="text" placeholder="search AJIO" />
        <ShopLogo>
          <img
            src="https://assets.ajio.com/static/img/wishlistIcon.svg"
            alt=""
          />
          <img
            src="https://assets.ajio.com/static/img/wishlistIcon.svg"
            alt=""
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
`;

const Menulist = styled.div`
  margin-left: 15%;
  height: 25px;
  margin-top: 3.1%;
`;
const InputSearch = styled.div`
//   border: 1px solid black;
  width: 30%;
  display: flex;
  height: 40px;
  margin-top:50px;
  padding-left:10px
`;

const ShopLogo = styled.div`
 
  margin-left: 10px;
  // border:1px solid black;
  width: 30%;
  display: flex;
  gap: 20px;
  padding-bottom: 5px;
`;
export default Navbar;
