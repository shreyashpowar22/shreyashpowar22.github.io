// === Responsive Navbar Toggle ===
const navLinks = document.querySelector(".nav-links");
const navToggle = document.createElement("div");

const DownloadCVButton = document.getElementById("download_cv");

DownloadCVButton.addEventListener('click',()=>{
    // view the pdf file 
    window.open("./src/Shreyash_Powar_Resume.pdf", "_blank");
})


navToggle.classList.add("menu-toggle");
navToggle.innerHTML = "☰";
document.querySelector(".navbar").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// === Smooth Scroll Animation for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
      // Close navbar on mobile after clicking
      navLinks.classList.remove("active");
    }
  });
});

// === Scroll Animation for Fade-in Effect ===
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();

// === Optional: Console Greeting ===
console.log("%cWelcome to Shreyash Powar's Portfolio 🚀", "color:#00b4d8;font-size:14px;font-weight:bold;");
