import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="QUIENES SOMOS." />
      <p className="font20">
      Somos una organización dedicada a dar asesoría a entidades estatales y no estatales y a personas que trabajan o están involucradas con temas de justicia restaurativa y reparación integral a víctimas. 
      Realizamos procesos de consultoría, asesoría, fortalecimiento y formación en herramientas psicosociales para la restauración y reparación integral a víctimas, el cuidado emocional de quienes trabajan con graves violaciones a los derechos humanos, también desarrollamos procesos de mediación y preparación para el reconocimiento.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Luke Skywalker" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
