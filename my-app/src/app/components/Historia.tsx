import Image from 'next/image';
import { Beer, Flame, Users } from 'lucide-react';
import Reveal from '@/app/components/Reveal';
import SecaoCreme from '@/app/components/SecaoCreme';

const PILARES = [
  {
    icone: Flame,
    titulo: 'Cozinha de boteco',
    texto: 'Tira-gosto feito na hora, do jeito que se come em mesa de bar.',
  },
  {
    icone: Beer,
    titulo: 'Sempre no ponto',
    texto: 'Chope e cerveja saindo geladas, do primeiro ao último gole.',
  },
  {
    icone: Users,
    titulo: 'Mesa na calçada',
    texto: 'Espaço aberto, atendimento acolhedor e conversa que não acaba.',
  },
];

export default function Historia() {
  return (
    <SecaoCreme id="historia" className="px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-brand">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              Como tudo começou
            </p>

            <h2 className="display mt-6 text-4xl text-ink sm:text-5xl lg:text-6xl">
              Um mineiro,
              <br />
              dois paulistas
              <br />
              <span className="text-brand">e um balcão.</span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-ink-4 sm:text-base">
              <p>
                O Seu Paulo nasceu da mistura mais honesta que existe: a comida de Minas com a
                pressa boa de São Paulo. Deu nisso — um boteco onde a porção chega quente, a cerveja
                chega gelada e ninguém tem pressa de ir embora.
              </p>
              <p>
                Atendimento acolhedor, tira-gosto com identidade e um clima que faz você sentar
                &ldquo;só pra uma&rdquo; e ficar até fechar.
              </p>
              <p>
                Deu tão certo que uma casa virou duas: hoje são{' '}
                <strong className="font-semibold text-ink">duas unidades em Betim</strong> — o{' '}
                <strong className="font-semibold text-ink">Seu Paulo</strong>, na Angola, e o{' '}
                <strong className="font-semibold text-brand">Seu Paulo 2</strong>. Mesma cozinha,
                mesma gelada, mesma resenha.
              </p>
              <p className="display text-2xl text-ink sm:text-3xl">Venha brindar com a gente.</p>
            </div>

            <Image
              src="/mugs.png"
              alt=""
              width={264}
              height={240}
              className="mt-8 h-10 w-auto opacity-80"
            />
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(18,16,16,0.55)]">
                <Image
                  src="/frentebar.jpg"
                  alt="Fachada do Seu Paulo Buteco, com toldo bordô e mesas na calçada"
                  width={1047}
                  height={611}
                  sizes="(min-width: 1024px) 46rem, 92vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="relative -mt-14 ml-auto w-[62%] overflow-hidden rounded-2xl border-4 border-cream shadow-[0_26px_60px_-26px_rgba(18,16,16,0.6)] sm:-mt-20 sm:w-[54%]">
                <Image
                  src="/prato.jpg"
                  alt="Mesa posta com o jogo americano do Seu Paulo Buteco"
                  width={924}
                  height={616}
                  sizes="(min-width: 1024px) 24rem, 55vw"
                  className="h-auto w-full"
                />
              </div>

              <p className="absolute -top-4 -left-3 rotate-[-6deg] rounded-full bg-brand px-5 py-2 font-mono text-[11px] tracking-[0.2em] text-cream uppercase shadow-lg sm:-left-6">
                Angola · Betim
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:mt-24 sm:grid-cols-3">
          {PILARES.map(({ icone: Icone, titulo, texto }, i) => (
            <li key={titulo} className="bg-cream">
              <Reveal delay={i * 90} className="h-full p-7 sm:p-8">
                <Icone size={22} className="text-brand" aria-hidden="true" />
                <h3 className="display mt-5 text-xl text-ink">{titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-4">{texto}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </SecaoCreme>
  );
}
