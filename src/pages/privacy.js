import { getNavbar, getFooter } from '../components.js';
import { initAll } from '../utils.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${getNavbar('privacy')}

  <header class="page-header">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="fade-in-up">Política de Privacidad</h1>
      <p class="text-lg mt-4 opacity-80 fade-in-up" style="transition-delay: 0.1s;">Última actualización: 26 de marzo de 2026</p>
    </div>
  </header>

  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 blog-content fade-in-up" style="transition-delay: 0.2s;">
      <h2>1. Aviso de Privacidad</h2>
      
      <h3>Responsable del tratamiento de sus datos personales</h3>
      <p>El titular del sitio web <strong>segurab.com</strong> (en adelante, "El Responsable"), con domicilio en México, es el responsable del uso y protección de sus datos personales.</p>

      <h3>Datos personales que recabamos</h3>
      <p>Para las finalidades señaladas en el presente aviso, recabamos sus datos de identificación y contacto a través de nuestro formulario en la sección de Contacto:</p>
      <ul>
        <li>Nombre completo.</li>
        <li>Correo electrónico.</li>
        <li>Número telefónico.</li>
        <li>Información adicional proporcionada en el cuerpo del mensaje.</li>
      </ul>

      <h3>Finalidades del tratamiento</h3>
      <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades primarias:</p>
      <ul>
        <li>Atender y responder a sus dudas, comentarios o solicitudes de cotización.</li>
        <li>Proveer los servicios y productos que ha solicitado.</li>
        <li>Notificarle sobre cambios en nuestros servicios.</li>
      </ul>
      <p>De manera secundaria, podríamos utilizar su información para enviarle boletines informativos o promociones, a menos que usted manifieste su negativa enviando un correo a <strong>contacto@segurab.com</strong>.</p>

      <h3>Derechos ARCO</h3>
      <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, solicitar su corrección, que los eliminemos de nuestros registros u oponerse al uso de los mismos para fines específicos. Para ejercer estos derechos, envíe una solicitud al correo: <strong>contacto@segurab.com</strong>.</p>
    </div>
  </section>

  ${getFooter()}
`;

initAll();
