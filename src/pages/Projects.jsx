
import { useState, useEffect } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const categories = ['All', 'Government', 'Education', 'NGO', 'Business', 'Cultural'];

  const projects = [
    {
      id: 1,
      title: 'NBSE Connect',
      description: 'Comprehensive digital platform for Nagaland Board of School Education connecting students, teachers, and administrators across the state.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      category: 'Education',
      status: 'Completed',
      year: '2023',
      client: 'Nagaland Board of School Education'
    },
    {
      id: 2,
      title: 'Hornbill Festival App',
      description: 'Official mobile application for Nagaland\'s premier cultural festival featuring event schedules, booking, and live updates.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Stripe', 'Google Maps'],
      category: 'Cultural',
      status: 'Completed',
      year: '2023',
      client: 'Tourism Department, Nagaland'
    },
    {
      id: 3,
      title: 'Nagaland Police Portal',
      description: 'Internal management system for Nagaland Police department with case management and officer coordination features.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'JWT Auth'],
      category: 'Government',
      status: 'In Progress',
      year: '2024',
      client: 'Nagaland Police'
    },
    {
      id: 4,
      title: 'Baptist Church Network',
      description: 'Digital platform connecting Baptist churches across Nagaland with event management and community features.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Stripe', 'PWA'],
      category: 'NGO',
      status: 'Completed',
      year: '2022',
      client: 'Nagaland Baptist Church Council'
    },
    {
      id: 5,
      title: 'Dimapur Smart City',
      description: 'Citizen services portal for Dimapur Smart City initiative with online applications and service tracking.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Redis'],
      category: 'Government',
      status: 'Completed',
      year: '2023',
      client: 'Dimapur Municipal Council'
    },
    {
      id: 6,
      title: 'Local Business Directory',
      description: 'Comprehensive online directory for local businesses in Nagaland with booking and review features.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Business',
      status: 'In Progress',
      year: '2024',
      client: 'Nagaland Chamber of Commerce'
    }
  ];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <h1>Our Projects</h1>
            <p>Showcasing our journey of digital transformation across Nagaland</p>
          </div>
        </div>
      </section>

      <section className="projects-content section">
        <div className="container">
          <div className="filter-controls animate-on-scroll">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card animate-on-scroll stagger-${(index % 3) + 1}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-client">
                    <strong>Client:</strong> {project.client}
                  </div>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <button className="project-cta btn btn-primary">
                    View Details
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects animate-on-scroll">
              <h3>No projects found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .projects-page {
          padding-top: 80px;
        }

        .projects-hero {
          background: linear-gradient(135deg, var(--background), var(--section-bg));
          padding: 4rem 0;
          text-align: center;
        }

        .hero-content h1 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: clamp(2.5rem, 5vw, 4rem);
        }

        .hero-content p {
          color: var(--text-secondary);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .filter-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-10px);
          border-color: var(--primary-accent);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .status-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .status-badge.completed {
          background: var(--success);
          color: white;
        }

        .status-badge.in-progress {
          background: var(--warning);
          color: white;
        }

        .project-content {
          padding: 2rem;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-category {
          padding: 0.3rem 0.8rem;
          background: rgba(65, 146, 203, 0.2);
          color: var(--primary-accent);
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-year {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .project-content h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .project-content p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-client {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .project-client strong {
          color: var(--text-primary);
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          padding: 0.3rem 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .project-cta {
          width: 100%;
          justify-content: center;
        }

        .no-projects {
          text-align: center;
          padding: 4rem 2rem;
        }

        .no-projects h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .no-projects p {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .filter-controls {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }

          .project-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
