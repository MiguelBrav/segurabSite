import { getNavbar, getFooter } from '../components.js';
import { initAll } from '../utils.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${getNavbar('precios')}

  <div class="page-header">
    <h1 class="fade-in-up">Precios</h1>
    <p class="mt-4 text-lg fade-in-up" style="color: var(--color-text-muted); transition-delay: 0.1s;">Planes flexibles para cada necesidad</p>
  </div>

  <section class="py-16 lg:py-24" style="background: linear-gradient(180deg, #f0f2ff 0%, white 100%);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        <!-- Básico -->
        <div class="pricing-card fade-in-up text-center">
          <h3 class="text-xl font-bold mb-2" style="color: var(--color-dark);">Básico</h3>
          <div class="my-6">
            <span class="pricing-amount">$5</span>
            <span class="text-sm font-semibold" style="color: var(--color-primary);">USD</span>
            <span class="text-sm" style="color: var(--color-text-muted);">/ único</span>
          </div>
          <p class="text-sm font-semibold mb-4" style="color: var(--color-text-muted);">Servicio Disponible (Elige uno)</p>
          <ul class="text-sm space-y-3 mb-8" style="color: var(--color-text-muted);">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Landing Page
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              API Básica
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Mentoría
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Hosting de sitios básicos
            </li>
          </ul>
          <a href="/contact/" class="btn-outline w-full justify-center">Comenzar gratis</a>
        </div>

        <!-- Profesional -->
        <div class="pricing-card featured fade-in-up text-center" style="transition-delay: 0.1s;">
          <h3 class="text-xl font-bold mb-2" style="color: var(--color-dark);">Profesional</h3>
          <div class="my-6">
            <span class="pricing-amount">$50</span>
            <span class="text-sm font-semibold" style="color: var(--color-primary);">USD</span>
            <span class="text-sm" style="color: var(--color-text-muted);">/ único</span>
          </div>
          <p class="text-sm font-semibold mb-4" style="color: var(--color-text-muted);">Servicio Disponible (Elige uno)</p>
          <ul class="text-sm space-y-3 mb-8" style="color: var(--color-text-muted);">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Sitio Web
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              API a tus requerimientos
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Solo hosting
            </li>
          </ul>
          <a href="/contact/" class="btn-primary w-full justify-center">Comenzar</a>
        </div>

        <!-- Business -->
        <div class="pricing-card fade-in-up text-center" style="transition-delay: 0.2s;">
          <h3 class="text-xl font-bold mb-2" style="color: var(--color-dark);">Business</h3>
          <div class="my-6">
            <span class="pricing-amount">$800</span>
            <span class="text-sm font-semibold" style="color: var(--color-primary);">USD</span>
            <span class="text-sm" style="color: var(--color-text-muted);">/ único</span>
          </div>
          <p class="text-sm font-semibold mb-4" style="color: var(--color-text-muted);">Servicio Disponible (Elige uno)</p>
          <ul class="text-sm space-y-3 mb-8" style="color: var(--color-text-muted);">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Desarrollo a la Medida
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              Servicios de Tiempo Crítico
            </li>
          </ul>
          <a href="/contact/" class="btn-outline w-full justify-center">Comenzar</a>
        </div>

      </div>
    </div>
  </section>

  <!-- Need a larger plan? -->
  <section class="py-16 lg:py-24 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="fade-in-up">
          <div class="p-8 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, #f0f2ff, #e8ecff);">
            <img src="/pricing-person.png" alt="Planes Personalizados" class="w-2/3 h-auto drop-shadow-xl" />
          </div>
        </div>
        <div class="fade-in-up" style="transition-delay: 0.1s;">
          <h2 class="feature-title">¿Necesitas un plan más grande?</h2>
          <p class="feature-text">
            ¿Buscas más funciones o límites más altos? Nuestros planes más grandes ofrecen capacidades mejoradas para satisfacer las necesidades crecientes de tu negocio. Contáctanos hoy para discutir cómo podemos ayudarte a escalar.
          </p>
          <a href="/contact/" class="btn-primary">
            Contáctanos
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <div class="mt-8 pt-8 border-t fade-in-up" style="border-color: rgba(0,0,0,0.05); transition-delay: 0.2s;">
            <p class="text-sm font-medium mb-2" style="color: var(--color-primary);">Información Extra</p>
            <p class="text-base mb-4" style="color: var(--color-text-muted);">
              ¿Quieres conocer más detalles técnicos sobre lo que ofrecemos? Revisa nuestro catálogo completo de servicios.
            </p>
            <a href="https://servicios.segurab.com/" target="_blank" class="inline-flex items-center gap-2 font-semibold hover:underline" style="color: var(--color-primary);">
              Revisar Servicios
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  ${getFooter()}
`;

initAll();
