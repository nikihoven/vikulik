import React from "react";
import itemImg from "../../img/items/shirt_4.webp";
import Price from "../Price/Price";
import './productCard.scss';
import Rating from "../Rating/Rating";

function ProductCard() {
  return (
    <div className="col d-flex ">
      <div className="container-fluid d-flex flex-column px-0 justify-content-center align-items-center">
        <img src={itemImg} alt="image" className="product_image"/>
        <h4 className="mb-1 mt-4">Product Title</h4>
        <div className="d-flex align-items-center w-100 my-2 justify-content-center align-items-center">
          <Rating rating={4.5} />
          <p className="m-0 ms-1">4.5/5</p>
        </div>
        <Price />
      </div>
    </div>
  );
}

export default ProductCard;
