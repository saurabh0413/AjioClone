import React, { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductCont = createContext();

const ProductContext = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/products?category=Mens&_limit=15")
      .then((res) => {
        console.log(res.data, "res");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <ProductCont.Provider value={{ data }}>{Children}</ProductCont.Provider>
  );
};

export default ProductContext;
