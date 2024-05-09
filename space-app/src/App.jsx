// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes,Route} from "react-router-dom"
import Navbar from './componentes/Navbar.jsx';
import Hero from "./componentes/hero/hero.jsx";
import Astros from "./componentes/astros/Astros.jsx";
import './App.css';

function App() {
  //Creamos una constante para reutilizarla en un futuro.
  const links = [
    {
      id: 1,
    text: 'home',
    link: "/",
  },
  {
    id: 2,
    text: "planets",
    link: "/planets",
  },
  {
    id: 3,
    text: "astros",
    link: "/astros",
  },
];

  return (
   <>
     <Navbar header = "space-app" links={links} />
     <Routes>
       <Route element={<Hero/>} path= "/" />
       <Route element={<Astros/>} path= "/astros" />
     </Routes>
  </>);  
}

export default App;
