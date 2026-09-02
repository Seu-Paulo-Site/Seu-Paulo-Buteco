'use client';

import Reveal from '@/app/components/Reveal';
import StatusBadge, { useStatus } from '@/app/components/StatusBadge';
import { DIAS, ORDEM_SEMANA, faixasDoDia } from '@/app/lib/bar';

export default function Horarios() {
  const status = useStatus();

  return (
    <section id="horarios" className="relative bg-ink-2 px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow text-brand-2">Dias &amp; Horários</p>
          <h2 className="display mt-5 text-4xl text-cream sm:text-5xl lg:text-6xl">
            Quando a casa abre
          </h2>
          <StatusBadge className="mt-8" />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="eyebrow pb-3 font-normal text-cream/35">Dia</th>
                  <th className="eyebrow pb-3 text-right font-normal text-cream/35">Almoço</th>
                  <th className="eyebrow pb-3 text-right font-normal text-cream/35">
                    Tarde &amp; noite
                  </th>
                </tr>
              </thead>
              <tbody>
                {ORDEM_SEMANA.map((i) => {
                  const d = DIAS[i];
                  const { almoco, noite } = faixasDoDia(i);
                  const hoje = status?.hoje === i;

                  return (
                    <tr
                      key={d.dia}
                      className={`border-t ${hoje ? 'border-brand-2/50' : 'border-cream/10'}`}
                    >
                      <td className="py-4 pr-4">
                        <span
                          className={`flex items-center gap-2.5 text-[15px] ${
                            hoje ? 'text-cream' : 'text-cream/80'
                          }`}
                        >
                          <span className="truncate">{d.dia}</span>
                          {hoje && (
                            <span className="eyebrow shrink-0 rounded-full bg-brand px-2 py-1 text-[9px] text-cream">
                              Hoje
                            </span>
                          )}
                        </span>
                      </td>

                      <td
                        className={`py-4 pr-4 text-right font-mono text-[13px] tabular-nums whitespace-nowrap ${
                          d.almoco === null
                            ? 'text-cream/25'
                            : hoje
                              ? 'text-brand-2'
                              : 'text-cream/70'
                        }`}
                      >
                        {almoco}
                      </td>

                      <td
                        className={`py-4 text-right font-mono text-[13px] tabular-nums whitespace-nowrap ${
                          d.noite === null
                            ? 'text-cream/25'
                            : hoje
                              ? 'text-brand-2'
                              : 'text-cream/70'
                        }`}
                      >
                        {noite}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 text-center font-mono text-[11px] leading-relaxed tracking-wider text-cream/35">
            Segunda e terça a casa abre só no almoço · Horário de Brasília
            <br />
            Em feriados, confirme pelo WhatsApp
          </p>
        </Reveal>
      </div>
    </section>
  );
}
