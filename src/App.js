import React from "react";
import Nav from './components/Navbar';
import Globalstyle from "./Globalstyle";
import Hero from './components/Hero';
import Goal from './pages/Goal';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Footer from "./components/Footer";
import Services from './pages/Services';
import About from './pages/About';


function App() {
  return (
    <>
      <Globalstyle>
        <Nav/>
        <Hero/>
        <Goal/>
        <Services />
        <About />
        <Team />
        <Contact />
        <Footer />
      </Globalstyle>
    </>
  );
}

export default App;
