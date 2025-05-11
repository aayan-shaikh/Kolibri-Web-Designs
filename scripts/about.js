document.addEventListener("DOMContentLoaded", () => {
  const aboutImg = document.querySelector(".about__img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3, // Triggers when 30% of element is visible
      rootMargin: "0px 0px -50px 0px", // Adjusts trigger point slightly upward
    },
  );

  if (aboutImg) {
    observer.observe(aboutImg);
  }
});
