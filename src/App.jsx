import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from './cmps/Header.jsx';
import { Home } from './cmps/Home.jsx';
import { Portfolio } from './cmps/Portfolio.jsx';
import { About } from './cmps/About.jsx';
import { Contact } from './cmps/Contact.jsx';
import { Modeling } from './cmps/galleries/Modeling.jsx';
import { Fantasy } from './cmps/galleries/Fantasy.jsx';
import { Backstage } from './cmps/galleries/Backstage.jsx';
import { Canvas } from './cmps/galleries/Canvas.jsx';
import { Family } from './cmps/galleries/Family.jsx';
import { Footer } from './cmps/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main">
        <Switch>
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/modeling" component={Modeling} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/portfolio/backstage" component={Backstage} />
          <Route exact={true} path="/portfolio/canvas" component={Canvas} />
          <Route exact={true} path="/portfolio/family" component={Family} />
          <Route exact={true} path="/portfolio/fantasy" component={Fantasy} />
          <Route exact={true} path="/portfolio" component={Portfolio} />
          <Route exact={true} path="/" component={Home} />
        </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
