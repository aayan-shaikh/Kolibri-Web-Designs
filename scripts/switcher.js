// Language switcher functionality
const languageSwitcher = document.getElementById("languageSwitcher");
const languageToggle = document.getElementById("languageToggle");
const languageDropdown = document.getElementById("languageDropdown");

languageToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  languageSwitcher.classList.toggle("open");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!languageSwitcher.contains(e.target)) {
    languageSwitcher.classList.remove("open");
  }
});

// Close dropdown when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    languageSwitcher.classList.remove("open");
  }
});

// Handle language selection
const languageOptions = document.querySelectorAll(".language-option");
languageOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    // Remove active class from all options
    languageOptions.forEach((opt) => opt.classList.remove("active"));
    // Add active class to clicked option
    e.currentTarget.classList.add("active");

    // Update current language display
    const selectedLang =
      e.currentTarget.querySelector("span:last-child").textContent;
    const langCode = selectedLang === "English" ? "EN" : "RU";
    document.getElementById("currentLanguage").textContent = langCode;

    // Close dropdown
    languageSwitcher.classList.remove("open");
  });
});
