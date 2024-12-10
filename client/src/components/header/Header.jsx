import React, { useState, useEffect } from "react";
import Button from "../button/Button"; // Import your Button component
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Track scrolling to highlight active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                    <ul className="menu-list">
                        <li className={activeSection === "hero" ? "active" : ""}>
                            <a href="#hero" onClick={handleLinkClick}>Home</a>
                        </li>
                        <li className={activeSection === "why" ? "active" : ""}>
                            <a href="#why" onClick={handleLinkClick}>Why Us</a>
                        </li>
                        <li className={activeSection === "features" ? "active" : ""}>
                            <a href="#features" onClick={handleLinkClick}>Features</a>
                        </li>
                        <li className={activeSection === "faq" ? "active" : ""}>
                            <a href="#faq" onClick={handleLinkClick}>FAQ</a>
                        </li>
                    </ul>
                </nav>
                <Button variant="primary" size="small" onClick={() => alert("Get Started")}>
                    Get Started
                </Button>
                <div
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
