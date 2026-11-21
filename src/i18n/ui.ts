export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.blog': 'Blog',
    'nav.projects': 'Portafolio',
    'nav.cv': 'CV',
    'sidebar.location': 'Ubicación',
    'sidebar.contact': 'Contacto',
    'sidebar.follow': 'Seguir',
    'sidebar.cv_download': 'Descargar CV (PDF)',
    'blog.title': 'Pensamientos & Publicaciones',
    'blog.subtitle': 'Artículos, notas técnicas y reflexiones sobre desarrollo y tecnología.',
    'blog.read_more': 'Leer publicación',
    'blog.reading_time': 'min de lectura',
    'blog.back': '← Volver a publicaciones',
    'blog.published_on': 'Publicado el',
    'blog.comments': 'Comentarios & Discusión',
    'projects.title': 'Portafolio de Proyectos',
    'projects.subtitle': 'Una muestra de proyectos, librerías y aplicaciones desarrolladas.',
    'projects.view_code': 'Ver código',
    'projects.live_demo': 'Demo en vivo',
    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Resumen de mi trayectoria profesional, experiencia y habilidades.',
    'cv.experience': 'Experiencia Laboral',
    'cv.education': 'Educación',
    'cv.skills': 'Conocimientos & Habilidades',
    'cv.languages': 'Idiomas',
    'cv.download_button': 'Descargar versión en PDF',
    'footer.rights': 'Todos los derechos reservados.',
    'theme.toggle': 'Cambiar tema claro/oscuro',
    'lang.toggle': 'Cambiar idioma',
  },
  en: {
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Portfolio',
    'nav.cv': 'CV',
    'sidebar.location': 'Location',
    'sidebar.contact': 'Contact',
    'sidebar.follow': 'Follow',
    'sidebar.cv_download': 'Download CV (PDF)',
    'blog.title': 'Thoughts & Publications',
    'blog.subtitle': 'Articles, technical notes, and insights on development and technology.',
    'blog.read_more': 'Read post',
    'blog.reading_time': 'min read',
    'blog.back': '← Back to posts',
    'blog.published_on': 'Published on',
    'blog.comments': 'Comments & Discussion',
    'projects.title': 'Project Portfolio',
    'projects.subtitle': 'A showcase of projects, libraries, and applications developed.',
    'projects.view_code': 'View code',
    'projects.live_demo': 'Live demo',
    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Summary of my professional background, experience, and skills.',
    'cv.experience': 'Work Experience',
    'cv.education': 'Education',
    'cv.skills': 'Knowledge & Skills',
    'cv.languages': 'Languages',
    'cv.download_button': 'Download PDF Version',
    'footer.rights': 'All rights reserved.',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.toggle': 'Change language',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
