const darkButton = document.querySelector('.dark-toggle');

darkButton.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});