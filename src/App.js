import React from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Protfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <> 
    
    <Header/>
    <Nav/>
    <Protfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App