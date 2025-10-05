const CHAPTERS = {
  'chapter-1': {
    number: 'Chapitre 1',
    name: 'Nombres et calculs',
    path: 'chapters/chapitre-1',
    menuTitle: 'Choisissez une section',
    menuSubtitle: 'Cliquez sur une section pour ouvrir sa fiche de révision.',
    sections: [
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
      { id: 'section-19', number: 'Section 19', title: 'Révision globale' },
    ],
  },
  'chapter-2': {
    number: 'Chapitre 2',
    name: 'Géométrie et mesures',
    path: 'chapters/chapitre-2',
    menuTitle: 'Choisissez une section',
    menuSubtitle: 'Sélectionnez une notion de géométrie à réviser.',
    sections: [
      { id: 'section-01', number: 'Section 1', title: 'Vocabulaire et repères' },
      { id: 'section-02', number: 'Section 2', title: 'Mesure des angles' },
      { id: 'section-03', number: 'Section 3', title: 'Triangles' },
      { id: 'section-04', number: 'Section 4', title: 'Quadrilatères' },
      { id: 'section-05', number: 'Section 5', title: 'Cercle et disque' },
      { id: 'section-06', number: 'Section 6', title: 'Polygones réguliers' },
      { id: 'section-07', number: 'Section 7', title: 'Transformations géométriques' },
      { id: 'section-08', number: 'Section 8', title: 'Alignement et perpendicularité' },
      { id: 'section-09', number: 'Section 9', title: 'Aires des figures planes' },
      { id: 'section-10', number: 'Section 10', title: 'Périmètres et longueurs' },
      { id: 'section-11', number: 'Section 11', title: 'Volumes des solides' },
      { id: 'section-12', number: 'Section 12', title: 'Théorème de Pythagore' },
      { id: 'section-13', number: 'Section 13', title: 'Trigonométrie élémentaire' },
      { id: 'section-14', number: 'Section 14', title: 'Problèmes de géométrie' },
    ],
  },
};

const html = document.documentElement;
const rootPath = (html.dataset.root || '.').replace(/\/$/, '');
const pageType = html.dataset.page || '';
const currentSection = html.dataset.section || '';
const currentChapterRaw = html.dataset.chapter ? `chapter-${html.dataset.chapter}` : '';
const currentChapterKey = Object.prototype.hasOwnProperty.call(CHAPTERS, currentChapterRaw)
  ? currentChapterRaw
  : '';

const resolvePath = (relativePath) => {
  if (!rootPath || rootPath === '.') {
    return relativePath;
  }
  if (!relativePath) {
    return rootPath;
  }
  return `${rootPath}/${relativePath}`;
};

const navLinks = Array.from(document.querySelectorAll('[data-nav-target]'));
navLinks.forEach((link) => {
  const target = link.dataset.navTarget;
  if (target === 'home') {
    link.href = resolvePath('index.html');
    return;
  }
  const chapter = CHAPTERS[target];
  if (chapter) {
    link.href = resolvePath(`${chapter.path}/index.html`);
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-controls', 'section-menu-panel');
    if (!link.hasAttribute('aria-expanded')) {
      link.setAttribute('aria-expanded', 'false');
    }
  }
});

let activeTarget = 'home';
if (pageType !== 'home') {
  activeTarget = currentChapterKey || Object.keys(CHAPTERS)[0] || 'chapter-1';
}
navLinks.forEach((link) => {
  if (link.dataset.navTarget === activeTarget) {
    link.classList.add('sidebar__link--active');
  } else {
    link.classList.remove('sidebar__link--active');
  }
});

const menu = document.querySelector('[data-section-menu]');
const menuList = menu?.querySelector('[data-section-menu-list]');
const menuEyebrow = menu?.querySelector('[data-section-menu-eyebrow]');
const menuTitle = menu?.querySelector('[data-section-menu-title]');
const menuSubtitle = menu?.querySelector('[data-section-menu-subtitle]');
const closeTargets = menu ? menu.querySelectorAll('[data-section-menu-close]') : [];
const panel = menu?.querySelector('.section-menu__panel');
const sidebar = document.querySelector('.sidebar');
const chapterTriggers = navLinks.filter((link) => Object.prototype.hasOwnProperty.call(CHAPTERS, link.dataset.navTarget));

const TRANSITION_MS = 200;
const OPEN_DELAY = 250;

let openTimeout;
let isMenuOpen = false;
let activeChapterKey = '';

const clearOpenTimeout = () => {
  if (openTimeout) {
    clearTimeout(openTimeout);
    openTimeout = undefined;
  }
};

const applyPanelOffset = () => {
  if (!menu) return;
  if (window.matchMedia('(max-width: 720px)').matches) {
    menu.style.setProperty('--section-menu-offset', '0px');
    return;
  }
  if (!sidebar) return;
  const rect = sidebar.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const maxOffset = Math.max(0, viewportWidth - 260);
  const offset = Math.min(rect.right, maxOffset);
  menu.style.setProperty('--section-menu-offset', `${offset}px`);
};

const renderMenu = (chapterKey) => {
  const chapter = CHAPTERS[chapterKey];
  if (!chapter || !menuList) {
    return;
  }
  if (menuEyebrow) {
    menuEyebrow.textContent = `${chapter.number} — ${chapter.name}`;
  }
  if (menuTitle) {
    menuTitle.textContent = chapter.menuTitle || 'Choisissez une section';
  }
  if (menuSubtitle) {
    menuSubtitle.textContent = chapter.menuSubtitle || 'Cliquez sur une section pour ouvrir sa fiche de révision.';
  }

  const items = chapter.sections
    .map(({ id, number, title }) => {
      const href = resolvePath(`${chapter.path}/sections/${id}.html`);
      const classes = ['section-menu__link'];
      if (chapterKey === currentChapterKey && currentSection === id) {
        classes.push('section-menu__link--active');
      }
      return `\n          <li class="section-menu__item">\n            <a class="${classes.join(' ')}" href="${href}" data-section-link="${id}">\n              <span class="section-menu__number">${number}</span>\n              <span class="section-menu__name">${title}</span>\n            </a>\n          </li>`;
    })
    .join('');

  menuList.innerHTML = items ? `${items}\n        ` : '';
};

const openMenu = (chapterKey) => {
  if (!menu || !menuList || !Object.prototype.hasOwnProperty.call(CHAPTERS, chapterKey)) {
    return;
  }

  clearOpenTimeout();

  if (isMenuOpen && activeChapterKey === chapterKey) {
    applyPanelOffset();
    return;
  }

  renderMenu(chapterKey);
  activeChapterKey = chapterKey;

  if (!isMenuOpen) {
    menu.hidden = false;
    requestAnimationFrame(() => {
      menu.classList.add('section-menu--visible');
    });
  } else {
    menu.classList.add('section-menu--visible');
  }

  applyPanelOffset();
  document.body.classList.add('section-menu-open');
  sidebar?.classList.add('sidebar--locked');

  chapterTriggers.forEach((link) => {
    link.setAttribute('aria-expanded', link.dataset.navTarget === chapterKey ? 'true' : 'false');
  });

  isMenuOpen = true;
  window.addEventListener('resize', applyPanelOffset);
};

const closeMenu = () => {
  if (!menu || !isMenuOpen) {
    return;
  }

  isMenuOpen = false;
  menu.classList.remove('section-menu--visible');
  document.body.classList.remove('section-menu-open');
  sidebar?.classList.remove('sidebar--locked');
  menu.style.removeProperty('--section-menu-offset');
  chapterTriggers.forEach((link) => {
    link.setAttribute('aria-expanded', 'false');
  });
  window.removeEventListener('resize', applyPanelOffset);
  setTimeout(() => {
    if (!isMenuOpen) {
      menu.hidden = true;
    }
  }, TRANSITION_MS);
};

const scheduleOpen = (chapterKey) => {
  clearOpenTimeout();
  openTimeout = setTimeout(() => {
    openMenu(chapterKey);
  }, OPEN_DELAY);
};

chapterTriggers.forEach((link) => {
  const chapterKey = link.dataset.navTarget;
  link.addEventListener('mouseenter', () => {
    scheduleOpen(chapterKey);
  });
  link.addEventListener('mouseleave', () => {
    clearOpenTimeout();
  });
  link.addEventListener('focus', () => {
    clearOpenTimeout();
    openMenu(chapterKey);
  });
  link.addEventListener('blur', () => {
    clearOpenTimeout();
  });
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
  if (!isMenuOpen) {
    return;
  }
  const target = event.target;
  if (panel?.contains(target)) {
    return;
  }
  if (target.closest('[data-nav-target^="chapter-"]')) {
    return;
  }
  closeMenu();
});
