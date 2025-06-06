document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".navbar__hamburger");
  const menu = document.querySelector(".navbar__menu");
  const overlay = document.querySelector("#overlay");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const menuLinks = document.querySelectorAll(".navbar__menu-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Close menu when clicking outside (on overlay)
  function closeSidebar() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Language switcher function
  function switchLanguage(lang) {
    console.log(`Switching to language: ${lang}`);
    const currentPath = window.location.pathname;
    let newPath;

    if (lang === 'ru') {
      if (currentPath === '/' || !currentPath.startsWith('/ru/')) {
        newPath = currentPath === '/' ? '/ru/' : `/ru${currentPath}`;
      } else {
        newPath = currentPath; // Already in Russian
      }
    } else {
      newPath = currentPath.startsWith('/ru/') ? currentPath.replace('/ru/', '/') : currentPath;
      if (newPath === '') newPath = '/'; // Ensure root path
    }

    console.log(`Redirecting to: ${newPath}`);
    if (newPath !== currentPath) {
      window.location.href = newPath;
    } else {
      console.log('No redirect needed; already on the correct language path.');
    }
  }

  // Expose functions to global scope
  window.switchLanguage = switchLanguage;
  window.closeSidebar = closeSidebar;

  // Close menu when clicking overlay
  overlay.addEventListener("click", closeSidebar);
});