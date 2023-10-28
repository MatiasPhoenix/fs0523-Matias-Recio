
const header = document.querySelector("header");
const button = document.getElementsByClassName("get-started")
let isScrolled = false; 
let originalBackgroundColor = window.getComputedStyle(header).backgroundColor;

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) { 
    if (!isScrolled) {
      header.style.backgroundColor = "white";
      button.style.backgroundColor = "green";
      
      isScrolled = true;
    }
  } else {
    header.style.backgroundColor = originalBackgroundColor; 
    button.style.backgroundColor = "rgb(25, 25, 25)"; 
    isScrolled = false;
  }
});


