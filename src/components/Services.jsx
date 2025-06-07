
import React from "react";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect.jsx";

const gridItems = [
  {
    areaClass: "grid-area-1",
    icon: <Box className="icon" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
  },
  {
    areaClass: "grid-area-2",
    icon: <Settings className="icon" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
  },
  {
    areaClass: "grid-area-3",
    icon: <Lock className="icon" />,
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional digital experiences",
  },
  {
    areaClass: "grid-area-4",
    icon: <Sparkles className="icon" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions",
  },
  {
    areaClass: "grid-area-5",
    icon: <Search className="icon" />,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation consulting and strategy",
  },
];

const Services = () => {
  return (
    <section className="services section animate-on-scroll" id="services">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>We craft digital solutions that empower businesses and transform ideas into reality</p>
        </div>

        <ul className="grid-container">
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              areaClass={item.areaClass}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

const GridItem = ({ areaClass, icon, title, description }) => {
  return (
    <li className={`grid-item ${areaClass}`}>
      <div className="item-wrapper">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="content-wrapper">
          <div className="content">
            <div className="icon-wrapper">{icon}</div>
            <div className="text-container">
              <h3 className="title">{title}</h3>
              <h2 className="description">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Services;

// Add the CSS styles
const styles = `
  .services {
    position: relative;
    padding: var(--section-padding);
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

  /* Grid Container */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(3, auto);
    }
  }

  @media (min-width: 1280px) {
    .grid-container {
      max-height: 34rem;
      grid-template-rows: repeat(2, 1fr);
    }
  }

  /* Grid Area Assignments */
  @media (min-width: 768px) {
    .grid-area-1 { grid-area: 1 / 1 / 2 / 7; }
    .grid-area-2 { grid-area: 1 / 7 / 2 / 13; }
    .grid-area-3 { grid-area: 2 / 1 / 3 / 7; }
    .grid-area-4 { grid-area: 2 / 7 / 3 / 13; }
    .grid-area-5 { grid-area: 3 / 1 / 4 / 13; }
  }

  @media (min-width: 1280px) {
    .grid-area-1 { grid-area: 1 / 1 / 2 / 5; }
    .grid-area-2 { grid-area: 2 / 1 / 3 / 5; }
    .grid-area-3 { grid-area: 1 / 5 / 3 / 8; }
    .grid-area-4 { grid-area: 1 / 8 / 2 / 13; }
    .grid-area-5 { grid-area: 2 / 8 / 3 / 13; }
  }

  /* Grid Item */
  .grid-item {
    min-height: 14rem;
    list-style: none;
  }

  .item-wrapper {
    position: relative;
    height: 100%;
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    transition: var(--transition-smooth);
  }

  .item-wrapper:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--primary-accent);
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    .item-wrapper {
      border-radius: 1rem;
      padding: 0.5rem;
    }
  }

  .content-wrapper {
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    overflow: hidden;
    border-radius: 0.75rem;
    padding: 1.5rem;
    border: 0.75px solid transparent;
  }

  .content {
    position: relative;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .icon-wrapper {
    width: fit-content;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    transition: var(--transition-smooth);
  }

  .item-wrapper:hover .icon-wrapper {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  .icon {
    height: 1rem;
    width: 1rem;
    color: var(--primary-accent);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .title {
    padding-top: 2px;
    font-family: var(--font-primary);
    font-size: 1.25rem;
    line-height: 1.375rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    color: var(--text-primary);
    margin: 0;
  }

  .description {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 1.5rem;
      line-height: 1.875rem;
    }
    .description {
      font-size: 1rem;
      line-height: 1.375rem;
    }
    .description b,
    .description strong {
      font-weight: 600;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
