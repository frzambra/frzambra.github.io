// Card collapse functionality
document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const abstractContent = this.previousElementSibling;
      const isExpanded = abstractContent.classList.contains('expanded');

      if (isExpanded) {
        abstractContent.classList.remove('expanded');
        this.classList.remove('expanded');
        const currentLang = localStorage.getItem('language') || 'en';
        this.innerHTML = currentLang === 'en' ?
          '<span data-en="Read more" data-es="Leer más">Read more</span>' :
          '<span data-en="Read more" data-es="Leer más">Leer más</span>';
      } else {
        abstractContent.classList.add('expanded');
        this.classList.add('expanded');
        const currentLang = localStorage.getItem('language') || 'en';
        this.innerHTML = currentLang === 'en' ?
          '<span data-en="Read less" data-es="Leer menos">Read less</span>' :
          '<span data-en="Read less" data-es="Leer menos">Leer menos</span>';
      }
    });
  });
});
