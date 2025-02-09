import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import RecipeRecommendation from './components/recipe/form';
import SavedRecipes from './pages/SavedRecipes';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipe-recommendation" element={<RecipeRecommendation />} />
                        <Route path="/saved-recipes" element={<SavedRecipes />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
