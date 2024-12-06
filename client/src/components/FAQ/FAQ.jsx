import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    // Define variables for spacing and animation duration
    const faqSpacing = "30px"; // Space between FAQ items
    const animationDuration = "0.5s"; // Animation duration for open/close

    // FAQ data (can be dynamically fetched in the future)
    const faqItems = [
        { question: "What is Chef's Whispers?", answer: "Chef's Whispers is a personalized recipe platform designed to make cooking enjoyable and tailored to your tastes." },
        { question: "How does it work?", answer: "You provide your preferences, and we generate recipes you’ll love." },
        { question: "Is it free to use?", answer: "Yes, Chef's Whispers is free to explore with optional premium features." },
    ];

    return (
        <div
            className="faq-container"
            style={{
                "--faq-spacing": faqSpacing,
                "--animation-duration": animationDuration,
            }}
        >
            {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`faq-item ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
        >
            <div className="faq-question">{question}</div>
            <div className="faq-answer">{answer}</div>
        </div>
    );
};

export default FAQ;
