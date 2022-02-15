import React from "react";
// import { Switch, Route } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./cmps/Header.jsx";
import Home from "./cmps/Home.jsx";
import Portfolio from "./cmps/Portfolio.jsx";
import About from "./cmps/About.jsx";
import Contact from "./cmps/Contact.jsx";
import Modeling from "./cmps/Modeling.jsx";
// import { Fantasy } from "./cmps/galleries/Fantasy.jsx";
// import { Backstage } from "./cmps/galleries/Backstage.jsx";
// import { Canvas } from "./cmps/galleries/Canvas.jsx";
// import { Family } from "./cmps/galleries/Family.jsx";
import Footer from "./cmps/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/modeling" element={<Modeling />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// export default App;
