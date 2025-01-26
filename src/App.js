import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import React from 'react';
import About from './About.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Main className="main" />
        <Footer className="footer" />
      </Router>
    </React.Fragment>
  );
}

export default App;
