import React from 'react';
import ThreeCanvas from '../components/ThreeCanvas.jsx';
import ClickSpark from '../components/ClickSpark.jsx';
// import UnrealStream from '../components/UnrealStream.jsx'; // You aren't using this yet

const Home = () => {
  return (
    <ClickSpark sparkColor="#ff5733" sparkSize={8} sparkCount={12} duration={500}>
      <div className="home-container" style={{ width: '100%', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        
        {/* Navigation / Header */}
        {/* <nav style={{ padding: '20px', background: '#222', color: 'white' }}> </nav> */}

        {/* --- THE FIX START --- */}
        <div style={{ width: '1280px', height: '720px', border: '2px solid #000' }}>
          <iframe 
            src="http://127.0.0.1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            allow="autoplay; fullscreen; microphone; camera; midi; encrypted-media"
          />
        </div>
        {/* --- THE FIX END --- */}

      </div>
    </ClickSpark>
  );
};

export default Home;