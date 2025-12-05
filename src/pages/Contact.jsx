import React from 'react';
import NeonButton from '../components/NeonButton.jsx';

const Contact = () => {
  const styles = {
    page: {
      minHeight: '100vh',
      background: '#050505',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    // Background glow effect
    glow: {
      position: 'absolute',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, rgba(0,0,0,0) 70%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 0
    },
    formContainer: {
      zIndex: 1,
      width: '100%',
      maxWidth: '500px',
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(10px)',
      padding: '3rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    },
    input: {
      width: '100%',
      padding: '1rem',
      background: 'rgba(0,0,0,0.3)',
      border: '1px solid #333',
      color: '#fff',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s'
    },
    header: {
      color: '#fff',
      marginBottom: '2rem',
      fontSize: '2rem',
      textAlign: 'center'
    }
  };

  const handleFocus = (e) => e.target.style.borderColor = '#00ff88';
  const handleBlur = (e) => e.target.style.borderColor = '#333';

  return (
    <section style={styles.page}>
      <div style={styles.glow}></div>
      
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Initialize Contact</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          
          <input 
            type="email" 
            placeholder="Enter User Email" 
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          
          <textarea 
            placeholder="Transmission Message..." 
            rows="5" 
            style={{ ...styles.input, resize: 'none' }} 
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          
          <div style={{ textAlign: 'center' }}>
            <NeonButton type="submit">Send Message</NeonButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;