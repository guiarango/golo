//VARIABLES
let documentHTML = document.querySelector("body");
let previewSection = document.querySelector(".preview-services");
let institutionalButton = document.querySelector(
  ".button-institutional-events"
);
let personalButton = document.querySelector(".button-personal-events");

//DISPLAY MODAL FUNCTION
function displayModal(modalClass) {
  let modalClassTarget = document.querySelector("." + modalClass);
  modalClassTarget.style.display = "block";
}

//EVENT LISTENERS
//-------Display Modal windows institutional services--------
institutionalButton.addEventListener("click", function () {
  displayModal("modal-institutional");
  return true;
});

//-------Display Modal window personal services--------
personalButton.addEventListener("click", function () {
  displayModal("modal-personal");
  return true;
});

//-------Close Modal window by clicking X--------
previewSection.addEventListener("click", function (e) {
  if (e.target.className === "close-modal") {
    e.target.closest(".modal-container").style.display = "none";
  }
  return true;
});

//-------Close Modal window by pressing Escape key--------
documentHTML.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    let closeModal = document.querySelectorAll(".modal-container");
    closeModal.forEach((node) => (node.style.display = "none"));
  }
  return true;
});
