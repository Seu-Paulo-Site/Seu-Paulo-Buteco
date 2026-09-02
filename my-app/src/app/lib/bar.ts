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
  /** Serviço de almoço. */
  almoco: Janela | null;
  /** Serviço da tarde/noite. Na terça a casa só abre no almoço. */
  noite: Janela | null;
};

const h = (hora: number, min = 0) => hora * 60 + min;

export const DIAS: Dia[] = [
  { dia: 'Domingo', curto: 'Dom', almoco: { abre: h(11, 30), fecha: h(15) }, noite: { abre: h(15), fecha: h(17) } },
  { dia: 'Segunda-feira', curto: 'Seg', almoco: null, noite: null },
  { dia: 'Terça-feira', curto: 'Ter', almoco: { abre: h(11, 30), fecha: h(15) }, noite: null },
  { dia: 'Quarta-feira', curto: 'Qua', almoco: { abre: h(11, 30), fecha: h(15) }, noite: { abre: h(17), fecha: h(23) } },
  { dia: 'Quinta-feira', curto: 'Qui', almoco: { abre: h(11, 30), fecha: h(15) }, noite: { abre: h(17), fecha: h(23) } },
  { dia: 'Sexta-feira', curto: 'Sex', almoco: { abre: h(11, 30), fecha: h(15) }, noite: { abre: h(17), fecha: h(24) } },
  { dia: 'Sábado', curto: 'Sáb', almoco: { abre: h(11, 30), fecha: h(15) }, noite: { abre: h(17), fecha: h(24) } },
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

export function faixa(j: Janela | null): string {
  return j ? `${formatarHora(j.abre)} às ${formatarHora(j.fecha)}` : 'Fechado';
}

/** As duas faixas do dia, já formatadas, para as listas do site. */
export function faixasDoDia(indice: number): { almoco: string; noite: string } {
  const d = DIAS[indice];
  return { almoco: faixa(d.almoco), noite: faixa(d.noite) };
}

/**
 * Resume o almoço numa linha só, enquanto o horário for igual em todos os dias
 * em que ele existe e esses dias forem seguidos. Se algum divergir, devolve null
 * e quem chama volta a listar dia a dia.
 */
export function resumoAlmoco(): { dias: string; horario: string } | null {
  const posicoes = ORDEM_SEMANA.map((i, pos) => ({ d: DIAS[i], pos })).filter(({ d }) => d.almoco);
  if (posicoes.length === 0) return null;

  const ref = posicoes[0].d.almoco as Janela;
  const mesmoHorario = posicoes.every(
    ({ d }) => d.almoco?.abre === ref.abre && d.almoco?.fecha === ref.fecha,
  );
  const seguidos = posicoes.every(({ pos }, k) => pos === posicoes[0].pos + k);
  if (!mesmoHorario || !seguidos) return null;

  const dias =
    posicoes.length === 7
      ? 'Todos os dias'
      : `${posicoes[0].d.curto} a ${posicoes[posicoes.length - 1].d.curto}`;

  return { dias, horario: faixa(ref) };
}

/** Todas as janelas de um dia, em ordem. */
function janelasDoDia(indice: number): Janela[] {
  const d = DIAS[indice];
  return [d.almoco, d.noite].filter((j): j is Janela => j !== null);
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
  for (const j of janelasDoDia(ontem)) {
    if (j.fecha > 24 * 60 && minutos < j.fecha - 24 * 60) {
      return { aberto: true, rotulo: 'Aberto agora', detalhe: `até ${formatarHora(j.fecha)}`, hoje: dia };
    }
  }

  const hoje = janelasDoDia(dia);

  for (const j of hoje) {
    if (minutos >= j.abre && minutos < j.fecha) {
      return { aberto: true, rotulo: 'Aberto agora', detalhe: `até ${formatarHora(j.fecha)}`, hoje: dia };
    }
  }

  // Ainda vai abrir hoje?
  const proximaHoje = hoje.find((j) => minutos < j.abre);
  if (proximaHoje) {
    return {
      aberto: false,
      rotulo: 'Fechado',
      detalhe: `abre hoje às ${formatarHora(proximaHoje.abre)}`,
      hoje: dia,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const proximo = (dia + i) % 7;
    const [primeira] = janelasDoDia(proximo);
    if (primeira) {
      const quando = i === 1 ? 'amanhã' : DIAS[proximo].dia.replace('-feira', '');
      return {
        aberto: false,
        rotulo: 'Fechado',
        detalhe: `abre ${quando} às ${formatarHora(primeira.abre)}`,
        hoje: dia,
      };
    }
  }

  return { aberto: false, rotulo: 'Fechado', detalhe: 'consulte os horários', hoje: dia };
}

