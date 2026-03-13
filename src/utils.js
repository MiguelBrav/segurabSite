// Scroll observer para animaciones
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
}

// Navbar scroll effect
export function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile menu
export function initMobileMenu() {
  window.toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('hamburger-btn');
    menu.classList.toggle('open');
    btn.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  };

  window.closeMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('hamburger-btn');
    menu.classList.remove('open');
    btn.classList.remove('active');
    document.body.style.overflow = '';
  };
}

// FAQ accordion
export function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach((el) => {
        el.classList.remove('active');
        el.querySelector('.faq-answer').classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
        answer.classList.add('open');
      }
    });
  });
}

// Contact form
export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    const formData = {
      apiKey: "39164410-15d8-4c18-8ca4-79f35313a54d",
      name: form.querySelector('#name').value,
      contact: `${form.querySelector('#email').value} | Tel: ${form.querySelector('#phone').value}`,
      message: form.querySelector('#message').value,
    };

    try {
      const res = await fetch('https://landapp.segurab.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        submitBtn.textContent = '✓ ¡Enviado!';
        submitBtn.style.background = '#10b981';
        form.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      submitBtn.textContent = '✗ Error, intenta de nuevo';
      submitBtn.style.background = '#ef4444';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}

// Init all
export function initAll() {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();

  // Dynamic copyright year
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
}
