// Card collapse functionality
document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Prevent event bubbling
      e.stopPropagation();

      // Find the card-abstract parent and then the abstract-content within it
      const cardAbstract = this.closest('.card-abstract');
      if (!cardAbstract) return;

      const abstractContent = cardAbstract.querySelector('.abstract-content');
      if (!abstractContent) return;

      const isExpanded = abstractContent.classList.contains('expanded');
      const currentLang = localStorage.getItem('language') || 'en';

      if (isExpanded) {
        abstractContent.classList.remove('expanded');
        this.classList.remove('expanded');
        this.querySelector('span').textContent = currentLang === 'en' ? 'Read more' : 'Leer más';
      } else {
        abstractContent.classList.add('expanded');
        this.classList.add('expanded');
        this.querySelector('span').textContent = currentLang === 'en' ? 'Read less' : 'Leer menos';
      }
    });
  });
});
