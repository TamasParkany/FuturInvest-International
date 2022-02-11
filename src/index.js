const header = document.getElementsByTagName("header")[0];
const headerBg = document.getElementsByClassName("header-bg")[0];
const formButtons = document.querySelectorAll(".form");
const contactForm = document.getElementById("contact-form");

formButtons.forEach((button) => button.addEventListener("click", showForm));
contactForm.addEventListener("click", hideForm);

function showForm() {
  contactForm.style.display = "flex";
}

function hideForm(e) {
  if (e.target.id === "contact-form" || e.target.classList.contains("close")) {
    contactForm.style.display = "none";
  } else {
    return;
  }
}

//hide navbar on scroll

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (window.screen.width > 1180) {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      headerBg.style.top = "0";
    } else {
      header.style.top = "-150px";
      headerBg.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  }
};

// mobile menu
let transitionState = "start";

document
  .getElementsByClassName("hamburger")[0]
  .addEventListener("click", toggleMMenu);

let menuLinks = document.querySelectorAll(".mobile-nav div a");

menuLinks.forEach((a) => a.addEventListener("click", toggleMMenu));

function toggleMMenu() {
  let header = document.getElementsByClassName("header-bg")[0];
  let menu = document.getElementsByClassName("mobile-nav")[0];

  if (transitionState === "start") {
    menuLinks.forEach((a) => {
      switch (a.classList[0]) {
        case "one-end":
          a.classList.replace("one-end", "one");
          break;
        case "two-end":
          a.classList.replace("two-end", "two");
          break;
        case "three-end":
          a.classList.replace("three-end", "three");
          break;
        case "four-end":
          a.classList.replace("four-end", "four");
          break;
      }
    });
    header.classList.toggle("test");
    menu.classList.toggle("mobile-nav-active");
    transitionState = "end";
  } else {
    menuLinks.forEach((a) => {
      switch (a.classList[0]) {
        case "one":
          a.classList.replace("one", "one-end");
          break;
        case "two":
          a.classList.replace("two", "two-end");
          break;
        case "three":
          a.classList.replace("three", "three-end");
          break;
        case "four":
          a.classList.replace("four", "four-end");
          break;
      }
    });
    header.classList.toggle("test");
    menu.classList.toggle("mobile-nav-active");
    transitionState = "start";
  }
}
