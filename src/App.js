import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Competenze from './components/Competenze';
import data from './data';
import Contatti from './components/Contatti';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [progetti, setprogetti] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      {loading ? <Loading /> : (
        <>
          <Nav />
          <Home />
          <Competenze data={progetti} />
          <Contatti />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
