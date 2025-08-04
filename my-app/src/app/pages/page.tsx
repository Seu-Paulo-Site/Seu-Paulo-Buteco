'use client';

import Navbar from '@/app/components/Navbar';
import Historia from '@/app/components/Historia';
import Horarios from '@/app/components/Horarios';
import Cardapio from '@/app/components/Cardapio';
import Localizacao from '@/app/components/Localizacao';

import '@/app/globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Historia />
      <Horarios />
      <Cardapio />
      <Localizacao />

      <a
        href="https://www.instagram.com/seupaulobuteco/" // Troque pelo @ do bar
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2  fixed bottom-20 right-6 z-50 bg-gradient-to-tr from-pink-500 to-purple-600 hover:brightness-110 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        </svg>
      </a>
      <a
        href="https://wa.me/553173529146"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.7 13.3c-.3-.2-1.7-.8-2-.9s-.5-.2-.7.2-.8.9-1 .9-.5 0-.9-.4-1.3-1.5-1.3-1.7.2-.4.4-.6.2-.3 0-.6-.8-2-1-2.4-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.4 1.5 3.7 2.6 3.9 6.3 4.3c.9.1 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.9.3-1.6.2-1.7 0-.1-.3-.2-.6-.3z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.4 4.9L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.4 0-2.8-.4-4-1.1l-.3-.2-3.1.9.9-3-.2-.3C4.4 14.8 4 13.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
        </svg>
      </a>
    </>
  );
}
