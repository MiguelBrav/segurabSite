import { getNavbar, getFooter } from '../components.js';
import { initAll } from '../utils.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${getNavbar('terms')}

  <header class="page-header">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="fade-in-up">Términos y Condiciones</h1>
      <p class="text-lg mt-4 opacity-80 fade-in-up" style="transition-delay: 0.1s;">Última actualización: 26 de marzo de 2026</p>
    </div>
  </header>

  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 blog-content fade-in-up" style="transition-delay: 0.2s;">
      <h2>1. Aceptación de los Términos</h2>
      <p>Al acceder y utilizar el sitio web <strong>https://segurab.com</strong>, el usuario acepta estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con ellos, le sugerimos abstenerse de utilizar el sitio.</p>

      <h2>2. Uso del Sitio y Servicios</h2>
      <p>El contenido de este sitio es para información general y uso personal relacionado con los servicios de desarrollo y consultoría ofrecidos. Queda prohibido el uso de la información del sitio para fines ilícitos o que dañen la infraestructura tecnológica de <strong>segurab.com</strong>.</p>

      <h2>3. Precisión de la Información</h2>
      <p>Los precios y descripciones mostrados en la sección de <strong>https://segurab.com/pricing/</strong> son informativos y pueden variar según los requerimientos técnicos finales de cada proyecto. No constituyen una oferta contractual obligatoria hasta que se formalice un presupuesto por escrito y sea aceptado por ambas partes.</p>

      <h2>4. Propiedad Intelectual</h2>
      <p>Todo el contenido, código fuente, logotipos y diseños presentes en este sitio son propiedad de El Responsable o de sus respectivos licenciantes y están protegidos por las leyes de propiedad intelectual en México.</p>

      <h2>5. Limitación de Responsabilidad</h2>
      <p><strong>segurab.com</strong> no será responsable por daños derivados del uso o la imposibilidad de uso del sitio, incluyendo fallas en el servidor o transmisión de virus, aunque se mantienen protocolos de seguridad activos.</p>

      <h2>6. Legislación Aplicable</h2>
      <p>Para la interpretación y cumplimiento de estos términos, las partes se someten a las leyes aplicables en México.</p>
    </div>
  </section>

  ${getFooter()}
`;

initAll();
