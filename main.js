// Hide element by id
const hide = (id) => {
	document.getElementById(id).style.display = 'none';
}

// Show element by id
const display = (id) => {
	document.getElementById(id).style.display = 'block';
}

const toggleMenu = () => {
	if (document.body.clientWidth < 768)
	{
		hide('site-menu');
	} else
	{
		display('site-menu');
	}
}

//hide the the menu when window loads
window.onload = function () {
	toggleMenu();
};

//Hide the mobile menu when window is resize
window.addEventListener('resize', function () {
	toggleMenu();
	let icon = document.getElementById('menu-icon');
	icon.innerText = 'menu';
});


//Toggle the menu on click
const swapMenuIcon = (id, target) => {
	document.getElementById(id).addEventListener('click', function () {
		let newTarget = document.getElementById(target);
		let icon = document.getElementById('menu-icon');
		if (icon.innerText === 'menu')
		{
			icon.innerText = 'menu_open';
			newTarget.style.display = 'block';
		} else
		{
			icon.innerText = 'menu';
			newTarget.style.display = 'none';
			newTarget.classList.add('show-menu');
		}
	});
}

swapMenuIcon('menu-icon', 'site-menu');
