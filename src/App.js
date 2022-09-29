import React from 'react';
import './style/App.scss';

// Components
import DesktopNav from './components/navbar/desktop-nav';
import MobileNav from './components/navbar/mobile-nav';
import Backdrop from "./components/navbar/backdrop";
import Hero from './components/hero/hero';
import Portfolio from "./components/portfolio/portfolio";
import Partners from "./components/partners/partners";
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
 
class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  // Detect if user is scorlled down (used for add/disable extra large navbar)
  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };
  // On closeMobileMenu click close navbar
  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };
  // Mobile menu handler
  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    // DOC
    document.title = "";
    document.title = "Las Paces - Especialistas en justicia restaurativa";
    // BACKDROP RENDER
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} />;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
      );
    }
    // MOBILE NAVBAR RENDER
    let mobileNavbar = <MobileNav />;
    if (this.state.mobileNavbarOpen) {
      mobileNavbar = (
        <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} />
      );
    }

    return (
      <div className="App">
        {mobileNavbar}
        {backdrop}
        <DesktopNav
          userIsScrolled={this.state.userIsScrolled}
          mobileMenuOpen={this.mobileMenuOpen}
        />
        <Hero />
        <Portfolio />
        <Partners />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;


// // import logo from './logo.svg';
// // import paces from './paces-v.jpeg';
// import logo from './laspaces-logo-web.png';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="App-background-gray">
//         <div className="App-overlay">
//             {/* <img src={paces} className="App-background" alt="peace"/> */}
//             {/* <img src={logo} className="App-logo" alt="logo" /> */}
//             <div className="App-texts">
//               <img src={logo} className="App-logo-web" alt="peaces"/>
//               {/* <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Especialistas en justicia restaurativa.
//               </a> */}
//               {/* <h5>Especialistas en Justicia Restaurativa.</h5> */}
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
