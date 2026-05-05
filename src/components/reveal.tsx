import React from 'react';
import { useInView } from '../hooks/use-animations';

type RevealDirection = 'up' | 'left' | 'right' | 'scale';

const dirClass: Record<RevealDirection, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export function Reveal({
  children, className = '', delay = 0, direction = 'up', ...rest
}: React.HTMLAttributes<HTMLDivElement> & { delay?: number; direction?: RevealDirection }) {
  const { ref, inView } = useInView(0.1);
  const base = dirClass[direction];
  return (
    <div ref={ref} className={`${base} ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }} {...rest}>
      {children}
    </div>
  );
}
