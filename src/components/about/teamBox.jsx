import React from "react";

import "./teamBox.scss";

const teamBox = (props) => {
  return (
    <div className="team__box" >
      <img src={props.avatar} alt="person" />
      <div className="team__box-info">
        <p className="font15 weight800">{props.name}</p>
        <p   className="font13 weight500">{props.title1}</p>
        <p style={{lineHeight: '1.3rem', boxSizing: 'border-box'}} className="font13 weight500">{props.title2}</p>
      </div>
    </div>
  );
};

export default teamBox;
