import React from 'react';
import './Button.css'; // Optional: if you want specific styles for this component

const Button = ({ 
  text, 
  onClick, 
  type = "button", 
  variant = "primary", 
  disabled = false 
}) => {
  // 'variant' allows us to switch between styles (e.g., 'primary', 'secondary', 'danger')
  const className = `custom-btn ${variant}`;

  return (
    <button 
      type={type} 
      className={className} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;