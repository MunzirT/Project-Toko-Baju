// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu diclick
document.querySelector("#tombol-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menutup menu dengan klik diluar sideBar
const tombolMenu = document.querySelector("#tombol-menu");

document.addEventListener("click", function (e) {
  if (!tombolMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
