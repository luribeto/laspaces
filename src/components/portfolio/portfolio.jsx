import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/back-dano.png";
import Preview2 from "../../assets/portfolio/project02/back-protocolos.png";
import Preview3 from "../../assets/portfolio/project04/back-formacion.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project04/back-mediacion.png";
import Preview6 from "../../assets/portfolio/project06/dudas-asesoria.jpeg";

import InDano from "../../assets/portfolio/in-dano.png";
import InProtocolos from "../../assets/portfolio/in-protocolos.png";
import InEstrategias from "../../assets/portfolio/in-estrategias.png";
import InMediacion from "../../assets/portfolio/in-mediacion.png";
import InFormacion from "../../assets/portfolio/in-formacion.png";
import InAsesorias from "../../assets/portfolio/in-asesorias-new.png";

//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import Servicio from "./servicio";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: InDano,
          title: "CARACTERIZACIÓN DE DAÑOS PSICOSOCIALES",
          tag: "13",
          backImg: "back-dano-old.png",
        },
        {
          id: "2",
          preview: InProtocolos,
          title: "CONSTRUCCIÓN DE PROTOCOLOS",
          tag: "17",
          backImg: "back-protocolos.png",
        },
        {
          id: "3",
          preview: InEstrategias,
          title: "ESTRATEGIA DE ATENCIÓN AL AGOTAMIENTO EMOCIONAL",
          tag: "3",
          backImg: "back-estrategias-old.png",
        },
        {
          id: "4",
          preview: InMediacion,
          title: "MEDIACIÓN Y ENCUENTROS ENTRE VÍCTIMAS Y RESPONSABES",
          tag: "9",
          backImg: "back-mediacion-old.png",
        },
        {
          id: "5",
          preview: InFormacion,
          title: "FORMACIÓN EN HERRAMIENTAS DE ATENCIÓN PSICOSOCIAL",
          tag: "12",
          backImg: "back-formacion-old.png",
        },
        {
          id: "6",
          preview: InAsesorias,
          title: "ASESORÍAS",
          tag: "12",
          backImg: "back-asesorias-old.png",
        },
        // {
        //   id: "7",
        //   preview: null,
        //   title: "",
        //   tag: "",
        // },
        // {
        //   id: "8",
        //   preview: Preview1,
        //   title: "lemons",
        //   tag: "branding",
        // },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
      selected: null,
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  onServiceSelect = (project) => {
    this.setState({ selected: project })
  }

  seeAllServices = () => {
    this.setState({ selected: null });
  }

  seePrevServices = () => {
    const prevProjectIdx = this.state.projects.findIndex((project) => {
      return parseInt(project.id, 10) === (parseInt(this.state.selected.id, 10) - 1);
    });
    const prevProject = this.state.projects[prevProjectIdx];
    if (prevProject) this.setState({ selected: prevProject })
  }

  seeNextServices = () => {
    const nextProjectIdx = this.state.projects.findIndex((project) => {
      return parseInt(project.id, 10) === (parseInt(this.state.selected.id, 10) + 1);
    });
    const nextProject = this.state.projects[nextProjectIdx];
    if (nextProject) this.setState({ selected: nextProject })
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => {
        // if (project.id === '7') {
        //   return <ProjectBox show={'none'} id={project.id} preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
        // }
        return <ProjectBox 
                  show={'block'} 
                  id={project.id}
                  backImg={project.backImg}
                  preview={project.preview} 
                  key={project.id} 
                  title={project.title} 
                  tag={project.tag} 
                  onClick={() => this.onServiceSelect(project)} 
                />
    });
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    // let filterDroppDown = null;
    // if(this.state.filterMenuActive) {
    //   filterDroppDown = (
    //     <div className="portfolio__filter-menu shadow">
    //       <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
    //         NEWEST
    //       </p>
    //       <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
    //         OLDEST
    //       </p>
    //     </div>
    //   );
    // }

    const disablePrev = !!(this.state.selected?.id === '1');
    const disableNext = !!(this.state.selected?.id === '6');

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="SERVICIOS" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
              {this.state.selected && 
                <div>
                  <button className="all-button" onClick={this.seeAllServices}>&#x2756; TODOS LOS SERVICIOS</button>
                  <button className="back-btn" disabled={disablePrev} onClick={this.seePrevServices}>&#8678; ANTERIOR</button>
                  <button className="back-btn" disabled={disableNext} onClick={this.seeNextServices}>SIGUIENTE &#8680;</button>
                </div>
                // <ul>
                //   <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("all")}>
                //     ALL
                //   </li>
                // </ul>
              }
              </div>
            </Col>
            {/* <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col> */}
          </Row>
          {this.state.selected ? 
            <Servicio project={this.state.selected}/> : 
            <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
              {projectsRender}
            </Masonry>
          }
          <Row className="flex-center padding40">
            <Button label="NECESITAS NUESTROS SERVICIOS?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
