'use client';

export default function Navbar() {
  return (
    <nav className="ml-10 flex justify-center w-[90%] h-16 bg-white ">
      <div className="flex  items-center justify-between ">
        <img src="/seuButeco img.png" alt="Logo do Seu Paulo Boteco" className="h-14 w-18 bg-white" />

        <ul className="flex gap-6 text-black font-semibold ">
          <li className="text-red-800">HOME</li>
          <li>HÍSTORIAS</li>
          <li>DIAS E HORÁRIOS</li>
          <li>CARDÁPIOS</li>
          <li>HORÁRIOS</li>
        </ul>
      </div>
    </nav>
  );
}