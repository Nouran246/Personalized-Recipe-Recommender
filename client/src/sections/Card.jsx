
import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.title}</h3>
      <p>{data.content}</p>
    </div>
  );
};

export default Card;