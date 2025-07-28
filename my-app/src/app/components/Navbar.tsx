'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const itensNav = [
    { nome: 'HOME', link: '#home' },
    { nome: 'HISTÓRIAS', link: '#historias' },
    { nome: 'DIAS E HORÁRIOS', link: '#diasehorarios' },
    { nome: 'CARDÁPIO', link: '#cardapio' },
    { nome: 'CONTATO', link: '#contato' },
  ];

  return (
    <div
      className="h-screen  bg-no-repeat bg-center bg-cover flex flex-col justify-between relative"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <nav className="xl:ml-55 mt-4 mx-4 md:mx-24 xl:h-23 flex justify-center w-auto md:w-[80%] h-auto bg-white bg-opacity-90 shadow-md rounded-md z-50 relative">
        <div className="  flex justify-between items-center w-full px-4 py-3 md:px-10">
          <img
            src="/seuButeco-img.png"
            alt="Logo do Seu Paulo Boteco"
            className="xl:h-19 h-10 w-auto"
          />

          {/* Botão de menu mobile */}
          <button
            className="md:hidden text-red-800"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>

          {/* Menu Desktop */}
          <ul className="xl:text-[20px] xl:gap-20  hidden md:flex md:gap-4 gap-8 text-[12px] md:text-[14px] text-black font-semibold">
            {itensNav.map((item, key) => (
              <li key={key}>
                <a href={item.link} className="text-red-800 hover:underline">
                  {item.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MENU MOBILE FLUTUANTE */}
      {/* MENU MOBILE COM ALINHAMENTO CORRETO */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-md flex flex-col animate-slide-fade">
          {/* Botão fechar no topo direito */}
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
              <X size={32} className="text-red-800" />
            </button>
          </div>

          {/* Itens do menu centralizados */}
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

      {/* Brush decorativo */}
      <div className="xl:h-17 lg:h-17 sm-h-20 w-full h-7 flex justify-center mt-8 z-10 mb-0">
        <img
          src="/brush-dec1.png"
          alt="Brush decorativo"
          className="w-full lg:h-18"
        />
      </div>
    </div>
  );
}
