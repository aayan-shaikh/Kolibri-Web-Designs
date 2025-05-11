// const openButton = document.getElementById("open-sidebar-button");
// const navbar = document.getElementById("navbar");

// const media = window.matchMedia("(width < 700px)");

// media.addEventListener("change", (e) => updateNavbar(e));

// function updateNavbar(e) {
//   const isMobile = e.matches;
//   console.log(isMobile);
//   if (isMobile) {
//     navbar.setAttribute("inert", "");
//   } else {
//     // desktop device
//     navbar.removeAttribute("inert");
//   }
// }

// function openSidebar() {
//   navbar.classList.add("show");
//   openButton.setAttribute("aria-expanded", "true");
//   navbar.removeAttribute("inert");
// }

// function closeSidebar() {
//   navbar.classList.remove("show");
//   openButton.setAttribute("aria-expanded", "false");
//   navbar.setAttribute("inert", "");
// }

// // For Bookmark Links
// // const navLinks = document.querySelectorAll('nav a')
// // navLinks.forEach(link => {
// //   link.addEventListener('click', () => {
// //     closeSidebar()
// //   })
// // })

// updateNavbar(media);
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".navbar__hamburger");
  const menu = document.querySelector(".navbar__menu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const menuLinks = document.querySelectorAll(".navbar__menu-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
