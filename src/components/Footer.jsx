import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      width: '100%',
      padding: '2rem 0',
      background: '#050505', // Matches the page backgrounds
      borderTop: '1px solid rgba(0, 255, 136, 0.1)', // Subtle neon accent line
      textAlign: 'center',
      color: '#666',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.85rem',
      letterSpacing: '1px',
      position: 'relative',
      zIndex: 10
    },
    highlight: {
      color: '#00ff88',
      textDecoration: 'none',
      transition: 'opacity 0.3s'
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} <span style={{ color: '#aaa' }}>Moe Myint Myat Maung</span>
      </p>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', opacity: 0.7 }}>
        System Status: <span style={styles.highlight}>Operational</span> // Built with React
      </p>
    </footer>
  );
};

export default Footer;