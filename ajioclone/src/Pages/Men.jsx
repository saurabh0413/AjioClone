import React, { useContext, useEffect, useReducer, useState } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import "./pages.css";
import "../Components/index.css";
import axios from "axios";
import Singleproduct from "../Components/Singleproduct";
import FilterBluprint from "../Components/FilterBluprint";
import { Link, Navigate } from "react-router-dom";
import { ContextPro } from "../Context/ProductContext";

const Men = () => {
  const FilterData = [
    {
      category: "Gender",
      heading: ["Men"],
    },
    {
      category: "Category",
      heading: [
        "Tshirts",
        "Shirts",
        "Sweatshirts & Hoodies",
        "Track Pants",
        "kurtas & shirts",
      ],
    },
    {
      category: "Price",
      heading: [
        "Below Rs. 500",
        "Rs. 500-1000",
        "Rs.1001-1500",
        "Rs.1501-2000",
        "Rs.2001-2500",
      ],
    },
    {
      category: "Brands",
      heading: ["18 Edition", "2Go", "3pin", "4290", "5th ANFOLD"],
    },
  ];

  const { state, dispatch } = useContext(ContextPro);
  
 
  useEffect(() => {
    getData();
  }, []);
   const getData = () => {
    axios.get("http://localhost:8080/products").then((res) => {
      dispatch({ type: "GET_DATA", payload: res.data });
    });
  };
  return (
    <div>
      <div style={{ height: "90px" }}>
        <Navbar />
      </div>
      <div className="filter-mens-data">
        <Filtermens>
          {FilterData.map((item) => {
            return <FilterBluprint data={item} />;
          })}
        </Filtermens>
         <Mensdata>
          {state.products.map((prod) => {
            <Link to="/shop/women" />;
            return <Singleproduct data={prod} key={prod.id}/>;
          })}
        </Mensdata> 
      </div>
    </div>
  );
};

export default Men;

const Filtermens = styled.div`
  border: 2px solid green;
  width: 20%;
  height: 100%;
  margin-top: 20px;
`;
const Mensdata = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;
