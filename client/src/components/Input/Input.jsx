import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  error, 
  required = false 
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className={`input-field ${error ? 'error' : ''}`}>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="custom-input"
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
