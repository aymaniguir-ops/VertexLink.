// ── Cursor
const cur = document.getElementById('cur');
if (cur && window.matchMedia('(pointer:fine)').matches) {
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .card, .proj-card').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('hover'));
    el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
  });
}

// ── Progress bar
const prog = document.getElementById('prog');
if (prog) {
  window.addEventListener('scroll', () => {
    const pct = scrollY / (document.body.scrollHeight - innerHeight) * 100;
    prog.style.width = pct + '%';
  }, { passive: true });
}

// ── Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: .1 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));
