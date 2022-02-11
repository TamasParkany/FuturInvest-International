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

// NAVBAR HIDER
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

// MOBILE MENU
const mcMenu = document.getElementsByClassName("menu")[0];

mcMenu.addEventListener("click", () => mcMenu.classList.toggle("open"));

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

//ANIMATION OBSERVER
document.documentElement.style.setProperty("--animate-duration", "2s");
document.documentElement.style.setProperty("--animate-delay", "0.5s");

//INTRO
const introObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const header = entry.target.querySelector(".intro-info div h2");
    const text = entry.target.querySelector(".intro-info div p");
    const button = entry.target.querySelector(".intro-info div div");

    if (entry.isIntersecting) {
      header.classList.add("animate__animated", "animate__fadeInLeft");
      text.classList.add(
        "animate__animated",
        "animate__delay-1s",
        "animate__fadeInLeft"
      );
      button.classList.add(
        "animate__animated",
        "animate__delay-2s",
        "animate__fadeInLeft"
      );
      return;
    }
    // stop intersecting
  });
});

introObserver.observe(document.querySelector("#intro"));

//INNOVATIONS
const innovationsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const header = entry.target.getElementsByClassName("innovations-header")[0];
    const info = entry.target.querySelectorAll(".innovations-info div");

    if (entry.isIntersecting) {
      header.classList.add("animate__animated", "animate__fadeInUp");
      info[0].classList.add(
        "animate__animated",
        "animate__delay-1s",
        "animate__fadeInUp"
      );
      info[1].classList.add(
        "animate__animated",
        "animate__delay-2s",
        "animate__fadeInUp"
      );
      info[2].classList.add(
        "animate__animated",
        "animate__delay-3s",
        "animate__fadeInUp"
      );
      return;
    }
    // stop intersecting
  });
});

innovationsObserver.observe(document.querySelector(".innovations-container"));

//PLANS
const plansObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const container = entry.target.getElementsByClassName("plans-container")[0];
    const illustration =
      entry.target.getElementsByClassName("plans-illustration")[0];

    if (entry.isIntersecting) {
      container.classList.add("animate__fadeInLeft");
      illustration.classList.add("animate__fadeInRight");
      return;
    }
    // stop intersecting
  });
});

plansObserver.observe(document.querySelector("#plans"));

//AMBITIONS
const ambitionsCounterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const projects = entry.target.querySelector(
      ".projects .ambitions-counter-number"
    );
    const negotiations = entry.target.querySelector(
      ".negotiations .ambitions-counter-number"
    );
    const deals = entry.target.querySelector(
      ".deals .ambitions-counter-number"
    );

    //VALUE COUNTER
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    if (entry.isIntersecting) {
      animateValue(projects, 0, 19, 1500);
      animateValue(negotiations, 0, 253, 1500);
      animateValue(deals, 0, 60, 1500);
      return;
    }
    // stop intersecting
  });
});

ambitionsCounterObserver.observe(document.querySelector(".ambitions-counter"));

const ambitionsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const checkmarks = entry.target.querySelectorAll("ul li");

    if (entry.isIntersecting) {
      checkmarks.forEach((mark) => mark.classList.add("animate__fadeInLeft"));
      return;
    }
    // stop intersecting
  });
});

ambitionsObserver.observe(document.querySelector(".ambitions-right"));

//TEAM
const teamBottomObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const people = entry.target.getElementsByClassName("card");

    if (entry.isIntersecting) {
      people[0].classList.add("animate__fadeInUp");
      people[1].classList.add("animate__fadeInDown");
      people[2].classList.add("animate__fadeInUp");
      people[3].classList.add("animate__fadeInDown");
      return;
    }
    // stop intersecting
  });
});

teamBottomObserver.observe(document.querySelector(".team-bottom"));
