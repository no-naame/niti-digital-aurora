
const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native Development']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that delivers exceptional digital experiences',
      features: ['Figma Design', 'Prototyping', 'User Research']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions',
      features: ['AWS & Azure', 'DevOps', 'Microservices']
    },
    {
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation consulting and strategy',
      features: ['Technology Audit', 'Strategic Planning', 'Implementation']
    },
    {
      icon: '🔧',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance for your digital products',
      features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring']
    }
  ];

  return (
    <section className="services section animate-on-scroll" id="about">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>We craft digital solutions that empower businesses and transform ideas into reality</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card animate-on-scroll stagger-${(index % 6) + 1}`}>
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          position: relative;
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          transition: var(--transition-smooth);
          overflow: hidden;
          cursor: pointer;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-10px);
          border-color: var(--primary-accent);
        }

        .service-card:hover .service-hover-effect {
          opacity: 1;
          transform: scale(1);
        }

        .service-hover-effect {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, var(--primary-accent) 0%, transparent 70%);
          opacity: 0;
          transform: scale(0.5);
          transition: var(--transition-smooth);
          pointer-events: none;
          z-index: 0;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary-accent), var(--hover-highlight));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          transition: var(--transition-smooth);
          position: relative;
          z-index: 1;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-card h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .service-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .service-features li {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
          transition: var(--transition-smooth);
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .service-card:hover .service-features li {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
