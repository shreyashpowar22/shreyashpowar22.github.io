// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // === NAVBAR TOGGLE ===
  const navToggle = document.createElement("div");
  navToggle.classList.add("menu-toggle");
  navToggle.innerHTML = "☰";

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  if (navbar && navLinks) {
    navbar.appendChild(navToggle);

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("open"); // Optional: animate toggle
    });
  }

  // === SMOOTH SCROLL FOR ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        // Close navbar on mobile after clicking
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          navToggle.classList.remove("open");
        }
      }
    });
  });

  // === FADE-IN ANIMATION ON SCROLL ===
  const sections = document.querySelectorAll("section");

  const revealSections = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSections);
  revealSections(); // Initial call

  // === OPTIONAL: Console Greeting ===
  console.log(
    "%cWelcome to Shreyash Powar's Portfolio 🚀",
    "color:#00b4d8; font-size:16px; font-weight:bold;"
  );
});

