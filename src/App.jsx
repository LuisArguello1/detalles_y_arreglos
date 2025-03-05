import { useState } from "react";
import Header from "./Components/Header";
import Aurora from "./Components/Aurora";
import ProductosPresentar from "./Components/ProductosPresentar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="contenedor-app-principal">
      <div className="background-app"></div>
      <Header></Header>
      <ProductosPresentar></ProductosPresentar>
      <Footer></Footer>
    </div>
  );
}

export default App;
