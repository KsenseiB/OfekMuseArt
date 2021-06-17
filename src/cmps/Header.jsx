import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="app-header">
      <h1 className="main-title">Ofek Muse Art</h1>
      <nav className="main-nav container">
        <ul>
          <li class="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li class="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="nav-link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li class="nav-link">
            <Link to="/modeling">Modeling</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
