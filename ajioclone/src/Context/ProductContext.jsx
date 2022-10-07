import axios from "axios";
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer, { initialDAta } from "./reducer";
export const ContextPro = createContext();

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialDAta);
 
  return (
    <ContextPro.Provider value={{ state, dispatch }}>
      {children}
    </ContextPro.Provider>
  );
};

export default ProductContext;
