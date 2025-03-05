import { useState } from "react";
import Header from "./Components/Header";
import Aurora from "./Components/Aurora";
import ProductosPresentar from "./Components/ProductosPresentar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="contenedor-app-principal">
      <Aurora
        colorStops={["#AB00B7", "#FF94B4", "#AB00B7"]}
        blend={0.5}
        amplitude={2.0}
        speed={1.5}
      ></Aurora>
      <Header></Header>
      <ProductosPresentar></ProductosPresentar>
      <Footer></Footer>
    </div>
  );
}

export default App;
