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

import Testimonio01 from "../../assets/blog/testimonio-1.jpeg";
import Testimonio02 from "../../assets/blog/testimonio-2.png";
import Testimonio03 from "../../assets/blog/testimonio-3.png";
import Testimonio04 from "../../assets/blog/testimonio-4.png";
import Testimonio05 from "../../assets/blog/testimonio-5.png";
import Testimonio06 from "../../assets/blog/testimonio-6.png";
import Testimonio07 from "../../assets/blog/testimonio-7.png";
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
        image: Testimonio01,
        id: "1",
        title: "Carolina Jim??nez Sandoval",
        role: "Presidenta de la Oficina en Washington para Asuntos Latinoamericanos - WOLA",
        description: "En contextos de violencia sistem??tica, de guerra o de trabajo en el marco de gobiernos autoritarios el tejido social, incluido el de la sociedad civil, se resquebraja. Por ello, un grupo de organizaciones trabajamos con Lina Rondon/Las Paces en un esfuerzo por reunirnos y repensar nuestro trabajo. Desde el inicio, Lina/Las Paces usaron metodolog??as de trabajo que permitieron situarnos, comprender la situaci??n y posteriormente tramitar tensiones y dificultades para movernos hacia un necesitado reencuentro. Su experticia y cuidadoso trabajo en mediaci??n contribuy?? a un proceso de fortalecimiento colectivo muy necesario.",
        date: "21 April 2020",
      },
      {
        image: Testimonio07,
        id: "2",
        title: "Graciela Frias Ojinaga",
        role: "Directora Sentit Nobis - M??xico",
        description: "Desde Sentit Nobis estamos profundamente agradecidas con Lina Rond??n/Las paces por su valiosa colaboraci??n en el desarrollo del Proyecto DICIENDO NOS, Programa de Implementaci??n de Procesos Restaurativos para la Atenci??n a V??ctimas.  Compromiso, inter??s genuino, reflexividad, ampliaci??n de mirada, creatividad y aprendizaje significativo logrado en las instituciones contraparte del Programa JAVA de USAID M??xico, en los estados de Sonora, San Luis Potos??, Coahuila e Hidalgo en M??xico; su aportaci??n y acompa??amiento han sido fundamentales para los logros obtenidos??? gracias de coraz??n.",
        date: "27 April 2020",
      },
      {
        image: Testimonio03,
        id: "3",
        title: "Oscar Parra Vera",
        role: "Magistrado Sala de Reconocimiento - Jurisdicci??n Especial para la Paz",
        description: "Los di??logos que he tenido con Lina Rond??n en los ??ltimos a??os han sido fundamentales para pensar en diversos desaf??os metodol??gicos y sustantivos sobre la determinaci??n de los da??os individuales, familiares, colectivos en el marco de los macrocasos, as?? como los pasos adecuados para pensar las audiencias de observaciones frente a las versiones y c??mo organizar la participaci??n de las representaciones de v??ctimas en las observaciones y en particular, c??mo pensarnos esa terceridad de la magistratura frente a las v??ctimas y frente a los comparecientes pero para construir escenarios de di??logo en torno al reconocimiento.",
        date: "27 April 2020",
      },
      {
        image: Testimonio04,
        id: "4",
        title: "Olga Luc??a Gomez",
        role: "Gerente Criterios de Ruta",
        description: "He conocido el trabajo de Lina Rond??n por mas de 20 a??os y he tenido la fortuna de trabajar con ella en distintos escenarios de cooperaci??n internacional, organizaciones no gubernamentales y entidades del Estado, principalmente en lo relacionado con la elaboraci??n de protocolos de atenci??n a v??ctimas y poblaciones vulnerables. Sin duda su experiencia actual le ha dado elementos muy valiosos para desarrollar muy buen las l??neas de trabajo de su portafolio con Las Paces.",
        date: "03 May 2020",
      },
      {
        image: Testimonio05,
        id: "5",
        title: "Paula Gaviria Betancur",
        role: "Directora Fundaci??n COMPAZ",
        description: "El acompa??amiento psicosocial a v??ctimas y sobrevivientes del conflicto es fundamental, sin ello, muchos de los otros esfuerzos que se realizan por parte del Estado colombiano y de las organizaciones de la sociedad civil, resultan insuficientes. La salud mental es el ancla que permite la continuidad de otros procesos, es lo que permite hilar relaciones que se fracturaron en los territorios. La estrategia de recuperaci??n emocional a nivel grupal y Entrelazando fueron esfuerzos desde la Unidad para las V??ctimas que fueron coordinados por Lina quien con el equipo psicosocial lograron impactar positivamente la vida de muchas v??ctimas, sobrevivientes y comunidades. Estas apuesta de atenci??n y reparaci??n a??n hoy dan frutos despu??s de muchos a??os en el pa??s, y  han contribuido a consolidar los esfuerzos de paz por los que muchos seguimos apostando.",
        date: "15 May 2020",
      },
      {
        image: Testimonio06,
        id: "6",
        title: "Marcos Morales",
        role: "Director FORENPSIC",
        description: "He tenido el gusto y el honor de formarme con Lina Rond??n y puedo decir que es extraordinaria la manera en que transmite conocimientos y experiencias; fomenta la reflexi??n en torno a la pr??ctica forense con v??ctimas y apela siempre por una visi??n emp??tica y sensible pero rigurosa frente al trabajo con v??ctimas de graves violaciones de derechos humanos. Para m??, una de las principales referentes contempor??neas del enfoque psicosocial en Latinoam??rica. ",
        date: "20 May 2020",
      },
      // {
      //   image: Testimonio01,
      //   id: "6",
      //   title: "AWESOME TITLE!",
      //   role: "Magistrada de la Jurisdicci??n Especial para la Paz",
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
          Algunas de las palabras y reconocimientos que algunos de nuestros clientes han tenido con nosotros.<br></br>
          A todos ellos, gracias por estas palabras de reconocimiento sobre nuestro trabajo.
        </p>
        <div className="swiper-wrapper">
          <div className="testimonio__hover flex-center">
            <span class="material-symbols-outlined">drag_indicator</span>
            <span class="material-symbols-outlined">drag_indicator</span>
          </div>
          <Swiper {...params}>{storiesRender}</Swiper>
          {/* {renderTestimonials()} */}
        </div>
      </div>
      {/* <SimpleModal open={modalOpen} body={body} setOpen={() => handleModalToggle()} /> */}
    </div>
  );
}
