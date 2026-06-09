// Animated ring charts — trigger when visible
const circumference = 2 * Math.PI * 50; // r=50

function animateChart(ring) {
  const percent = parseFloat(ring.getAttribute('data-percent'));
  const offset = circumference - (percent / 100) * circumference;
  ring.style.strokeDashoffset = offset;
}

const rings = document.querySelectorAll('.ring-fill');
rings.forEach(ring => {
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
});

const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const ring = entry.target.querySelector('.ring-fill');
      if (ring) animateChart(ring);
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.chart-item').forEach(el => chartObserver.observe(el));

// Timeline fade-in
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      tlObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-card, .mvv-card').forEach(el => {
  el.classList.add('fade-in');
  tlObserver.observe(el);
});
