import { getNavbar, getFooter } from '../components.js';
import { initAll } from '../utils.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${getNavbar('inicio')}

  <!-- Hero -->
  <section class="hero-section">
    <div class="floating-shape w-64 h-64 top-20 -left-32 opacity-20" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent));"></div>
    <div class="floating-shape w-48 h-48 bottom-20 -right-24 opacity-15" style="background: linear-gradient(135deg, var(--color-accent), var(--color-primary)); animation-delay: -3s;"></div>
    <div class="relative z-10 max-w-4xl mx-auto px-4">
      <h1 class="hero-title fade-in-up">
        Supera Tus Desafíos en<br>
        <span style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Desarrollo Web</span>
      </h1>
      <p class="hero-subtitle fade-in-up" style="transition-delay: 0.1s;">
        Nos especializamos en resolver problemas complejos de desarrollo web con soluciones personalizadas que mejoran el rendimiento y la experiencia de usuario.
      </p>
      <div class="fade-in-up" style="transition-delay: 0.2s;">
        <a href="/contact/" class="btn-primary text-base px-8 py-4">
          Contáctanos
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
    <!-- Illustration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
      <img src="/banner.png" alt="SeguraB Development" class="w-full h-auto opacity-90 drop-shadow-2xl" />
    </div>
  </section>

  <!-- Servicios -->
  <section class="py-20 lg:py-28 bg-white" id="servicios">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title fade-in-up">Algo Que Necesitas Saber</h2>
      <p class="section-subtitle fade-in-up">Nuestros servicios principales para impulsar tu negocio</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="service-card fade-in-up">
          <div class="icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3>Código Limpio</h3>
          <p>Garantiza código mantenible, bien estructurado y libre de errores</p>
        </div>
        <div class="service-card fade-in-up" style="transition-delay: 0.05s;">
          <div class="icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3>Orientado a Servicios</h3>
          <p>Diseño de software flexible y escalable basado en servicios</p>
        </div>
        <div class="service-card fade-in-up" style="transition-delay: 0.1s;">
          <div class="icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3>Servicio 24h</h3>
          <p>Soporte las 24 horas para operaciones continuas</p>
        </div>
        <div class="service-card fade-in-up" style="transition-delay: 0.15s;">
          <div class="icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h3>Mentoría</h3>
          <p>Orientación para ayudar a mejorar habilidades y fomentar el crecimiento</p>
        </div>
        <div class="service-card fade-in-up" style="transition-delay: 0.2s;">
          <div class="icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3>Respuesta Rápida</h3>
          <p>Disfruta de un sitio web ultrarrápido que carga rápidamente con una experiencia fluida</p>
        </div>
        <div class="service-card fade-in-up" style="transition-delay: 0.25s;">
          <div class="icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
          </div>
          <h3>Soporte de Despliegue</h3>
          <p>Asistencia con despliegue fluido de aplicaciones y resolución de problemas</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature 1: Landing Page -->
  <section class="feature-section" style="background: var(--color-gray-light);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="fade-in-up">
          <h2 class="feature-title">Landing Page</h2>
          <p class="feature-text">
            Una página de aterrizaje elegante y profesional diseñada para captar la atención y convertir visitantes en clientes. Perfecta para mostrar tu negocio, productos o servicios con un llamado a la acción claro.
          </p>
          <a href="/contact/" class="feature-link">
            Descúbrelo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
        <div class="fade-in-up" style="transition-delay: 0.1s;">
          <div class="feature-image p-8 flex items-center justify-center" style="background: linear-gradient(135deg, #f0f2ff, #e8ecff);">
            <img src="/undraw_landing_new_pboa.png" alt="Landing Page" class="w-full h-auto drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature 2: API -->
  <section class="feature-section bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 fade-in-up" style="transition-delay: 0.1s;">
          <div class="feature-image p-8 flex items-center justify-center" style="background: linear-gradient(135deg, #f0f2ff, #e0e4ff);">
            <img src="/undraw_Programming_re_kg9v.png" alt="API Development" class="w-full h-auto drop-shadow-lg" />
          </div>
        </div>
        <div class="order-1 lg:order-2 fade-in-up">
          <h2 class="feature-title">API</h2>
          <p class="feature-text">
            Una API robusta y escalable que permite una integración perfecta con tus sistemas. Ideal para automatizar procesos, recuperar datos o conectar con servicios de terceros.
          </p>
          <a href="/contact/" class="feature-link">
            Descúbrelo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature 3: Personalizado -->
  <section class="feature-section" style="background: var(--color-gray-light);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="fade-in-up">
          <h2 class="feature-title">Personalizado</h2>
          <p class="feature-text">
            Soluciones personalizadas adaptadas a tus necesidades específicas. Ya sea un sitio web, una aplicación o cualquier otro servicio, trabajamos contigo para hacer tu visión única realidad.
          </p>
          <a href="/contact/" class="feature-link">
            Descúbrelo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
        <div class="fade-in-up" style="transition-delay: 0.1s;">
          <div class="feature-image p-8 flex items-center justify-center" style="background: linear-gradient(135deg, #f0f2ff, #e8ecff);">
            <img src="/undraw_Solution_mindset_re_57bf.png" alt="Custom Solutions" class="w-full h-auto drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience -->
  <section class="py-20 lg:py-28 bg-white text-center">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold fade-in-up" style="color: var(--color-dark);">
        Experimenta el<br>
        <span style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Desarrollo de Software</span>
      </h2>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="max-w-4xl mx-auto px-4 fade-in-up">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
      <p class="text-lg text-white/80 mb-8">Contáctanos hoy para discutir cómo podemos ayudarte.</p>
      <a href="/contact/" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style="color: var(--color-primary);">
        Contáctanos
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </section>

  ${getFooter()}
`;

initAll();
