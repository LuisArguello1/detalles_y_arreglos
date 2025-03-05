import React from "react";
import "../Css/header.css";
import ShinyText from "./ShinyText";
import Stack from "./Stack";
import flor from '../assets/flor.svg'
import san_valentin1 from "../Img/san_valentin1.jpg";
import san_valentin2 from "../Img/san_valentin2.jpg";
import san_valentin3 from "../Img/san_valentin3.jfif";
import san_valentin4 from "../Img/san_valentin4.jfif";

const Header = () => {
  const images = [
    {
      id: 1,
      img: san_valentin1,
    },
    {
      id: 2,
      img: san_valentin2,
    },
    {
      id: 3,
      img: san_valentin3,
    },
    {
      id: 4,
      img: san_valentin4,
    },
  ];

  const images2 = [
    {
      id: 1,
      img: san_valentin1,
    },
    {
      id: 2,
      img: san_valentin2,
    },
    {
      id: 3,
      img: san_valentin3,
    },
    {
      id: 4,
      img: san_valentin4,
    },
  ];

  return (
    <div className="contenedor-header">
      <div className="conteedor-header-logo">
        <img className="svg-flor-header" src={flor} alt="svg-flor"></img>
        <div className="contenedor-logo-p-header">
          <ShinyText
            text="Detalles y arreglos"
            disabled={false}
            speed={4}
            className="custom-class1"
          />
          <div className="p-header-logo">Para cada ocasión</div>
        </div>
      </div>

      <div className="contenedor-card-header">
        <div className="card-header">
          <div className="p-titulo-card-header">
            Arreglos Exclusivos para Cada Ocasión
          </div>
          <div className="img-producto-header">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 200, height: 200 }}
              cardsData={images}
            />
          </div>
          <div className="p-card-header">
            Nuestros arreglos están diseñados para hacer de cada celebración un
            momento único. Con una cuidadosa selección de flores y detalles,
            transformamos cualquier ocasión especial en un evento memorable. Ya
            sea un aniversario, un cumpleaños o una fecha significativa, cada
            arreglo refleja elegancia y distinción, pensados para sorprender y
            emocionar a tus seres queridos.
          </div>
        </div>
        <div className="card-header2">
          <div className="p-titulo-card-header2">
            Diseños Personalizados y Sofisticados
          </div>
          <div className="img-producto-header">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 200, height: 200 }}
              cardsData={images2}
            />
          </div>
          <div className="p-card-header">
            En nuestra colección, cada diseño es una obra de arte pensada para
            cautivar. Nos especializamos en crear arreglos personalizados que se
            adaptan a tus gustos y necesidades, combinando belleza y
            refinamiento. Si buscas un toque exclusivo para tu celebración, aquí
            encontrarás el detalle perfecto para hacer de tu día algo
            verdaderamente especial.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
