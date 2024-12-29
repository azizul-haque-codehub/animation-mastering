const h2 = document.querySelector(".show-hide > h2");
const showHideContainer = document.querySelector('.show-hide')
function showHide() {
	if (h2.classList[0] === "fade-in") {
		h2.classList.remove("fade-in");
		h2.classList.add("fade-out");
	} else {
		h2.classList.remove("fade-out");
		h2.classList.add("fade-in");
	}
}

showHideContainer.addEventListener("click", showHide);
