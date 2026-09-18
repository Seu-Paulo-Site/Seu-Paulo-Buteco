/**
 * Fonte única de verdade do buteco: horários, contatos e navegação.
 * Antes esses dados estavam duplicados (e divergentes) entre Horarios e Localizacao.
 */

export const BAR = {
  nome: 'Seu Paulo Buteco',
  endereco: 'R. Milton Viêra Pinto, 16',
  bairro: 'Angola — Betim/MG',
  cep: '32653-456',
  telefoneExibicao: '(31) 7352-9146',
  telefoneLink: '+553173529146',
  whatsapp: 'https://wa.me/553173529146',
  instagramHandle: '@seupaulobuteco',
  instagram: 'https://www.instagram.com/seupaulobuteco/',
  maps: 'https://www.google.com/maps/place/R.+Milton+Vi%C3%AAra+Pinto,+16+-+Angola,+Betim+-+MG,+32653-456',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.4106951472531!2d-44.2166209!3d-19.9503895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c1df13b4b5%3A0x958a312e8e4eae9f!2sR.%20Milton%20Vi%C3%AAra%20Pinto%2C%2016%20-%20Angola%2C%20Betim%20-%20MG%2C%2032653-456!5e0!3m2!1spt-BR!2sbr!4v1722115389461!5m2!1spt-BR!2sbr',
  timeZone: 'America/Sao_Paulo',
} as const;

/**
 * A casa tem duas unidades em Betim (a bio do Instagram confirma: "2 unidades").
 * O endereço e os horários da segunda ainda não são públicos em lugar nenhum —
 * quando chegarem, é só preencher aqui que o site inteiro se atualiza.
 */
export const UNIDADES = [
  {
    nome: 'Seu Paulo',
    apelido: 'A casa da Angola',
    endereco: BAR.endereco,
    bairro: BAR.bairro,
    completo: true,
  },
  {
    nome: 'Seu Paulo 2',
    apelido: 'A segunda casa',
    endereco: null,
    bairro: 'Betim/MG',
    completo: false,
  },
] as const;

export const NAV = [
  { nome: 'Início', href: '#home' },
  { nome: 'História', href: '#historia' },
  { nome: 'O Buteco', href: '#destaques' },
  { nome: 'Cardápio', href: '#cardapio' },
  { nome: 'Horários', href: '#horarios' },
  { nome: 'Contato', href: '#contato' },
] as const;

export const CARDAPIOS = [
  {
    categoria: 'Cozinha & Bar',
    titulo: 'Comidas & Bebidas',
    resumo: 'Petiscos, porções, cervejas, drinks e as caipirinhas da casa.',
    imagem: '/menu-comidas.jpg',
    arquivo: '/cardapiofinal.pdf',
  },
  {
    categoria: 'Almoço',
    titulo: 'Prato do Dia',
    resumo: 'Um especial por dia, com arroz, feijão, farofa, ovo e salada.',
    imagem: '/prato.jpg',
    arquivo: '/almoco.pdf',
  },
] as const;

/** Minutos desde a meia-noite. Fechamento pode passar de 1440 (madrugada). */
type Janela = { abre: number; fecha: number };

type Dia = {
  dia: string;
  curto: string;
  /** Faixa única de funcionamento. A casa abre direto, sem fechar entre almoço e noite. */
  janela: Janela | null;
};

const h = (hora: number, min = 0) => hora * 60 + min;

export const DIAS: Dia[] = [
  { dia: 'Domingo', curto: 'Dom', janela: { abre: h(12), fecha: h(18) } },
  { dia: 'Segunda-feira', curto: 'Seg', janela: null },
  { dia: 'Terça-feira', curto: 'Ter', janela: { abre: h(11, 30), fecha: h(15) } },
  { dia: 'Quarta-feira', curto: 'Qua', janela: { abre: h(11, 30), fecha: h(23) } },
  { dia: 'Quinta-feira', curto: 'Qui', janela: { abre: h(11, 30), fecha: h(23) } },
  { dia: 'Sexta-feira', curto: 'Sex', janela: { abre: h(11, 30), fecha: h(24) } },
  { dia: 'Sábado', curto: 'Sáb', janela: { abre: h(12), fecha: h(24) } },
];

/** Ordem de leitura das listas: a semana do bar começa na segunda, não no domingo. */
export const ORDEM_SEMANA = [1, 2, 3, 4, 5, 6, 0];

export function formatarHora(minutos: number): string {
  const m = minutos % (24 * 60);
  if (m === 0) return '00h'; // fechamento na virada do dia
  const hora = Math.floor(m / 60);
  const min = m % 60;
  return min === 0 ? `${hora}h` : `${hora}h${String(min).padStart(2, '0')}`;
}

export function faixaDoDia(indice: number): string {
  const j = DIAS[indice].janela;
  return j ? `${formatarHora(j.abre)} às ${formatarHora(j.fecha)}` : 'Fechado';
}

/** Data/hora corrente no fuso do bar, independente do fuso de quem acessa. */
function agoraEmBetim(): { dia: number; minutos: number } {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: BAR.timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());

  const obter = (tipo: Intl.DateTimeFormatPartTypes) =>
    partes.find((p) => p.type === tipo)?.value ?? '';

  const semana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dia = Math.max(0, semana.indexOf(obter('weekday')));

  return {
    dia,
    minutos: Number(obter('hour')) * 60 + Number(obter('minute')),
  };
}

export type Status = {
  aberto: boolean;
  rotulo: string;
  detalhe: string;
  /** Índice do dia da semana em Betim — usado para destacar a linha de hoje. */
  hoje: number;
};

export function statusAgora(): Status {
  const { dia, minutos } = agoraEmBetim();

  // A casa pode estar aberta por causa da véspera (sexta e sábado viram o dia).
  const ontem = (dia + 6) % 7;
  const janelaOntem = DIAS[ontem].janela;
  if (janelaOntem && janelaOntem.fecha > 24 * 60 && minutos < janelaOntem.fecha - 24 * 60) {
    return {
      aberto: true,
      rotulo: 'Aberto agora',
      detalhe: `até ${formatarHora(janelaOntem.fecha)}`,
      hoje: dia,
    };
  }

  const hoje = DIAS[dia].janela;

  if (hoje && minutos >= hoje.abre && minutos < hoje.fecha) {
    return {
      aberto: true,
      rotulo: 'Aberto agora',
      detalhe: `até ${formatarHora(hoje.fecha)}`,
      hoje: dia,
    };
  }

  if (hoje && minutos < hoje.abre) {
    return {
      aberto: false,
      rotulo: 'Fechado',
      detalhe: `abre hoje às ${formatarHora(hoje.abre)}`,
      hoje: dia,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const proximo = (dia + i) % 7;
    const janela = DIAS[proximo].janela;
    if (janela) {
      const quando = i === 1 ? 'amanhã' : DIAS[proximo].dia.replace('-feira', '');
      return {
        aberto: false,
        rotulo: 'Fechado',
        detalhe: `abre ${quando} às ${formatarHora(janela.abre)}`,
        hoje: dia,
      };
    }
  }

  return { aberto: false, rotulo: 'Fechado', detalhe: 'consulte os horários', hoje: dia };
}

