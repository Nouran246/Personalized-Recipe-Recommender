import React from "react";
import Button from "../components/button/Button";
import "./styles/ExploreMore.css";

const ExploreMore = () => {
    return (
        <section className="explore-more-section">
            <div className="explore-image">
                <img src="/Untitled.jpg" alt="Explore More Features" />
            </div>
            <div className="explore-content">
                <h2>Explore <span className="highlight">The</span> Features</h2>
                <p>
                    Dive deeper into our world of personalized recipes, curated meal plans, and seamless cooking experiences.
                </p>
                <Button variant="accent" size="large">Start Now</Button>
            </div>
        </section>
    );
};

export default ExploreMore;
