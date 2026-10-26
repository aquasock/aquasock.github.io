const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav.toggleAttribute('data-open', !open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.removeAttribute('data-open');
    }
  });
}

const header = document.querySelector('[data-header]');
if (header) {
  const setHeaderState = () => header.toggleAttribute('data-scrolled', window.scrollY > 24);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const systemName = document.querySelector('[data-system-name]');
const systemMeta = document.querySelector('[data-system-meta]');
if (systemName && systemMeta && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const systems = [
    ['TinyNES', '6502 · AE350 · HDMI'],
    ['TinyGBC', 'COLOR · AE350 · HDMI'],
    ['Tiny89', '16-BIT · FPGA · HDMI'],
    ['TinyPhosphor', 'VECTOR · RISC-V · HDMI']
  ];
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % systems.length;
    systemName.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 320 });
    [systemName.textContent, systemMeta.textContent] = systems[index];
  }, 3200);
}
