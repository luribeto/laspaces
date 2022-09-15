import React from "react";
// SCSS
import "./partnerBox.scss";

const partnerBox = (props) => (
  <div className="partner__box_s flex-center">
    <img src={props.partner} alt="servicios" />
  </div>
);

export default partnerBox;
