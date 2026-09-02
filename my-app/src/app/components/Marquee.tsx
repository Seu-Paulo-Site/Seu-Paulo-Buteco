import Image from 'next/image';

const FRASES = [
  'Cerveja sempre gelada',
  'Porções de encher a mesa',
  'Caipirinha autoral',
  'Duas casas em Betim',
  'Minas + São Paulo',
  'Resenha até fechar',
];

function Fileira() {
  return (
    <>
      {FRASES.map((frase) => (
        <li key={frase} className="flex shrink-0 items-center gap-8 px-8">
          <span className="display text-2xl text-cream sm:text-3xl">{frase}</span>
          <Image
            src="/mugs-light.png"
            alt=""
            width={264}
            height={240}
            className="h-6 w-auto opacity-70 sm:h-7"
          />
        </li>
      ))}
    </>
  );
}

/** Faixa infinita entre a capa e a história — o "letreiro" do buteco. */
export default function Marquee() {
  return (
    // Sobra embaixo de propósito: a borda rasgada da seção creme avança sobre
    // a faixa, e sem esse respiro ela comeria as letras.
    <div className="relative z-10 overflow-hidden border-y border-ink/25 bg-brand pt-5 pb-12">
      <div className="marquee-track flex w-max items-center">
        <ul className="flex items-center">
          <Fileira />
        </ul>
        {/* Cópia idêntica: fecha o laço sem emenda visível. */}
        <ul className="flex items-center" aria-hidden="true">
          <Fileira />
        </ul>
      </div>
    </div>
  );
}
