// Configuración central del sitio jvieradev
export const SITE = {
  author: 'José Viera',
  title: 'José Viera | Ingeniero de Software',
  description: 'Portafolio, Blog, CV y pensamientos sobre ingeniería de software, arquitectura y bases de datos.',
  url: 'https://jviera.github.io',
  avatar: '/avatar.jpg',
  role: {
    es: 'Ingeniero de Software | Especialista en Bases de Datos',
    en: 'Software Engineer | Database Specialist',
  },
  bio: {
    es: 'Ingeniero de Software egresado del Instituto Tecnológico de Toluca con especialidad en Bases de Datos. Apasionado por la arquitectura de datos, el rendimiento y soluciones de software escalables.',
    en: 'Software Engineer graduated from Instituto Tecnológico de Toluca specialized in Databases. Passionate about data architecture, performance optimization, and scalable software solutions.',
  },
  location: 'Toluca, México / Remoto',
  social: {
    github: 'https://github.com/jviera',
    linkedin: 'https://www.linkedin.com/in/jvieradev/',
    twitter: 'https://x.com/jvieradev',
    email: 'mailto:jviera.dev@gmail.com',
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
