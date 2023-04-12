//librerias 
import { useRef, useState } from "react";
import { useEffect } from "react";

//componentes creados por mi 
import NavBar from "./components/NavBar/NavBar";
import ItemsContainer from "./components/ItemsListContainer/ItemsListContainer";

//estilos 
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return ( 
    <>
      <NavBar />
      <ItemsContainer greeting={'Bienvenidos'}/>
    </>
  );
}

export default App;
