const header = document.querySelector("header");
let isScrolled = false; 
let originalBackgroundColor = window.getComputedStyle(header).backgroundColor;

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) { 
    if (!isScrolled) {
      header.style.backgroundColor = "white";
      isScrolled = true;
    }
  } else {
    header.style.backgroundColor = originalBackgroundColor; 
    isScrolled = false;
  }
});