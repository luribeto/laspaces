import React from "react";
// SCSS
import "./partnerBox.scss";
import { Link } from "react-scroll";

const partnerBox = (props) => (
  <Link className="partner__box_s flex-center" activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
    <img src={props.partner} alt="servicios" />
  </Link>
  // <div className="partner__box_s flex-center">
  //   <img src={props.partner} alt="servicios" />
  // </div>
);

export default partnerBox;
