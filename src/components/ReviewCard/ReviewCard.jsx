import React from "react";
import Rating from "../Rating/Rating";
import "./reviewCard.scss";

function ReviewCard() {
  return (
    <div className="review_card d-flex flex-column p-3">
      <Rating rating={5} />
      <div className="d-flex align-content-center">
        <h5 className="m-0">Sarah M.</h5>
        <i class="bi bi-check-circle-fill text-success ps-2"></i>
      </div>

      <p className="m-0">
        ”I'm blown away by the quality and style of the clothes I received from
        Shop.co. From casual wear to elegant dresses, every piece I've bought
        has exceeded my expectations.”
      </p>
    </div>
  );
}

export default ReviewCard;
