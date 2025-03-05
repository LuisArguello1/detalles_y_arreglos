import React from "react";
import "../Css/footer.css";
import ShinyText from "./ShinyText";
import flor from "../assets/flor.svg";
import whatsapp from '../assets/whatsapp.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <div className="contendido-footer">
        <div className="contenedor-left">
          <img className="svg-footer" src={flor} alt="svg-flor"></img>
          <div className="contenedor-logo-p">
            <ShinyText
              text="Detalles y arreglos"
              disabled={false}
              speed={4}
              className="custom-class"
            />
            <div className="p-footer-bottom">Para cada ocasión</div>
          </div>
        </div>
        <div className="contenedor-center">
          <div className="p-footer-center">SOBRE NOSOTROS</div>
          <div className="p-footer-center-large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laudantium voluptate, corporis itaque accusantium quidem eius eos,
            aspernatur possimus nesciunt ut, quas laboriosam soluta odio
            ratione. Vel ipsam veritatis hic?
          </div>
        </div>
        <div className="contenedor-right">
          <div className="p-footer-right">SIGUENOS EN</div>
          <div className="svg-nav-footer-right">
            <div className="box-nav-svg-footer-right"><img src={whatsapp} alt="svg-nav" className="svg-nav"></img></div>
            <div className="box-nav-svg-footer-right"><img src={facebook} alt="svg-nav" className="svg-nav"></img></div>
            <div className="box-nav-svg-footer-right"><img src={instagram} alt="svg-nav" className="svg-nav"></img></div>
          </div>
        </div>
      </div>
      <div className="contenido-derechos">
        2025 <strong style={{ color: "white" }}>Detalles y Arreglos </strong>-
        Todos los derechos reservados
      </div>
    </div>
  );
};

export default Footer;
