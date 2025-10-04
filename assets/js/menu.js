const SECTIONS = [
  { id: 'section-01', number: 'Section 1', title: 'Nombres entiers' },
  { id: 'section-02', number: 'Section 2', title: 'Nombres décimaux' },
  { id: 'section-03', number: 'Section 3', title: 'Fractions' },
  { id: 'section-04', number: 'Section 4', title: 'Proportions simples' },
  { id: 'section-05', number: 'Section 5', title: 'Puissances' },
  { id: 'section-06', number: 'Section 6', title: 'Racines carrées' },
  { id: 'section-07', number: 'Section 7', title: 'Calcul littéral' },
  { id: 'section-08', number: 'Section 8', title: 'Équations simples' },
  { id: 'section-09', number: 'Section 9', title: 'Inégalités' },
  { id: 'section-10', number: 'Section 10', title: 'Priorités de calcul' },
  { id: 'section-11', number: 'Section 11', title: 'Calcul mental' },
  { id: 'section-12', number: 'Section 12', title: 'Pourcentages' },
  { id: 'section-13', number: 'Section 13', title: 'Intérêts simples' },
  { id: 'section-14', number: 'Section 14', title: 'Grandeurs composées' },
  { id: 'section-15', number: 'Section 15', title: 'Conversion d’unités' },
  { id: 'section-16', number: 'Section 16', title: 'Proportionnalité' },
  { id: 'section-17', number: 'Section 17', title: 'Suites numériques' },
  { id: 'section-18', number: 'Section 18', title: 'Résolution de problèmes' },
  { id: 'section-19', number: 'Section 19', title: 'Révision globale' }
];

const html = document.documentElement;
const rootPath = (html.dataset.root || '.').replace(/\/$/, '');
const pageType = html.dataset.page || '';
const currentSection = html.dataset.section || '';

const resolvePath = (relativePath) => {
  if (!rootPath || rootPath === '.') {
    return relativePath;
  }
  if (!relativePath) {
    return rootPath;
  }
  return `${rootPath}/${relativePath}`;
};

const navLinks = document.querySelectorAll('[data-nav-target]');
navLinks.forEach((link) => {
  const target = link.dataset.navTarget;
  if (target === 'home') {
    link.href = resolvePath('index.html');
  }
  if (target === 'chapter-1') {
    link.href = resolvePath('chapters/chapitre-1/index.html');
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-controls', 'section-menu-panel');
  }
});

const activeTarget = pageType === 'home' ? 'home' : 'chapter-1';
navLinks.forEach((link) => {
  if (link.dataset.navTarget === activeTarget) {
    link.classList.add('sidebar__link--active');
  }
});

const menu = document.querySelector('[data-section-menu]');
const menuList = menu?.querySelector('[data-section-menu-list]');
const trigger = document.querySelector('[data-nav-target="chapter-1"]');

if (menu && menuList && trigger) {
  trigger.setAttribute('aria-expanded', 'false');
  const items = SECTIONS.map(({ id, number, title }) => {
    const href = resolvePath(`chapters/chapitre-1/sections/${id}.html`);
    const isActive = currentSection === id;
    const classes = ['section-menu__link'];
    if (isActive) {
      classes.push('section-menu__link--active');
    }
    return `\n          <li class="section-menu__item">\n            <a class="${classes.join(' ')}" href="${href}" data-section-link="${id}">\n              <span class="section-menu__number">${number}</span>\n              <span class="section-menu__name">${title}</span>\n            </a>\n          </li>`;
  }).join('');

  menuList.innerHTML = items ? `${items}\n        ` : '';

  const closeTargets = menu.querySelectorAll('[data-section-menu-close]');
  const panel = menu.querySelector('.section-menu__panel');
  const sidebar = document.querySelector('.sidebar');
  const TRANSITION_MS = 200;
  const OPEN_DELAY = 250;

  let openTimeout;
  let isMenuOpen = false;

  const clearOpenTimeout = () => {
    if (openTimeout) {
      clearTimeout(openTimeout);
      openTimeout = undefined;
    }
  };

  const applyPanelOffset = () => {
    if (!sidebar) return;
    const rect = sidebar.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const maxOffset = Math.max(0, viewportWidth - 260);
    const offset = Math.min(rect.right, maxOffset);
    menu.style.setProperty('--section-menu-offset', `${offset}px`);
  };

  const openMenu = () => {
    if (isMenuOpen) return;
    isMenuOpen = true;
    menu.hidden = false;
    applyPanelOffset();
    document.body.classList.add('section-menu-open');
    requestAnimationFrame(() => {
      menu.classList.add('section-menu--visible');
    });
    trigger.setAttribute('aria-expanded', 'true');
    window.addEventListener('resize', applyPanelOffset);
  };

  const closeMenu = () => {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    menu.classList.remove('section-menu--visible');
    document.body.classList.remove('section-menu-open');
    trigger.setAttribute('aria-expanded', 'false');
    menu.style.removeProperty('--section-menu-offset');
    window.removeEventListener('resize', applyPanelOffset);
    setTimeout(() => {
      if (!isMenuOpen) {
        menu.hidden = true;
      }
    }, TRANSITION_MS);
  };

  const scheduleOpen = () => {
    clearOpenTimeout();
    openTimeout = setTimeout(openMenu, OPEN_DELAY);
  };

  trigger.addEventListener('mouseenter', () => {
    scheduleOpen();
  });

  trigger.addEventListener('mouseleave', () => {
    clearOpenTimeout();
  });

  trigger.addEventListener('focus', () => {
    clearOpenTimeout();
    openMenu();
  });

  trigger.addEventListener('blur', () => {
    clearOpenTimeout();
  });

  closeTargets.forEach((element) => {
    element.addEventListener('click', () => {
      clearOpenTimeout();
      closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      clearOpenTimeout();
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      isMenuOpen &&
      !panel?.contains(event.target) &&
      event.target !== trigger &&
      !trigger.contains(event.target)
    ) {
      closeMenu();
    }
  });
}
