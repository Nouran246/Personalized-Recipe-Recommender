
import React from 'react';
import back1 from 'back1.jpg'; // Place your image accordingly

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* ...existing code... */}
      <div className="screen1">
        {/* ...existing code... */}
        <img src={back1} alt="Cooking" className="background_img" />
      </div>
    </section>
  );
};

export default Home;