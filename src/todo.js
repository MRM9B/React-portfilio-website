import React from "react";
import ProductData from "./JustPractice/ProductData";

const Joke = props => {
  return (
    <div className="practice">
      <p>Name : {props.product.name}</p>
      <p>Price : {props.product.price}</p>
      <p>Description : {props.product.description}</p>
      <br />
    </div>
  );
};
export default Joke;
