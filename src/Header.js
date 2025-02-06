import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="container grid nav-bar">
        <a className="nav-bar-logo" href="/">
          <img src="Logo.svg" alt="Little Lemon logo" />
        </a>
        <button className="nav-bar-hamburger" type="button">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              strokeWidth="2"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
          </svg>
        </button>
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
      </nav>
    </header>
  );
};

export default Header;
