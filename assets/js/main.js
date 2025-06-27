/**
 * Custom Portfolio JS for Ubai Kamran
 * Based on DevFolio template
 */

(function () {
  "use strict";

  /**
   * Toggle scrolled class
   */
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    if (!header.classList.contains("sticky-top")) return;
    window.scrollY > 100 ? body.classList.add("scrolled") : body.classList.remove("scrolled");
  }
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");
    });
  }

  /**
   * Hide mobile nav on nav link click
   */
  document.querySelectorAll("#navmenu a").forEach(link => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        mobileNavToggle.classList.add("bi-list");
        mobileNavToggle.classList.remove("bi-x");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTopBtn = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (!scrollTopBtn) return;
    window.scrollY > 100 ? scrollTopBtn.classList.add("active") : scrollTopBtn.classList.remove("active");
  }
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  document.addEventListener("scroll", toggleScrollTop);
  window.addEventListener("load", toggleScrollTop);

  /**
   * Typed.js init for hero
   */
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    const strings = typedElement.getAttribute("data-typed-items").split(",");
    new Typed(".typed", {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }

  /**
   * Scrollspy
   */
  const navLinks = document.querySelectorAll(".navmenu a");
  function updateScrollspy() {
    let pos = window.scrollY + 200;
    navLinks.forEach(link => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      if (pos >= section.offsetTop && pos <= section.offsetTop + section.offsetHeight) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("load", updateScrollspy);
  document.addEventListener("scroll", updateScrollspy);
})();
