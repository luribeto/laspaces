import React from "react";
// Scss
import "./roundImg.scss";
import { Row, Col } from "react-flexbox-grid";


const roundImg = (props) => {
  const {image, title, role, description, date} = props.testimonio;
  const {onClick} = props;

  return (
    <div className="testomonio" onClick={onClick}>
      <Row>
        <Col xs={12} sm={12} md={4} lg={3} className="testimonial-img">
          <img src={image} alt="Testimonio" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={7} className="testimonial-txt">
          <h3 className="font30 weight800 padding5">{title}</h3>
          <h5 className="font20 weight800 margin0">{role}</h5>
          <p>
            <span className="quote">"</span>
            {description}
            <span className="quote">"</span>
          </p>
          <i>{date}</i>
        </Col>
      </Row>
    </div>
  );
};

export default roundImg;
