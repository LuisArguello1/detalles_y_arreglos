import React from "react";
import "../Css/cardStyles.css";

const Videos = ({ videos }) => {
  return (
    <div className="contenedor-video-filtro">
      {videos.length > 0
        ? videos.map((videoclip, index) => {
            return (
              <div className="card-video-filtro" key={index}>
                <video className="video-presetacion" controls autoPlay muted>
                  <source src={videoclip.video} type="video/mp4"></source>
                </video>
                <div className="card-video-p">
                  <div className="p-titulo-video">
                    <strong>Titulo: </strong>
                    {videoclip.titulo}
                  </div>
                </div>
              </div>
            );
          })
        : "No existen videos"}
    </div>
  );
};

export default Videos;
