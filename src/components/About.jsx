import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Software Engineer and Data Analyst who enjoys building clean, scalable products and translating data into meaningful action. I work across React.js, Node.js, SQL, Python, PostgreSQL, and visualization tools to create solutions that are practical, polished, and insight-driven. My focus is on solving real problems with thoughtful engineering and a strong analytical mindset.
          </p>
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">React.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">REST APIs</div>
              <div className="skill-item">Firebase</div>
              <div className="skill-item">Express.js</div>
              <div className="skill-item">AWS EC2</div>
              <div className="skill-item">JWT Auth</div>
              <div className="skill-item">RBAC</div>
              <div className="skill-item">Next.js</div>
              <div className="skill-item">Supabase</div>
              <div className="skill-item">SQL</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">Excel</div>
              <div className="skill-item">Power BI</div>
              <div className="skill-item">Pandas</div>
              <div className="skill-item">NumPy</div>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h4>4+</h4>
            <p>Major Projects</p>
          </div>
          <div className="stat-item">
            <h4>9th Rank</h4>
            <p>IBM Hackathon</p>
          </div>
          <div className="stat-item">
            <h4>SDE + Data</h4>
            <p>Dual Focus</p>
          </div>
          <div className="stat-item">
            <h4>Azure</h4>
            <p>Certified (AZ-900)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
