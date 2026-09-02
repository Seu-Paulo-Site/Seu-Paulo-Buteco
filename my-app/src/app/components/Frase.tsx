import Image from 'next/image';
import Reveal from '@/app/components/Reveal';
import Typewriter from '@/app/components/Typewriter';

const FRASE =
  '“Dinheiro não compra felicidade, mas compra cerveja, que é quase a mesma coisa.”';

export default function Frase() {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <Image
            src="/mugs-light.png"
            alt=""
            width={264}
            height={240}
            className="mx-auto h-12 w-auto opacity-90 sm:h-14"
          />
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="display mt-9 text-2xl leading-[1.15] text-cream sm:text-4xl lg:text-5xl">
            <Typewriter texto={FRASE} />
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <p className="eyebrow mt-8 text-cream/60">Dito por quem entende · Seu Paulo Buteco</p>
        </Reveal>
      </div>
    </section>
  );
}
