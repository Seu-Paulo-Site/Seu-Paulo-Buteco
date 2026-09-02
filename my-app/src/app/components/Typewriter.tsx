'use client';

import { useEffect, useState } from 'react';

/**
 * Máquina de escrever caseira. O texto completo fica presente (invisível) para
 * reservar a caixa, então nada pula de lugar enquanto digita; leitores de tela
 * recebem a frase inteira de uma vez e quem pede menos movimento também.
 */
export default function Typewriter({
  texto,
  velocidade = 42,
  className = '',
}: {
  texto: string;
  velocidade?: number;
  className?: string;
}) {
  const [digitado, setDigitado] = useState('');
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (semMovimento) {
      setDigitado(texto);
      return;
    }

    setAnimar(true);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDigitado(texto.slice(0, i));
      if (i >= texto.length) clearInterval(id);
    }, velocidade);

    return () => clearInterval(id);
  }, [texto, velocidade]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Fantasma: define a altura e a quebra de linha finais. */}
      <span aria-hidden="true" className="invisible">
        {texto}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {digitado}
        {animar && digitado.length < texto.length && (
          <span className="ml-0.5 animate-pulse text-brand-deep">|</span>
        )}
      </span>
      <span className="sr-only">{texto}</span>
    </span>
  );
}
