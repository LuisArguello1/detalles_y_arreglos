import React, { useState, useEffect } from "react";

// importaciones de componentes filtros
import Todos from "../FiltrosComponents/Todos";
import DiaPadre from "../FiltrosComponents/DiaPadre";
import DiaMadre from "../FiltrosComponents/DiaMadre";
import FloresAmarillas from "../FiltrosComponents/FloresAmarillas";
import SanValentin from "../FiltrosComponents/SanValentin";
import SkinCare from "../FiltrosComponents/SkinCare";
import Videos from "../FiltrosComponents/Videos";

// importaciones de estilos
import "../Css/productosPresentar.css";

//importacion loader
import loader from '../Img/loader.gif'

//importaciones de img Dia del padre
import diaPadre1 from "../Img-dia_padre/dia_padre1.jpeg";
import diaPadre2 from "../Img-dia_padre/dia_padre2.jpeg";
import diaPadre3 from "../Img-dia_padre/dia_padre3.jpeg";
import diaPadre4 from "../Img-dia_padre/dia_padre4.jpeg";

//importaciones de img Dia del madre
//importaciones de img flores amarillas
//importaciones de img san valentin
//importaciones de img skin care
//importaciones de img videos
import video1 from "../Videos/Eladio Carrión - Que Cojones.mp4"

const ProductosPresentar = () => {
  //Estados para controlar la aparicion de los filtros
  const [filtroSeleccionado, setFiltroSelecionado] = useState("Todos");

  //Estados para almacenar los datos de los productos
  const [todo, setTodo] = useState([])
  const [diaPadre, setDiaPadre] = useState([]);
  const [diaMadre, setDiaMadre] = useState([]);
  const [floresAmarillas, setFloresAmarillas] = useState([]);
  const [sanValentin, setSanValentin] = useState([]);
  const [skinCare, setSkinCare] = useState([]);
  const [videos, setVideos] = useState([]);

  

  //useEffect para cargar los datos de los productos cuando se renderice el componente
  useEffect(() => {
    const dia_padre = [
      {
        id: 1,
        titulo: "Arreglo 1",
        precio: "12.00",
        contenido: "contenido aqui",
        img: diaPadre1,
      },
      {
        id: 2,
        titulo: "Arreglo 2",
        precio: "15.00",
        contenido: "contenido aqui",
        img: diaPadre2,
      },
      {
        id: 3,
        titulo: "Arreglo 3",
        precio: "22.00",
        contenido: "contenido aqui",
        img: diaPadre3,
      },
      {
        id: 4,
        titulo: "Arreglo 4",
        precio: "18.00",
        contenido: "contenido aqui",
        img: diaPadre4,
      },
    ];

    const dia_madre = [
      
    ]

    const flores_amarillas = [

    ]

    const san_valentin = [

    ]

    const skin_care = [

    ]

    const videos_arreglo = [
      {
        id: 1,
        titulo: "Eladio Carrion - prueba #1",
        video: video1,
      }
    ]

    setDiaPadre(dia_padre);
    setDiaMadre(dia_madre);
    setFloresAmarillas(flores_amarillas)
    setSanValentin(san_valentin)
    setSkinCare(skin_care)
    setVideos(videos_arreglo)
    setTodo([...flores_amarillas,...dia_madre,...dia_padre,...skin_care,...san_valentin])
    
  }, []);

  //Funcion para cambiar la aparicion de los filtros
  const cambioFiltro = (filtro) => {
    setFiltroSelecionado(filtro);
  };

  //Objeto para el mapeo del filtro correspondiente
  const componetesFiltros = {
    Todos: todo.length > 0 ? <Todos todo={todo}></Todos> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">Aun no existen produtos, vuelve pronto...</div></div>,
    "Dia del padre": diaPadre.length > 0 ? <DiaPadre diaPadre={diaPadre}></DiaPadre> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">Dia del padre - Aun no existen produtos, vuelve pronto...</div></div>,
    "Dia de la madre": diaMadre.length > 0 ? <DiaMadre diaMadre={diaMadre}></DiaMadre> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">Dia de la madre - Aun no existen produtos, vuelve pronto...</div></div>,
    "Flores Amarillas": floresAmarillas.length > 0 ? <FloresAmarillas floresAmarillas={floresAmarillas}></FloresAmarillas> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">Flores Amarillas - Aun no existen produtos, vuelve pronto...</div></div>,
    "San Valentin": sanValentin.length > 0 ? <SanValentin sanValentin={sanValentin}></SanValentin> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">San Valentin - Aun no existen produtos, vuelve pronto...</div></div>,
    "Skin Care": skinCare.length > 0 ? <SkinCare skinCare={skinCare}></SkinCare> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">Skin Care - Aun no existen produtos, vuelve pronto...</div></div>,
    Videos: videos.length > 0 ? <Videos videos={videos}></Videos> : <div className="contenedor-loader-producto"><img className="gif-loader" src={loader} alt="img-loader"></img><div className="p-loader">Videos - Aun no existen videos, vuelve pronto...</div></div>,
  };

  return (
    <div className="contenedor-prodcutos">
      <div className="contenedor-nav-left">
        <div className="titulo-nav-left">Filtros de arreglos</div>
        <div className="nav-opcion" onClick={() => cambioFiltro("Todos")}>
          Todos
        </div>
        <div
          className="nav-opcion"
          onClick={() => cambioFiltro("Dia del padre")}
        >
          Dia del padre
        </div>
        <div
          className="nav-opcion"
          onClick={() => cambioFiltro("Dia de la madre")}
        >
          Dia del madre
        </div>
        <div
          className="nav-opcion"
          onClick={() => cambioFiltro("Flores Amarillas")}
        >
          Flores Amarillas
        </div>
        <div
          className="nav-opcion"
          onClick={() => cambioFiltro("San Valentin")}
        >
          San Valentin
        </div>
        <div className="nav-opcion" onClick={() => cambioFiltro("Skin Care")}>
          Skin Care
        </div>
        <div className="nav-opcion" onClick={() => cambioFiltro("Videos")}>
          Videos
        </div>
      </div>
      <div className="contenedor-productos-card">
        {componetesFiltros[filtroSeleccionado]}
      </div>
    </div>
  );
};

export default ProductosPresentar;
