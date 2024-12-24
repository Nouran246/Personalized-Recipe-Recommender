import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Import useNavigate and NavLink for navigation
import Button from "../button/Button"; // Import your Button component
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate(); // Hook to navigate programmatically

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

    // Function to navigate to the SignUp page
    const goToSignUp = () => {
        navigate("/sign-up"); // Navigate to the SignUp page
    };

    return (
        <header className="header">
            <div className="header-container">
                <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                    <ul className="menu-list">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleLinkClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="#why"
                                className={activeSection === "why" ? "active" : ""}
                                onClick={handleLinkClick}
                            >
                                Why
                            </a>
                        </li>
                        <li>
                            <a
                                href="#features"
                                className={activeSection === "features" ? "active" : ""}
                                onClick={handleLinkClick}
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#faq"
                                className={activeSection === "faq" ? "active" : ""}
                                onClick={handleLinkClick}
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <NavLink
                                to="/sign-in"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleLinkClick}
                            >
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sign-up"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleLinkClick}
                            >
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Button variant="primary" size="small" onClick={goToSignUp}>  {/* Call goToSignUp here */}
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
