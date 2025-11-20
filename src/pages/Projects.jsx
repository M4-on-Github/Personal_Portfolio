import React from 'react';
import ProjectCard from '../components/projectCard.jsx';
import ClickSpark from '../components/ClickSpark.jsx';

const Projects = () => {
  // 2. Updated data to match the structure ProjectCard expects (image, tags, etc.)
  const projectList = [
    { 
      id: 1, 
      title: "UI Class Project", 
      description: "AAAAAAAAAAAAAAAAAAAAAAAAA", 
      image: "https://via.placeholder.com/400x200", // Placeholder image
      tags: ["React", "Three.js", "CSS"]
    },
    { 
      id: 2, 
      title: "AAAAAAAAAAAAAAAAAAA", 
      description: "askdfnsdkjfkasjdklajsfn ljdflkj;a ldj fl;kaj ", 
      image: "https://via.placeholder.com/400x200",
      tags: ["HTML"]
    },
    { 
      id: 3, 
      title: "AAAAAAAAAAAAAAAAAAAAAAA", 
      description: "ajsfsjfkjsakfaskjjksadfkj", 
      image: "https://via.placeholder.com/400x200",
      tags: ["Python", "API"]
    }
  ];

  return (
    <ClickSpark sparkColor="#55ff33ff" sparkSize={8} sparkCount={12} duration={500}>
    {/* Add flex: 1 here to ensure this section fills the growing space */}
    <section className="page projects" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ margin: '2rem' }}>My Work</h2>
      {/* Added inline style to grid for layout visualization */}
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem' }}>
        {projectList.map((projectData) => (
          /* 3. Pass the whole object as the 'project' prop */
          <ProjectCard key={projectData.id} project={projectData} />
        ))}
      </div>
    </section>
  </ClickSpark>
  );
};

export default Projects;