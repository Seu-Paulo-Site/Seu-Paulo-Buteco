'use client';

import { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { BAR } from '@/app/lib/bar';

function IconeWhatsApp({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.4 4.9L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.4 0-2.8-.4-4-1.1l-.3-.2-3.1.9.9-3-.2-.3C4.4 14.8 4 13.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
      <path d="M16.7 13.3c-.3-.2-1.7-.8-2-.9s-.5-.2-.7.2-.8.9-1 .9-.5 0-.9-.4-1.3-1.5-1.3-1.7.2-.4.4-.6.2-.3 0-.6-.8-2-1-2.4-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.4 1.5 3.7 2.6 3.9 6.3 4.3c.9.1 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.9.3-1.6.2-1.7 0-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

/** Atalhos flutuantes. Só aparecem depois que a capa sai da tela. */
export default function FloatingActions() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.6);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <div
      className={`fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 transition-opacity duration-300 sm:right-7 sm:bottom-7 ${
        visivel ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{
        paddingRight: 'env(safe-area-inset-right)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <a
        href={BAR.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o Instagram do Seu Paulo Buteco"
        tabIndex={visivel ? 0 : -1}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-ink-2/90 text-cream/80 shadow-lg backdrop-blur-sm transition-colors duration-200 hover:border-cream/40 hover:text-cream"
      >
        <Instagram size={20} aria-hidden="true" />
      </a>

      <a
        href={BAR.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar o Seu Paulo Buteco no WhatsApp"
        tabIndex={visivel ? 0 : -1}
        className="group flex h-14 items-center gap-3 rounded-full bg-[#1faa53] pr-5 pl-4 text-white shadow-[0_14px_34px_-12px_rgba(31,170,83,0.75)] transition-colors duration-200 hover:bg-[#178f44]"
      >
        <IconeWhatsApp />
        <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Zap</span>
      </a>
    </div>
  );
}
