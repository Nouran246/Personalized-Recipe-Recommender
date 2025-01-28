import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";
import HeroSection from "./sections/Hero";
import QuickInfo from "./sections/QuickInfo";
import ExploreMore from "./sections/ExploreMore";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/header/Header";
import SignUp from './components/SignIn_SignUp/SignUp';
import SignIn from './components/SignIn_SignUp/SignIn'; 
import Form from './components/recipe/form'; // Capitalized "Form"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/form" element={<Form />} /> {/* Capitalized "Form" */}
            <Route path="/" element={
              <>
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
              </>
            } />
          </Routes>
        </main>
        <footer className="footer">
          <text>© 2024 Chef's Whispers. All rights reserved.</text>
        </footer>
      </div>
    </Router>
  );
};

export default App;
