
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const words = ['Innovation', 'Excellence', 'Solutions', 'Technology'];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentCharIndex < word.length) {
        setDisplayText(word.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      } else if (isDeleting && currentCharIndex > 0) {
        setDisplayText(word.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      } else if (!isDeleting && currentCharIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentWordIndex, isDeleting, words]);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content animate-fade-up">
          <div className="hero-badge animate-scale">
            🚀 Leading Digital Transformation in Nagaland
          </div>
          
          <h1 className="hero-title">
            <span className="title-line animate-fade-up stagger-1">
              Crafting Digital
            </span>
            <span className="title-line animate-fade-up stagger-2">
              <span className="typed-text">{displayText}</span>
              <span className="cursor-blink">|</span>
            </span>
            <span className="title-line animate-fade-up stagger-3">
              for Tomorrow
            </span>
          </h1>
          
          <p className="hero-subtitle animate-fade-up stagger-4">
            We empower businesses across Nagaland and India with cutting-edge web applications, 
            mobile solutions, and digital experiences that drive growth and innovation.
          </p>
          
          <div className="hero-cta animate-fade-up stagger-5">
            <a href="#contact" className="btn btn-primary btn-magnetic">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            <Link to="/projects" className="btn btn-secondary btn-magnetic">
              View Our Work
            </Link>
          </div>
          
          <div className="hero-stats animate-fade-up stagger-6">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-right stagger-3">
          <div className="floating-card card-1 animate-float">
            <div className="card-icon">💻</div>
            <div className="card-text">Web Development</div>
          </div>
          <div className="floating-card card-2 animate-float">
            <div className="card-icon">📱</div>
            <div className="card-text">Mobile Apps</div>
          </div>
          <div className="floating-card card-3 animate-float">
            <div className="card-icon">🎨</div>
            <div className="card-text">UI/UX Design</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: var(--primary-accent);
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: var(--hover-highlight);
          top: 60%;
          right: -10%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: var(--success);
          bottom: 20%;
          left: 50%;
          animation-delay: 4s;
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(65, 146, 203, 0.1);
          border: 1px solid rgba(65, 146, 203, 0.3);
          border-radius: 25px;
          color: var(--primary-accent);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          opacity: 0;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .title-line {
          display: block;
          opacity: 0;
        }

        .typed-text {
          color: var(--primary-accent);
          position: relative;
        }

        .cursor-blink {
          animation: blink 1s infinite;
          color: var(--primary-accent);
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 500px;
          opacity: 0;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          opacity: 0;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-accent);
          font-family: var(--font-primary);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .hero-visual {
          position: relative;
          height: 500px;
          opacity: 0;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          transition: var(--transition-smooth);
        }

        .floating-card:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(255, 255, 255, 0.1);
        }

        .card-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0.5s;
        }

        .card-2 {
          top: 50%;
          right: 20%;
          animation-delay: 1s;
        }

        .card-3 {
          bottom: 20%;
          left: 30%;
          animation-delay: 1.5s;
        }

        .card-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .card-text {
          font-weight: 500;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 100px;
          }

          .hero .container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-stats {
            gap: 1.5rem;
            justify-content: center;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .hero-visual {
            height: 300px;
            order: -1;
          }

          .floating-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
