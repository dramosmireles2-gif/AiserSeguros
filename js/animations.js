import { animate, inView, scroll } from 'https://cdn.jsdelivr.net/npm/motion@11/+esm';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Scroll progress bar ──────────────────────────────────────────────────────
const bar = document.createElement('div');
bar.id = 'scroll-progress';
document.body.appendChild(bar);

if (!reduced) {
  scroll(animate('#scroll-progress', { scaleX: [0, 1] }, { ease: 'linear' }));
}

// ── Partner logos ticker ─────────────────────────────────────────────────────
const ticker = document.getElementById('partnersTicker');
const tickerWrap = ticker?.closest('.partners-ticker-wrap');

if (ticker && tickerWrap) {
  if (reduced) {
    ticker.style.transform = 'none';
  } else {
    const anim = animate(ticker, { x: ['0px', '-50%'] }, {
      duration: 28,
      repeat: Infinity,
      ease: 'linear',
    });
    tickerWrap.addEventListener('mouseenter', () => anim.pause());
    tickerWrap.addEventListener('mouseleave', () => anim.play());
  }
}

// ── Animated counters ────────────────────────────────────────────────────────
document.querySelectorAll('[data-counter]').forEach(el => {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix ?? '+';

  if (reduced) {
    el.textContent = target + suffix;
    return;
  }

  let fired = false;
  inView(el, () => {
    if (fired) return;
    fired = true;
    animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) { el.textContent = Math.round(v) + suffix; },
    });
  }, { amount: 0.6 });
});
