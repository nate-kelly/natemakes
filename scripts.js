document.addEventListener('DOMContentLoaded', () => {
  new SweetScroll({ duration: 800 });
}, false);

const darkButton = document.querySelector('.dark-toggle');
  darkButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});