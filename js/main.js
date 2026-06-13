// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// WhatsApp tooltip close
const waClose = document.getElementById('waClose');
if (waClose) {
  waClose.addEventListener('click', () => {
    document.getElementById('waTooltip').style.display = 'none';
  });
}

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
