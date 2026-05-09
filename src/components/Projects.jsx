import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Scanova – Healthcare Screening Platform',
      description: 'Multi-module disease screening API with IBM Watson Speech-to-Text integration. Secure backend with RBAC, real-time patient-doctor communication, and normalized medical records.',
      image: '/projects/Images/Scanova Thumbnail.png',
      tags: ['TypeScript', 'Python', 'React.js', 'IBM DB2', 'IBM Watson'],
      link: 'https://github.com/Azfarsh/Scanova'
    },
    {
      id: 2,
      title: 'SportsConnect – Community Matchmaking Platform',
      description: 'Geo-based player matchmaking with real-time messaging. Optimized PostgreSQL schema for multi-filter queries, JWT authentication, and low-latency search.',
      image: '/projects/Images/SportsConnect Thumbnail.jpeg',
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Supabase', 'JWT Auth'],
      link: '#'
    },
    {
      id: 3,
      title: 'Team Task Manager – Project Management System',
      description: 'Full-stack collaborative project management with workspace creation, member RBAC, task workflows, and Firebase authentication with data isolation.',
      image: '/projects/Images/TEAM TASK manager Thumbnail.png',
      tags: ['React.js', 'Node.js', 'Firebase', 'Firestore', 'REST APIs'],
      link: 'https://taskmanager-9mjp.onrender.com'
    },
    {
      id: 4,
      title: 'Tarunspot – Affiliate Recommendations Platform',
      description: 'Production-deployed Next.js platform with TypeScript, SSR/SSG optimization, Sanity CMS integration, and dynamic product filtering.',
      image: '/projects/Images/Tarunspot Thumbnail.png',
      tags: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
      link: 'https://www.tarunspot.shop'
    },
    {
      id: 5,
      title: 'EduStay – Student Accommodation & Food Discovery Portal',
      description: 'Full-stack student accommodation and food discovery portal with advanced search and filters across location, university, price, and amenities. Integrated NextAuth.js for secure authentication and developed an optional location-aware AI chatbot that queries the database to surface relevant nearby listings in real time.',
      image: '/projects/Images/Edustay%20Thumbnail.jpeg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'NextAuth.js', 'Tailwind CSS'],
      link: 'https://github.com/Harshal14753/EduStay.git'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>Explore some of my recent work</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {project.link.includes('github.com') ? 'View on GitHub →' : 'View Live →'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
