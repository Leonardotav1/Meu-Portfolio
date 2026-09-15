import Image_LHC from "@/public/Images/Image_LHC.jpg";

export type Project = {
  name: string;
  year: string;
  description: string;
  stack: string[];
  image?: string;
  video?: string;
  repo?: string;
  demo?: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  highlights: string[];
};

export type StackGroup = {
  group: string;
  items: string[];
};

export type Social = {
  label: string;
  url: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Education = {
  school: string;
  course: string;
  period: string;
};

export const profile = {
  name: "Leonardo Tavares",
  role: "DESENVOLVEDOR FULL STACK",
  tagline:
    "Estudante de Análise e Desenvolvimento de Sistemas focado em backend Java, Node.js e SQL — construindo soluções web com APIs REST e boas práticas.",
  location: "Santa Helena - PB",
  email: "leonardotavares656@gmail.com",
  phone: "(83) 99619-2889",
  status: "EM BUSCA DE NOVOS DESAFIOS",
  photo: "/Images/Foto.jpg",
  about: [
    "Estudante de Análise e Desenvolvimento de Sistemas no IFPB com foco em desenvolvimento backend e construção de soluções web.",
    "Experiência prática com Java, Spring Boot, Node.js, TypeScript, SQL, MongoDB e React, além de Git, GitHub e Linux. Atuei no desenvolvimento de jogos e aplicações web, trabalhando com APIs REST, organização de dados e código com atenção ao desempenho, legibilidade e boas práticas.",
  ],
};

export const education: Education[] = [
  {
    school: "IFPB — Cajazeiras",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2023 — 2027",
  },
  {
    school: "SENAI — Santa Helena",
    course: "Assistente Administrativo",
    period: "2024 — 2025",
  },
  {
    school: "ECI Elaine Soares Brasileiro",
    course: "Ensino Médio",
    period: "2019 — 2022",
  },
];

export const nav: NavItem[] = [
  { label: "01_SOBRE", href: "#sobre" },
  { label: "02_STACKS", href: "#stacks" },
  { label: "03_PROJETOS", href: "#projetos" },
  { label: "04_EXPERIENCIAS", href: "#experiencias" },
  { label: "05_CONTATO", href: "#contato" },
];

export const socials: Social[] = [
  { label: "GITHUB", url: "https://github.com/Leonardotav1" },
  {
    label: "LINKEDIN",
    url: "https://www.linkedin.com/in/leonardo-tavares-696240289",
  },
];

export const stacks: StackGroup[] = [
  {
    group: "LINGUAGENS",
    items: ["Java", "C#", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    group: "FRONTEND",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Handlebars",
      "Three.js",
    ],
  },
  {
    group: "BACKEND",
    items: ["Node.js", "Spring Boot", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    group: "FERRAMENTAS",
    items: [
      "Unity",
      "Git",
      "GitHub",
      "Linux",
      "Figma",
      "Microsoft Excel",
      "npm",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "O GUARDIÃO DAS SETE REGIÕES",
    year: "2026",
    description:
      "Jogo 2D top-down de aventura com sistemas de combate, inventário, IA de inimigos e gerenciamento de estados, aplicando lógica de programação e organização de código em Unity.",
    stack: ["Unity", "C#", "Git", "GitHub"],
    image: "",
    video: "/videos/Video_gdsr.mp4",
    repo: "https://github.com/Leonardotav1",
  },
  {
    name: "SISTEMA DE PESQUISA ELEITORAL",
    year: "",
    description:
      "Aplicação mobile para gerenciamento pesquisas eleitorais, utilizando APIs REST, banco de dados NoSQL e integração entre front-end e back-end.",
    stack: [
      "React-Native",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Git",
    ],
    image: "",
    video: "/videos/CivicSync.mp4",
    repo: "https://github.com/Leonardotav1",
  },
  {
    name: "SIMULADOR DE COLISÃO (LHC)",
    year: "",
    description:
      "Aplicação interativa para visualização de colisões de partículas, criada para facilitar a compreensão de conceitos científicos por meio de simulações 3D e visualização dinâmica.",
    stack: ["Python", "React", "Three.js", "JavaScript"],
    image: Image_LHC.src,
    video: "",
    repo: "https://github.com/Leonardotav1",
  },
];

export const experiences: Experience[] = [
  {
    period: "2025 — PRESENTE",
    role: "Desenvolvedor de Jogos",
    company: "SOMBRA 7 STUDIOS",
    highlights: [
      "Atuação no desenvolvimento de um jogo da empresa com a engine Unity, apoiando testes e evolução do produto.",
      "Desenvolvimento de scripts em C# com foco em desempenho, legibilidade e manutenção do código.",
      "Versionamento do projeto utilizando Git e GitHub.",
      "Correção de bugs e problemas relacionados a versionamento, gameplay e lógicas presentes no jogo.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Auxiliar Administrativo",
    company: "PREFEITURA DE SANTA HELENA",
    highlights: [
      "Organização de documentos, planilhas e registros administrativos utilizando Microsoft Excel, com atenção à precisão e ao controle das informações.",
      "Apoio na elaboração de relatórios e no acompanhamento de demandas, contribuindo para a rotina operacional da unidade.",
      "Suporte aos demais setores nas atividades administrativas e organização de agendas e reuniões.",
    ],
  },
];