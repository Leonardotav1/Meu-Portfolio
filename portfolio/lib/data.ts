export type Project = {
  name: string;
  year: string;
  description: string;
  stack: string[];
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

export const profile = {
  name: "SEU NOME",
  role: "DESENVOLVEDOR FULL-STACK",
  tagline: "Transformando café em código desde o século passado.",
  location: "Brasil",
  email: "voce@email.com",
  status: "EM BUSCA DE NOVOS DESAFIOS",
  about: [
    "Linha sobre você: apresente quem é, sua área e o que te move.",
    "Linha sobre você: fale da sua experiência e do que você entrega bem.",
  ],
};

export const nav: NavItem[] = [
  { label: "01_SOBRE", href: "#sobre" },
  { label: "02_STACKS", href: "#stacks" },
  { label: "03_PROJETOS", href: "#projetos" },
  { label: "04_EXPERIENCIAS", href: "#experiencias" },
  { label: "05_CONTATO", href: "#contato" },
];

export const socials: Social[] = [
  { label: "GITHUB", url: "https://github.com/" },
  { label: "LINKEDIN", url: "https://www.linkedin.com/" },
];

export const stacks: StackGroup[] = [
  {
    group: "FRONTEND",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "BACKEND",
    items: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "REST / GraphQL"],
  },
  {
    group: "FERRAMENTAS",
    items: ["Git", "Docker", "Linux", "Figma", "Vercel"],
  },
];

export const projects: Project[] = [
  {
    name: "PROJETO 01",
    year: "2025",
    description:
      "Sistema web que resolve um problema real. Substitua pela descrição do seu projeto e ajuste a stack.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    name: "PROJETO 02",
    year: "2024",
    description:
      "Dashboard com visualização de dados e relatórios. Substitua pela descrição do seu projeto.",
    stack: ["React", "Node.js", "PostgreSQL"],
    repo: "https://github.com/",
  },
  {
    name: "PROJETO 03",
    year: "2024",
    description:
      "Aplicativo ou API de uso pessoal. Substitua pela descrição do seu projeto.",
    stack: ["NestJS", "Prisma", "Docker"],
    repo: "https://github.com/",
  },
];

export const experiences: Experience[] = [
  {
    period: "2022 — ATUAL",
    role: "Desenvolvedor FULL-STACK",
    company: "EMPRESA X",
    highlights: [
      "Descreva a sua principal entrega e impacto no negócio.",
      "Descreva a stack utilizada e o tamanho da equipe.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Desenvolvedor JÚNIOR",
    company: "EMPRESA Y",
    highlights: [
      "Descreva as responsabilidades e projetos que assumiu.",
    ],
  },
];