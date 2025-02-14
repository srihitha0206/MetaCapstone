import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container grid">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking-form" className="button-primary">
            Reserve a table
          </Link>
        </div>
        <img src="restauranfood.jpg" alt="logo" className="hero-image"></img>
      </div>
    </section>
  );
};

export default Hero;
