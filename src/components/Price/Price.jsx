import React from "react";
import "./Price.scss";

function Price() {
  const isSale = true;

  return (
    <>
      {isSale ? (
          <div className="price d-flex flex-row align-items-center justify-content-between">
            <h2 className="my-2">$16</h2>
            <h2 className="my-2 text-secondary text-decoration-line-through">
              $20
            </h2>
            <p className="sale m-0 text-danger rounded-pill p-2 px-3">-20%</p>
          </div>
      ) : (
          <div>
            <h2 className="my-2">$20</h2>
          </div>
      )}
    </>
  );
}

export default Price;
