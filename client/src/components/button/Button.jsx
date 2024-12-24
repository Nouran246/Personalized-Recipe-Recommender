import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  type = 'button',
  onClick,
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${variant} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
