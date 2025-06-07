
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="contact section animate-on-scroll" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info animate-on-scroll stagger-1">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Ready to transform your ideas into digital reality? We're here to help you 
              navigate the digital landscape and create solutions that drive growth.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Our Location</h4>
                  <p>Dimapur, Nagaland, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@nititechnologies.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container animate-on-scroll stagger-2">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3>Start Your Project</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <label>Your Name</label>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <label>Email Address</label>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder=" "
                />
                <label>Company (Optional)</label>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder=" "
                ></textarea>
                <label>Project Details</label>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-magnetic"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-map animate-on-scroll stagger-3">
          <div className="map-container glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.4167887446487!2d93.7368!3d25.9044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzE2LjAiTiA5M8KwNDQnMTIuNSJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NITI Technologies Location"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          position: relative;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .contact-info h2 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-size: 2.5rem;
          line-height: 1.2;
        }

        .contact-info > p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .contact-details {
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-accent), var(--hover-highlight));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .contact-item h4 {
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          font-size: 1.1rem;
        }

        .contact-item p {
          color: var(--text-secondary);
          margin: 0;
        }

        .contact-social h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-smooth);
          font-size: 0.9rem;
        }

        .social-link:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          color: white;
          transform: translateY(-2px);
        }

        .contact-form h3 {
          color: var(--text-primary);
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-group {
          position: relative;
          margin-bottom: 2rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: var(--transition-smooth);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-accent);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group label {
          position: absolute;
          top: 1rem;
          left: 1rem;
          color: var(--text-secondary);
          font-size: 1rem;
          transition: var(--transition-smooth);
          pointer-events: none;
          background: var(--background);
          padding: 0 0.5rem;
        }

        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label,
        .form-group textarea:not(:placeholder-shown) + label {
          top: -0.5rem;
          left: 0.5rem;
          font-size: 0.8rem;
          color: var(--primary-accent);
        }

        .contact-form button {
          width: 100%;
          justify-content: center;
        }

        .contact-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-map {
          margin-top: 2rem;
        }

        .map-container {
          padding: 1.5rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info h2 {
            font-size: 2rem;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
