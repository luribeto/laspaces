import React, { useState } from "react";
import Swiper from "react-id-swiper";
// import SimpleModal from "../ui-components/modal/modal";
// import { makeStyles } from '@material-ui/core/styles';
// SCSS
import "./blog.scss";
import "swiper/css/swiper.css";
// Assets
import Preview01 from "../../assets/blog/story01/preview.png";
import Preview02 from "../../assets/blog/story02/preview.png";
import Preview03 from "../../assets/blog/story03/preview.png";
import Preview04 from "../../assets/blog/story04/preview.png";
import Preview05 from "../../assets/blog/story05/preview.png";
import Preview06 from "../../assets/blog/story06/preview.png";

import Testimonio01 from "../../assets/blog/testimonio-1.png";
import Testimonio02 from "../../assets/blog/testimonio-2.png";
import Testimonio03 from "../../assets/blog/testimonio-3.png";
import Testimonio04 from "../../assets/blog/testimonio-4.png";
import Testimonio05 from "../../assets/blog/testimonio-5.png";
import Testimonio06 from "../../assets/blog/testimonio-6.png";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";
import RoundImg from "../ui-components/roundImg/roundImg";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    backgroundColor: '#00afef',
  };
}

export default function Blog(props) {
  // const classes =  useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [modalOpen, setModalOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState({});
  const [testimonios, setTestimonials] = useState(
    [
      {
        image: Testimonio02,
        id: "1",
        title: "Julieta Lemaitre Ripoll",
        role: "Magistrada Sala de Reconocimiento - Jurisdicción Especial para la Paz",
        description: "Lorem ipsum dolor sit amet, consectetur undo thes tabore et dolore magna aliqua.",
        date: "21 April 2020",
      },
      {
        image: Testimonio03,
        id: "2",
        title: "Oscar Parra",
        role: "Magistrado Sala de Reconocimiento - Jurisdicción Especial para la Paz",
        description: "Los diálogos que he tenido con Lina Rondón en los últimos años han sido fundamentales para pensar en diversos desafíos metodológicos y sustantivos sobre la determinación de los daños individuales, familiares, colectivos en el marco de los macrocasos, así como los pasos adecuados para pensar las audiencias de observaciones frente a las versiones y cómo organizar la participación de las representaciones de víctimas en las observaciones y en particular, cómo pensarnos esa terceridad de la magistratura frente a las víctimas y frente a los comparecientes pero para construir escenarios de diálogo en torno al reconocimiento.",
        date: "27 April 2020",
      },
      {
        image: Testimonio04,
        id: "3",
        title: "Olga Lucía Gomez",
        role: "Gerente Criterios de Ruta",
        description: "He conocido el trabajo de Lina Rondón por mas de 20 años y he tenido la fortuna de trabajar con ella en distintos escenarios de cooperación internacional, organizaciones no gubernamentales y entidades del Estado, principalmente en lo relacionado con la elaboración de protocolos de atención a víctimas y poblaciones vulnerables. Sin duda su experiencia actual le ha dado elementos muy valiosos para desarrollar muy buen las líneas de trabajo de su portafolio con Las Paces.",
        date: "03 May 2020",
      },
      {
        image: Testimonio05,
        id: "4",
        title: "Paula Gaviria Betancourt",
        role: "Directora Fundación COMPAZ",
        description: "El acompañamiento psicosocial a víctimas y sobrevivientes del conflicto es fundamental, sin ello, muchos de los otros esfuerzos que se realizan por parte del Estado colombiano y de las organizaciones de la sociedad civil, resultan insuficientes. La salud mental es el ancla que permite la continuidad de otros procesos, es lo que permite hilar relaciones que se fracturaron en los territorios. La estrategia de recuperación emocional a nivel grupal y Entrelazando fueron esfuerzos desde la Unidad para las Víctimas que fueron coordinados por Lina quien con el equipo psicosocial lograron impactar positivamente la vida de muchas víctimas, sobrevivientes y comunidades. Estas apuesta de atención y reparación aún hoy dan frutos después de muchos años en el país, y  han contribuido a consolidar los esfuerzos de paz por los que muchos seguimos apostando.",
        date: "15 May 2020",
      },
      {
        image: Testimonio06,
        id: "5",
        title: "Marcos Morales",
        role: "Director FORENPSIC",
        description: "He tenido el gusto y el honor de formarme con Lina Rondón y puedo decir que es extraordinaria la manera en que transmite conocimientos y experiencias; fomenta la reflexión en torno a la práctica forense con víctimas y apela siempre por una visión empática y sensible pero rigurosa frente al trabajo con víctimas de graves violaciones de derechos humanos. Para mí, una de las principales referentes contemporáneas del enfoque psicosocial en Latinoamérica. ",
        date: "20 May 2020",
      },
      // {
      //   image: Testimonio01,
      //   id: "6",
      //   title: "AWESOME TITLE!",
      //   role: "Magistrada de la Jurisdicción Especial para la Paz",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "23 May 2020",
      // },
    ]
  )

  const handleModalToggle = (article) => {
    article ? setSeleccionado(article) : setSeleccionado({});
    setModalOpen(!modalOpen);
  }

    // BLOG STORIES RENDER
  let storiesRender = null;
  if (testimonios.length > 0) {
    storiesRender = testimonios.map((testimonio) => (
      <div key={testimonio.id}>
        {/* <BlogBox article={testimonio} onReadMore={handleModalToggle} /> */}
        <RoundImg key={testimonio.id} testimonio={testimonio} onClick={() => handleModalToggle(testimonio)}/>
      </div>
    ));
  }
  // OPTIONS FOR BLOG SLIDER
  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">{seleccionado?.title}</h2>
  //     <h3 id="simple-modal-title">{seleccionado?.role}</h3>
  //     <p id="simple-modal-description">
  //       {seleccionado?.description}
  //     </p>
  //     <p id="simple-modal-description">
  //       {seleccionado?.date}
  //     </p>
  //     <SimpleModal />
  //   </div>
  // );

  const renderTestimonials = () => {
    return testimonios.map((testimonio) => {
      return (
        <RoundImg key={testimonio.id} testimonio={testimonio} onClick={() => handleModalToggle(testimonio)}/>
      )
    })
  }

  return (
    <div className="blog" id="blog">
      <div className="wrapper">
        <Title title="EXPERIENCIAS" />
        <p className="font20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="" style={{paddingTop: '3rem'}}>
          <Swiper {...params}>{storiesRender}</Swiper>
          {/* {renderTestimonials()} */}
        </div>
      </div>
      {/* <SimpleModal open={modalOpen} body={body} setOpen={() => handleModalToggle()} /> */}
    </div>
  );
}
