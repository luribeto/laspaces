import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";

import Logo from '../../assets/footer/logo-footer.svg';
import Arrow from '../../assets/footer/arrow.svg';

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs={12} sm={10} md={10}>
          <div className="footer-box">
            <img src={Logo} alt="logo" />
            <div>
              <p>© 2022 - Las Paces, Derechos Reservados</p>
              <p style={{lineHeight: '1.3rem'}}>© 2022 - Algunas fotografías de esta página están asociadas y se usan con autorización del Proyecto -Diciendo-Nos, Modelo de intervención restaurativa para la atención a víctimas- del Programa JAVA de USAID México coordinado por la Organización de la Sociedad Civil Sentit Nobis.</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={2} md={2}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <div className="footer-box back-to-top">
              <p>BACK TO TOP</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  </div>
);
export default partnerBox;
