import React from "react";
import { Route, Routes } from "react-router-dom";
import Singlepage from "../Components/Singlepage";
import Singleproduct from "../Components/Singleproduct";
import Homepage from "./Homepage";
import Indie from "./Indie";
import Kids from "./Kids";
import Kitchen from "./Kitchen";
import Men from "./Men";
import Women from "./Women";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/indie" element={<Indie />} />
        <Route path="/shop/kids" element={<Kids />} />
        <Route path="/shop/kitchen" element={<Kitchen />} />
        <Route path="/shop/men" element={<Men />} />
        <Route path="/shop/women" element={<Women />} />
        <Route path="/shop/men/:title" element={<Singlepage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
