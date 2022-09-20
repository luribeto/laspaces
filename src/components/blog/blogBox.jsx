import React from "react";

import "./blogBox.scss";

const blog = (props) => {
  const {image, role, title, description, date } = props.article;

  return (
    <div className="blog__box">
      <div className="blog__image">
        <img src={props.article.image} alt="blog story" />
        <div onClick={() => props.onReadMore(props.article)} className="blog__hover flex-center">
          <h4 className="font30 weight800">READ MORE</h4>
        </div>
      </div>
      <div className="blog__info">
        <h4 className="font15 weight800">{title}</h4>
        <h5 className="font13 weight800">{role}</h5>
        <p className="font12 weight500 padding10">{description}</p>
        <p className="font12 weight500">{date}</p>
      </div>
    </div>
  );
};

export default blog;
