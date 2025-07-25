'use client';

import { link } from "fs";

export default function Navbar() {
  const itensNav = [
    {
      nome: "HOME",
      link: "#home"
    },
    {
      nome: "HISTÓRIAS",
      link: "#historias"
    },
    {
      nome: "DIAS E HORÁRIOS",
      link: "#diasehorarios"
    },
    {
      nome: "CARDÁPIO",
      link: "#cardapio"
    },
    {
      nome: "CONTATO",
      link: "#contato"
    },

  ]
  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-contain flex flex-col justify-between"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <nav className="mt-4 rounded-md ml-24 flex justify-center w-[80%] h-11 bg-white bg-opacity-90 shadow-md">
        <div className="flex justify-between items-center w-full px-10">

          <img
            src="/seuButeco-img.png"
            alt="Logo do Seu Paulo Boteco"
            className="h-9.5 w-auto"
          />

          <div className="flex gap-8 text-[12px] text-black font-semibold">
            {itensNav.map((item, key) => (
              <a key={key} href={item.link} className="text-red-800 hover:underline cursor-pointer">{item.nome}</a>
            )

            )}
            
          </div>
        </div>
      </nav>

      <div className="w-full h-6  flex justify-center mt-8 ">
        <img
          src="/brush-dec1.png"
          alt="Brush decorativo"
          className="w-full"
        />
      </div>
    </div>
  );
}