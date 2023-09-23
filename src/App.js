import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Progetti from './components/Progetti';
import data from './data';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {
  const [progetti] = useState(data);


  return (
    <>
      <>
        <Nav />
        <Home />
        <Progetti data={progetti} />
        <Contatti />
        <Footer />
      </>
    </>
  );
}

export default App;
