import React from "react";
import Nav from './components/Navbar';
// import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Globalstyle from "./Globalstyle";
import Hero from './components/Hero';
import Goal from './pages/Goal';
// import Contact from './pages/Contact';
// import NoMatch from "./components/NoMatch";
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
        {/* <Contact /> */}
        {/* <Router>
          <Switch>
            <Route>
              <NoMatch/>
            </Route>
          </Switch>
        </Router> */}
        <Footer />
      </Globalstyle>
    </>
  );
}

export default App;
