const body = document.querySelector("body");

/**
 * =================================
 *  toggler button functionality
 * =================================
 * */
const toggler = document.querySelector("#mode");
const toggleFunction = (togglerElement) => {
	togglerElement.classList.toggle("night");
	const animte = ".7s ease-out 1 forwards";
	if (togglerElement.classList.contains("night")) {
		// the moon button
		togglerElement.style.animation = `light ${animte}`;
		togglerElement.style.background = "#0a3d62";
		togglerElement.innerHTML = "☼";
	} else {
		// the sun button
		togglerElement.style.animation = `night ${animte}`;
		togglerElement.style.background = "#353b48";
		togglerElement.innerHTML = "☽";
	}
};

const modeToggler = () => {
	body.classList.toggle("dark");
	toggleFunction(toggler);
};
toggler.addEventListener("click", modeToggler);

/**
 * =================================
 *  mouse on card
 * =================================
 * */

const card = document.querySelector(".card");

card.addEventListener("mouseover", (e) => {
	const minX = 100,
		maxX = 640;
	const minY = 100,
		maxY = 630;
	// top left
	if (e.x > minX && e.x < maxX / 2 && e.y > minY && e.y < maxY / 2) {
		card.classList.add("top-left");
	} else {
		card.classList.remove("top-left");
		card.classList.add("reset");
	}
	// top right
	if (e.x < maxX && e.x > maxX / 2 && e.y > minY && e.y < maxY / 2) {
		card.classList.add("top-right");
	} else {
		card.classList.remove("top-right");
		card.classList.add("reset");
	}
	// bottom left
	if (e.x > minX && e.x < maxX / 2 && e.y < maxY && e.y > maxY / 2) {
		card.classList.add("bottom-left");
	} else {
		card.classList.remove("bottom-left");
		card.classList.add("reset");
	}
	// bottom right
	if (e.x < maxX && e.x > maxX / 2 && e.y < maxY && e.y > maxY / 2) {
		card.classList.add("bottom-right");
	} else {
		card.classList.remove("bottom-right");
		card.classList.add("reset");
	}
	// console.log(e);
});
