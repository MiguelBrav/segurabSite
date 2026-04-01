import { getNavbar, getFooter } from '../components.js';
import { initAll, initFaqAccordion } from '../utils.js';

const app = document.getElementById('app');

const faqs = [
  {
    question: '¿Las actualizaciones son gratuitas?',
    answer: 'Las actualizaciones menores y correcciones críticas son gratuitas. Cualquier actualización que implique nuevas funcionalidades o cambios estructurales significativos será cotizada de forma independiente según los requerimientos.',
  },
  {
    question: '¿Hay soporte 24/7?',
    answer: '¡Absolutamente! Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana por correo electrónico para asistirte con cualquier pregunta o problema que puedas tener.',
  },
  {
    question: '¿Ofrecen reembolsos?',
    answer: 'Sí, ofrecemos una política de reembolso de 30 días. Si no estás satisfecho con tu compra, puedes solicitar un reembolso completo dentro de los 30 días.',
  },
];

function getFaqItem(faq, index) {
  return `
    <div class="faq-item fade-in-up" style="transition-delay: ${index * 0.05}s;">
      <button class="faq-question">
        <svg class="w-6 h-6 flex-shrink-0" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-lg">${faq.question}</span>
        <svg class="faq-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">
          ${faq.answer}
        </div>
      </div>
    </div>
  `;
}

app.innerHTML = `
  ${getNavbar('faq')}

  <div class="page-header">
    <h1 class="fade-in-up">Preguntas Frecuentes</h1>
    <p class="mt-4 text-lg fade-in-up" style="color: var(--color-text-muted); transition-delay: 0.1s;">Respuestas a las preguntas más comunes</p>
  </div>

  <section class="py-16 lg:py-24 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      ${faqs.map((faq, i) => getFaqItem(faq, i)).join('')}
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 lg:py-24" style="background: var(--color-gray-light);">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-4 fade-in-up" style="color: var(--color-dark);">¿No encontraste lo que buscabas?</h2>
      <p class="text-lg mb-8 fade-in-up" style="color: var(--color-text-muted); transition-delay: 0.1s;">Contáctanos y responderemos todas tus dudas</p>
      <a href="/contact/" class="btn-primary fade-in-up" style="transition-delay: 0.2s;">
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
initFaqAccordion();
