# jvieradev • Sitio Web Personal & Portafolio Académico

Espacio web personal inspirado en [AcademicPages](https://academicpages.github.io), construido con tecnologías modernas para máxima velocidad, accesibilidad y facilidad de mantenimiento.

Configurado y optimizado para publicarse en **`https://jviera.github.io`** mediante **GitHub Pages** y **GitHub Actions**.

---

## 🚀 Características Principales

* **Estructura tipo AcademicPages**: Barra lateral (*Sidebar*) con fotografía de perfil, biografía, enlaces a redes sociales y datos de contacto; barra de navegación superior fija (*Header*).
* **Internacionalización (i18n)**: Soporte bilingüe completo (**Español** e **Inglés**) con selector instantáneo de idioma (`/` y `/en/`).
* **Modo Claro / Oscuro**: Detección automática de la preferencia del sistema operativo y selector manual con persistencia en `localStorage` (sin parpadeos / FOUC).
* **Comentarios en Publicaciones**: Integración nativa con **Giscus** (GitHub Discussions). Seguro, libre de publicidad y sincronizado con el tema claro/oscuro.
* **Blog / Pensamientos**: Redacción en **Markdown (`.md`)** con cálculo de tiempo de lectura, fechas y etiquetas.
* **Portafolio de Proyectos**: Muestra proyectos destacados con etiquetas tecnológicas, enlaces a repositorios y demos en vivo.
* **Curriculum Vitae (CV)**: Trayectoria profesional interactiva (experiencia, educación, habilidades, idiomas) con botón para descargar PDF.
* **Despliegue Continuo (CI/CD)**: Flujo de trabajo en `.github/workflows/deploy.yml` que compila y publica automáticamente a GitHub Pages en cada `git push`.

---

## 🛠️ Tecnologías

* **[Astro](https://astro.build/)**: Framework web moderno centrado en contenido y rendimiento estático.
* **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilos utilitarios rápidos y modo oscuro nativo.
* **[Giscus](https://giscus.app/)**: Sistema de comentarios basado en GitHub Discussions.
* **[GitHub Pages & Actions](https://pages.github.com/)**: Alojamiento y despliegue continuo 100% gratuito.

---

## 💻 Desarrollo Local

Para correr el sitio en tu computadora localmente:

```bash
# Instalar dependencias (si no lo has hecho aún)
npm install

# Iniciar servidor de desarrollo con recarga en vivo
npm run dev
```

Abre tu navegador en `http://localhost:4321`.

Para compilar el sitio estático para producción:

```bash
npm run build
```

---

## ⚙️ Configuración y Personalización

### 1. Datos personales y enlaces sociales
Edita el archivo **`src/config.ts`**:
* Nombre, rol profesional y biografía (en español e inglés).
* Ubicación y enlaces de redes (GitHub, LinkedIn, X, email).
* Reemplaza el avatar en `public/avatar.svg` (o usa tu propia foto `public/avatar.jpg`).

### 2. Activar comentarios (Giscus)
Para que los visitantes puedan comentar en tus publicaciones:
1. Ve a tu repositorio en GitHub: `https://github.com/jviera/jviera.github.io`.
2. En la pestaña **Settings**, marca la casilla **Discussions** para activarlas.
3. Entra a [giscus.app](https://giscus.app) y escribe `jviera/jviera.github.io`.
4. Elige la categoría de discusión (ej. *Announcements* o *General*).
5. Copia el `data-repo-id` y el `data-category-id` generados y pégalos en `src/config.ts`:
   ```ts
   giscus: {
     repo: 'jviera/jviera.github.io',
     repoId: 'R_kgDO...',      // Tu ID de repo
     category: 'Announcements',
     categoryId: 'DIC_kwDO...', // Tu ID de categoría
     // ...
   }
   ```

### 3. Agregar nuevos artículos y proyectos
* **Nuevo artículo en el blog**: Crea un archivo `.md` en `src/content/blog/mi-nuevo-post.md` (o con `lang: "en"` para inglés).
* **Nuevo proyecto en el portafolio**: Crea un archivo `.md` en `src/content/projects/mi-proyecto.md`.

---

## 🌐 Publicación en `jviera.github.io`

Para publicar este proyecto en tu dominio de GitHub Pages:

1. Crea un repositorio público en GitHub llamado exactamente:
   ```
   jviera.github.io
   ```
2. Inicializa git y sube tu código:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit personal academic portfolio"
   git branch -M main
   git remote add origin https://github.com/jviera/jviera.github.io.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings** > **Pages** de tu repositorio:
   * En **Source**, selecciona: **GitHub Actions**.
4. ¡Listo! El workflow de GitHub Actions compilará tu sitio y estará en línea en:
   👉 **`https://jviera.github.io`**
