import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Progetti from './components/Progetti';
import data from './data';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dettaglio from './components/Dettaglio';
import Error from './components/Error';

function App() {
  const [progetti] = useState(data);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/cv' element={
          <>
            <Home />
            <Progetti data={progetti} />
            <Contatti />
          </>
        }
        />
        <Route exact path='/cv/:id' element={< Dettaglio />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
