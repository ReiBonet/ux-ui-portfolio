// Selectors
const navToggle = document.querySelector(".nav-toggle"); // Hamburger
const overlayMenu = document.getElementById("overlayMenu"); // Fullscreen overlay
const closeMenuBtn = document.querySelector(".close-menu"); // The close (X) button

// Open overlay on hamburger click
navToggle.addEventListener("click", () => {
overlayMenu.classList.add("open");
});

// Close overlay on "X" button click
closeMenuBtn.addEventListener("click", () => {
overlayMenu.classList.remove("open");
});
