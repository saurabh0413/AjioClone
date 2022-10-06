import React, { useState } from "react";

const FilterBluprint = (props) => {
  console.log("props", props);
  const [dis, setDis] = useState(false);
  return (
    <div>
      <button onClick={() => setDis(!dis)}>click me</button>
      <h3>{props.data.category}</h3>
      <ul style={{ display: dis ? "block" : "none" }}>
        {props.data.heading.map((item) => {
          return (
            <li>
              <input type="checkbox" />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBluprint;
