const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", showHideModal);
modal.addEventListener("click", showHideModal);

function showHideModal() {
	if ([...modal.classList].includes("fade-in-modal")) {
		modal.classList.remove("fade-in-modal");
		modal.classList.add("fade-out-modal");
	} else {
		modal.classList.remove("fade-out-modal");
		modal.classList.add("fade-in-modal");
	}
}
