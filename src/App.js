import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Competenze from './components/Competenze';
import Progetti from './components/Progetti';
import data from './data';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {
  const [progetti, setprogetti] = useState(data);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Imposta la visibilità della navbar in base allo scroll
      setShowNavbar(scrollY >= viewportHeight);
    };

    // Aggiungi l'event listener allo scroll
    window.addEventListener('scroll', handleScroll);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Home />
      <Nav className={showNavbar ? 'show' : ''} />
      <Competenze />
      <Progetti data={progetti} />
      <Contatti />
      <Footer />
    </>
  );
}

export default App;
