
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-text">NITI</span>
            <span className="logo-subtitle">Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.path.startsWith('#') ? (
                  <a 
                    href={item.path}
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.path.startsWith('#') ? (
                <a 
                  href={item.path}
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: var(--transition-smooth);
          background: rgba(15, 26, 34, 0.8);
          backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          background: rgba(15, 26, 34, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-text {
          font-family: var(--font-primary);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-accent);
        }

        .logo-subtitle {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: -2px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          transition: var(--transition-smooth);
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-accent);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-accent);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          margin: 3px 0;
          transition: 0.3s;
          transform-origin: center;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(15, 26, 34, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .mobile-menu.active {
          transform: translateY(0);
        }

        .mobile-menu-content {
          text-align: center;
        }

        .mobile-nav-link {
          display: block;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 2rem;
          font-weight: 600;
          margin: 1rem 0;
          transition: var(--transition-smooth);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .mobile-menu.active .mobile-nav-link:nth-child(1) { animation-delay: 0.1s; }
        .mobile-menu.active .mobile-nav-link:nth-child(2) { animation-delay: 0.2s; }
        .mobile-menu.active .mobile-nav-link:nth-child(3) { animation-delay: 0.3s; }
        .mobile-menu.active .mobile-nav-link:nth-child(4) { animation-delay: 0.4s; }

        .mobile-nav-link:hover {
          color: var(--primary-accent);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
