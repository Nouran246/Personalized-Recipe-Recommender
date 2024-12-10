import React from "react";
import "./styles/QuickInfo.css";
import Card from "../components/card/Card";

const QuickInfo = () => {
    return (
        <section className="quick-info-section">
            <div className="container.Card">
                <h2>Why Choose Us?</h2>
                <div className="card-container">
                    <Card
                        size="medium"
                        variant="primary"
                        title="Personalized Recipes"
                        content="We create recipes tailored to your taste preferences."
                    />
                    <Card
                        size="medium"
                        variant="primary"
                        title="Quick & Easy"
                        content="Enjoy recipes that save you time in the kitchen."
                    />
                    <Card
                        size="medium"
                        variant="primary"
                        title="Save & Share"
                        content="Store your favorites and share them with friends."
                    />
                </div>
            </div>
        </section>
    );
};

export default QuickInfo;
