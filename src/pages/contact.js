import { getNavbar, getFooter } from '../components.js';
import { initAll, initContactForm } from '../utils.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${getNavbar('contacto')}

  <div class="page-header">
    <h1 class="fade-in-up">Contáctanos</h1>
    <p class="mt-4 text-lg fade-in-up" style="color: var(--color-text-muted); transition-delay: 0.1s;">Estamos aquí para ayudarte</p>
  </div>

  <section class="py-16 lg:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Info -->
        <div class="fade-in-up">
          <h2 class="feature-title">¡Contáctanos para Más Información!</h2>
          <div class="mb-8 overflow-hidden rounded-2xl shadow-lg">
            <img src="/contact-us.png" alt="Contacto SeguraB" class="w-full h-auto object-cover" />
          </div>
          <p class="feature-text">
            Nos encantaría saber de ti. Si tienes alguna pregunta, sugerencia o necesitas soporte, no dudes en comunicarte. Ya sea que busques más información sobre nuestros servicios, estamos aquí para ayudarte.
          </p>
          <div class="space-y-4 mt-8">
            <div class="flex items-center gap-4 p-4 rounded-xl" style="background: var(--color-gray-light);">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent));">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider" style="color: var(--color-text-muted);">Correo</p>
                <a href="mailto:contacto@segurab.com" class="text-sm font-medium hover:underline" style="color: var(--color-primary);">contacto@segurab.com</a>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-xl" style="background: var(--color-gray-light);">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent));">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider" style="color: var(--color-text-muted);">Instagram</p>
                <a href="https://www.instagram.com/_segurab/" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:underline" style="color: var(--color-primary);">@_segurab</a>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-xl" style="background: var(--color-gray-light);">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent));">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider" style="color: var(--color-text-muted);">Bluesky</p>
                <a href="https://bsky.app/profile/segurab.bsky.social" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:underline" style="color: var(--color-primary);">@segurab.bsky.social</a>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-xl" style="background: var(--color-gray-light);">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent));">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider" style="color: var(--color-text-muted);">X (Twitter)</p>
                <a href="https://x.com/segurab_" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:underline" style="color: var(--color-primary);">@segurab_</a>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-xl" style="background: var(--color-gray-light);">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent));">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider" style="color: var(--color-text-muted);">Ubicación</p>
                <p class="text-sm font-medium" style="color: var(--color-dark);">México</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="fade-in-up" style="transition-delay: 0.1s;">
          <form id="contact-form" class="contact-form space-y-5 p-8 rounded-2xl" style="background: var(--color-gray-light);">
            <div>
              <label for="name" class="block text-sm font-medium mb-2" style="color: var(--color-dark);">Nombre Completo</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" required />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2" style="color: var(--color-dark);">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" required />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium mb-2" style="color: var(--color-dark);">Teléfono</label>
              <input type="tel" id="phone" name="phone" placeholder="Tu número de teléfono" required />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2" style="color: var(--color-dark);">Mensaje</label>
              <textarea id="message" name="message" rows="5" placeholder="Cuéntanos más..." required></textarea>
            </div>
            <button type="submit" class="btn-primary w-full justify-center text-base py-4">
              Enviar Mensaje
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  ${getFooter()}
`;

initAll();
initContactForm();
