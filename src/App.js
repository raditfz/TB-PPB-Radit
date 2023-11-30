import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import './App.css';
import Servant from './pages/Servant';
import About from './pages/About';
import ServantDetail from "./pages/ServantDetail";
import MysticCode from './pages/MysticCode';
import Summon from './pages/Summon';
import Kelas from './pages/Kelas';
import MySup from './pages/MySup';
import KelasDetail from './pages/KelasDetail';

function App() {
  return (
    <BrowserRouter>
      <header>
        <p className="titleGroup">FGO Chaldea App</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/Servant" replace />} />
        <Route path="/Servant" element={<Servant />} />
        <Route path="/Servant/ServantDetail/:servantId" element={<ServantDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/MysticCode" element={<MysticCode />} />
        <Route path="/Summon" element={<Summon />} />
        <Route path="/Kelas" element={<Kelas />} />
        <Route path="/Kelas/KelasDetail/:name" element={<KelasDetail />} />
        <Route path="/MySup" element={<MySup />} />
      </Routes>
      <footer>
        <NavLink to="/Kelas" className="iconWrapper" > CLASS </NavLink>
        <NavLink to="/MysticCode" className="iconWrapper" > MYSTICCODE </NavLink>
        <NavLink to="/Servant" className="iconWrapper" > SERVANT </NavLink>
        <NavLink to="/About" className="iconWrapper" > ABOUT </NavLink>
        <NavLink to="/Summon" className="iconWrapper" > SUMMON </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;