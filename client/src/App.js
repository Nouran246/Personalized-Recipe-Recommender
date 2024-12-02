import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/globals.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Items from Backend:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
