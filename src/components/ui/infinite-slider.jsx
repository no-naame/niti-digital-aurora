
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [translation, setTranslation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const size = direction === 'horizontal' ? dimensions.width : dimensions.height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed * 1000; // Convert to milliseconds

    let startTime = null;
    let currentTranslation = translation;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        const newTranslation = from + (to - from) * progress;
        setTranslation(newTranslation);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setTranslation(from);
        setKey(prevKey => prevKey + 1);
        startTime = null;
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (dimensions.width > 0 || dimensions.height > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    key,
    currentSpeed,
    dimensions.width,
    dimensions.height,
    gap,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onMouseEnter: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onMouseLeave: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  const containerStyle = {
    ...(direction === 'horizontal'
      ? { transform: `translateX(${translation}px)` }
      : { transform: `translateY(${translation}px)` }),
    gap: `${gap}px`,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    transition: isTransitioning ? 'transform 0.3s ease' : 'none',
  };

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className='flex w-max'
        style={containerStyle}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
