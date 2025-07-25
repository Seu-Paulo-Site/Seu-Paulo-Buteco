'use client';

export default function Navbar() {
  return (
    <nav className="ml-10 flex justify-center w-[90%] h-16 bg-red-500 ">
      <div className="flex  items-center justify- ">
        <img src="#" alt="Logo do Seu Paulo Boteco" className="h-12 w-12 bg-white" />

        <ul className="flex gap-6 text-white font-semibold ">
          <li>HOME</li>
          <li>HÍSTORIAS</li>
          <li>DIAS E HORÁRIOS</li>
          <li>CARDÁPIOS</li>
          <li>HORÁRIOS</li>
        </ul>
      </div>
    </nav>
  );
}