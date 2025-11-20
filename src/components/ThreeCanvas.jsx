import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = ({ url }) => {
  // Load the STL file using the STLLoader
  const geometry = useLoader(STLLoader, url);

  return (
    <mesh geometry={geometry}>
      {/* Metal Shading Material 
          metalness: 0-1 (1 is fully metal)
          roughness: 0-1 (0 is polished mirror, 1 is matte)
      */}
      <meshStandardMaterial 
        color={"#a0a0a0"} 
        metalness={1.0} 
        roughness={0.2} 
      />
    </mesh>
  );
};

const ThreeCanvas = ({url}) => {
  return (
    <div className="three-container" style={{ height: '500px', width: '100%', background: '#111' }}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 10] }}>
        
        {/* Suspense is required for async asset loading (the STL) */}
        <Suspense fallback={null}>
          
          {/* Stage: Automatically centers the model and sets up basic shadows/lighting */}
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <Model url= {url} />
          </Stage>

          {/* Environment: Crucial for metal materials to have something to reflect */}
          <Environment  preset="warehouse" color="#333" />
          
        </Suspense>

        {/* OrbitControls: Enables Zoom (scroll), Pan (right-click), and Rotate (left-click) */}
        <OrbitControls makeDefault />
        
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;