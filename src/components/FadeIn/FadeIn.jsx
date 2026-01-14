import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({
  children,
  duration = 0.8,
  delay = 0,
  ease = 'power2.out',
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, {
      opacity: 0,
      y: 30
    });

    // Create animation
    const tl = gsap.to(el, {
      duration: duration,
      delay: delay,
      ease: ease,
      opacity: 1,
      y: 0,
      paused: true
    });

    // Trigger on scroll
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse()
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [duration, delay, ease]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  );
};

export default FadeIn;
