'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Instagram, Menu, X } from 'lucide-react';
import { BAR, NAV } from '@/app/lib/bar';

export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // Trava o scroll do fundo e fecha no Esc enquanto o menu está aberto.
  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false);
    };

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', aoTeclar);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', aoTeclar);
    };
  }, [aberto]);

  return (
    // O menu mobile fica FORA do <header> de propósito: o backdrop-blur do
    // header cria bloco de contenção e achataria um filho `position: fixed`.
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          rolou || aberto
            ? 'border-b border-cream/10 bg-ink/85 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a
            href="#home"
            className="-my-2 shrink-0 py-2 transition-opacity duration-200 hover:opacity-80"
            aria-label={`${BAR.nome} — ir para o início`}
          >
            <Image
              src="/logo-light.png"
              alt={BAR.nome}
              width={1100}
              height={516}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative block py-2 font-mono text-[12px] tracking-[0.18em] text-cream/70 uppercase transition-colors duration-200 hover:text-cream"
                  >
                    {item.nome}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-brand-2 transition-[width] duration-300 ease-out group-hover:w-full"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BAR.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Seu Paulo Buteco"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-200 hover:border-cream/40 hover:text-cream sm:flex"
            >
              <Instagram size={17} aria-hidden="true" />
            </a>

            <a
              href="#cardapio"
              className="hidden rounded-full bg-brand px-5 py-3 font-mono text-[12px] tracking-[0.18em] text-cream uppercase transition-colors duration-200 hover:bg-brand-2 sm:inline-block"
            >
              Cardápio
            </a>

            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={aberto}
              aria-controls="menu-mobile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors duration-200 hover:border-cream/40 lg:hidden"
            >
              {aberto ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {aberto && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto overscroll-contain bg-ink/98 backdrop-blur-lg lg:hidden"
          style={{ top: 'calc(4.5rem + env(safe-area-inset-top))' }}
        >
          <nav aria-label="Navegação principal (celular)" className="px-6 pt-8 pb-14">
            <ul className="flex flex-col">
              {NAV.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setAberto(false)}
                    className="flex items-baseline gap-4 border-b border-cream/10 py-4 transition-colors duration-200 hover:text-brand-2"
                  >
                    <span className="font-mono text-[11px] text-cream/35 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="display text-3xl">{item.nome}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="#cardapio"
                onClick={() => setAberto(false)}
                className="rounded-full bg-brand px-6 py-4 text-center font-mono text-[12px] tracking-[0.18em] text-cream uppercase transition-colors duration-200 hover:bg-brand-2"
              >
                Ver Cardápio
              </a>
              <a
                href={BAR.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/20 px-6 py-4 text-center font-mono text-[12px] tracking-[0.18em] text-cream uppercase transition-colors duration-200 hover:border-cream/50"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <address className="mt-10 font-mono text-[11px] leading-relaxed tracking-wider text-cream/40 not-italic">
              {BAR.endereco}
              <br />
              {BAR.bairro}
            </address>
          </nav>
        </div>
      )}
    </>
  );
}
