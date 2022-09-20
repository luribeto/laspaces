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
        description: "Lorem ipsum dolor undo thes tabore et dolore magna aliqua.",
        date: "27 April 2020",
      },
      {
        image: Testimonio04,
        id: "3",
        title: "Olga Lucía Gomez",
        role: "Gerente Criterios de Ruta",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "03 May 2020",
      },
      {
        image: Testimonio05,
        id: "4",
        title: "Paula Gaviria Betancourt",
        role: "Directora Fundación ComPaz",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "15 May 2020",
      },
      // {
      //   image: Testimonio01,
      //   id: "5",
      //   title: "BLOG ARTICLE!",
      //   role: "Magistrada de la Jurisdicción Especial para la Paz",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "20 May 2020",
      // },
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
    storiesRender = testimonios.map((story) => (
      <div key={story.id}>
        <BlogBox article={story} onReadMore={handleModalToggle} />
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
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
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
        <Title title="EXPERIENCIAS." />
        <p className="font20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="padding30">
          {/* <Swiper {...params}>{storiesRender}</Swiper> */}
          {renderTestimonials()}
        </div>
      </div>
      {/* <SimpleModal open={modalOpen} body={body} setOpen={() => handleModalToggle()} /> */}
    </div>
  );
}
