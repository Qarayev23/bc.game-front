import "/src/assets/scss/main.scss";

// Libraries
import { isWebp, documentHeight } from "./helpers/common";

export default class Core {
  static instance;
  constructor() {
    if (Core.instance) {
      return Core.instance;
    }
    Core.instance = this;
    this.init();
  }
  // Init
  async init() {
    isWebp();
    documentHeight();
    window.addEventListener("resize", () => {
      documentHeight();
    });
    const { Sizes } = await import("./utils/Sizes");
    const { Variables } = await import("./utils/Variables");

    this.sizes = new Sizes();
    this.variables = new Variables();
  }
}

// FIXED HEADER
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    header.classList.add("fix-header");
  } else {
    header.classList.remove("fix-header");
  }
});

// NAVBAR TOGGLE
document.querySelectorAll(".hamburger-btn").forEach(element => {
  element.onclick = function () {
    element.classList.toggle("active")
    document.querySelector(".navbar__list").classList.toggle("active")
    document.querySelector("body").classList.toggle("hidden")
  }
});

// SCROLL TO TOP
let scrollBtn = document.querySelector(".scroll-top");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// DROPDOWN
const accBtn = document.getElementsByClassName("dropdown__btn");
let i;

for (i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener("click", function () {
    this.classList.toggle("show");
    var panel = this.nextElementSibling;
    var parent = this.parentElement.parentElement;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight / 16 + "rem";
      parent.style.maxHeight = parseInt(parent.style.maxHeight) + panel.scrollHeight + 12 / 16 + "rem";
    }
  });
}