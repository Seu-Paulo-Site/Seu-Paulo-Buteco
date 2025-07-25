'use client';

export default function Navbar() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <nav className="mt-4 rounded-md ml-24 flex justify-center w-[80%] h-11 bg-white bg-opacity-90 shadow-md">
        <div className="flex justify-between items-center w-full px-10">
          
          <img
            src="/seuButeco-img.png"
            alt="Logo do Seu Paulo Boteco"
            className="h-9.5 w-auto"
          />

      
          <ul className="flex gap-8 text-[12px] text-black font-semibold">
            <li className="text-red-800 hover:underline cursor-pointer">HOME</li>
            <li className="hover:text-red-800 cursor-pointer">HISTÓRIAS</li>
            <li className="hover:text-red-800 cursor-pointer">DIAS E HORÁRIOS</li>
            <li className="hover:text-red-800 cursor-pointer">CARDÁPIOS</li>
            <li className="hover:text-red-800 cursor-pointer">HORÁRIOS</li>
          </ul>
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