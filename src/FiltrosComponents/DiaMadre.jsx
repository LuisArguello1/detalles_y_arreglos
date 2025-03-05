import React from "react";
import "../Css/cardStyles.css";

const DiaMadre = ({ diaMadre }) => {
  return (
    <div className="contenedor-card-filtro">
      {diaMadre.length > 0
        ? diaMadre.map((producto, index) => {
            return (
              <div className="card-filtro" key={index}>
                <img
                  className="card-img-producto-filtro"
                  src={producto.img}
                  alt="img-producto"
                ></img>
                <div className="card-datos-producto-filtro">
                  <h3 className="card-titulo-producto-filtro">
                    {producto.titulo}
                  </h3>
                  <div className="card-precio-producto-filtro">
                    $ {producto.precio}{" "}
                    <span
                      style={{ color: "red", fontSize: "17px" }}
                    >{`[negociable]`}</span>
                  </div>
                  <div className="card-detalle-producto-filtro">
                    <strong>Contenido</strong>
                    {producto.contenido}
                  </div>
                </div>
              </div>
            );
          })
        : "No exiten productos"}
    </div>
  );
};

export default DiaMadre;
