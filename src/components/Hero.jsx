import './Hero.css'

function Hero() {
  const handleDownloadCV = () => {
    window.location.href = 'mailto:yashkasat38@gmail.com';
  };

  const handleHireMe = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">YASH LAXMIKANT KASAT</h1>
          <p className="hero-subtitle">Software Engineer | Junior Data Analyst | React.js, Node.js, SQL & Python</p>
          <p className="hero-desc">Software Engineer and Junior Data Analyst focused on building scalable applications, clean user experiences, and data-driven solutions. I work with React.js, Node.js, SQL, Python, PostgreSQL, and visualization tools to solve real problems with practical, impactful results.</p>
        </div>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleHireMe}>Hire me</button>
          <button className="btn btn-secondary" onClick={handleDownloadCV}>Contact</button>
        </div>
      </div>
        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-avatar-shell">
            <div className="hero-avatar-orbit hero-avatar-orbit-1"></div>
            <div className="hero-avatar-orbit hero-avatar-orbit-2"></div>
            <div className="hero-avatar-glow"></div>
            <div className="hero-avatar-code hero-avatar-code-1"></div>
            <div className="hero-avatar-code hero-avatar-code-2"></div>
            <div className="hero-avatar-character">
              <div className="hero-avatar-hair"></div>
              <div className="hero-avatar-head">
                <span className="hero-avatar-eye hero-avatar-eye-left"></span>
                <span className="hero-avatar-eye hero-avatar-eye-right"></span>
                <span className="hero-avatar-nose"></span>
                <span className="hero-avatar-mouth"></span>
              </div>
              <div className="hero-avatar-neck"></div>
              <div className="hero-avatar-hoodie"></div>
              <div className="hero-avatar-hoodie-zip"></div>
              <div className="hero-avatar-arm hero-avatar-arm-left"></div>
              <div className="hero-avatar-arm hero-avatar-arm-right"></div>
              <div className="hero-avatar-laptop"></div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero
