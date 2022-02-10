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
document
  .getElementsByClassName("hamburger")[0]
  .addEventListener("click", toggleMMenu);
document
  .querySelectorAll(".mobile-nav div a")
  .forEach((a) => a.addEventListener("click", toggleMMenu));

function toggleMMenu() {
  let circle = document.getElementsByClassName("circle")[0];
  let menu = document.getElementsByClassName("mobile-nav")[0];

  circle.classList.toggle("circle-active");
  menu.classList.toggle("mobile-nav-active");
}
