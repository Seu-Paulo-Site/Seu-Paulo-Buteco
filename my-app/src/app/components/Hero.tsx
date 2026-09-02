'use client';

import Image from 'next/image';
import { ArrowDown, MapPin, UtensilsCrossed } from 'lucide-react';
import StatusBadge from '@/app/components/StatusBadge';
import { BAR } from '@/app/lib/bar';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8"
    >
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        quality={82}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Três camadas: vinheta geral, um borrão escuro atrás do texto (senão a
          logo gravada no copo briga com a logo do título) e a emenda com a faixa. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_35%,rgba(18,16,16,0.40),rgba(18,16,16,0.92))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(58%_44%_at_50%_46%,rgba(18,16,16,0.78),rgba(18,16,16,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-transparent to-ink"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <p className="eyebrow text-cream/55">
          Betim <span className="text-brand-2">·</span> Minas Gerais{' '}
          <span className="text-brand-2">·</span> 2 unidades
        </p>

        <h1 className="mt-7 w-full">
          <Image
            src="/logo-light.png"
            alt={BAR.nome}
            width={1100}
            height={516}
            priority
            className="mx-auto h-auto w-[min(100%,30rem)] drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          />
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg">
          Um mineiro e dois paulistas, comida boa, cerveja gelada e muita resenha.
          <span className="mt-1 block text-cream/55">
            O melhor de Minas com o tempero de São Paulo.
          </span>
        </p>

        <StatusBadge className="mt-8" />

        <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#cardapio"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-cream transition-colors duration-200 hover:bg-brand-2"
          >
            <UtensilsCrossed size={15} aria-hidden="true" />
            Ver Cardápio
          </a>
          <a
            href={BAR.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/25 px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-cream/85 backdrop-blur-sm transition-colors duration-200 hover:border-cream/60 hover:text-cream"
          >
            <MapPin size={15} aria-hidden="true" />
            Como Chegar
          </a>
        </div>
      </div>

      <a
        href="#historia"
        className="relative z-10 mt-14 flex flex-col items-center gap-2 text-cream/45 transition-colors duration-200 hover:text-cream"
      >
        <span className="eyebrow">Conheça a casa</span>
        <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
