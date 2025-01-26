import React from "react";
import Button from "../components/button/Button";
import "./styles/Hero.css";
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Left Content */}
            <div className="hero-text">
                <h1>Welcome to Chef's Whispers</h1>
                <p>
                    Your personalized recipe guide to make cooking simple and magical.
                    Bring the whispers of flavor to your kitchen today!
                </p>
                <Link to="/sign-in">
  <Button variant="primary" size="large">
    Start Cooking
  </Button>
</Link>            </div>

            {/* Right Card with Favicon */}
            <div className="hero-card">
                <div className="favicon-container">
                    <img src="favicon.svg" alt="Chef's Whispers" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
