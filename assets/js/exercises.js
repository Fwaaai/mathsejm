document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-answer-toggle]');
  const container = document.querySelector('[data-answer-container]');

  if (!toggle || !container) {
    return;
  }

  const showLabel = toggle.textContent.trim();
  const hideLabel = toggle.getAttribute('data-hide-label') || 'Masquer les réponses';

  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    const isHidden = container.hasAttribute('hidden');

    if (isHidden) {
      container.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = hideLabel;
    } else {
      container.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = showLabel;
    }
  });
});
