import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Demo from "./Demo";
import Home from "./Home";
import About from "./About";
import Card from "./Card"; // Import the Card component
import Footer from "./Footer";
import RecipeDetails from "./RecipeDetails";

const App = () => {
  const [items, setItems] = useState([]);
  const [showCards, setShowCards] = useState(false); // State to toggle card section visibility

  // Dummy data for cards
  const dummyData = [
    {
      id: 1,
      title: "Dish A",
      description: "A delicious dish.",
      image: "/path/to/image1.png",
    },
    {
      id: 2,
      title: "Dish B",
      description: "A savory dish.",
      image: "/path/to/image2.png",
    },
    {
      id: 3,
      title: "Dish C",
      description: "A sweet dish.",
      image: "/path/to/image3.png",
    },
  ];

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("http://localhost:5000/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to show the card section
  const handleShowCards = () => {
    setShowCards(true);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Demo />
              <div id="home">
                <Home onButtonClick={handleShowCards} />
              </div>
              {/* Render card section only when showCards is true */}
              {showCards && (
                <div id="dishes" className="card-section">
                  <h2 className="card-section-heading">
                    Let's Find You Some Best Dishes
                  </h2>
                  <div className="card-container">
                    {dummyData.map((item) => (
                      <Card key={item.id} data={item} />
                    ))}
                  </div>
                </div>
              )}
              <div id="about">
                <About />
              </div>
              <Footer />
            </>
          }
        /> 
        <Route path="/recipedetails" element={ <RecipeDetails /> } />
      </Routes>
    </div>
  );
};

export default App;
