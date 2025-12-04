import React from 'react';
import ProfileCard from '../components/ProfileCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx';

const About = () => {
  // Configuration for paragraph text to make animation visible and slower
  const textRevealConfig = {
    containerClassName: "paragraph-mode",
    textClassName: "paragraph-mode-text",
    wordAnimationEnd: "bottom center", // Animation lasts until element hits center of screen
    blurStrength: 8, // Stronger initial blur
    baseOpacity: 0.05 // Start almost invisible
  };

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
      
      {/* Main Header */}
      <ScrollReveal 
        baseRotation={5} 
        blurStrength={10} 
        wordAnimationEnd="bottom center"
      >
        About Me
      </ScrollReveal>
      
      {/* 1. The "Hook" */}
      <div className="about-intro">
        <ScrollReveal {...textRevealConfig}>
          I’m a Computer Science sophomore with a deep curiosity for how we can teach machines to learn. My journey started with a fascination for automation, but it quickly evolved when I realized that code could do more than just follow instructions—it could predict, analyze, and create.
        </ScrollReveal>
        
        <ScrollReveal {...textRevealConfig}>
          My goal is to bridge the gap between theoretical mathematics and real-world Machine Learning applications. I am currently looking for internship opportunities where I can apply my skills in data analysis and algorithm design.
        </ScrollReveal>
      </div>

      <hr style={{ margin: '2rem 0', opacity: 0.3 }} />

      {/* 2. The "Toolbox" */}
      <div className="about-skills">
        <ScrollReveal baseRotation={-2} blurStrength={6}>Current Tech Stack</ScrollReveal>
        
        <p><em>The tools I'm using to build and learn:</em></p>
        
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <li>
            <strong>Languages: </strong> 
            <span style={{ display: 'inline-block' }}>
               <ScrollReveal {...textRevealConfig}>
                 Python, Java, C++
               </ScrollReveal>
            </span>
          </li>
          <li>
            <strong>ML/Data: </strong>
             <span style={{ display: 'inline-block' }}>
              <ScrollReveal {...textRevealConfig}>
                NumPy, Pandas, Scikit-Learn
              </ScrollReveal>
            </span>
          </li>
          <li>
            <strong>Web: </strong>
             <span style={{ display: 'inline-block' }}>
              <ScrollReveal {...textRevealConfig}>
                React, JavaScript, HTML/CSS
              </ScrollReveal>
            </span>
          </li>
          <li>
            <strong>Core: </strong>
             <span style={{ display: 'inline-block' }}>
              <ScrollReveal {...textRevealConfig}>
                Data Structures, Algebra, Calculus
              </ScrollReveal>
            </span>
          </li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0', opacity: 0.3 }} />

      {/* 3. The "Human" Side */}
      <div className="about-personal">
        <ScrollReveal baseRotation={2} blurStrength={6}>Beyond the Terminal</ScrollReveal>
        <p>
          When I’m not debugging neural networks or studying for algorithms exams, 
          you can find me:
        </p>
        <ul>
          <li>
            <ScrollReveal {...textRevealConfig}>
            ♟️ Playing Chess (and trying to write a bot to beat me)
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal {...textRevealConfig}>
            🎮 Pro for Mobile Legends Bang Bang
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal {...textRevealConfig}>
            📚 Reading Sci-Fi/Fantasy novels
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal {...textRevealConfig}>
            🐂 Hunting for the next red bull on campus
            </ScrollReveal>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default About;