/**
 * Divisória de pincel entre seções. O PNG original é branco sobre transparente,
 * então ele vira máscara e a cor sai de `currentColor` — assim a mesma arte
 * serve para qualquer par de seções.
 *
 * O posicionamento fica todo por conta de `className`: se este componente
 * trouxesse um `relative` próprio, ele brigaria com o `absolute` de quem chama
 * (no Tailwind quem vence é a ordem do CSS gerado, não a da string de classes).
 */
export default function Brush({
  className = '',
  flip = false,
}: {
  /** Posicionamento + uma classe de cor de texto (ex.: `text-cream`) para tingir a borda. */
  className?: string;
  /** Espelha na vertical: use na borda de baixo, para o lado sólido colar na seção. */
  flip?: boolean;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none w-full ${className}`}>
      <div className={`brush ${flip ? 'brush-flip' : ''}`} />
    </div>
  );
}
