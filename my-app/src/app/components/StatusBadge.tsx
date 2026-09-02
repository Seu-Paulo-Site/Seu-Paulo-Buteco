'use client';

import { useEffect, useState } from 'react';
import { statusAgora, type Status } from '@/app/lib/bar';

/**
 * "Aberto agora" / "Fechado" em tempo real, no fuso de Betim.
 * Fica nulo no servidor e no primeiro render para não divergir na hidratação,
 * e se atualiza sozinho a cada minuto.
 */
export function useStatus(): Status | null {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const atualizar = () => setStatus(statusAgora());
    atualizar();
    const id = setInterval(atualizar, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}

export default function StatusBadge({ className = '' }: { className?: string }) {
  const status = useStatus();

  return (
    <p
      aria-live="polite"
      className={`inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-ink/60 px-4 py-2 backdrop-blur-sm ${className}`}
    >
      {status ? (
        <>
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            {status.aberto && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            )}
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                status.aberto ? 'bg-emerald-400' : 'bg-brand-2'
              }`}
            />
          </span>
          <span className="eyebrow text-cream">{status.rotulo}</span>
          <span className="font-mono text-[11px] tracking-wider text-cream/60">
            {status.detalhe}
          </span>
        </>
      ) : (
        <>
          <span className="h-2 w-2 shrink-0 rounded-full bg-cream/25" aria-hidden="true" />
          <span className="eyebrow text-cream/50">Conferindo horário…</span>
        </>
      )}
    </p>
  );
}
