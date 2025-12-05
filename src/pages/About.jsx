import React from 'react';
import ProfileCard from '../components/ProfileCard.jsx';
import GlassCard from '../components/GlassCard.jsx';
import NeonButton from '../components/NeonButton.jsx';

const About = () => {
  const styles = {
    page: {
      minHeight: '100vh',
      background: '#050505',
      color: '#fff',
      padding: '4rem 2rem',
      fontFamily: "'Inter', sans-serif",
      display: 'grid',
      gridTemplateColumns: '350px 1fr',
      gap: '3rem',
      maxWidth: '1400px',
      margin: '0 auto',
      alignItems: 'start'
    },
    sectionTitle: {
      color: '#00ff88',
      fontSize: '1.5rem',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    gridStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '1rem'
    }
  };

  return (
    <section style={styles.page}>
      
      {/* Left Column: Profile */}
      <div style={{ position: 'sticky', top: '2rem' }}>
        <ProfileCard
          name="Moe Myint Myat Maung"
          title="Machine Learning Engineer"
          handle="M4-on-github"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/avatar.png"
          showUserInfo={false}
          enableTilt={true}
        />
        <div style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.7 }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>DESIGNING THE FUTURE</p>
        </div>
      </div>

      {/* Right Column: Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* 1. Intro Section */}
        <GlassCard>
           <h2 style={{ fontSize: '3rem', margin: '0 0 1rem 0', lineHeight: 1.1 }}>
            Bridging Math & <span style={{ color: '#00ff88' }}>Machines.</span>
           </h2>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc' }}>
            I’m a Computer Science sophomore obsessed with the moment code stops following instructions and starts <strong>thinking</strong>. My goal is to bridge the gap between theoretical mathematics and real-world Machine Learning applications.
           </p>
        </GlassCard>

        {/* --- NEW: Resume Download Button --- */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a 
            href="/resume.pdf" 
            download="Moe_Myint_Myat_Maung_Resume.pdf" 
            style={{ textDecoration: 'none' }}
          >
            <NeonButton>📄 Download Resume</NeonButton>
          </a>
        </div>
        {/* ----------------------------------- */}

        {/* 2. Skills Grid (Tech Stack) */}
        <div>
          <h3 style={styles.sectionTitle}>Tech Stack</h3>
          <div style={styles.gridStats}>
            <GlassCard hoverEffect={true}>
              <h4 style={{ margin: 0, color: '#fff' }}>Languages</h4>
              <p style={{ color: '#888', marginTop: '5px' }}>Python, Java, C++</p>
            </GlassCard>
            <GlassCard hoverEffect={true}>
              <h4 style={{ margin: 0, color: '#fff' }}>ML / Data</h4>
              <p style={{ color: '#888', marginTop: '5px' }}>PyTorch, Pandas, NumPy</p>
            </GlassCard>
            <GlassCard hoverEffect={true}>
              <h4 style={{ margin: 0, color: '#fff' }}>Core</h4>
              <p style={{ color: '#888', marginTop: '5px' }}>Linear Algebra, Calculus</p>
            </GlassCard>
          </div>
        </div>

        {/* 3. Personal / Fun */}
        <GlassCard style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,255,136,0.05) 100%)' }}>
          <h3 style={styles.sectionTitle}>Beyond the Terminal</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
             <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ff036cff' }}>🚤 Rich Hot Humble</span>
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>📚</span> Sci-Fi Enthusiast
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>🎮</span> Mobile Legends Pro
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>🐂</span> Red Bull Hunter
             </li>
          </ul>
        </GlassCard>

      </div>
    </section>
  );
};

export default About;