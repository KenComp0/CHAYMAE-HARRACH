import { useEffect, useRef, useState } from "react";

export function useIntersectionReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after revealing if you want it to only animate once
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it enters full view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
