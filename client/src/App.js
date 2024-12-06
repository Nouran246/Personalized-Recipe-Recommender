import React, { useState, useEffect } from "react";
import axios from "axios";
import "./globals.css";
import HeroSection from "./sections/Hero";
import QuickInfo from "./sections/QuickInfo";
import ExploreMore from "./sections/ExploreMore";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/header/Header";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:5000/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <section id="hero">
          <HeroSection />
        </section>
      </div>
      <div className="container.Card">
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
    </div>
  );
};


export default App;
