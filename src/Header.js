import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  return (
    <header>
      <nav className="container grid nav-bar">
        <a className="nav-bar-logo" href="/">
          <img src="Logo.svg" alt="Little Lemon logo" />
        </a>

        {/* Hamburger / Close Button */}
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className="svg-inline--fa fa-times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M242.7 256l100.1-100.1c12.5-12.5 12.5-32.8 0-45.3l-22.6-22.6c-12.5-12.5-32.8-12.5-45.3 0L175.1 188.7 75 88.6c-12.5-12.5-32.8-12.5-45.3 0L7 111.3c-12.5 12.5-12.5 32.8 0 45.3L107.1 256 7 356.1c-12.5 12.5-12.5 32.8 0 45.3l22.6 22.6c12.5 12.5 32.8 12.5 45.3 0l100.1-100.1 100.1 100.1c12.5 12.5 32.8 12.5 45.3 0l22.6-22.6c12.5-12.5 12.5-32.8 0-45.3L242.7 256z"></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="svg-inline--fa fa-bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-bar-links">
          <li className="hover-underline-animation">
            <Link to="/">Home</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/#about">About</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/#menu">Menu</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/orderOnline">Order Online</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {/* Mobile Navigation (Dropdown) */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-container">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/#about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/#menu" onClick={toggleMenu}>
              Menu
            </Link>
            <Link to="/reservations" onClick={toggleMenu}>
              Reservations
            </Link>
            <Link to="/orderOnline" onClick={toggleMenu}>
              Order Online
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
