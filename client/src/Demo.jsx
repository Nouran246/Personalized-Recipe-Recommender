import React from "react";

const Demo = () => {
  return (
    <>
      <header>
        <nav class="navbar">
          <div class="navbar-left">
            <a href="#home" className="navbar-link">
              Home
            </a>
            <a href="#about" className="navbar-link">
              About
            </a>
            
            <a href="#dishes" className="navbar-link">
              Dishes
            </a>
          </div>
          <div class="navbar-right">
            <a href="#login" class="navbar-link">
              Login
            </a>
            <a href="#signup" class="signup_navbar-link">
              Signup
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Demo;
