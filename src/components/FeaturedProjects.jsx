
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'NBSE Connect',
      description: 'Digital platform for Nagaland Board of School Education connecting students, teachers, and administrators',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Education',
      link: '/projects/nbse-connect'
    },
    {
      id: 2,
      title: 'Hornbill Festival App',
      description: 'Official mobile application for Nagaland\'s premier cultural festival with live updates and booking',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Stripe'],
      category: 'Cultural',
      link: '/projects/hornbill-app'
    }
  ];

  return (
    <section className="featured-projects section-alt animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing our latest work that's making a difference in Nagaland</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card animate-on-scroll stagger-${index + 1}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} className="project-cta">
                      View Case Study
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta animate-on-scroll stagger-3">
          <Link to="/projects" className="btn btn-primary btn-magnetic">
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .featured-projects {
          position: relative;
          overflow: hidden;
        }

        .featured-projects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-accent), transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
          group: true;
        }

        .project-card:hover {
          transform: scale(1.02) rotateX(2deg) rotateY(2deg);
        }

        .project-image {
          position: relative;
          height: 350px;
          overflow: hidden;
          border-radius: 20px;
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

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(15, 26, 34, 0.8), rgba(65, 146, 203, 0.3));
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
          padding: 2rem;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-overlay-content {
          transform: translateY(0);
        }

        .project-category {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: var(--primary-accent);
          color: white;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .project-overlay h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .project-overlay p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .tech-tag {
          padding: 0.3rem 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          font-size: 0.8rem;
          color: white;
        }

        .project-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: white;
          color: var(--background);
          text-decoration: none;
          border-radius: 25px;
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .project-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }

        .projects-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-image {
            height: 250px;
          }

          .project-overlay {
            padding: 1.5rem;
          }

          .project-overlay h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
