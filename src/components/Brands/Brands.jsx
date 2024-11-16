import React from "react";
import CK from "../../img/brands/ck.svg";
import versace from "../../img/brands/versace.svg";
import gucci from "../../img/brands/gucci.svg";
import prada from "../../img/brands/prada.svg";
import zara from "../../img/brands/zara.svg";

function Brands() {
  return (
    <>
      <div className="container-fluid bg-dark py-5">
        <div className="row row-cols-3 row-cols-lg-5 g-3 align-items-center justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img src={versace} alt="" className="img-fluid" />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={zara} alt="" className="img-fluid" />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={gucci} alt="" className="img-fluid" />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={prada} alt="" className="img-fluid" />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={CK} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
