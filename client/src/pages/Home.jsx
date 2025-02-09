import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to Recipe AI</h1>
                <p>Get personalized recipe recommendations based on your ingredients and preferences</p>
                <Link to="/recipe-recommendation" className="cta-button">
                    Get Started
                </Link>
            </div>
            <div className="features">
                <div className="feature-card">
                    <h3>Smart Recommendations</h3>
                    <p>AI-powered recipe suggestions based on your available ingredients</p>
                </div>
                <div className="feature-card">
                    <h3>Dietary Preferences</h3>
                    <p>Customize recipes according to your dietary needs and restrictions</p>
                </div>
                <div className="feature-card">
                    <h3>Interactive Chat</h3>
                    <p>Ask questions and get real-time modifications to your recipes</p>
                </div>
            </div>
        </div>
    );
}
