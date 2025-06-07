import React, { memo, useCallback, useEffect, useRef } from "react";
import { animate } from "framer-motion";

// Helper function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }) => {
    const containerRef = useRef(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(0);

    const handleMove = useCallback(
      (e) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
          
          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, { passive: true });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    // Inject CSS styles
    React.useEffect(() => {
      if (typeof document === 'undefined') return;
      
      const styleId = 'glowing-effect-styles';
      if (document.getElementById(styleId)) return;
      
      const styles = `
        .static-border {
          pointer-events: none;
          position: absolute;
          inset: -1px;
          display: none;
          border-radius: inherit;
          border-width: 1px;
          border-style: solid;
          border-color: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .static-border-disabled {
          display: block !important;
        }
        .border-white {
          border-color: white;
        }
        .effect-container {
          pointer-events: none;
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
        .effect-container-disabled {
          display: none !important;
        }
        .opacity-100 {
          opacity: 1;
        }
        .blur-effect {
          filter: blur(var(--blur));
        }
        .glow {
          border-radius: inherit;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .glow::after {
          content: "";
          position: absolute;
          inset: calc(-1 * var(--glowingeffect-border-width));
          border-radius: inherit;
          border: var(--glowingeffect-border-width) solid transparent;
          background: var(--gradient);
          background-attachment: fixed;
          opacity: var(--active);
          transition: opacity 0.3s ease-in-out;
          mask-clip: padding-box, border-box;
          -webkit-mask-clip: padding-box, border-box;
          mask-composite: intersect;
          -webkit-mask-composite: source-in;
          mask-image: linear-gradient(transparent, transparent),
            conic-gradient(
              from calc((var(--start) - var(--spread)) * 1deg),
              transparent 0deg,
              white,
              transparent calc(var(--spread) * 2deg)
            );
          -webkit-mask-image: linear-gradient(transparent, transparent),
            conic-gradient(
              from calc((var(--start) - var(--spread)) * 1deg),
              transparent 0deg,
              white,
              transparent calc(var(--spread) * 2deg)
            );
        }
      `;
      
      const styleSheet = document.createElement("style");
      styleSheet.id = styleId;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }, []);

    return (
      <>
        {/* Fallback static border */}
        <div
          className={cn(
            "static-border",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "static-border-disabled"
          )}
        />
        
        {/* Main glowing effect container */}
        <div
          ref={containerRef}
          style={{
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--gradient":
              variant === "white"
                ? `repeating-conic-gradient(from 236.84deg at 50% 50%, #000, #000 calc(25% / 5))`
                : `radial-gradient(circle, #4192CB 10%, #4192CB00 20%),
                   radial-gradient(circle at 40% 40%, #5BB6F0 5%, #5BB6F000 15%),
                   radial-gradient(circle at 60% 60%, #3FBF7F 10%, #3FBF7F00 20%), 
                   radial-gradient(circle at 40% 60%, #E9A13E 10%, #E9A13E00 20%),
                   repeating-conic-gradient(from 236.84deg at 50% 50%, #4192CB 0%, #5BB6F0 calc(25% / 5), #3FBF7F calc(50% / 5), #E9A13E calc(75% / 5), #4192CB calc(100% / 5))`,
          }}
          className={cn(
            "effect-container",
            glow && "opacity-100",
            blur > 0 && "blur-effect",
            className,
            disabled && "effect-container-disabled"
          )}
        >
          <div className="glow" />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
