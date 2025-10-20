import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-header">
      <h1>F1 Search SPA</h1>
      <nav>
        { }
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}