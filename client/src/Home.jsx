import React from "react";
import back1 from './back1.jpg';

const Home = ({ onButtonClick }) => { // Accept onButtonClick as a prop
  return (
    <>
      <div className="screen1">
        <div className="text-container">
          <h1>Wanna Find Out What You Can Make From <span>Dishes?</span></h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a recipe..."
              className="search-bar"
            />
            <button className="search-button" onClick={onButtonClick}> {/* Call onButtonClick on button press */}
              Let's Begin
            </button>
          </div>
        </div>
        <img src={back1} alt="An image of cooking" className="background_img" />
      </div>
    </>
  );
};

export default Home;
