import React from 'react';
import { Link } from "react-scroll";
 // SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo.svg';
import LogoMobile from '../../assets/navbar/logo-mobile.svg';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const desktopNav = (props) => {

  const renderLogo = () => {
    const screenW = window.screen.availWidth;
    return screenW <= 1024 ?<img src={LogoMobile} alt="logo" className="pointer" /> : <img src={LogoImg} alt="logo" className="pointer" />
  }
  return (
    <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
      <div className="wrapper flex-s-between">
        <div>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            {renderLogo()}
          </Link>
        </div>
        <div className="mobile__menu" onClick={props.mobileMenuOpen}>
          <img src={MobileMenuIcon} alt="menu" />
        </div>
        <div className="desktop__menu">
          <ul className="flex-s-between">
            <li>
              <Link activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                SERVICIOS
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                QUIENES SOMOS
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
                EXPERIENCIAS
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default desktopNav;