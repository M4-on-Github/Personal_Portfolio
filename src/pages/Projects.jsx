import React from 'react';
import ClickSpark from '../components/ClickSpark.jsx';
import CircularGallery from '../components/CircularGallery.jsx';

const Projects = () => {
  // 1. Using 'picsum.photos' because it supports WebGL CORS correctly.
  // (Placeholder.com often fails in 3D scenes)
  const projectList = [
    { 
      id: 1, 
      title: "UI Class Project", 
      image: "https://picsum.photos/id/10/600/400",
    },
    { 
      id: 2, 
      title: "Web Development", 
      image: "https://picsum.photos/id/20/600/400",
    },
    { 
      id: 3, 
      title: "Python Automation", 
      image: "https://picsum.photos/id/30/600/400",
    },
    { 
      id: 4, 
      title: "React Experiments", 
      image: "https://picsum.photos/id/40/600/400",
    }
  ];

  const galleryItems = projectList.map(project => ({
    image: project.image,
    text: project.title 
  }));

  return (
    <ClickSpark sparkColor="#55ff33ff" sparkSize={8} sparkCount={12} duration={500}>
      {/* 2. flex: 1 ensures this container takes up available space */}
      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#111' }}>
        
        <div style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>
          <h2>My Work</h2>
          <p>Some of my projects that I am proud of. They span from Data analysis, Software Development, to Web Design. It inculudes class porjects, personal projects, and professional work. asdjfhafhkjkaskfskjfhakjfh</p>
        </div>

        {/* CRITICAL FIX: 
           We must give this div an explicit height (e.g., 600px or 80vh).
           If we leave it as 'auto' or just '100%', it often collapses to 0 height.
        */}
        <div style={{ height: '600px', width: '100%', position: 'relative' }}>
          <CircularGallery 
            items={galleryItems}
            bend={2}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>

      </section>
    </ClickSpark>
  );
};

export default Projects;