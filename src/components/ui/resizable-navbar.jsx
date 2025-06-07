
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {children.map((child, index) => 
        child && typeof child === 'object' && child.type ? 
          { ...child, props: { ...child.props, visible } } : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  const navStyle = {
    backdropFilter: visible ? "blur(10px)" : "none",
    boxShadow: visible
      ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
      : "none",
    width: visible ? "60%" : "100%",
    transform: visible ? "translateY(20px)" : "translateY(0)",
    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    minWidth: "800px",
  };

  return (
    <div
      style={navStyle}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          href={item.link}
        >
          {hovered === idx && (
            <div
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              style={{
                transition: "all 0.3s ease"
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  const mobileNavStyle = {
    backdropFilter: visible ? "blur(10px)" : "none",
    boxShadow: visible
      ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
      : "none",
    width: visible ? "90%" : "100%",
    paddingRight: visible ? "12px" : "0px",
    paddingLeft: visible ? "12px" : "0px",
    borderRadius: visible ? "4px" : "2rem",
    transform: visible ? "translateY(20px)" : "translateY(0)",
    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };

  return (
    <div
      style={mobileNavStyle}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  const menuStyle = {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-10px)",
    transition: "all 0.3s ease",
    display: isOpen ? "flex" : "none"
  };

  return (
    <div
      style={menuStyle}
      className={cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <X className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  ) : (
    <Menu className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <span className="logo-text text-xl font-bold text-var(--primary-accent)">NITI</span>
      <span className="logo-subtitle text-sm text-gray-600">Technologies</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
