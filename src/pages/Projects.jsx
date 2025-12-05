import React, { useEffect, useState } from 'react';
import ClickSpark from '../components/ClickSpark.jsx';
import CircularGallery from '../components/CircularGallery.jsx';

const Projects = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    // Mock data if fetch fails, so you can see the UI immediately
    const mockData = [
       { image: 'project1.jpg', text: 'Neural Net' }, 
       { image: 'project2.jpg', text: 'Vision API' },
       { image: 'project3.jpg', text: 'Unreal' }
    ];
    
    fetch('http://localhost:8000/get_projects.php')
      .then(res => res.json())
      .then(data => setGalleryItems(data))
      .catch(err => {
          console.warn("Fetch failed, using mock data for UI check");
          setGalleryItems(mockData);
      });
  }, []);

  if (!galleryItems.length) return <div style={{color: 'white', background: '#050505', height: '100vh'}}>Loading...</div>;

  return (
    <ClickSpark sparkColor="#00ff88" sparkSize={8} sparkCount={12} duration={500}>
      <section style={{ height: '100vh', backgroundColor: '#050505', position: 'relative', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: '100%' }}>
          <CircularGallery 
            items={galleryItems}
            bend={2}
            borderRadius={0.05}
            font="bold 40px 'Inter', sans-serif" 
            textColor="#ffffff"
          />
        </div>

      </section>
    </ClickSpark>
  );
};

export default Projects;