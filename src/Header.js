import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <img src="Logo.svg" alt="logo"></img>
      <Nav />
    </header>
  );
};

export default Header;
