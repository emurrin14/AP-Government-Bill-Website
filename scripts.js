window.addEventListener('load', () => {
  const revealElements = document.querySelectorAll('.revealImg');

  revealElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('revealedImg');
    }, i * 300);
  });
});

window.addEventListener('load', () => {
  const revealElements = document.querySelectorAll('.revealImg2');

  revealElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('revealedImg2');
    }, i * 150);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => observer.observe(element));
});

  

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const triggerPoint = 300;

  window.addEventListener("scroll", () => {
    if (window.scrollY > triggerPoint) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
});

document.getElementById("scrollBtn").addEventListener("click", () => {
  const image = document.getElementById("landingImgGrid");
  const offset = image.getBoundingClientRect().bottom;
  window.scrollBy({
    top: offset,
    left: 0,
    behavior: "smooth"
  });
});


document.getElementById("upArrow").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

  const arrow = document.getElementById("upArrow");
  arrow.classList.add("arrowClicked");

  setTimeout(() => {
    arrow.classList.remove("arrowClicked");
  }, 50);
});