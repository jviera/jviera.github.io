// Configuración central del sitio jvieradev
export const SITE = {
  author: 'Javier Viera',
  title: 'Javier Viera | Software Engineer',
  description: 'Portafolio, Blog, CV y pensamientos sobre tecnología y desarrollo de software.',
  url: 'https://jviera.github.io',
  avatar: '/avatar.svg',
  role: {
    es: 'Ingeniero de Software / Desarrollador',
    en: 'Software Engineer / Developer',
  },
  bio: {
    es: 'Apasionado por la arquitectura de software, tecnologías web y soluciones eficientes.',
    en: 'Passionate about software architecture, modern web technologies, and efficient solutions.',
  },
  location: 'México / Remoto',
  social: {
    github: 'https://github.com/jviera',
    linkedin: 'https://linkedin.com/in/jviera',
    twitter: 'https://x.com/jviera',
    email: 'mailto:contact@jviera.dev',
  },
  // Configuración de comentarios con Giscus (GitHub Discussions)
  giscus: {
    repo: 'jviera/jviera.github.io',
    repoId: 'R_kgDOV3EqSA',
    category: 'Announcements',
    categoryId: 'DIC_kwDOV3EqSM4DLrqP',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'es',
  },
};
