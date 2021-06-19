import React from "react";
import { Switch, Route, Link, useLocation, Router } from "react-router-dom";


import { Fantasy } from "./galleries/Fantasy.jsx";
import { Canvas } from "./galleries/Canvas.jsx";
import { Backstage } from "./galleries/Backstage.jsx";
import { Family } from "./galleries/Family.jsx";

export function Portfolio() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="portfolio">
    <h2>Galleries</h2>

      <Switch>
          <Route exact={true} component={Fantasy} path="/portfolio/fantasy" />
          <Route exact={true} component={Canvas} path="/portfolio/canvas" />
          <Route exact={true} component={Backstage} path="/portfolio/backstage" />
          <Route exact={true} component={Family} path="/portfolio/family" />
          </Switch>


      <Link to="/portfolio/fantasy">Fantasy</Link>
      <Link to="/portfolio/canvas">Body Canvas</Link>
      <Link to="/portfolio/backstage">Backstage</Link>
      <Link to="/portfolio/family">Family</Link>
    </div>
  );
}
