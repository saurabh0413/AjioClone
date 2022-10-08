import React from "react";
import { Link } from "react-router-dom";
const Singleproduct = (prod) => {
  // console.log((prod.data.title+prod.data.subtitle),"prod")
  return (
    <Link to={`/shop/men/${prod.data.title + prod.data.subtitle}`}>
      <div>
        <img src={prod.data.images[0]} alt="" />
        <h2>{prod.data.title}</h2>
        <h4>{prod.data.subtitle}</h4>
      </div>
     </Link>
  );

};

export default Singleproduct;
