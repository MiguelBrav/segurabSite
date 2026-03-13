import { getNavbar, getFooter } from '../components.js';
import { initAll } from '../utils.js';
import { blogData } from '../blog-data.js';

export function renderBlogPost(slug) {
  const post = blogData[slug];
  if (!post) {
    document.getElementById('app').innerHTML = '<h1>Post no encontrado</h1>';
    return;
  }

  const app = document.getElementById('app');

  app.innerHTML = `
    ${getNavbar('blog')}

    <div class="page-header">
      <div class="max-w-3xl mx-auto px-4">
        <div class="fade-in-up">
          <a href="/blog/" class="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors duration-200 hover:gap-3" style="color: var(--color-primary);">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Volver al Blog
          </a>
          <p class="text-sm font-medium mb-3" style="color: var(--color-primary);">${post.date}</p>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style="color: var(--color-dark);">${post.title}</h1>
        </div>
      </div>
    </div>

    <article class="py-16 lg:py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-10 overflow-hidden rounded-2xl shadow-xl fade-in-up">
          <img src="${post.image}" alt="${post.title}" class="w-full h-auto object-cover" />
        </div>
        <div class="blog-content fade-in-up">
          ${post.content}
        </div>
      </div>
    </article>

    <!-- CTA -->
    <section class="py-16" style="background: var(--color-gray-light);">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 fade-in-up" style="color: var(--color-dark);">¿Te gustó este artículo?</h2>
        <p class="text-lg mb-8 fade-in-up" style="color: var(--color-text-muted); transition-delay: 0.1s;">Explora más contenido en nuestro blog</p>
        <a href="/blog/" class="btn-primary fade-in-up" style="transition-delay: 0.2s;">
          Ver Más Artículos
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </section>

    ${getFooter()}
  `;

  initAll();
}
