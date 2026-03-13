import { getNavbar, getFooter } from '../components.js';
import { initAll } from '../utils.js';

const blogPosts = [
  {
    id: 'blog-6',
    title: 'Feliz Año Nuevo 2026: Construyendo el Futuro con Propósito',
    excerpt: '¡Feliz Año Nuevo 2026! Un año completamente nuevo está aquí, trayendo energía fresca, nuevos desafíos e innumerables oportunidades para crecer.',
    date: '1 Enero 2026',
    color: '#6c63ff',
    image: '/happy-new-year-2026.png',
  },
  {
    id: 'blog-5',
    title: 'Búsqueda de Empleo como Desarrollador de Software en 2025: ¿Qué Realmente Funciona?',
    excerpt: 'El mercado laboral de software no es lo que era hace unos años. Despidos, congelación de contrataciones y la automatización con IA han remodelado cómo las empresas contratan.',
    date: '15 Noviembre 2025',
    color: '#3b28cc',
    image: '/software-dev-looking-for-a-job-.png',
  },
  {
    id: 'blog-4',
    title: 'Usando IA en el Desarrollo de Software: ¿Impulso de Productividad o Trampa Oculta?',
    excerpt: 'La Inteligencia Artificial se está convirtiendo rápidamente en la mejor amiga del desarrollador. Desde la generación de código hasta las pruebas automatizadas.',
    date: '20 Octubre 2025',
    color: '#5b47e0',
    image: '/software-dev-using-ia.png',
  },
  {
    id: 'blog-3',
    title: 'El Costo Oculto del Open Source: Cuando las Librerías Cambian de Licencia',
    excerpt: 'En el mundo tecnológico actual, las librerías de código abierto están en todas partes. Pero ¿qué pasa cuando una de esas librerías cambia su licencia?',
    date: '5 Septiembre 2025',
    color: '#6c63ff',
    image: '/open-source-libraries.png',
  },
  {
    id: 'blog-2',
    title: 'Feliz Año Nuevo 2025: Abraza Nuevos Proyectos y Crecimiento',
    excerpt: '¡Feliz Año Nuevo 2025! Un nuevo año trae oportunidades frescas, desafíos emocionantes y la oportunidad perfecta para explorar nuevos horizontes.',
    date: '1 Enero 2025',
    color: '#3b28cc',
    image: '/happy-new-year-2025.png',
  },
  {
    id: 'blog-1',
    title: 'El Viaje de un Desarrollador Backend',
    excerpt: 'Ser desarrollador backend es más que solo escribir código—se trata de resolver problemas, asegurar rendimiento y crear la columna vertebral de aplicaciones increíbles.',
    date: '10 Diciembre 2024',
    color: '#5b47e0',
    image: '/developers-working.png',
  },
];

function getBlogCard(post, index) {
  return `
    <a href="/blog/${post.id}/" class="blog-card fade-in-up" style="transition-delay: ${index * 0.05}s;">
      <div class="h-48 overflow-hidden">
        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div class="blog-card-body">
        <div class="text-xs font-medium mb-2" style="color: ${post.color};">${post.date}</div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <span class="feature-link text-sm">
          Leer Más
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </span>
      </div>
    </a>
  `;
}

const app = document.getElementById('app');

app.innerHTML = `
  ${getNavbar('blog')}

  <div class="page-header">
    <h1 class="fade-in-up">Últimas Noticias</h1>
    <p class="mt-4 text-lg fade-in-up" style="color: var(--color-text-muted); transition-delay: 0.1s;">Artículos sobre desarrollo, tecnología y más</p>
  </div>

  <section class="py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${blogPosts.map((post, i) => getBlogCard(post, i)).join('')}
      </div>
    </div>
  </section>

  ${getFooter()}
`;

initAll();
