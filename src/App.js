import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import Servant from './pages/Servant';
import About from './pages/About';
import ServantDetail from "./pages/ServantDetail";
import MysticCode from './pages/MysticCode';
import Summon from './pages/Summon';
import Class from './pages/Class';

function App() {
  return (
    <BrowserRouter>
      <header>
        <p className="titleGroup">FGO Chaldea App</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/Servant" replace />} />
        <Route path="/Servant" element={<Servant />} />
        <Route path="/About" element={<About />} />
        <Route path="/MysticCode" element={<MysticCode />} />
        <Route path="/Summon" element={<Summon />} />
        <Route path="/Class" element={<Class />} />
        <Route path="/Servant/ServantDetail/:servantId" element={<ServantDetail />} />
      </Routes>
      <footer>
        <Link to="/Class" className="iconWrapper"> Class </Link>
        <Link to="/MysticCode" className="iconWrapper"> Mystic Code </Link>
        <Link to="/Servant" className="iconWrapper"> Servant </Link>
        <Link to="/About" className="iconWrapper"> About </Link>
        <Link to="/Summon" className="iconWrapper"> Summon </Link>
      </footer>
    </BrowserRouter>
  );
}

export default App;