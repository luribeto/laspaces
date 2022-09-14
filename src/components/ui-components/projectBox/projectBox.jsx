import React from "react";
// Scss
import "./projectBox.scss";


const projectBox = (props) => {
  // const services300 = ["2", "5", "8"];
  // const heightCss = services300.includes(props.id) ? " portfolio__box servicio-300" : "portfolio__box servicio-500";

  return (
    <div className="portfolio__box servicio-400" style={{ display: props.show, backgroundImage: `url(${process.env.PUBLIC_URL+ "/dudas-asesoria.jpeg"})`}}>
      {/* <img src={props.preview} alt="project" /> */}
      <div className="portfolio__hover-info flex-center">
        <div className="text-center">
          <p className="font30 weight800">{props.title}</p>
          <p className="font12 weight500">{props.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default projectBox;
