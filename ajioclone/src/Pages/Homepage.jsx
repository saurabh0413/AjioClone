import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import "../Components/index.css"
import Carousal from "../Components/Carousal";
const Homepage = () => {
  return (
    <HomeCss>
      <Navbar />
      <Carousal />
    </HomeCss>
  );
};

export default Homepage;

const HomeCss = styled.div`
 
`;
