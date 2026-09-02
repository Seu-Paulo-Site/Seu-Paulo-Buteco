import Image from 'next/image';
import { ArrowUpRight, FileText } from 'lucide-react';
import Reveal from '@/app/components/Reveal';
import SecaoCreme from '@/app/components/SecaoCreme';
import { CARDAPIOS } from '@/app/lib/bar';

export default function Cardapio() {
  return (
    <SecaoCreme id="cardapio" className="px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow text-brand">Cardápio</p>
          <h2 className="display mt-5 text-4xl text-ink sm:text-5xl lg:text-6xl">
            O que tem pra hoje
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-[15px] leading-relaxed text-ink-4 sm:text-base">
            Dois cardápios, uma missão: encher a mesa. Toque para abrir a versão completa, com todos
            os itens e preços.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:mt-16 md:grid-cols-2">
          {CARDAPIOS.map((card, i) => (
            <Reveal key={card.arquivo} delay={i * 110}>
              <a
                href={card.arquivo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o cardápio de ${card.titulo} em PDF (abre em nova aba)`}
                className="group block h-full overflow-hidden rounded-2xl bg-ink shadow-[0_28px_60px_-32px_rgba(18,16,16,0.7)] transition-shadow duration-300 hover:shadow-[0_36px_80px_-30px_rgba(18,16,16,0.85)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.imagem}
                    alt={`Cardápio de ${card.titulo} do Seu Paulo Buteco`}
                    fill
                    sizes="(min-width: 768px) 32rem, 92vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                  />
                  <span className="eyebrow absolute top-5 left-5 rounded-full bg-ink/70 px-3.5 py-2 text-cream backdrop-blur-sm">
                    {card.categoria}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-5 p-7 sm:p-8">
                  <div className="min-w-0">
                    <h3 className="display text-2xl text-cream sm:text-3xl">{card.titulo}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-cream/55">{card.resumo}</p>
                    <p className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-cream/45 uppercase">
                      <FileText size={13} aria-hidden="true" />
                      Abrir em PDF
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-300 group-hover:border-brand-2 group-hover:bg-brand"
                  >
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </SecaoCreme>
  );
}
