import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
// //Assets
// import Arrow from "../../assets/portfolio/arrow.svg";
// import Preview1 from "../../assets/portfolio/project01/preview.png";
// import Preview2 from "../../assets/portfolio/project02/preview.png";
// import Preview3 from "../../assets/portfolio/project03/preview.png";
// import Preview4 from "../../assets/portfolio/project04/preview.png";
// import Preview5 from "../../assets/portfolio/project05/preview.png";
// import Preview6 from "../../assets/portfolio/project06/preview.png";
// //Components
// import Button from "../ui-components/button/button";
// import Title from "../ui-components/title/title";
// import ProjectBox from "../ui-components/projectBox/projectBox";


class Servicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsTexts: [
        {
          id: '1',
          text1: 'A partir de un modelo propio, se han definido tres macrocategorías del daño útiles a la justicia restaurativa: analizar los marcos de reconcibilidad del daño que preexisten en los responsables de los hechos, los daños psicosociales que se observan en los hechos mismos o en la destructividad que éstos pretenden y los daños psicosociales que sobrevienen como consecuencia de los hechos que originaron la victimización.',
          text2: 'Esta caracterización del daño persigue fines para su reconocimiento en los jueces, las víctimas y los responsables de los crímenes, pues controvierte la idea de que los daños psicosociales y morales puedan suponerse y alienta a su entendimiento y caracterización para que todos se vean concernidos en su restauración.'
        },
        {
          id: '2',
          text1: 'El apoyo de la psicología a los procesos de justicia se puede hacer desde diferentes perspectivas, una de estas es apoyando a los equipos de trabajo en crear categorías de análisis para construir procesos y establecer modelos de buenas prácticas en las entidades de justicia o en aquellas que le dan soporte.',
          text2: 'Los protocolos son procesos estructurados que permiten mejorar el funcionamiento de las entidades y las organizaciones. El apoyo que damos se orienta a: construir procesos y procedimientos institucionales que involucran contenidos emocionales (entregas de restos, participación en audiencias, diseño de diligencias judiciales), procesos de pedagogía a la ciudadanía (por ejemplo, el manual de titulación de la Corte Constituional) y procesos que buscan mejorar el acceso a la justicia (protocolos de participación de las víctimas y de los responsables en escenarios judiciales) y procesos dirigidos a la rehabilitación y recuperación del daño psicosocial.'
        },
        {
          id: '3',
          text1: 'Se trata de asesorías dirigidas al afrontamiento del efecto que produce la atención de graves violaciones a los derechos humanos o de infracciones al DIH. Las asesorías se realizan a equipos de trabajo y a las personas individualmente consideradas, dado que el efecto residual del trauma se observa también en las relaciones de los equipos de trabajo.',
          text2: 'Bajo este componente se realizan sesiones individuales de asesoría que son confidenciales y se orientan, en específico, a mitigar el impacto de atender casos que exceden la capacidad de entendimiento o la capacidad para procesar emocionalmente los crímenes aún los profesionales más competentes. Son asesorías que buscan dar herramientas emocionales para el afrontamiento y que encuentran en el dolor propio los mayores esfuerzos por atender los casos en los que trabajan.',
          text3: 'También se realizan consultorías a instituciones que por su naturaleza están llamadas a hacer estas atenciones, pues es importante disponer una estructura organizacional capaz de dar soporte a la exigencia emocional de la tarea, pues no se trata de la producción material sino del trámite emocional de hechos que exceden a las personas que los atienden.'
        },
        {
          id: '4',
          text1: 'Se proponen como espacios grupales o privados para facilitar diversas comprensiones sobre los conflictos, disponer a las partes para la escucha empática del otro y aproximarse a la razonabilidad en la manera como desde las diferentes perspectivas se hacen lecturas complejas de las realidades.',  
          text2: 'Los encuentros no buscan, ni se orientan a forzar procesos de perdón que sólo pueden definirse desde la esfera privada y no siempre concluyen en acuerdos para la lectura de los problemas o del pasado. En ocasiones, la máxima expresión del consenso es la aceptación de la diferencia con la que se han impactado las vidas, los valores y los principios de las personas.',
        },
        {
          id: '5',
          text1: 'Se trata de entrenamientos vivenciales para la atención del trauma a nivel grupal e individual. Con estas herramientas se puede fortalecer la capacidad de operadores judiciales que no son psicólogos o terapéutas con el fin de que todos tengan herramientas para producir efectos restaurativos en las víctimas a partir del tipo de asesoría que les dan. Desde esa perspectiva, las atenciones tienen siempre un alcance en la recuperación y dignificación que quienes han sufrido de manera directa e indirecta los hechos de violencia',  
          text2: '',
        },
        {
          id: '6',
          text1: 'Son asistencias técnicas que se prestan en el nivel organizacional y personal. Se trata de sesiones privadas y de carácter confidencial que tienen como propósito dar elementos a los operadores judiciales para que ellos integren a su actuación judicial herramientas psicosociales que les ayuden a hacer comprensiones relacionadas con el trámite de las emociones en escenarios judiciales, las reacciones de las víctimas, los responsables de los hechos y la inclusión de destinatarios en la redacción de providencias judiciales para que éstas sean inteligibles por no abogados.',
          text2: 'También se prestan asesorías en el contexto y desarrollo de diligencias judiciales que tienen como fin dar soporte técnico con relación al daño o a la formulación de preguntas o intervenciones en el escenario judicial a los operadores de justicia.'
        },
      ],
      selected: null,
    };
  }

  renderText3 = (text3) => {
    return (
      <>
        <br></br>
        <p className="font20">{text3}</p>
      </>
    );
  }

  // RENDER
  render() {
    const { project } = this.props;
    const { projectsTexts } = this.state;
    const serviceTexts = projectsTexts[parseInt(project.id, 10) - 1];
    return (
      <div className="servicioMain" id="servicio">
          <Row>
            <Col xs={12} lg={4} className="service-img">
                <img style={{objectFit: 'cover'}} src={project.preview} alt="project" />
            </Col>
            <Col xs={12} lg={8}>
                <h4 className="font30 weight800 padding30 colorBlue" style={{ paddingTop: 0 }}>{project.title}</h4>
                <p className="font20">{serviceTexts.text1}</p>
                <br></br>
                <p className="font20">{serviceTexts.text2}</p>
                {serviceTexts.text3 && 
                  this.renderText3(serviceTexts.text3)
                }
            </Col>
          </Row>
      </div>
    );
  }
}

export default Servicio;
