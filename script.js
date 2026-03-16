document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const willOpen = !navLinks.classList.contains("is-open");
      navLinks.classList.toggle("is-open", willOpen);
      navToggle.classList.toggle("is-open", willOpen);
      navToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (event) => {
      if (!navLinks.classList.contains("is-open")) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navLinks.contains(target) || navToggle.contains(target)) return;
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }
});

