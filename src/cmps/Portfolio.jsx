import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Fantasy } from './galleries/Fantasy.jsx';
import { Canvas } from './galleries/Canvas.jsx';
import { Backstage } from './galleries/Backstage.jsx';
import { Family } from './galleries/Family.jsx';

export function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Galleries</h2>
        <Switch>
          <Route component={Fantasy} path="/portfolio/fantasy" />
          <Route
            component={Canvas}
            path="/portfolio/canvas"
          />
          <Route component={Backstage} path="/portfolio/backstage" />
          <Route component={Family} path="/portfolio/family" />
        </Switch>
        
        <Link to="/portfolio/fantasy">
          <div className="gallery gallery-fantasy">
            Fantasy
          </div>
        </Link>
        <Link to="/portfolio/canvas">
          <div className="gallery gallery-bd-canvas">
            Body Canvas
          </div>
        </Link>
        <Link to="/portfolio/backstage">
          <div className="gallery gallery-backstage">
            Backstage
          </div>
        </Link>
        <Link to="/portfolio/family">
          <div className="gallery gallery-family">
            Family
          </div>
        </Link>
    </div>
  );
}
