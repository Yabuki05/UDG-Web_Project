window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	const nav = document.getElementById('navbar');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		nav.classList.add('scrolled');
		document.getElementById('logo').src = '../assets/UDG-Logo-black.png';
		document.getElementById('burger').src = '../assets/Hamburger-Icon-black.svg.png';
	} else {
		nav.classList.remove('scrolled');
		document.getElementById('logo').src = '../assets/UDG-Logo-white.png';
		document.getElementById('burger').src = '../assets/Hamburger-Icon-white.svg.png';
	}
}
