import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { F1Provider } from './contexts/F1Context.jsx';
import Header from './components/layout/Header';
import SeasonSearch from './components/f1-search/SeasonSearch';
import RaceResults from './components/f1-search/RaceResults';
import './App.css'; 

const Home = () => (
  <div className="main-content">
    <SeasonSearch />
    <RaceResults />
  </div>
);

const About = () => (
    <div className="main-content">
        <h2>Sobre o Projeto</h2>
        <p>Este Projeto 1 foi desenvolvido como uma Single Page Application (SPA)  em React.js.</p>
        <p>Ele consome dados da API JSON da F1 e utiliza os hooks e bibliotecas obrigatórias: useReducer [cite: 12] e React Router.</p>
    </div>
);


export default function App() {
  return (
    <Router>
      {}
      <F1Provider>
        <Header />
        <main>
          {}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>
      </F1Provider>
    </Router>
  );
}
