import React from 'react';

const GlassCard = ({ children, style, hoverEffect = false }) => {
  const baseStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(100, 255, 136, 0.1)',
    borderRadius: '16px',
    padding: '2rem',
    color: '#e0e0e0',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    ...style,
  };

  return (
    <div 
      className={hoverEffect ? "glass-card-hover" : ""} 
      style={baseStyle}
      onMouseEnter={(e) => {
        if(hoverEffect) {
          e.currentTarget.style.borderColor = 'rgba(100, 255, 136, 0.5)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(100, 255, 136, 0.2)';
        }
      }}
      onMouseLeave={(e) => {
        if(hoverEffect) {
          e.currentTarget.style.borderColor = 'rgba(100, 255, 136, 0.1)';
          e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;