document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const triggerPoint = 300; // Scroll Y (px) where header appears

  window.addEventListener("scroll", () => {
    if (window.scrollY > triggerPoint) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
});