import React from 'react';
import ThreeCanvas from '../components/ThreeCanvas.jsx';
import ClickSpark from '../components/ClickSpark.jsx';

const Home = () => {
  return (
    <ClickSpark sparkColor="#ff5733" sparkSize={8} sparkCount={12} duration={500}>
    <div className="home-container" style={{ width: '100%', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Navigation / Header */}
      <nav style={{ padding: '20px', background: '#222', color: 'white' }}>
        <h2>My Portfolio</h2>
      </nav>


      {/* Main Content Area */}
      <main style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: 'calc(100vh - 80px)' }}>
        
        {/* Left Side: Text Content */}
        <div style={{ flex: 1, minWidth: '300px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
            This is my personal website for the UI Design class. 
            On the right, you can interact with the 3D statue model. 
            Try rotating, panning, or zooming to see the details!
          </p>
        </div>

        {/* Right Side: The 3D Viewer */}
        <div style={{ flex: 1, minWidth: '300px', height: '100%' }}>
          <ThreeCanvas url = "/Statue.stl" />
        </div>

      </main>
    </div>
    </ClickSpark>
  );
};

export default Home;