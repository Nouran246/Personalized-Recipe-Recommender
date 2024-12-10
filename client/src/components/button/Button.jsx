import React from "react";
import "./Button.css";

const Button = ({ variant = "primary", size = "medium", children, onClick }) => {
    return (
        <button className={`button ${variant} ${size}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
