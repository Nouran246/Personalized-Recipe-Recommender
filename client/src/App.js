import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./globals.css";
import HeroSection from "./sections/Hero";
import QuickInfo from "./sections/QuickInfo";
import ExploreMore from "./sections/ExploreMore";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/header/Header";
import SignUp from './components/SignIn_SignUp/SignUp'; // Import the SignUp component

const App = () => {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Header /> {/* Your header that contains the Get Started button */}
      <Routes> {/* Define routes for different pages */}
        <Route path="/sign-up" element={<SignUp />} />
        {/* You can add more routes for other pages */}
      </Routes>
      
      {/* Other sections in your app */}
      <div className="container">
        <section id="hero">
          <HeroSection />
        </section>
      </div>
      <div className="container Card">
        <section id="why">
          <QuickInfo />
        </section>
      </div>
      <div className="container">
        <section id="features">
          <ExploreMore />
        </section>
      </div>

      <div className="faq-section">
        <section id="faq">
          <FAQ />
        </section>
      </div>

      <footer className="footer">
        <text>© 2024 Chef's Whispers. All rights reserved.</text>
      </footer>
    </Router>
  );
};

export default App;
