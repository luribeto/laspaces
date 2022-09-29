import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import YoutubeIcon from "../../../assets/contact/youtube.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.facebook.com/profile.php?id=100069085670675" target="_blank"><img src={FacebookIcon} alt="facebook" /></a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={TwitterIcons} alt="Twitter" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.youtube.com/channel/UCGFt4-hlrrLIu3Ptjd4JfVQ" target="_blank"><img src={YoutubeIcon} className="youtube" alt="Youtube" /></a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
