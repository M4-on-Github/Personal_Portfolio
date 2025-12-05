import React from 'react';
import ClickSpark from '../components/ClickSpark.jsx';

const Home = () => {
  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)', // Deep dark gradient
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      color: 'white'
    },
    frameWrapper: {
      position: 'relative',
      padding: '2px', // Space for the glowing border
      background: 'linear-gradient(45deg, transparent 5%, #00ff88 50%, transparent 95%)', // Subtle gradient border
      borderRadius: '4px',
      boxShadow: '0 0 40px rgba(0, 255, 136, 0.1)'
    },
    hudLabel: {
      position: 'absolute',
      top: '-25px',
      left: '0',
      color: '#00ff88',
      fontSize: '0.8rem',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
  };

  return (
    <ClickSpark sparkColor="#00ff88" sparkSize={8} sparkCount={12} duration={500}>
      <div style={styles.container}>
        
        {/* Main Content Area */}
        <div style={styles.frameWrapper}>
          
          <div style={{ width: '1280px', height: '720px', background: '#000', position: 'relative' }}>
             {/* Decorative Corner Accents */}
             <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid #00ff88', borderLeft: '2px solid #00ff88' }} />
             <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid #00ff88', borderRight: '2px solid #00ff88' }} />

            <iframe 
              src="http://127.0.0.1" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              allow="autoplay; fullscreen; microphone; camera; midi; encrypted-media"
              style={{ display: 'block' }}
            />
          </div>
        </div>

      </div>
    </ClickSpark>
  );
};

export default Home;