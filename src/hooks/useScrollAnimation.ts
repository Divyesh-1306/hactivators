import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const children = el.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right, .scale-in, .stagger-children');
    children.forEach((child) => observer.observe(child));

    if (el.classList.contains('fade-up') || el.classList.contains('fade-in') || el.classList.contains('scale-in')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
