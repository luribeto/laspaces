import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/linix-quienes-somos.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="QUIÉNES SOMOS" />
      <Row>
        <Col md={12} lg={8}>
          <p className="font20" style={{textAlign: 'justify'}}>
            Psicóloga, con especialización en psicología jurídica de la Universidad Católica de Colombia, Maestría en defensa de los DDHH de la Universidad Santo Tomás y formación en el modelo de Mediación Humanista de la Universidad de Milano-Italia. 
          </p>
          <p className="font20" style={{paddingTop: '20px', textAlign: 'justify'}}>
            Con 19 años de experiencia en atención a víctimas de grupos organizados al margen de la ley, se ha desempeñado en el diseño de programas de reconstrucción del tejido social de escala nacional, atención terapéutica a víctimas del conflicto armado, atención psicojurídica, investigación, evaluación forense del daño con víctimas individuales y colectivas de violaciones a los derechos humanos y diseño de política pública en Reparaciones y Justicia Restaurativa.
          </p>
          <p className="font20" style={{paddingTop: '20px', textAlign: 'justify'}}>
            Ha trabajado en la realización de protocolos de atención psicosocial y psicojurídica, reconstrucción del tejido social, mediación, pedagogía emocional y transformación cultural en derechos humanos.
          </p>
        </Col>
        <Col md={12} lg={4} >
          {/* <img src={Person01} alt="Lina Rondon Daza" /> */}
          <TeamBox avatar={Person01} name="Lina Rondón Daza" title1="Psicóloga. Especialista en psicología jurídica" title2="Maestría en defensa de los derechos humanos" />
        </Col>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col> */}
        {/* <Col md={12} lg={8}>
          <TeamInfo />
        </Col> */}
      </Row>
    </div>
  </div>
);

export default about;
