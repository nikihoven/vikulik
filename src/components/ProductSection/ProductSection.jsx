import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { WhiteOutlinedRoundButton } from "../Button/Buttons";

function ProductSection() {
  //stores window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    //handle window width change
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    //component is mounted
    window.addEventListener("resize", handleResize);

    //component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 className="display-2 d-flex justify-content-center py-5">
        NEW ARRIVALS
      </h1>
      <div className="container-fluid d-flex px-lg-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
          <ProductCard />
          <ProductCard />
          {windowWidth >= 768 && <ProductCard />}
          {windowWidth >= 992 && <ProductCard />}
        </div>
      </div>
      <div className="d-flex justify-content-center py-5">
        <WhiteOutlinedRoundButton>
          <p className="m-0 fs-6">View All</p>
        </WhiteOutlinedRoundButton>
      </div>
    </div>
  );
}

export default ProductSection;
