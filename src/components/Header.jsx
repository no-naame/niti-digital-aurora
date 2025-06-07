
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import styles from "./Header.module.css";

// Helper function to combine class names conditionally
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// --- Reusable Button Component ---
const NavbarButton = ({
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  return (
    <Tag className={cn(styles.navbarButton, variantClasses[variant], className)} {...props}>
      {children}
    </Tag>
  );
};

// --- Logo Component ---
const NavbarLogo = () => (
  <a href="#" className={styles.navbarLogo}>
    <span className={styles.logoText}>NITI</span>
    <span className={styles.logoSubtitle}>Technologies</span>
  </a>
);

// --- Main Header Component ---
export default function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  
  // Use Framer Motion to detect scroll position
  const { scrollY } = useScroll({
    target: navbarRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.div ref={navbarRef} className={styles.navbarContainer}>
      {/* Desktop Navigation */}
      <motion.div
        className={cn(styles.navBody, isScrolled && styles.navBodyScrolled)}
        animate={{
          backdropFilter: isScrolled ? "blur(10px)" : "blur(10px)",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.3)"
            : "none",
          width: isScrolled ? "60%" : "100%",
          y: isScrolled ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
      >
        <NavbarLogo />
        <NavItemsDesktop items={navItems} />
        <div className={styles.desktopButtons}>
          <NavbarButton variant="secondary">Get Quote</NavbarButton>
          <NavbarButton variant="primary">Start Project</NavbarButton>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn(styles.mobileNav, isScrolled && styles.mobileNavScrolled)}
        animate={{
          backdropFilter: isScrolled ? "blur(10px)" : "blur(10px)",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.3)"
            : "none",
          width: isScrolled ? "90%" : "100%",
          paddingRight: isScrolled ? "12px" : "0px",
          paddingLeft: isScrolled ? "12px" : "0px",
          borderRadius: isScrolled ? "4px" : "2rem",
          y: isScrolled ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
      >
        <div className={styles.mobileNavHeader}>
          <NavbarLogo />
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <IconX className={styles.menuIcon} /> : <IconMenu2 className={styles.menuIcon} />}
          </div>
        </div>
        <NavMenuMobile isOpen={isMobileMenuOpen} items={navItems} onClose={closeMobileMenu} />
      </motion.div>
    </motion.div>
  );
}

// --- Desktop Navigation Items ---
const NavItemsDesktop = ({ items }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={styles.navItems}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          className={styles.navLink}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={styles.hoveredBackground}
            />
          )}
          <span className={styles.navLinkText}>{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// --- Mobile Navigation Menu ---
const NavMenuMobile = ({ isOpen, items, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.mobileMenu}
      >
        {items.map((item, idx) => (
          <a
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={onClose}
            className={styles.mobileNavLink}
          >
            {item.name}
          </a>
        ))}
        <div className={styles.mobileMenuButtons}>
          <NavbarButton onClick={onClose} variant="secondary" className={styles.fullWidth}>
            Get Quote
          </NavbarButton>
          <NavbarButton onClick={onClose} variant="primary" className={styles.fullWidth}>
            Start Project
          </NavbarButton>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
