import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ContextPro } from "../Context/ProductContext";

const Singlepage = () => {
  const seeit = useParams();
  const product = seeit.title.split(" ").join("");
  const { state } = useContext(ContextPro);

  const gotProduct = state.products.find(
    (item) =>
      item.title.split(" ").join("") + item.subtitle.split(" ").join("") ==
      product
  );

  console.log(gotProduct, "got it");

  return (
    <SingleProductWrapper>
      <h1>{gotProduct.title}</h1>
      <img src={gotProduct.images[0]} alt="" />
    </SingleProductWrapper>
  );
};

export default Singlepage;

const SingleProductWrapper = styled.div`
  width: 300px;
  height: 100px;
`;
