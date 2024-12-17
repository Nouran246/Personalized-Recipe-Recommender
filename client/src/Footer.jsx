import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Company Info */}
        <div className="footer-section company-info">
          <h2>Your Company</h2>
          <p>Your go-to place for discovering amazing dishes and recipes!</p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="footer-section nav-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#dishes">Dishes</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
