import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Competenze from './components/Competenze';
import Progetti from './components/Progetti';
import { useState } from 'react';
import data from './data';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {

  const [progetti, setprogetti] = useState(data)
  return (
    <>
    <Home />
    <Nav />
    <Competenze />
    <Progetti data={progetti}/>
    <Contatti />
    <Footer />
    </>
  );
}

export default App;
