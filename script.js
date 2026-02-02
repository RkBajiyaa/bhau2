/* =========================================
   Smooth Scroll for Anchor Links
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          e.preventDefault();
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
});
