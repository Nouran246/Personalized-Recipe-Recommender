import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">Recipe AI</Link>
            </div>
            <div className="nav-links">
                <Link
                    to="/recipe-recommendation"
                    className={location.pathname === '/recipe-recommendation' ? 'active' : ''}
                >
                    Get Recommendations
                </Link>
                <Link
                    to="/saved-recipes"
                    className={location.pathname === '/saved-recipes' ? 'active' : ''}
                >
                    Saved Recipes
                </Link>
            </div>
        </nav>
    );
}
