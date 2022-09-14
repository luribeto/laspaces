import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/mexico-1.jpeg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h3 className="weight800 font40">
              Somos Especialistas en Justicia Restaurativa.
            </h3>
            <p className="font20">
            Somos una organización dedicada a dar asesoría a entidades estatales y no estatales y a personas que trabajan o están involucradas con temas de justicia restaurativa y reparación integral a víctimas.
            Realizamos procesos de consultoría, asesoría, fortalecimiento y formación en herramientas psicosociales para la restauración y reparación integral a víctimas, el cuidado emocional de quienes trabajan con graves violaciones a los derechos humanos, también desarrollamos procesos de mediación y preparación para el reconocimiento. 
            </p>
            <Button label="ENVIANOS UN MENSAJE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
