import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Feedback';
import Lista from './components/Lista';
import { FeedbackProvider } from './FeedbackContext';

function App() {
  return (
    <Router>
      <FeedbackProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Main />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </FeedbackProvider>
    </Router>
  );
}

export default App;

