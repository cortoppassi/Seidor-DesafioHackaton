import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Lista from './components/Lista';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Main />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;
