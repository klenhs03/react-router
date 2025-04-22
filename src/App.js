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
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                style={{ position: 'relative', marginTop:'1.9rem' }}
              >
                <span>
                  Services ▾
                </span>
                {showDropdown && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: '2.5rem',
                      left: 0,
                      backgroundColor: '#333',
                      listStyle: 'none',
                      padding: '0.5rem 0',
                      margin: 0,
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                      zIndex: 1000,
                    }}
                  >
                    <li><Link to="/services/desktop">Desktop App</Link></li>
                    <li><Link to="/services/web">Web App</Link></li>
                    <li><Link to="/services/mobile">Mobile App</Link></li>
                    <li><Link to="/services/cloud">Cloud App</Link></li>
                    {/* <li><Link to="">Desktop App</Link></li>
                    <li><Link to="">Web App</Link></li>
                    <li><Link to="">Mobile App</Link></li>
                    <li><Link to="">Cloud App</Link></li> */}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
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
          <p>Copyright © 2025 The Platinum</p>
          <p>
            <a href="">Privacy Policy</a> |{' '}
            <a href="">Security</a>
          </p>
          <p>Contact us:<a href="">kimkhanh@example.com</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;