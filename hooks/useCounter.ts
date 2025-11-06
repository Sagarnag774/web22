
import { useState, useEffect, useRef } from 'react';

const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const start = 0;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * (end - start) + start);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startTime = null;
        animationFrameId = requestAnimationFrame(animate);
        if (observer.current && ref.current) {
          observer.current.unobserve(ref.current);
        }
      }
    };
    
    observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.7 });

    if (ref.current) {
        observer.current.observe(ref.current);
    }
    
    return () => {
        cancelAnimationFrame(animationFrameId);
        if (observer.current && ref.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.current.unobserve(ref.current);
        }
    };
  }, [end, duration]);

  return { count, ref };
};

export default useCounter;
