import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Demo from './Demo';
import Home from './Home';
import About from './About';
import Card from './Card';

const App = () => {
  const [items, setItems] = useState([]);


  //From this the data I am adding is dummy data later on it will be deleted when the local host has some data.

  const dummyData = [
    { id: 1, title: 'Dish A', description: 'A delicious dish.', image: '/path/to/image1.png' },
    { id: 2, title: 'Dish B', description: 'A savory dish.', image: '/path/to/image2.png' },
    { id: 3, title: 'Dish C', description: 'A sweet dish.', image: '/path/to/image3.png' },
  ];
  
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
      <Demo />
      <Home/>
      <About/>
      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
      <div className="card-container">
        {dummyData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      
    </div>
  );
};

export default App;
