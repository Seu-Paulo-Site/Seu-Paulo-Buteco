import { Instagram, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import Reveal from '@/app/components/Reveal';
import { BAR, UNIDADES } from '@/app/lib/bar';

export default function Localizacao() {
  return (
    <section id="contato" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          {/* Fundo próprio: enquanto o mapa carrega, o bloco não vira um buraco na página. */}
          <div className="overflow-hidden rounded-2xl border border-cream/12 bg-ink-3">
            <iframe
              title="Mapa com a localização do Seu Paulo Buteco"
              src={BAR.mapsEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[340px] w-full border-0 lg:h-[460px]"
            />
          </div>
          <p className="eyebrow mt-4 text-cream/35">No mapa: Seu Paulo · Angola</p>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-brand-2">
              <span className="h-px w-10 bg-brand-2" aria-hidden="true" />
              Onde nos achar
            </p>

            <h2 className="display mt-6 text-4xl text-cream sm:text-5xl lg:text-6xl">
              Venha nos
              <br />
              visitar
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-cream/60">
              São duas casas em Betim: o Seu Paulo, na Angola, e o Seu Paulo 2.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-10 space-y-7">
              <div className="flex gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-2" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="eyebrow text-cream/40">Nossas casas</dt>
                  <dd className="mt-3 space-y-4">
                    {UNIDADES.map((u) => (
                      <div key={u.nome} className="border-l-2 border-brand/50 pl-4">
                        <p className="display text-lg text-cream">{u.nome}</p>
                        {u.completo ? (
                          <p className="mt-1 leading-relaxed text-cream/70">
                            {u.endereco}
                            <br />
                            {u.bairro} · CEP {BAR.cep}
                          </p>
                        ) : (
                          <p className="mt-1 leading-relaxed text-cream/70">
                            Nossa segunda casa em {u.bairro}. Endereço e programação no{' '}
                            <a
                              href={BAR.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-2 underline underline-offset-4 transition-colors duration-200 hover:text-cream"
                            >
                              Instagram
                            </a>
                            .
                          </p>
                        )}
                      </div>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={18} className="mt-0.5 shrink-0 text-brand-2" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="eyebrow text-cream/40">Contato</dt>
                  <dd className="mt-2 flex flex-col gap-1.5">
                    <a
                      href={`tel:${BAR.telefoneLink}`}
                      className="text-cream/85 transition-colors duration-200 hover:text-brand-2"
                    >
                      {BAR.telefoneExibicao}
                    </a>
                    <a
                      href={BAR.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-cream/85 transition-colors duration-200 hover:text-brand-2"
                    >
                      <Instagram size={15} aria-hidden="true" />
                      {BAR.instagramHandle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <a
                href={BAR.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 font-mono text-[12px] tracking-[0.18em] text-cream uppercase transition-colors duration-200 hover:bg-brand-2"
              >
                <Navigation size={15} aria-hidden="true" />
                Traçar Rota
              </a>
              <a
                href={BAR.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/25 px-7 py-4 font-mono text-[12px] tracking-[0.18em] text-cream/85 uppercase transition-colors duration-200 hover:border-cream/60 hover:text-cream"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Chamar no Zap
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
