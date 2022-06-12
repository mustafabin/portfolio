import { useState, useEffect } from "react";

export const TrackRef = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(element.current);
        }
      },
      {
        rootMargin,
      }
    );
    //idk why but React warned about not having the line under me
    let current = element.current;
    current && observer.observe(current);
    // apparently The ref value 'element.current' will likely have changed by the time this effect cleanup function runs
    // so to avoid this warning i moved the ref into a var
    return () => {
      observer.unobserve(current);
    };
  }, [element, rootMargin]);

  return isVisible;
};
