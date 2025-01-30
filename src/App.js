import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import React from 'react';
import Hero from './Hero.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer className="footer" />
    </React.Fragment>
  );
}

export default App;
