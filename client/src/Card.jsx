import React from 'react';

const Card = ({ data }) => {
  const { id, title, description, image } = data;

  return (
    <>
    
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button  className="search-button">Click here</button>
      </div>
    </div>
    </>
  );
};

export default Card;

