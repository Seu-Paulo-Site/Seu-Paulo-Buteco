import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/app/components/Reveal';

/** Nomes conferidos no cardápio da casa. Os preços ficam só no PDF, que é a fonte oficial. */
const DESTAQUES = [
  {
    titulo: 'Entradas',
    texto: 'Bolinho de costela, bolinho de calabresa com queijo, pastel de carne seca e jiló empanado.',
  },
  {
    titulo: 'Porções',
    texto: 'Filé, fritas, linguiça com mandioca, torresmo empanado, moela, carne de panela e coraçãozinho.',
  },
  {
    titulo: 'Conservas',
    texto: 'A sacanagem da casa, pra beliscar enquanto a porção não chega na mesa.',
  },
  {
    titulo: 'Caipirinhas',
    texto: 'Cachaça, frutas da estação e as combinações que só saem aqui.',
  },
];

export default function Destaques() {
  return (
    <section id="destaques" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.82fr_1fr] lg:gap-24">
        <Reveal className="relative">
          {/* Moldura vermelha deslocada — dá profundidade sem pesar na foto. */}
          <div
            aria-hidden="true"
            className="absolute -top-4 -left-4 h-full w-full rounded-2xl border border-brand/45 sm:-top-6 sm:-left-6"
          />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/copo.jpg"
              alt="Chope gelado servido no copo gravado com a logo do Seu Paulo Buteco"
              width={1000}
              height={1250}
              sizes="(min-width: 1024px) 34rem, 92vw"
              className="h-auto w-full"
            />
          </div>
          <p className="eyebrow mt-5 text-cream/40">O copo é nosso · a gelada é sua</p>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-brand-2">
              <span className="h-px w-10 bg-brand-2" aria-hidden="true" />
              O que rola no buteco
            </p>

            <h2 className="display mt-6 text-4xl text-cream sm:text-5xl lg:text-6xl">
              Da primeira gelada
              <br />
              ao último petisco
            </h2>

            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-cream/60 sm:text-base">
              Nada de firula: cozinha de boteco feita na hora, pensada pra dividir no meio da mesa e
              acompanhar a próxima rodada.
            </p>
          </Reveal>

          <ul className="mt-12 border-t border-cream/12">
            {DESTAQUES.map(({ titulo, texto }, i) => (
              <li key={titulo} className="border-b border-cream/12">
                <Reveal delay={i * 80} className="flex gap-6 py-6 sm:gap-8">
                  <span className="mt-1 font-mono text-[11px] tracking-wider text-brand-2 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display text-xl text-cream sm:text-2xl">{titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/55 sm:text-[15px]">
                      {texto}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal>
            <a
              href="#cardapio"
              className="group mt-10 inline-flex items-center gap-3 font-mono text-[12px] tracking-[0.18em] text-cream uppercase transition-colors duration-200 hover:text-brand-2"
            >
              Ver o cardápio completo
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
