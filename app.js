document.addEventListener("click", (e) => {
	const isBtn = e.target.matches(".dropdown");
	let currentDropdown = e.target.children[1];
	let arrow = e.target.children[0];
	let mobileDrop = e.target;

	if (isBtn) {
		currentDropdown.classList.toggle("active");
		arrow.classList.toggle("active");
		mobileDrop.classList.toggle("active");
	}

	const dropdownMenu = document.querySelectorAll(".dropdown-menu");
	const arrows = document.querySelectorAll(".arrow");
	const dropdowns = document.querySelectorAll(".dropdown");

	dropdownMenu.forEach((element) => {
		if (element === currentDropdown) return;
		element.classList.remove("active");
	});

	arrows.forEach((element) => {
		if (element === arrow) return;
		element.classList.remove("active");
	});

	dropdowns.forEach((element) => {
		if (element === mobileDrop) return;
		element.classList.remove("active");
	});
});

// ------MOBILE DEVICE------------------------

const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".navigation-bar");
const body = document.querySelector(".body");

document.getElementById("toggle-btn").addEventListener("click", () => {
	navBar.classList.toggle("active");
	toggleBtn.classList.toggle("active");
	body.classList.toggle("active");
});
