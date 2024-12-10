import React from "react";
import "./Card.css";

const Card = ({ size = "medium", variant = "primary", title, content, image }) => {
    return (
        <div className={`card ${size} ${variant}`}>
            {title && <h3 className="card-title">{title}</h3>}
            {variant === "image" && image ? (
                <img src={image} alt={title} className="card-image" />
            ) : (
                <p className="card-content">{content}</p>
            )}
        </div>
    );
};

export default Card;
