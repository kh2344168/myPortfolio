import React from 'react';
import Header from './components/Header/Header';
import Protfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';
import { useState, createContext, useContext } from "react";

export const activeNavecontext = createContext();

const App = () => {

  const [activeNav , setActiveNav] = useState("#");

  return (
    <> 
    <activeNavecontext.Provider value={{activeNav , setActiveNav}} >
      <Header/>
      <Nav/>
      <Protfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </activeNavecontext.Provider>
    </>
  )
}

export default App