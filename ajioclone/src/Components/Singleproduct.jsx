import React from "react";

const Singleproduct = (prod) => {
  return (
    <div>
      {console.log(prod, "prod")}
      <img src={prod.data.images[0]} alt="" />
      <h2>{prod.data.title}</h2>
      <h4>{prod.data.subtitle}</h4>
    </div>
  );
};

export default Singleproduct;
