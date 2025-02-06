import React from 'react';
import Hero from './Hero.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import Description from './Description.js';

const Main = () => {
  return (
    <main id="home">
      <Hero />
      <Specials />
      <Testimonials />
      <Description />
    </main>
  );
};

export default Main;
