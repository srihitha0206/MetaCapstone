import React from 'react';

const Header = () => {
  return (
    <header>
      <nav class="container grid nav-bar">
        <a class="nav-bar-logo" href="/">
          <img src="Logo.svg" alt="Little Lemon logo" />
        </a>
        <button class="nav-bar-hamburger" type="button">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="svg-inline--fa fa-bars "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
          </svg>
        </button>
        <ul class="nav-bar-links">
          <li class="hover-underline-animation">
            <a href="/#home">Home</a>
          </li>
          <li class="hover-underline-animation">
            <a href="/#about">About</a>
          </li>
          <li class="hover-underline-animation">
            <a href="/#menu">Menu</a>
          </li>
          <li class="hover-underline-animation">
            <a href="/reservations">Reservations</a>
          </li>
          <li class="hover-underline-animation">
            <a href="/orderOnline">Order Online</a>
          </li>
          <li class="hover-underline-animation">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
