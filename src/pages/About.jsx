import React from 'react';
import ProfileCard from '../components/ProfileCard.jsx'

const About = () => {
  return (
    <section className="page about" style={{ flex: 1 }}>
      <ProfileCard
        name="Moe Myint Myat Maung"
        title="Soon-to-Be Billionaire"
        handle="M4-on-github"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/avatar.png"
        showUserInfo={false}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
      />
      <h2>About Me</h2>
      
      {/* 1. The "Hook" - Who you are and what drives you */}
      <div className="about-intro">
        <p>
          I’m a <strong>Computer Science sophomore</strong> with a deep curiosity for 
          how we can teach machines to learn. My journey started with a fascination for 
          automation, but it quickly evolved when I realized that code could do more than 
          just follow instructions—it could predict, analyze, and create.
        </p>
        <p>
          My goal is to bridge the gap between theoretical mathematics and real-world 
          Machine Learning applications. I am currently looking for internship opportunities 
          where I can apply my skills in data analysis and algorithm design.
        </p>
      </div>

      <hr style={{ margin: '2rem 0', opacity: 0.3 }} />

      {/* 2. The "Toolbox" - What you are actually learning */}
      <div className="about-skills">
        <h3>Current Tech Stack</h3>
        <p><em>The tools I'm using to build and learn:</em></p>
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <li><strong>Languages:</strong> Python, Java, C++</li>
          <li><strong>ML/Data:</strong> NumPy, Pandas, Scikit-Learn (Learning PyTorch)</li>
          <li><strong>Web:</strong> React, JavaScript, HTML/CSS</li>
          <li><strong>Core Concepts:</strong> Data Structures, Linear Algebra, Calculus</li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0', opacity: 0.3 }} />

      {/* 3. The "Human" Side - Make yourself memorable */}
      <div className="about-personal">
        <h3>Beyond the Terminal</h3>
        <p>
          When I’m not debugging neural networks or studying for algorithms exams, 
          you can find me:
        </p>
        <ul>
          <li>♟️ Playing Chess (and trying to write a bot to beat me)</li>
          <li>🎮 Pro for Mobile Legends Bang Bang</li>
          <li>📚 Reading Sci-Fi/Fantasy novels (Currently re-reading <em>Harry Potter</em>)</li>
          <li>🐂 Hunting for the next red bull on campus</li>
        </ul>
      </div>

    </section>
  );
};

export default About;