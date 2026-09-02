'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Atraso em ms para escalonar itens de uma mesma fileira. */
  delay?: number;
};

/**
 * Revela o bloco quando ele entra na tela. Substitui o AOS: sem CSS externo,
 * sem re-observar depois de aparecer e desligado em prefers-reduced-motion
 * (a regra vive no globals.css, então o conteúdo nunca fica invisível).
 */
export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const no = ref.current;
    if (!no) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    );

    observador.observe(no);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visivel ? 'reveal-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
