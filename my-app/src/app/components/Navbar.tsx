'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const itensNav = [
    { nome: 'HOME', link: '#home' },
    { nome: 'HISTÓRIA', link: '#historia' },
    { nome: 'DIAS E HORÁRIOS', link: '#diasehorarios' },
    { nome: 'CARDÁPIO', link: '#cardapio' },
    { nome: 'CONTATO', link: '#contato' },
  ];

  const [text] = useTypewriter({
    words: ['"Dinheiro não compra felicidade, mas compra cerveja, que é quase a mesma coisa!"'],
    delaySpeed: 2000,
    typeSpeed: 35,
  });

  return (
    <div
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden"
      id="home"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/Banner.png')",
        }}
      ></div>

      <nav className="mx-auto mt-8 w-[88%] h-21 flex items-center justify-center bg-white bg-opacity-90 shadow-md rounded-xl z-50 relative">
        <div className="flex justify-between items-center w-full px-4 py-3 md:px-10">
          <img
            src="/seuButeco-img.png"
            alt="Logo do Seu Paulo Boteco"
            className="h-15 w-auto"
          />

          <button
            className="md:hidden text-red-800"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="xl:text-[20px] xl:gap-20 md:text-[7px] hidden md:flex md:gap-4 gap-8 text-[12px] md:text-[14px] text-black font-semibold">
            {itensNav.map((item, key) => (
              <li key={key}>
                <a
                  href={item.link}
                  className="font-[Poppins,sans-serif] text-black hover:text-red-800"
                >
                  {item.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>


      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-md flex flex-col animate-slide-fade">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-100 transition"
          >
          </button>

          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {itensNav.map((item, key) => (
              <a
                key={key}
                href={item.link}
                className="text-red-800 font-bold text-xl hover:underline transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.nome}
              </a>
            ))}
          </div>
        </div>
      )}

      

      <div className="flex-grow flex items-center justify-center text-center px-6 z-10">
        <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug max-w-4xl">
          {text}
          <Cursor cursorStyle="|" />
        </h1>
      </div>

      <div className="flex justify-center mt-6 z-10">
        <a
          href="#historia"
          className="flex flex-col items-center text-white transition-colors"
        >
          <span className="text-lg font-semibold tracking-wide">Conheça mais</span>
          <svg
            className="w-6 h-6 mt-1 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="w-full z-10">
        <img
          src="/brush-dec1.png"
          alt="Brush decorativo"
          className="w-full mb-[-6px] object-contain"
        />
      </div>
    </div>
  );
}
