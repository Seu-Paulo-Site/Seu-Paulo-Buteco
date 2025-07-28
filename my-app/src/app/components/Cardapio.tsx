'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cardapio() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const cards = [
    {
      img: "/cardapio1.jpg",
      verso: "/cardapio2.jpg",
      textoFrente: "COMIDAS E BEBIDAS",
      textoVerso: "SABORES EXCLUSIVOS!",
      link: "./cardapiofinal.pdf",
    },
    {
      img: "/cardapi32.jpg",
      verso: "/cardapi32.jpg",
      textoFrente: "CAIPIRINHAS",
      textoVerso: "SABORES EXCLUSIVOS!",
      link: "./caipirinha.pdf",
    },
  ];

  return (
    <section
      className="bg-white w-full flex flex-col items-center justify-center py-14 px-4"
      id="cardapio"
    >
      <h2
        className="font-[Poppins,sans-serif] text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-red-700 tracking-wide"
        data-aos="fade-up"
      >
        VEJA NOSSO CARDÁPIO!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center justify-center">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="zoom-in">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[90vw] max-w-sm h-[320px] sm:h-[370px] mx-auto flex items-center justify-center perspective group"
              style={{ perspective: 1200 }}
              tabIndex={0}
              aria-label="Ver cardápio"
            >
              <div
                className={`transition-transform duration-700 ease-in-out w-full h-full relative [transform-style:preserve-3d] cursor-pointer group-hover:rotate-y-180`}
              >

                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-white [backface-visibility:hidden] flex items-center justify-center">
                  <img
                    src={card.img}
                    alt="Cardápio Seu Paulo"
                    className="object-cover w-full h-full opacity-90"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl md:text-4xl" style={{ textShadow: '0 2px 8px #000' }}>
                    {card.textoFrente}
                  </span>
                </div>


                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gray-900/80 [backface-visibility:hidden] rotate-y-180 flex items-center justify-center">
                  <img
                    src={card.verso}
                    alt="Verso do Cardápio"
                    className="object-cover w-full h-full opacity-60"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl opacity-80 text-center px-2">
                    {card.textoVerso}
                  </span>
                </div>
              </div>
            </a>

            <p className="mt-3 text-gray-500 text-xs text-center max-w-[240px]">
              (Passe o mouse para ver o verso, clique para abrir o cardápio)
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
