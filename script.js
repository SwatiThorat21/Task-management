let hamburgerBtn = document.getElementById("hamburger-btn");
let hamburgerMenu = document.getElementById("hamburger");
let sidebarClose = document.getElementById("sidebar-close");

function toggleMenu() {
  if (hamburgerMenu.classList.contains("showMenu"))
    hamburgerMenu.classList.remove("showMenu");
  else {
    hamburgerMenu.classList.add("showMenu");
  }

  // hamburgerBtn.style.display = "block";
}

hamburgerBtn.addEventListener("click", toggleMenu);
sidebarClose.addEventListener("click", toggleMenu);

