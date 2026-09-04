'use client';

import Reveal from '@/app/components/Reveal';
import StatusBadge, { useStatus } from '@/app/components/StatusBadge';
import { DIAS, ORDEM_SEMANA, faixaDoDia } from '@/app/lib/bar';

export default function Horarios() {
  const status = useStatus();

  return (
    <section id="horarios" className="relative bg-ink-2 px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow text-brand-2">Dias &amp; Horários</p>
          <h2 className="display mt-5 text-4xl text-cream sm:text-5xl lg:text-6xl">
            Quando a casa abre
          </h2>
          <StatusBadge className="mt-8" />
        </Reveal>

        <Reveal delay={120}>
          {/* grid-flow-col + 4 linhas: a coluna da esquerda vai de segunda a quinta
              e a da direita de sexta a domingo, em vez de zigue-zaguear. */}
          <ul className="mt-14 grid gap-x-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
            {ORDEM_SEMANA.map((i) => {
              const d = DIAS[i];
              const fechado = d.janela === null;
              const hoje = status?.hoje === i;

              return (
                <li
                  key={d.dia}
                  className={`flex items-baseline justify-between gap-4 border-b py-4 ${
                    hoje ? 'border-brand-2/50' : 'border-cream/10'
                  }`}
                >
                  <span
                    className={`flex min-w-0 items-center gap-2.5 text-[15px] ${
                      hoje ? 'text-cream' : fechado ? 'text-cream/35' : 'text-cream/80'
                    }`}
                  >
                    <span className="truncate">{d.dia}</span>
                    {hoje && (
                      <span className="eyebrow shrink-0 rounded-full bg-brand px-2 py-1 text-[9px] text-cream">
                        Hoje
                      </span>
                    )}
                  </span>

                  <span
                    className={`shrink-0 font-mono text-[13px] tabular-nums ${
                      fechado ? 'text-cream/30' : hoje ? 'text-brand-2' : 'text-cream/70'
                    }`}
                  >
                    {faixaDoDia(i)}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 text-center font-mono text-[11px] leading-relaxed tracking-wider text-cream/35">
            Horário de Brasília · em feriados, confirme pelo WhatsApp
          </p>
        </Reveal>
      </div>
    </section>
  );
}
