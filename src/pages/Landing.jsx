
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

const Landing = () => {
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
  }, []);

  return (
    <div className="landing-page">
      {/* Page Sections */}
      <Hero />
      <ClientLogos />
      <Services />
      <FeaturedProjects />
      <Contact />

      <style jsx>{`
        .landing-page {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Landing;
