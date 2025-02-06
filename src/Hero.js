import React from 'react';

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
          <a className="button-primary" href=" ">
            Reserve a table
          </a>
        </div>
        <img src="restauranfood.jpg" alt="logo" className="hero-image"></img>
      </div>
    </section>
  );
};

export default Hero;
