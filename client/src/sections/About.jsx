
import React from 'react';
import cook from './cook.png'; // Adjust path if needed

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-us">
        <img src={cook} alt="About us" className="about-us-image" />
      </div>
    </section>
  );
};

export default About;