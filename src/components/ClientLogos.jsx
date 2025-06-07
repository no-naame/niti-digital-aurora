
import { InfiniteSlider } from './ui/infinite-slider';

const ClientLogos = () => {
  const clients = [
    { name: 'Government of Nagaland' },
    { name: 'NBSE' },
    { name: 'Hornbill Festival' },
    { name: 'Nagaland Tourism' },
    { name: 'Baptist Church' },
    { name: 'Dimapur Smart City' },
    { name: 'Nagaland Police' },
    { name: 'Health Department' }
  ];

  return (
    <section className="client-logos section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Leading Organizations</h2>
          <p>We've had the privilege of working with prestigious clients across Nagaland</p>
        </div>
        
        <InfiniteSlider 
          gap={24} 
          speed={50} 
          speedOnHover={20}
          className="my-8"
        >
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <span className="logo-name">{client.name}</span>
            </div>
          ))}
        </InfiniteSlider>
      </div>

      <style jsx>{`
        .client-logos {
          background: var(--section-bg);
          position: relative;
          overflow: hidden;
        }

        .client-logos::before {
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
          margin-bottom: 3rem;
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

        .client-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 200px;
          height: 120px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: var(--transition-smooth);
          cursor: pointer;
          padding: 1rem;
        }

        .client-logo:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
          border-color: var(--primary-accent);
        }

        .logo-name {
          font-size: 1rem;
          color: var(--text-secondary);
          text-align: center;
          font-weight: 600;
          white-space: normal;
          line-height: 1.3;
        }

        .client-logo:hover .logo-name {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .client-logo {
            min-width: 150px;
            height: 100px;
            padding: 0.8rem;
          }

          .logo-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
