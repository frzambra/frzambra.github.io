// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const defaultLang = 'en';
  let currentLang = localStorage.getItem('language') || defaultLang;

  // Navbar translations
  const navbarTranslations = {
    'Research': { en: 'Research', es: 'Investigación' },
    'Publications': { en: 'Publications', es: 'Publicaciones' },
    'Conferences': { en: 'Conferences', es: 'Congresos' },
    'Teaching': { en: 'Teaching', es: 'Docencia' },
    'Projects': { en: 'Projects', es: 'Proyectos' },
    'Blog': { en: 'Blog', es: 'Blog' },
    'CV': { en: 'CV', es: 'CV' }
  };

  // Create and insert the language toggle button
  function createToggleButton() {
    const navbar = document.querySelector('.navbar-nav.navbar-nav-scroll.ms-auto');
    if (!navbar) return;

    const toggleContainer = document.createElement('li');
    toggleContainer.className = 'nav-item';

    const toggleButton = document.createElement('button');
    toggleButton.id = 'language-toggle';
    toggleButton.className = 'btn btn-link nav-link';
    toggleButton.innerHTML = currentLang === 'en' ? 'ES' : 'EN';
    toggleButton.setAttribute('aria-label', 'Toggle language');
    toggleButton.style.cssText = 'padding: 0.375rem 0.75rem; cursor: pointer; font-weight: 500;';

    toggleButton.addEventListener('click', toggleLanguage);

    toggleContainer.appendChild(toggleButton);
    navbar.insertBefore(toggleContainer, navbar.firstChild);
  }

  // Mark navbar items with their original text for translation
  function markNavbarItems() {
    const navItems = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');
    navItems.forEach(item => {
      const text = item.textContent.trim();
      if (navbarTranslations[text]) {
        item.setAttribute('data-nav-key', text);
      }
    });
  }

  // Toggle between languages
  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('language', currentLang);
    updateContent();
    updateNavbar();
    updateButton();
  }

  // Update button text
  function updateButton() {
    const button = document.getElementById('language-toggle');
    if (button) {
      button.innerHTML = currentLang === 'en' ? 'ES' : 'EN';
    }
  }

  // Update navbar items
  function updateNavbar() {
    const navItems = document.querySelectorAll('[data-nav-key]');
    navItems.forEach(item => {
      const key = item.getAttribute('data-nav-key');
      if (navbarTranslations[key]) {
        item.textContent = navbarTranslations[key][currentLang];
      }
    });
  }

  // Update all bilingual content
  function updateContent() {
    document.querySelectorAll('[data-en]').forEach(element => {
      const enContent = element.getAttribute('data-en');
      const esContent = element.getAttribute('data-es');

      if (currentLang === 'en') {
        element.textContent = enContent;
      } else {
        element.textContent = esContent;
      }
    });

    // Handle HTML content (for elements with data-en-html)
    document.querySelectorAll('[data-en-html]').forEach(element => {
      const enContent = element.getAttribute('data-en-html');
      const esContent = element.getAttribute('data-es-html');

      if (currentLang === 'en') {
        element.innerHTML = enContent;
      } else {
        element.innerHTML = esContent;
      }
    });
  }

  // Initialize
  markNavbarItems();
  createToggleButton();
  updateNavbar();
  updateContent();
});
