// Page transitions
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
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  syncNavbarHeight();
});
navLinks.querySelectorAll('a').forEach(a => {
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

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.product-card, .reason-card, .testimonial-card, .stat-card, .section-header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
