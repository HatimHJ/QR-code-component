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
 * 	credit codepin (https://codepen.io/ravisridhar55/pen/poeyJKQ?editors=0010)
 * =================================
 * */

const card = document.querySelector(".card");
const boxRect = card.getBoundingClientRect();

card.addEventListener("mousemove", (e) => {
	const xPosition = (e.clientX - boxRect.left) / boxRect.width;
	const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.2;
	const xOffset = -(xPosition - 0.2);
	const dxNorm = Math.min(Math.max(xOffset, -0.2), 0.2);
	card.style.transform = `perspective(1000px) rotateY(${
		dxNorm * 45
	}deg) rotateX(${yPosition * 45}deg)`;
});

card.addEventListener("mouseleave", () => {
	card.style.transform = "none";
});
