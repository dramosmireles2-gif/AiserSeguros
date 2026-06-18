const track    = document.getElementById('carouselTrack');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const dotsWrap = document.getElementById('carouselDots');


if (!track) { /* not on homepage */ }
else {
  const cards    = Array.from(track.children);
  let current    = 0;

  function visibleCount() {
    if (window.innerWidth >= 1400) return 4;
    if (window.innerWidth >= 1100) return 4;
    if (window.innerWidth >= 768)  return 3;
    if (window.innerWidth <= 767)  return 1;
    return 2;
  }

  function cardWidth() {
    return cards[0].getBoundingClientRect().width + 20; // gap=20
  }

  function totalSlides() {
    return Math.ceil(cards.length / visibleCount());
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalSlides(); i++) {
      const d = document.createElement('button');
      d.className = 'carousel-dot' + (i === current ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, totalSlides() - 1));
    const offset = current * visibleCount() * cardWidth();
    track.style.transform = `translateX(-${offset}px)`;
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current >= totalSlides() - 1;
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Touch/swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });

  // Autoplay
  function startAutoplay() {
    return setInterval(() => {
      goTo(current >= totalSlides() - 1 ? 0 : current + 1);
    }, 3000);
  }
  let autoplay = startAutoplay();
  track.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.addEventListener('mouseleave', () => { autoplay = startAutoplay(); });
  track.addEventListener('touchstart', () => clearInterval(autoplay), { passive: true });
  track.addEventListener('touchend', () => { autoplay = startAutoplay(); });

  // Init + resize
  buildDots();
  goTo(0);
  window.addEventListener('resize', () => { buildDots(); goTo(0); });
}
