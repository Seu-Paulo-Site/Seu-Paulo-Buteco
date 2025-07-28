'use client';

export default function Historia() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-10">

        {/* Texto (lado esquerdo no desktop, em cima no mobile) */}
        <div className="flex-1 text-black">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-800 mb-6">
            COMO TUDO COMEÇOU...
          </h1>

          <p className="text-base sm:text-lg mb-4">
            Tudo começou com uma ideia simples: criar um lugar em <strong>Betim</strong> com comida boa, cerveja gelada e um clima diferente de tudo que você já viu.
          </p>

          <p className="text-base sm:text-lg mb-4">
            Um mineiro e dois paulistas se juntaram pra criar esse boteco que mistura o melhor das duas culturas. Daí veio o nome: <strong>Seu Paulo</strong> — uma homenagem a São Paulo e Minas Gerais!
          </p>

          <p className="text-base sm:text-lg">
            Aqui vai ter <em>tira-gosto</em> com identidade, atendimento que te chama pelo nome e muita resenha boa! Agora me diz: <strong>quem vai ser o primeiro a puxar a cadeira e brindar com a gente?</strong>
          </p>
        </div>

        {/* Imagens (lado direito no desktop, embaixo no mobile) */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-end">
          <img
            src="/banner.png"
            alt="Imagem 1"
            className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-md"
          />
          <img
            src="/brush-dec1.png"
            alt="Imagem 2"
            className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
}