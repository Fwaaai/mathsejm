const CHAPTERS = {
  'chapter-1': {
    number: 'Chapitre 1',
    name: 'Nombres et calculs',
    path: 'chapters/chapitre-1',
    menuTitle: 'Choisissez une section',
    menuSubtitle: 'Cliquez sur une section pour ouvrir sa fiche de révision.',
    sections: [
      {
        id: 'section-01',
        number: 'Section 1',
        title: 'Nombres entiers',
        description: 'Écriture, ordre et opérations sur les entiers naturels et relatifs, avec astuces de calcul pour aller plus vite.',
      },
      {
        id: 'section-02',
        number: 'Section 2',
        title: 'Nombres décimaux',
        description: 'Placer des décimaux sur une droite graduée, comparer et réaliser les quatre opérations en respectant les alignements.',
      },
      {
        id: 'section-03',
        number: 'Section 3',
        title: 'Fractions',
        description: 'Reconnaître des fractions équivalentes, simplifier, additionner ou multiplier en justifiant chaque étape.',
      },
      {
        id: 'section-04',
        number: 'Section 4',
        title: 'Proportions simples',
        description: 'Utiliser les rapports, vitesses moyennes et échelles à partir d’exemples concrets du quotidien.',
      },
      {
        id: 'section-05',
        number: 'Section 5',
        title: 'Puissances',
        description: 'Appliquer les règles sur les puissances de 10 et sur les puissances d’un nombre positif ou négatif.',
      },
      {
        id: 'section-06',
        number: 'Section 6',
        title: 'Racines carrées',
        description: 'Définir une racine carrée, la simplifier et l’approximer pour résoudre des problèmes de géométrie et d’aire.',
      },
      {
        id: 'section-07',
        number: 'Section 7',
        title: 'Calcul littéral',
        description: 'Manipuler les expressions littérales, développer et factoriser en respectant les règles de priorité.',
      },
      {
        id: 'section-08',
        number: 'Section 8',
        title: 'Équations simples',
        description: 'Résoudre des équations du premier degré et modéliser des situations concrètes en équations.',
      },
      {
        id: 'section-09',
        number: 'Section 9',
        title: 'Inégalités',
        description: 'Comprendre le sens des symboles &lt;, &gt;, ≤ et ≥ puis représenter une solution sur une droite graduée.',
      },
      {
        id: 'section-10',
        number: 'Section 10',
        title: 'Priorités de calcul',
        description: 'Revoir l’ordre des opérations et l’usage des parenthèses pour rédiger des calculs clairs et justifiés.',
      },
      {
        id: 'section-11',
        number: 'Section 11',
        title: 'Calcul mental',
        description: 'Développer des réflexes de calcul rapide sur les multiples de 10, 100 et 1000, ainsi que sur les carrés parfaits.',
      },
      {
        id: 'section-12',
        number: 'Section 12',
        title: 'Pourcentages',
        description: 'Calculer un pourcentage d’une quantité, déterminer un taux d’évolution et résoudre des problèmes de réduction.',
      },
      {
        id: 'section-13',
        number: 'Section 13',
        title: 'Intérêts simples',
        description: 'Comprendre le calcul d’un intérêt simple et interpréter des tableaux financiers élémentaires.',
      },
      {
        id: 'section-14',
        number: 'Section 14',
        title: 'Grandeurs composées',
        description: 'Étudier les grandeurs comme la vitesse, le débit ou la densité et manipuler leurs unités.',
      },
      {
        id: 'section-15',
        number: 'Section 15',
        title: 'Conversion d’unités',
        description: 'Convertir longueurs, masses, volumes et durées grâce à des tableaux de conversion et aux puissances de 10.',
      },
      {
        id: 'section-16',
        number: 'Section 16',
        title: 'Proportionnalité',
        description: 'Utiliser les tableaux de proportionnalité, les coefficients multiplicateurs et les pourcentages composés.',
      },
      {
        id: 'section-17',
        number: 'Section 17',
        title: 'Suites numériques',
        description: 'Identifier la nature d’une suite, calculer un terme à partir de son rang et exploiter des suites arithmétiques simples.',
      },
      {
        id: 'section-18',
        number: 'Section 18',
        title: 'Résolution de problèmes',
        description: 'Adopter une méthode en quatre étapes : analyser, modéliser, calculer puis vérifier les résultats obtenus.',
      },
      {
        id: 'section-19',
        number: 'Section 19',
        title: 'Révision globale',
        description: 'Synthétiser toutes les notions et construire un plan de révision complet avec des exercices variés.',
      },
    ],
  },
  'chapter-2': {
    number: 'Chapitre 2',
    name: 'Géométrie et mesures',
    path: 'chapters/chapitre-2',
    menuTitle: 'Choisissez une section',
    menuSubtitle: 'Sélectionnez une notion de géométrie à réviser.',
    sections: [
      {
        id: 'section-01',
        number: 'Section 1',
        title: 'Vocabulaire et repères',
        description: 'Identifier points, droites, segments et repères orthonormés pour situer précisément les objets.',
      },
      {
        id: 'section-02',
        number: 'Section 2',
        title: 'Mesure des angles',
        description: 'Mesurer, comparer et tracer des angles à l’aide du rapporteur.',
      },
      {
        id: 'section-03',
        number: 'Section 3',
        title: 'Triangles',
        description: 'Reconnaître les différents triangles et utiliser leurs propriétés d’angles et de côtés.',
      },
      {
        id: 'section-04',
        number: 'Section 4',
        title: 'Quadrilatères',
        description: 'Identifier les quadrilatères usuels et connaître leurs propriétés.',
      },
      {
        id: 'section-05',
        number: 'Section 5',
        title: 'Cercle et disque',
        description: 'Tracer un cercle, connaître son vocabulaire et calculer périmètre et aire.',
      },
      {
        id: 'section-06',
        number: 'Section 6',
        title: 'Polygones réguliers',
        description: 'Construire et reconnaître des polygones réguliers et utiliser leurs symétries.',
      },
      {
        id: 'section-07',
        number: 'Section 7',
        title: 'Transformations géométriques',
        description: 'Étudier symétries, translations et rotations pour déplacer des figures.',
      },
      {
        id: 'section-08',
        number: 'Section 8',
        title: 'Alignement et perpendicularité',
        description: 'Vérifier des alignements et construire des parallèles ou des perpendiculaires.',
      },
      {
        id: 'section-09',
        number: 'Section 9',
        title: 'Aires des figures planes',
        description: 'Calculer les aires des figures usuelles et de surfaces composées.',
      },
      {
        id: 'section-10',
        number: 'Section 10',
        title: 'Périmètres et longueurs',
        description: 'Additionner les longueurs d’un contour et convertir les unités de mesure.',
      },
      {
        id: 'section-11',
        number: 'Section 11',
        title: 'Volumes des solides',
        description: 'Calculer les volumes des prismes, cylindres, pyramides et cônes.',
      },
      {
        id: 'section-12',
        number: 'Section 12',
        title: 'Théorème de Pythagore',
        description: 'Identifier un triangle rectangle et appliquer le théorème de Pythagore.',
      },
      {
        id: 'section-13',
        number: 'Section 13',
        title: 'Trigonométrie élémentaire',
        description: 'Utiliser sinus, cosinus et tangente dans un triangle rectangle.',
      },
      {
        id: 'section-14',
        number: 'Section 14',
        title: 'Problèmes de géométrie',
        description: 'Mobiliser toutes les notions du chapitre dans des problèmes variés.',
      },
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
    .map(({ id, number, title, description }) => {
      const href = resolvePath(`${chapter.path}/sections/${id}.html`);
      const classes = ['section-menu__link'];
      if (chapterKey === currentChapterKey && currentSection === id) {
        classes.push('section-menu__link--active');
      }
      const descriptionMarkup = description
        ? `\n                <span class="section-menu__description">${description}</span>`
        : '';
      return `\n          <li class="section-menu__item">\n            <a class="${classes.join(' ')}" href="${href}" data-section-link="${id}">\n              <span class="section-menu__number">${number}</span>\n              <span class="section-menu__content">\n                <span class="section-menu__name">${title}</span>${descriptionMarkup}\n              </span>\n            </a>\n          </li>`;
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
