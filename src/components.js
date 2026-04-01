export function getNavbar(activePage = 'inicio') {
  const links = [
    { name: 'Inicio', href: '/', id: 'inicio' },
    { name: 'Blog', href: '/blog/', id: 'blog' },
    { name: 'Precios', href: '/pricing/', id: 'precios' },
    { name: 'Contacto', href: '/contact/', id: 'contacto' },
    { name: 'FAQ', href: '/faq/', id: 'faq' },
  ];

  const navLinks = links
    .map(
      (l) =>
        `<a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}">${l.name}</a>`
    )
    .join('');

  const mobileLinks = links
    .map(
      (l) =>
        `<a href="${l.href}" class="text-2xl font-semibold ${activePage === l.id ? 'text-primary' : 'text-dark'} transition-colors duration-200 hover:text-primary" onclick="closeMobileMenu()">${l.name}</a>`
    )
    .join('');

  return `
    <nav class="navbar" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" class="flex items-center">
          <img src="/logo.png" alt="SEGURAB" class="h-9" />
        </a>
        <div class="hidden md:flex items-center gap-8">
          ${navLinks}
        </div>
        <div class="flex items-center gap-4">
          <a href="/contact/" class="btn-primary hidden md:inline-flex">Comenzar</a>
          <button class="hamburger" id="hamburger-btn" aria-label="Menú" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinks}
      <a href="/contact/" class="btn-primary mt-4" onclick="closeMobileMenu()">Comenzar</a>
    </div>
  `;
}

export function getFooter() {
  return `
    <footer class="footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 class="text-lg font-bold mb-4" style="color: var(--color-dark);">Consulta</h4>
            <div class="flex flex-col gap-2">
              <a href="/pricing/" class="footer-link">Precios</a>
              <a href="/" class="footer-link">Inicio Rápido</a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-4" style="color: var(--color-dark);">Blog</h4>
            <div class="flex flex-col gap-2">
              <a href="/blog/" class="footer-link">Entradas</a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-4" style="color: var(--color-dark);">Soporte</h4>
            <div class="flex flex-col gap-2">
              <a href="/faq/" class="footer-link">FAQ</a>
              <a href="/privacy/" class="footer-link">Política de Privacidad</a>
              <a href="/terms/" class="footer-link">Términos y Condiciones</a>
            </div>
          </div>
          <div>
            <a href="/" class="flex items-center mb-4">
              <img src="/logo.png" alt="SEGURAB" class="h-9" />
            </a>
            <p class="text-sm mb-4" style="color: var(--color-text-muted);">Copyright © <span id="copyright-year">2026</span> - Segurab. Todos los derechos reservados.</p>
            <div class="flex items-center gap-3">
              <a href="mailto:contacto@segurab.com" class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 hover:scale-110" style="border-color: var(--color-primary); color: var(--color-primary);" aria-label="Email">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/_segurab/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 hover:scale-110" style="border-color: var(--color-primary); color: var(--color-primary);" aria-label="Instagram">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t mt-10 pt-6 text-center" style="border-color: rgba(0,0,0,0.1);">
          <p class="text-sm" style="color: var(--color-text-muted);">Diseñado por <a href="https://segurab.com" class="font-semibold hover:underline" style="color: var(--color-primary);">Segurab</a></p>
        </div>
      </div>
    </footer>
  `;
}
