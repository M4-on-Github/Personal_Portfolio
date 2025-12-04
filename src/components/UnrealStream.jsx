import React, { useRef, useState, useEffect } from 'react';

const UnrealStream = ({ navHeight = '60px' }) => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const startShare = async () => {
    try {
      // Ask user to select the Unreal Engine window
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          cursor: "always", // Keep cursor visible so you can see where you are pointing
          frameRate: 60     // Attempt smooth 60fps for gameplay
        },
        audio: true         // Capture game audio if needed
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }

      // Handle when the user clicks "Stop Sharing" on the browser UI
      stream.getVideoTracks()[0].onended = () => {
        setIsStreaming(false);
      };

    } catch (err) {
      console.error("Error starting screen share:", err);
    }
  };

  return (
    <div 
      style={{
        // Determine height: Total viewport minus the navbar height
        height: `calc(100vh - ${navHeight})`, 
        width: '100%',
        backgroundColor: '#000', // Black background for cinematic feel
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Visual Prompt to Start Stream */}
      {!isStreaming && (
        <div style={{ textAlign: 'center', color: 'white', zIndex: 10 }}>
          <h2>Unreal Engine Live Feed</h2>
          <p style={{ marginBottom: '20px', color: '#ccc' }}>
            Click below and select the Unreal Engine window.
          </p>
          <button 
            onClick={startShare}
            style={{
              padding: '12px 24px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Connect to Stream
          </button>
        </div>
      )}

      {/* The Video Feed */}
      <video 
        ref={videoRef}
        autoPlay 
        playsInline 
        muted={false} // Set to true if you don't want audio feedback loops
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Keeps aspect ratio (use 'cover' for full immersion but cropped edges)
          display: isStreaming ? 'block' : 'none'
        }}
      />
    </div>
  );
};

export default UnrealStream;