// Page transitions
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('click', e => {
  const link = e.target.closest('a[href]');
  if (!link || link.target === '_blank') return;
  try {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && !url.hash) return;
    if (url.hash && url.pathname === location.pathname) return;
  } catch { return; }

  e.preventDefault();
  const dest = link.href;
  document.body.classList.add('leaving');
  setTimeout(() => { location.href = dest; }, 260);
});

// Cuando el navegador restaura la página desde el BFCache (botón atrás/adelante),
// quita la clase "leaving" para que el body no quede invisible.
window.addEventListener('pageshow', e => {
  if (e.persisted) {
    document.body.classList.remove('leaving');
  }
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mantiene sincronizada la altura real del navbar para compensar heroes
const navbar = document.getElementById('navbar');
const syncNavbarHeight = () => {
  if (!navbar) return;
  const height = Math.ceil(navbar.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--navbar-height', `${height}px`);
};

if (navbar) {
  syncNavbarHeight();
  window.addEventListener('load', syncNavbarHeight);
  window.addEventListener('resize', syncNavbarHeight);
  if ('ResizeObserver' in window) {
    new ResizeObserver(syncNavbarHeight).observe(navbar);
  }
}

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navItems = navLinks ? Array.from(navLinks.querySelectorAll('a')) : [];

navItems.forEach((item, index) => {
  item.style.setProperty('--nav-item-delay', `${index * 45}ms`);
});

const hasMainHero = Boolean(document.querySelector('.hero'));
const updateNavbarState = () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', !hasMainHero || window.scrollY > 16);
};

updateNavbarState();
window.addEventListener('scroll', updateNavbarState, { passive: true });

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  syncNavbarHeight();
});
navItems.forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// WhatsApp tooltip close
const waClose = document.getElementById('waClose');
if (waClose) {
  waClose.addEventListener('click', () => {
    document.getElementById('waTooltip').style.display = 'none';
  });
}

// Semi-automatic snap carousel helper (mobile only)
function initSnapCarousel(container, selector, interval) {
  if (!container || window.innerWidth > 767) return;
  const items = Array.from(container.querySelectorAll(selector));
  let index = 0;
  let timer;

  function next() {
    index = (index + 1) % items.length;
    const card = items[index];
    const offset = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: offset, behavior: 'smooth' });
  }

  function start() { return setInterval(next, interval); }

  timer = start();
  container.addEventListener('touchstart', () => clearInterval(timer), { passive: true });
  container.addEventListener('touchend',   () => { timer = start(); });
}

initSnapCarousel(document.querySelector('.hero .carousel-viewport'), '.service-card',  3000);
initSnapCarousel(document.querySelector('.reasons-grid'),            '.reason-card',   3200);
initSnapCarousel(document.querySelector('.partners-grid'),           '.partner-logo-wrap', 2800);
initSnapCarousel(document.querySelector('.mvv-grid'),                '.mvv-card',      3500);

// Scroll reveal
const revealObserver = prefersReducedMotion ? null : new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

const registerReveal = (selector, className = 'reveal-up', delayStep = 70, maxDelay = 320) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.classList.add(className);
    el.style.setProperty('--reveal-delay', `${Math.min(index * delayStep, maxDelay)}ms`);

    if (prefersReducedMotion) {
      el.classList.add('visible');
      return;
    }

    revealObserver.observe(el);
  });
};

registerReveal('.section-header, .whyus-left, .partners-label, .contacto-info, .contacto-form-wrap, .map-wrap, .quote-contact-box, .form-card, .about-text, .about-image-wrap, .contact-banner-inner', 'reveal-up', 80, 180);
registerReveal('.hero-stats .stat-card, .products-grid .product-card, .reasons-grid .reason-card, .services-grid .service-card, .info-items .info-item, .chart-item, .timeline-card', 'reveal-up', 75, 300);
registerReveal('.partners-grid .partner-logo-wrap, .testimonials-grid .testimonial-card, .mvv-grid .mvv-card, .cta-strip-inner > *', 'reveal-scale', 85, 220);
