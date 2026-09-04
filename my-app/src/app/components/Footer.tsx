import Image from 'next/image';
import { Instagram, MessageCircle } from 'lucide-react';
import { BAR, DIAS, NAV, ORDEM_SEMANA, faixaDoDia } from '@/app/lib/bar';

export default function Footer() {
  const abertos = ORDEM_SEMANA.map((i) => ({ ...DIAS[i], i })).filter((d) => d.janela);

  return (
    <footer className="border-t border-cream/10 bg-ink-2 px-5 pt-20 pb-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-light.png"
              alt={BAR.nome}
              width={1100}
              height={516}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/50">
              Comida boa, cerveja gelada e muita resenha. O melhor de Minas com o tempero de São
              Paulo, em duas casas em Betim.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href={BAR.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Seu Paulo Buteco"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-200 hover:border-cream/45 hover:text-cream"
              >
                <Instagram size={17} aria-hidden="true" />
              </a>
              <a
                href={BAR.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do Seu Paulo Buteco"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-200 hover:border-cream/45 hover:text-cream"
              >
                <MessageCircle size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="eyebrow text-cream/35">Navegue</h2>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-cream/35">Aberto</h2>
            <ul className="mt-5 space-y-3">
              {abertos.map((d) => (
                <li key={d.dia} className="flex justify-between gap-4 text-sm">
                  <span className="text-cream/65">{d.curto}</span>
                  <span className="font-mono text-[12px] tabular-nums text-cream/45">
                    {faixaDoDia(d.i)}
                  </span>
                </li>
              ))}
            </ul>

            <address className="mt-7 text-sm leading-relaxed text-cream/50 not-italic">
              <strong className="font-semibold text-cream/70">Seu Paulo</strong>
              <br />
              {BAR.endereco}
              <br />
              {BAR.bairro}
              <br />
              <br />
              <strong className="font-semibold text-cream/70">Seu Paulo 2</strong>
              <br />
              Nossa segunda casa em Betim/MG
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-cream/10 pt-8 sm:flex-row sm:justify-between">
          <Image src="/mugs-light.png" alt="" width={264} height={240} className="h-7 w-auto opacity-35" />
          <p className="font-mono text-[11px] tracking-wider text-cream/35">
            © {new Date().getFullYear()} {BAR.nome} · Betim/MG
          </p>
        </div>
      </div>
    </footer>
  );
}
