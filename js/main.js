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

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
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
