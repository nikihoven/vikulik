import React from "react";
import {
  BlackRoundButton,
  GrayRoundButton,
  WhiteOutlinedRoundButton,
  WhiteRoundButton,
  WhiteSquaredOutlinedRoundButton,
} from "../../components/Button/Buttons";

function DevPage() {
  return (
    <div>
      <WhiteOutlinedRoundButton>View All</WhiteOutlinedRoundButton>
      <WhiteRoundButton>Subscribe to Newsletter</WhiteRoundButton>
      <BlackRoundButton>Shop Now</BlackRoundButton>
      <GrayRoundButton>Small</GrayRoundButton>

      <WhiteSquaredOutlinedRoundButton>
        <div className="d-flex justify-content-center align-content-center">
          <i className="bi bi-arrow-left"></i>
          <p className="m-0 ms-2">Previous</p>
        </div>
      </WhiteSquaredOutlinedRoundButton>

      <WhiteSquaredOutlinedRoundButton>
        <div className="d-flex justify-content-center align-content-center">
          <p className="m-0 me-2">Next</p>
          <i className="bi bi-arrow-right"></i>
        </div>
      </WhiteSquaredOutlinedRoundButton>
    </div>
  );
}

export default DevPage;
