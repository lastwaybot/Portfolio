import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Data Analyst Intern',
      company: 'Ampverse DMI Pvt. Ltd.',
      duration: 'Aug 2025 – Apr 2026',
      location: 'Pune, India',
      description: [
        'Engineered automated internal data workflows using Google Apps Script, eliminating ~40% of manual processing overhead and enabling teams to reallocate effort toward higher-value deliverables.',
        'Owned end-to-end delivery of a reusable documentation system using Google Forms and Slides, standardizing event reporting across multiple live operations and reducing content turnaround time by ~50%.',
        'Analyzed campaign KPIs via Google Analytics and translated raw metrics into structured stakeholder reports, improving visibility into operational performance across functions.',
        'Collaborated within Agile sprints for task planning, sprint reviews, and cross-team syncs; consistently met delivery timelines across concurrent operational workstreams.'
      ],
      skills: ['Google Apps Script', 'Google Analytics', 'Agile', 'Data Analysis']
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Intern Labs',
      duration: 'Jul 2025 – Aug 2025',
      location: 'Remote',
      description: [
        'Implemented responsive, production-ready React.js UI components with RESTful API integration, applying component-based architecture for modularity, reusability, and long-term maintainability.',
        'Provisioned and configured AWS EC2 deployment environments; resolved production issues related to environment variables, build pipelines, and runtime errors to maintain application stability.',
        'Reduced frontend debugging cycles by ~30% through disciplined code reviews, modular component design, and structured test coverage across all delivered features.'
      ],
      skills: ['React.js', 'AWS EC2', 'RESTful APIs', 'Frontend Development']
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <h2>Professional Experience</h2>
        <p>Internships & Work Experience</p>
      </div>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header-info">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="experience-meta">
                <span className="duration">📅 {exp.duration}</span>
                <span className="location">📍 {exp.location}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="experience-skills">
                {exp.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
