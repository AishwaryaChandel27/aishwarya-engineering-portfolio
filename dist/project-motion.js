'use strict';
(() => {
  const grid = document.querySelector('#projects');
  if (!grid) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const motionAllowed = () => !reduced.matches && !document.body.classList.contains('motion-paused');
  const resetTilt = card => {
    card.style.removeProperty('--tilt-x');
    card.style.removeProperty('--tilt-y');
  };
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(({target: card, isIntersecting}) => {
      card.classList.toggle('project-in-view', isIntersecting);
      if (isIntersecting && !card.dataset.revealed) {
        card.dataset.revealed = 'true';
        if (motionAllowed()) card.classList.add('project-enter');
      }
      if (!isIntersecting) resetTilt(card);
    });
  }, {threshold: .08}) : null;
  function connect(card, index) {
    card.style.setProperty('--enter-delay', `${(index % 3) * 85}ms`);
    card.addEventListener('animationend', event => {
      if (event.target === card && event.animationName === 'project-arrive') card.classList.remove('project-enter');
    });
    card.addEventListener('pointermove', event => {
      if (!finePointer.matches || !motionAllowed() || event.pointerType === 'touch') return;
      const rect = card.getBoundingClientRect();
      const x = Math.max(-.5, Math.min(.5, (event.clientX - rect.left) / rect.width - .5));
      const y = Math.max(-.5, Math.min(.5, (event.clientY - rect.top) / rect.height - .5));
      card.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 5).toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave', () => resetTilt(card));
    card.addEventListener('pointercancel', () => resetTilt(card));
    if (observer) observer.observe(card);
    else card.classList.add('project-in-view');
  }
  // Filters replace cards; detach old observations and initialize the new collection.
  function refresh() {
    observer?.disconnect();
    [...grid.children].forEach(connect);
  }
  new MutationObserver(refresh).observe(grid, {childList: true});
  const clearTilts = () => [...grid.children].forEach(resetTilt);
  reduced.addEventListener('change', clearTilts);
  finePointer.addEventListener('change', clearTilts);
  new MutationObserver(clearTilts).observe(document.body, {attributes: true, attributeFilter: ['class']});
  refresh();
})();
