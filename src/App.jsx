import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import VisitTracker from './components/VisitTracker';
import FaultyTerminal from './components/FaultyTerminal.jsx';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      {/* 1. Add a specific class for styling */}
      <div className="terminal-background">
        <FaultyTerminal />
      </div>

      {/* 2. Your content sits on top */}
      <div className="app-content">
        <MainLayout>
          <VisitTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}
export default App;