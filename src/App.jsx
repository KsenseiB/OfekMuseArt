import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from './cmps/Header.jsx';
import { Home } from './cmps/Home.jsx';
import { Portfolio } from './cmps/Portfolio.jsx';
import { About } from './cmps/About.jsx';
import { Modeling } from './cmps/Modeling.jsx';
import { Contact } from './cmps/Contact.jsx';
import { Footer } from './cmps/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/modeling" component={Modeling} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
