const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsWrap = document.getElementById('carouselDots');

if (track) {
  const MOBILE_BREAKPOINT = 767;
  const cards = Array.from(track.children);
  const viewport = track.closest('.carousel-viewport');
  let current = 0;
  let startX = 0;
  let autoplay = null;
  let desktopMode = false;

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function visibleCount() {
    if (window.innerWidth >= 1100) return 4;
    if (window.innerWidth >= 768) return 3;
    return 2;
  }

  function cardWidth() {
    if (!cards.length) return 0;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 20;
    return cards[0].getBoundingClientRect().width + gap;
  }

  function totalSlides() {
    return Math.max(1, Math.ceil(cards.length / visibleCount()));
  }

  function stopAutoplay() {
    if (!autoplay) return;
    clearInterval(autoplay);
    autoplay = null;
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';

    if (!desktopMode) return;

    for (let i = 0; i < totalSlides(); i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === current ? ' active' : '');
      dot.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function goTo(index) {
    if (!desktopMode) return;

    current = Math.max(0, Math.min(index, totalSlides() - 1));
    const offset = current * visibleCount() * cardWidth();
    track.style.transform = `translateX(-${offset}px)`;

    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current >= totalSlides() - 1;

    if (dotsWrap) {
      dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === current);
      });
    }
  }

  function startAutoplay() {
    stopAutoplay();

    if (!desktopMode || totalSlides() <= 1) return;

    autoplay = setInterval(() => {
      goTo(current >= totalSlides() - 1 ? 0 : current + 1);
    }, 3000);
  }

  function resetMobileState() {
    stopAutoplay();
    current = 0;
    track.style.transform = '';
    buildDots();

    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
  }

  function syncCarouselMode() {
    const nextDesktopMode = !isMobile();

    if (nextDesktopMode === desktopMode) {
      if (desktopMode) {
        current = Math.min(current, totalSlides() - 1);
        buildDots();
        goTo(current);
        startAutoplay();
      }
      return;
    }

    desktopMode = nextDesktopMode;

    if (!desktopMode) {
      resetMobileState();
      return;
    }

    current = Math.min(current, totalSlides() - 1);
    buildDots();
    goTo(current);
    startAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goTo(current - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => goTo(current + 1));
  }

  track.addEventListener('touchstart', e => {
    if (!desktopMode) return;
    startX = e.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', e => {
    if (!desktopMode) return;

    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(current + (diff > 0 ? 1 : -1));
    }

    startAutoplay();
  }, { passive: true });

  if (viewport) {
    viewport.addEventListener('mouseenter', () => stopAutoplay());
    viewport.addEventListener('mouseleave', () => startAutoplay());
  }

  window.addEventListener('resize', syncCarouselMode);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
      return;
    }

    startAutoplay();
  });

  syncCarouselMode();
}
