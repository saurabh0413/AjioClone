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
      <MenuList>
        <ul>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>INDIE</li>
          <li>HOME AND KITCHEN</li>
        </ul>
      </MenuList>
      <div></div>
    </Header>
  );
};

const Header = styled.div`
  border: 1px solid red;
  height: 6rem;
  border-top: 3px solid rgb(47, 66, 84);
  display: flex;
`;
const MenuList = styled.div`
//   border: 1px solid black;
  height: 3rem;
  margin-left: 10rem;
  margin-top: 3rem;
 
`;
export default Navbar;
