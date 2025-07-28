'use client';

import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cardapio() {
  const [flipped, setFlipped] = useState(false);

  const cardapioLink = "https://seusite.com.br/cardapio.pdf";

  return (
    <section className="bg-white w-full flex flex-col items-center justify-center py-10 relative"
    id='cardapio'
    >
      <h2
        className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-red-700 tracking-wide"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        data-aos="fade-up"
      >
        VEJA NOSSO CARDÁPIO!
      </h2>

      <div className="absolute left-4 top-24 w-10 h-10 border-l-2 border-t-2 border-gray-700 rounded-tl-lg pointer-events-none" />
      <div className="absolute right-4 top-24 w-10 h-10 border-r-2 border-t-2 border-gray-700 rounded-tr-lg pointer-events-none" />
      <div className="absolute left-4 bottom-8 w-10 h-10 border-l-2 border-b-2 border-gray-700 rounded-bl-lg pointer-events-none" />
      <div className="absolute right-4 bottom-8 w-10 h-10 border-r-2 border-b-2 border-gray-700 rounded-br-lg pointer-events-none" />

      <a
        href={cardapioLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[90vw] max-w-xl h-[320px] sm:h-[370px] mx-auto flex items-center justify-center perspective group"
        style={{ perspective: 1200 }}
        data-aos="zoom-in"
        tabIndex={0}
        aria-label="Ver cardápio"
      >
        <div
          className={`transition-transform duration-700 ease-in-out w-full h-full relative [transform-style:preserve-3d] cursor-pointer
            group-hover:rotate-y-180
          `}
        >

          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-white [backface-visibility:hidden] flex items-center justify-center">
            <img
              src="/cardapio1.jpg"
              alt="Cardápio Seu Paulo"
              className="object-cover w-full h-full opacity-90"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl md:text-4xl" style={{ textShadow: '0 2px 8px #000' }}>
              VER CARDÁPIO &gt;
            </span>
          </div>

          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gray-900/80 [backface-visibility:hidden] rotate-y-180 flex items-center justify-center">
            <img
              src="/cardapio2.jpg"
              alt="Cardápio Verso"
              className="object-cover w-full h-full opacity-60"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl opacity-80">
              NOVOS PRATOS EM BREVE!
            </span>
          </div>
        </div>
      </a>
      <p className="mt-4 text-gray-400 text-xs text-center">(Passe o mouse para ver o verso, clique para abrir o cardápio)</p>
    </section>
  );
}