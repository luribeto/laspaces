import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero-2.png';
import HeroLogo from '../../assets/hero/hero-logo.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "/back-hero.png"})`}}>
  <div className="opacity">
    <div className="wrapper" style={{ minHeight: '70vh'}}>
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h3 className="weight800 font40">
              Somos Especialistas en Justicia Restaurativa
            </h3>
            <p className="font20" style={{textAlign: 'justify'}}>
            Somos una organización dedicada a dar asesoría a entidades estatales y no estatales y a personas que trabajan o están involucradas con temas de justicia restaurativa y reparación integral a víctimas.
            Realizamos procesos de consultoría, asesoría, fortalecimiento y formación en herramientas psicosociales para la restauración y reparación integral a víctimas, el cuidado emocional de quienes trabajan con graves violaciones a los derechos humanos, también desarrollamos procesos de mediación y preparación para el reconocimiento. 
            </p>
            <Button label="ENVIANOS UN MENSAJE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6} className="img-wrapper">
          <div className="hero-image" style={{height:'80%'}}>
            {/* <img style={{height: '100%', width: '100%', objectFit: 'cover'}} src={HeroImage} alt="hero" /> */}
          </div>
        </Col>
      </Row>
    </div>
  </div>
  </div>
);

export default hero;
