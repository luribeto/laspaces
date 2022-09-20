import React from "react";
// Scss
import "./roundImg.scss";


const roundImg = (props) => {
  const {image, title, role, description, date} = props.testimonio;
  const {onClick} = props;

  return (
    <div className="testomonio" onClick={onClick}>
      <img src={image} alt="Testimonio" />
      <div>
        <h3 className="font30 weight800 padding5">{title}</h3>
        <h5 className="font20 weight800 margin0">{role}</h5>
        <p>
          <span className="quote">"</span>
          {description}
          <span className="quote">"</span>
        </p>
        <i>{date}</i>
      </div>
    </div>
  );
};

export default roundImg;
