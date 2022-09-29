import React from "react";

import "./contactInfoBox.scss";

const contactInfoBox = (props) => {

  return (
    <a href={props.hRef} target="_blank" className="contact__info-box">
      <div>
        {/* <a  href={props.hRef} target="_blank" style={{border: '1px solid red', display: 'block', cursor: 'pointer'}}><img src={props.icon} alt="address" /></a> */}
        <img src={props.icon} alt="address" />
      </div>
      <div>
        <p>{props.textLine1}</p>
        <p>{props.textLine2}</p>
      </div>
    </a>
  );
};

export default contactInfoBox;
