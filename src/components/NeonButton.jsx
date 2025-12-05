import React from 'react';

const NeonButton = ({ children, onClick, type = "button" }) => {
  const style = {
    background: 'transparent',
    border: '1px solid #00ff88',
    color: '#00ff88',
    padding: '12px 24px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '50px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  return (
    <button 
      type={type}
      style={style}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.background = '#00ff88';
        e.target.style.color = '#000';
        e.target.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'transparent';
        e.target.style.color = '#00ff88';
        e.target.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
};

export default NeonButton;