import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DesktopApp from './components/services/DesktopApp';
import WebApp from './components/services/WebApp';
import MobileApp from './components/services/MobileApp';
import CloudApp from './components/services/CloudApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <nav className="navbar">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/about">About us</Link></a>
            <div className="dropdown">
              <button className="dropbtn">Services ▾</button>
              <div className="dropdown-content">
                <a><Link to="/services/desktop">Desktop App</Link></a>
                <a><Link to="/services/web">Web App</Link></a>
                <a><Link to="/services/mobile">Mobile App</Link></a>
                <a><Link to="/services/cloud">Cloud App</Link></a>
              </div>
            </div>
            <a><Link to="/contact">Contact us</Link></a>
          </nav>
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/desktop" element={<DesktopApp />} />
            <Route path="/services/web" element={<WebApp />} />
            <Route path="/services/mobile" element={<MobileApp />} />
            <Route path="/services/cloud" element={<CloudApp />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>Copyright © 2025 Kew Company</p>
          <p>
            <a href="#">Privacy Policy</a> |{' '}
            <a href="#">Security</a>
          </p>
          <p>Contact us: <a href="mailto:kimkhanh@example.com">kimkhanh151003@gmail.com</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;