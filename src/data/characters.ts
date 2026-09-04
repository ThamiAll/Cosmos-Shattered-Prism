export interface Ability {
  name: string
  description: string
}

export interface CharacterTheme {
  primary: string
  glow: string
  border: string
  badgeBg: string
  badgeText: string
}

export interface Character {
  id: string
  name: string
  title: string
  element: string
  imageSrc: string
  videoSrc: string
  videoFallbackSrc: string
  lore: string
  abilities: Ability[]
  theme: CharacterTheme
}

export const heroes: Character[] = [
  {
    id: 'cosmo',
    name: 'Cosmo',
    title: 'O Tecelão Estelar',
    element: 'Luz Estelar',
    imageSrc: '/images/heroes/cosmo.jpg',
    videoSrc: '/videos/heroes/cosmo-loop.mp4',
    videoFallbackSrc: '/videos/heroes/cosmo-loop.webm',
    lore: 'O guardião central do Grande Prisma. Ele empunha a lâmina de pura ressonância estelar para purificar a corrupção do vazio.',
    abilities: [
      { name: 'Corte Cósmico', description: 'Desfere um golpe de lâmina estelar cortando o espaço e projetando lâminas de luz prismática.' },
      { name: 'Ressonância do Prisma', description: 'Canaliza o núcleo de luz, criando um campo de estilhaços que repele e desintegra ataques inimigos.' },
      { name: 'Supernova Primordial', description: 'Eleva a espada canalizando o poder de um pulsar cósmico para explodir em dano massivo em área.' }
    ],
    theme: {
      primary: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.45)',
      border: 'border-sky-400/40',
      badgeBg: 'bg-sky-400/10',
      badgeText: 'text-sky-300'
    }
  },
  {
    id: 'vespera',
    name: 'Vespera',
    title: 'A Lâmina do Vazio',
    element: 'Fenda Astral',
    imageSrc: '/images/heroes/vespera.jpg',
    videoSrc: '/videos/heroes/vespera-loop.mp4',
    videoFallbackSrc: '/videos/heroes/vespera-loop.webm',
    lore: 'Nascida nas fronteiras do esquecimento, Vespera manipula as dobras dimensionais para desferir ataques fulminantes com suas adagas gêmeas.',
    abilities: [
      { name: 'Disfarce Entrópico', description: 'Funde sua forma à escuridão, tornando-se inalvejável por breves instantes.' },
      { name: 'Lâminas Gêmeas de Fenda', description: 'Corta o tecido do espaço com descargas elétricas de pura energia dimensional.' },
      { name: 'Vórtice Crepuscular', description: 'Abre um rasgo de vácuo gravitacional que arrasta inimigos próximos para o impacto.' }
    ],
    theme: {
      primary: '#d946ef',
      glow: 'rgba(217, 70, 239, 0.45)',
      border: 'border-fuchsia-500/40',
      badgeBg: 'bg-fuchsia-500/10',
      badgeText: 'text-fuchsia-300'
    }
  },
  {
    id: 'solaris',
    name: 'Solaris',
    title: 'A Forja Primordial',
    element: 'Fogo Solar',
    imageSrc: '/images/heroes/solaris.jpg',
    videoSrc: '/videos/heroes/solaris-loop.mp4',
    videoFallbackSrc: '/videos/heroes/solaris-loop.webm',
    lore: 'Colosso taurino esculpido pelo calor de núcleos solares extintos. Canaliza o plasma cósmico através de chifres e punhos incandescentes.',
    abilities: [
      { name: 'Carga Magmática', description: 'Investe em linha reta deixando um rastro de calor estelar que incinera tudo pelo caminho.' },
      { name: 'Esferas da Forja', description: 'Conjura núcleos solares comprimidos que detonam em ondas de choque térmico.' },
      { name: 'Coroa Solar', description: 'Incendeia a armadura com um halo solar de altíssima temperatura, queimando inimigos ao redor.' }
    ],
    theme: {
      primary: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.45)',
      border: 'border-amber-500/40',
      badgeBg: 'bg-amber-500/10',
      badgeText: 'text-amber-300'
    }
  },
  {
    id: 'lyra',
    name: 'Lyra',
    title: 'A Melodia Astral',
    element: 'Harmonia Cristalina',
    imageSrc: '/images/heroes/lyra.jpg',
    videoSrc: '/videos/heroes/lyra-loop.mp4',
    videoFallbackSrc: '/videos/heroes/lyra-loop.webm',
    lore: 'Flutuando entre constelações, Lyra tece frequências de som e luz sólida para curar aliados e estilhaçar barreiras inimigas.',
    abilities: [
      { name: 'Acorde Celestial', description: 'Dispara ondas sonoras translúcidas de cristal que desorientam os oponentes.' },
      { name: 'Cúpula Harmônica', description: 'Projeta um escudo sonoro que ressoa absorvendo danos mágicos e regenerando vitalidade.' },
      { name: 'Sinfonia do Cosmos', description: 'Invoca uma tempestade de prismas estelares que explodem em sequências harmônicas.' }
    ],
    theme: {
      primary: '#a5f3fc',
      glow: 'rgba(165, 243, 252, 0.45)',
      border: 'border-cyan-200/40',
      badgeBg: 'bg-cyan-200/10',
      badgeText: 'text-cyan-200'
    }
  },
  {
    id: 'thalassa',
    name: 'Thalassa',
    title: 'A Sentinela das Marés',
    element: 'Prisma Oceânico',
    imageSrc: '/images/heroes/thalassa.jpg',
    videoSrc: '/videos/heroes/thalassa-loop.mp4',
    videoFallbackSrc: '/videos/heroes/thalassa-loop.webm',
    lore: 'Protetora das profundezas prismáticas. Seu tridente cristalino controla marés de energia densa e esferas d’água condensada.',
    abilities: [
      { name: 'Perfuração Abissal', description: 'Estoca o tridente invocando correntes oceânicas cristalizadas de longo alcance.' },
      { name: 'Esferas Hidrostáticas', description: 'Prende projéteis e oponentes em bolhas de água cósmica hiper-pressurizada.' },
      { name: 'Maelstrom de Prisma', description: 'Ergue uma coluna colossal de torrente marinha infundida com lascas de cristal cortante.' }
    ],
    theme: {
      primary: '#14b8a6',
      glow: 'rgba(20, 184, 166, 0.45)',
      border: 'border-teal-500/40',
      badgeBg: 'bg-teal-500/10',
      badgeText: 'text-teal-300'
    }
  },
  {
    id: 'terran',
    name: 'Terran',
    title: 'O Baluarte Telúrico',
    element: 'Cristal Esmeralda',
    imageSrc: '/images/heroes/terran.jpg',
    videoSrc: '/videos/heroes/terran-loop.mp4',
    videoFallbackSrc: '/videos/heroes/terran-loop.webm',
    lore: 'Maciço titã pétreo imbuído de radiação esmeralda ancestral. Suas carapaças de geodo suportam impactos devastadores sem ceder.',
    abilities: [
      { name: 'Impacto Tectônico', description: 'Bate os punhos de rocha no solo liberando ondas de choque que cravam espinhos de cristal.' },
      { name: 'Muralha Geomórfica', description: 'Endurece as placas de pedra de sua armadura aumentando drasticamente sua tenacidade.' },
      { name: 'Ressonância Sísmica', description: 'Desperta a energia nuclear esmeralda de seu peito, emitindo pulsos devastadores em área.' }
    ],
    theme: {
      primary: '#22c55e',
      glow: 'rgba(34, 197, 94, 0.45)',
      border: 'border-green-500/40',
      badgeBg: 'bg-green-500/10',
      badgeText: 'text-green-300'
    }
  }
]

export const villains: Character[] = []