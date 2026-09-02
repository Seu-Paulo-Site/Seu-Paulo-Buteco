import type { ReactNode } from 'react';
import Brush from '@/app/components/Brush';

/**
 * Seção de "papel": fundo creme, textura de copos e as bordas rasgadas
 * de pincel que costuram o creme às seções escuras de cima e de baixo.
 */
export default function SecaoCreme({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative bg-cream text-ink ${className}`}>
      {/* A arte é uma cunha: sólida embaixo, esfarrapada em cima. Na borda de
          cima ela entra como está; na de baixo, espelhada. */}
      <Brush className="absolute inset-x-0 top-0 z-10 -translate-y-[99%] text-cream" />
      <div aria-hidden="true" className="paper-texture pointer-events-none absolute inset-0" />
      <div className="relative z-10">{children}</div>
      <Brush className="absolute inset-x-0 bottom-0 z-10 translate-y-[99%] text-cream" flip />
    </section>
  );
}
