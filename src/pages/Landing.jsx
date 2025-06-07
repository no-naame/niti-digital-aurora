
import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

const Landing = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + 'px';
        cursorRef.current.style.top = e.clientY - 10 + 'px';
      }
      
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = e.clientX - 20 + 'px';
            followerRef.current.style.top = e.clientY - 20 + 'px';
          }
        }, 100);
      }
    };

    const handleMouseEnter = (e) => {
      if (e.target && typeof e.target.closest === 'function' && e.target.closest('.btn, .nav-link, .social-link, a')) {
        if (cursorRef.current) cursorRef.current.style.transform = 'scale(1.5)';
        if (followerRef.current) followerRef.current.style.transform = 'scale(1.2)';
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target && typeof e.target.closest === 'function' && e.target.closest('.btn, .nav-link, .social-link, a')) {
        if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)';
        if (followerRef.current) followerRef.current.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

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
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>

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

        @media (max-width: 768px) {
          .cursor,
          .cursor-follower {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
