function hamburgerNavBar() {
	const burger = document.getElementById('nav-hamburger-navbar');
	if (burger.classList.contains('pos')) {
		burger.classList.remove('pos');
	} else {
		burger.classList.add('pos');
	}
}

let navToggle = document.querySelector('.nav-toggle');
let bars = document.querySelectorAll('.bar');

function toggleHamburger(e) {
	bars.forEach((bar) => bar.classList.toggle('x'));
}

navToggle.addEventListener('click', toggleHamburger);
