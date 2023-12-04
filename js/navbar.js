window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	const nav = document.getElementById('navbar');
	const burger = document.getElementById('burger');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		nav.classList.add('scrolled');
		document.getElementById('logo').src = '../assets/UDG-Logo-black.png';
		burger.classList.remove('scrolled-burger');
	} else {
		nav.classList.remove('scrolled');
		document.getElementById('logo').src = '../assets/UDG-Logo-white.png';
		burger.classList.add('scrolled-burger');
	}
}
