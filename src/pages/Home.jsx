import React from 'react';
import ThreeCanvas from '../components/ThreeCanvas.jsx';
import ClickSpark from '../components/ClickSpark.jsx';
import UnrealStream from '../components/UnrealStream.jsx';

const Home = () => {
  return (
    <ClickSpark sparkColor="#ff5733" sparkSize={8} sparkCount={12} duration={500}>
    <div className="home-container" style={{ width: '100%', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Navigation / Header */}
      {/* <nav style={{ padding: '20px', background: '#222', color: 'white' }}>
      </nav> */}
      <UnrealStream navHeight="80px" />


    </div>
    </ClickSpark>
  );
};

export default Home;