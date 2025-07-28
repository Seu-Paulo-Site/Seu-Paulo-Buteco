'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const itensNav = [
    { nome: 'HOME', link: '#home' },
    { nome: 'HISTÓRIA', link: '#historia' },
    { nome: 'DIAS E HORÁRIOS', link: '#diasehorarios' },
    { nome: 'CARDÁPIO', link: '#cardapio' },
    { nome: 'CONTATO', link: '#contato' },
  ];

  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover flex flex-col justify-between relative"
      style={{ backgroundImage: "url('/Banner.png')" }}
      id="home"
    >
      <nav className="mx-auto mt-8 w-[88%] h-21 flex items-center justify-center bg-white bg-opacity-90 shadow-md rounded-md z-50 relative">
        <div className="flex justify-between items-center w-full px-4 py-3 md:px-10">
          <img
            src="/seuButeco-img.png"
            alt="Logo do Seu Paulo Boteco"
            className=" h-15 w-auto"
          />

          <button
            className="md:hidden text-red-800"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="xl:text-[20px] xl:gap-20 md:text-[7px] hidden md:flex md:gap-4 gap-8 text-[12px] md:text-[14px] text-black font-semibold"
          
           >
            
            {itensNav.map((item, key) => (
              <li key={key}>
                <a  href={item.link} className="font-[Poppins,sans-serif] text-black hover:text-red-800" >
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
