// Projects.jsx
import React, { useEffect, useState } from 'react';
import ClickSpark from '../components/ClickSpark.jsx';
import CircularGallery from '../components/CircularGallery.jsx';

const Projects = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_projects.php') // Update with your actual path
      .then(res => res.json())
      .then(data => setGalleryItems(data))
      .catch(err => console.error(err));
  }, []);

  if (!galleryItems.length) return null;

  return (
    <ClickSpark sparkColor="#55ff33ff" sparkSize={8} sparkCount={12} duration={500}>
      <section style={{ height: '100vh', backgroundColor: '#111', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '100%', width: '100%' }}>
          {/* We pass specific styling props for the overlay text here */}
          <CircularGallery 
            items={galleryItems}
            bend={2}
            borderRadius={0.05}
            font="bold 40px Figtree" 
            textColor="#ffffff"
          />
        </div>
      </section>
    </ClickSpark>
  );
};

export default Projects;