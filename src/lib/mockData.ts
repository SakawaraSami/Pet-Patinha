export interface Provider {
  id: string;
  name: string;
  initials: string;
  rating: number;
  reviews: number;
  specialty: string;
  price: number;
  distance: number;
  responseTime: string;
  location: string;
  badges: string[];
  services: { name: string; description: string; price: number; unit: string }[];
  bio: string;
  homeDescription: string;
  repeatClients: number;
  totalBookings: number;
  responseRate: number;
  memberSince: string;
  petSizes: string[];
  features: string[];
  reviewsList: {
    author: string;
    initials: string;
    rating: number;
    text: string;
    petInfo: string;
    date: string;
  }[];
  availability: { [day: number]: "available" | "booked" | "blocked" };
}

export const providers: Provider[] = [
  {
    id: "emily-chen",
    name: "Emily Chen",
    initials: "EC",
    rating: 4.97,
    reviews: 312,
    specialty: "Experiente com cães de grande porte",
    price: 225,
    distance: 1.2,
    responseTime: "< 1 hora",
    location: "São Paulo, SP",
    badges: ["Verificado", "Mais Bem Avaliado", "Super Cuidador"],
    services: [
      { name: "Hospedagem com Pernoite", description: "Seu pet fica na minha casa com cuidado 24h e muito carinho.", price: 225, unit: "noite" },
      { name: "Passeio com Cães", description: "Passeio de 30 minutos pelo bairro com tempo de brincadeira.", price: 100, unit: "passeio" },
      { name: "Creche Diurna", description: "Dia inteiro de socialização, brincadeiras e descanso em ambiente acolhedor.", price: 175, unit: "dia" },
      { name: "Visitas em Casa", description: "Visita de 30 min na sua casa para alimentar, passear e dar carinho.", price: 90, unit: "visita" },
    ],
    bio: "Olá! Sou a Emily, apaixonada por animais e com certificação em primeiros socorros pet. Cuido de animais profissionalmente há mais de 5 anos e trato cada um como família. Minha casa tem quintal totalmente cercado e limito o número de hóspedes para garantir atenção personalizada.",
    homeDescription: "Casa espaçosa de 3 quartos com quintal grande e cercado. Pisos de madeira em toda a casa. Bairro residencial tranquilo com parques e trilhas por perto.",
    repeatClients: 85,
    totalBookings: 1247,
    responseRate: 99,
    memberSince: "2019",
    petSizes: ["Pequeno", "Médio", "Grande"],
    features: ["Quintal cercado", "Sem outros pets", "Aceita gatos", "Administra medicação"],
    reviewsList: [
      { author: "Jéssica M.", initials: "JM", rating: 5, text: "A Emily é simplesmente incrível! Nosso golden Max se divertiu muito. Mandou fotos e atualizações diárias. Com certeza vamos reservar de novo!", petInfo: "Golden Retriever, 3 anos", date: "há 2 semanas" },
      { author: "Michael R.", initials: "MR", rating: 5, text: "Ficamos receosos em deixar nosso cão idoso pela primeira vez, mas a Emily tornou tudo muito tranquilo. Seguiu todos os horários de medicação direitinho.", petInfo: "Labrador, 11 anos", date: "há 1 mês" },
      { author: "Amanda K.", initials: "AK", rating: 5, text: "Nossa gata Bigodes é muito ansiosa com pessoas novas, mas a Emily foi super paciente e gentil. Voltamos para casa e encontramos uma gatinha feliz e relaxada!", petInfo: "Sem Raça Definida, 5 anos", date: "há 1 mês" },
      { author: "David L.", initials: "DL", rating: 4, text: "Experiência ótima no geral. A casa da Emily é muito limpa e amigável para pets. Só queria que o quintal fosse um pouco maior para nosso filhote elétrico.", petInfo: "Border Collie, 1 ano", date: "há 2 meses" },
    ],
    availability: { 1: "available", 2: "available", 3: "booked", 4: "booked", 5: "available", 6: "available", 7: "available", 8: "blocked", 9: "blocked", 10: "available", 11: "available", 12: "available", 13: "available", 14: "booked", 15: "available", 16: "available", 17: "available", 18: "available", 19: "available", 20: "booked", 21: "booked", 22: "available", 23: "available", 24: "available", 25: "available", 26: "available", 27: "blocked", 28: "available", 29: "available", 30: "available" },
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    initials: "MJ",
    rating: 4.91,
    reviews: 189,
    specialty: "Especialista em adestramento canino",
    price: 190,
    distance: 2.8,
    responseTime: "< 2 horas",
    location: "Rio de Janeiro, RJ",
    badges: ["Verificado", "Mais Bem Avaliado"],
    services: [
      { name: "Hospedagem com Pernoite", description: "Estadias confortáveis com rotina estruturada.", price: 190, unit: "noite" },
      { name: "Passeio com Cães", description: "Passeio de 45 minutos com reforço de comandos básicos.", price: 125, unit: "passeio" },
      { name: "Creche Diurna", description: "Creche envolvente com socialização e atividades de treinamento.", price: 150, unit: "dia" },
    ],
    bio: "Adestrador profissional que virou cuidador de pets! Trago 8 anos de experiência em treinamento para cada estadia. Seu cãozinho volta para casa não só feliz, como mais comportado.",
    homeDescription: "Apartamento moderno com espaço dedicado para pets. Acesso a área para cachorros privativa no prédio.",
    repeatClients: 72,
    totalBookings: 834,
    responseRate: 97,
    memberSince: "2020",
    petSizes: ["Pequeno", "Médio", "Grande"],
    features: ["Treinamento incluso", "Rotina estruturada", "Vários passeios diários"],
    reviewsList: [
      { author: "Sara T.", initials: "ST", rating: 5, text: "O Marcus é incrível. Nosso cão voltou sabendo comandos novos! Melhor cuidador de pets de todos.", petInfo: "Pastor Alemão, 2 anos", date: "há 1 semana" },
      { author: "Chris P.", initials: "CP", rating: 5, text: "Super profissional e comunicativo. Recomendo demais!", petInfo: "Beagle, 4 anos", date: "há 3 semanas" },
    ],
    availability: { 1: "available", 2: "booked", 3: "available", 4: "available", 5: "available", 6: "booked", 7: "booked", 8: "available", 9: "available", 10: "available", 11: "available", 12: "available", 13: "booked", 14: "available", 15: "available", 16: "available", 17: "available", 18: "booked", 19: "available", 20: "available", 21: "available", 22: "available", 23: "available", 24: "available", 25: "booked", 26: "available", 27: "available", 28: "available", 29: "available", 30: "available" },
  },
  {
    id: "sophie-martinez",
    name: "Sophie Martinez",
    initials: "SM",
    rating: 4.94,
    reviews: 276,
    specialty: "Especialista em gatos e pets exóticos",
    price: 210,
    distance: 3.5,
    responseTime: "< 30 min",
    location: "Belo Horizonte, MG",
    badges: ["Verificado", "Super Cuidador"],
    services: [
      { name: "Cuidado na Sua Casa", description: "Fico na sua casa cuidando dos pets no ambiente familiar deles.", price: 275, unit: "noite" },
      { name: "Visitas em Casa", description: "Visitas personalizadas para gatos e pets exóticos com cuidado especializado.", price: 110, unit: "visita" },
      { name: "Hospedagem com Pernoite", description: "Ambiente calmo e tranquilo, ideal para pets ansiosos.", price: 210, unit: "noite" },
    ],
    bio: "Especialista em gatos, coelhos, pássaros e répteis. Formação em técnica veterinária com 6 anos de experiência. Seu bichinho exótico está em mãos especialistas!",
    homeDescription: "Apartamento térreo silencioso com cômodos separados para diferentes tipos de pet. Ambiente com temperatura controlada para animais exóticos.",
    repeatClients: 91,
    totalBookings: 1089,
    responseRate: 100,
    memberSince: "2018",
    petSizes: ["Pequeno", "Médio"],
    features: ["Aceita gatos", "Pets exóticos", "Administra medicação", "Formação técnica veterinária"],
    reviewsList: [
      { author: "Lisa W.", initials: "LW", rating: 5, text: "A Sophie é a única pessoa em quem confio para cuidar do meu papagaio. Ela sabe exatamente como lidar com aves!", petInfo: "Papagaio-cinzento, 8 anos", date: "há 2 semanas" },
      { author: "Tom B.", initials: "TB", rating: 5, text: "Maravilhosa com nossos dois gatos. Mandou fotos fofas todos os dias.", petInfo: "2 Gatos Persas, 3 e 5 anos", date: "há 1 mês" },
    ],
    availability: { 1: "available", 2: "available", 3: "available", 4: "available", 5: "booked", 6: "booked", 7: "available", 8: "available", 9: "available", 10: "booked", 11: "available", 12: "available", 13: "available", 14: "available", 15: "booked", 16: "available", 17: "available", 18: "available", 19: "available", 20: "available", 21: "available", 22: "booked", 23: "available", 24: "available", 25: "available", 26: "available", 27: "available", 28: "available", 29: "booked", 30: "available" },
  },
  {
    id: "alex-patel",
    name: "Alex Patel",
    initials: "AP",
    rating: 4.88,
    reviews: 143,
    specialty: "Especialista em filhotes e cães idosos",
    price: 200,
    distance: 4.1,
    responseTime: "< 1 hora",
    location: "Curitiba, PR",
    badges: ["Verificado"],
    services: [
      { name: "Hospedagem com Pernoite", description: "Cuidado especializado para filhotes e cães idosos com rotina personalizada.", price: 200, unit: "noite" },
      { name: "Passeio com Cães", description: "Passeios suaves adaptados ao ritmo e necessidades do seu cão.", price: 90, unit: "passeio" },
      { name: "Creche Diurna", description: "Ciclos supervisionados de brincadeira e descanso, perfeitos para filhotes e idosos.", price: 160, unit: "dia" },
    ],
    bio: "Ex-auxiliar veterinário com paixão por filhotes e cães idosos. Entendo as necessidades únicas de cada fase da vida e ofereço planos de cuidado personalizados.",
    homeDescription: "Apartamento térreo com acesso fácil para cães idosos. Cômodos com portões de segurança para proteger filhotes.",
    repeatClients: 68,
    totalBookings: 567,
    responseRate: 95,
    memberSince: "2021",
    petSizes: ["Pequeno", "Médio", "Grande"],
    features: ["Especialista em filhotes", "Cuidado para idosos", "Administra medicação", "Acesso térreo"],
    reviewsList: [
      { author: "Karen H.", initials: "KH", rating: 5, text: "O Alex foi maravilhoso com nosso labrador de 14 anos. Muito paciente e cuidadoso!", petInfo: "Labrador, 14 anos", date: "há 3 semanas" },
    ],
    availability: { 1: "booked", 2: "booked", 3: "available", 4: "available", 5: "available", 6: "available", 7: "available", 8: "available", 9: "available", 10: "available", 11: "booked", 12: "available", 13: "available", 14: "available", 15: "available", 16: "available", 17: "booked", 18: "available", 19: "available", 20: "available", 21: "available", 22: "available", 23: "available", 24: "booked", 25: "available", 26: "available", 27: "available", 28: "available", 29: "available", 30: "available" },
  },
  {
    id: "rachel-foster",
    name: "Rachel Foster",
    initials: "RF",
    rating: 4.96,
    reviews: 401,
    specialty: "Especialista em famílias com vários pets",
    price: 250,
    distance: 1.9,
    responseTime: "< 30 min",
    location: "Pinheiros, São Paulo",
    badges: ["Verificado", "Mais Bem Avaliado", "Super Cuidador"],
    services: [
      { name: "Hospedagem com Pernoite", description: "Recebo até 3 pets da mesma família com desconto.", price: 250, unit: "noite" },
      { name: "Cuidado na Sua Casa", description: "Cuidado integral na sua casa com atualizações e fotos diárias.", price: 300, unit: "noite" },
      { name: "Passeio com Cães", description: "Passeios em grupo, ideais para famílias com vários cães.", price: 110, unit: "passeio" },
      { name: "Visitas em Casa", description: "Perfeito para casas com vários pets que precisam de visitas regulares.", price: 100, unit: "visita" },
    ],
    bio: "Cresci numa fazenda com cães, gatos, cavalos e galinhas! Sou totalmente confortável em cuidar de famílias com vários pets, garantindo atenção individual a cada um.",
    homeDescription: "Casarão amplo com jardim privativo. Dois cães residentes que adoram fazer amigos. Espaço separado e tranquilo disponível para pets tímidos.",
    repeatClients: 88,
    totalBookings: 1823,
    responseRate: 100,
    memberSince: "2017",
    petSizes: ["Pequeno", "Médio", "Grande"],
    features: ["Quintal cercado", "Desconto para vários pets", "Aceita gatos", "Tem cães residentes"],
    reviewsList: [
      { author: "Nina S.", initials: "NS", rating: 5, text: "A Rachel cuidou dos nossos 2 cães e do gato ao mesmo tempo. Os três voltaram felizes e saudáveis!", petInfo: "2 Labradores + 1 Gato", date: "há 1 semana" },
      { author: "James F.", initials: "JF", rating: 5, text: "O jardim é incrível para os cães. A Rachel é uma encantadora de pets!", petInfo: "Buldogue Francês, 2 anos", date: "há 2 semanas" },
      { author: "Olívia D.", initials: "OD", rating: 5, text: "Melhor cuidadora de pets de São Paulo, disparado. Usamos a Rachel há 3 anos.", petInfo: "Dachshund, 6 anos", date: "há 1 mês" },
    ],
    availability: { 1: "available", 2: "available", 3: "available", 4: "booked", 5: "booked", 6: "booked", 7: "available", 8: "available", 9: "available", 10: "available", 11: "available", 12: "available", 13: "available", 14: "available", 15: "available", 16: "booked", 17: "available", 18: "available", 19: "available", 20: "available", 21: "available", 22: "available", 23: "available", 24: "available", 25: "available", 26: "booked", 27: "booked", 28: "available", 29: "available", 30: "available" },
  },
];
