export const onClickOutside = (element, callback) => {
  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};

export const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

export function heightToggleElement(toggler, blocks) {
  toggler.addEventListener("click", (e) => {
    e.preventDefault();
    if (blocks instanceof NodeList) {
      blocks.forEach(function (block) {
        addFunctionality(toggler, block);
      });
    } else {
      addFunctionality(toggler, blocks);
    }
  });

  function addFunctionality(toggler, block) {
    if (block.style.height === "0px" || !block.style.height) {
      block.style.height = `${block.scrollHeight}px`;
      toggler.classList.add("is-active");
      block.classList.add("is-expanded");
    } else {
      block.style.height = `${block.scrollHeight}px`;
      window.getComputedStyle(block, null).getPropertyValue("height");
      block.style.height = "0";
      toggler.classList.remove("is-active");
      block.classList.remove("is-expanded");
    }
    block.addEventListener("transitionend", () => {
      if (block.style.height !== "0px") {
        block.style.height = "auto";
      }
    });
  }
}

export function isWebp() {
  function webPsupport(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  webPsupport(function (support) {
    if (support) {
      document.documentElement.classList.add("webp");
    } else {
      document.documentElement.classList.add("no-webp");
    }
  });
}

export function truncateFunction() {
  const truncate = document.querySelector('.truncate');
  let isOpen = false;
  document.querySelector('.uncover-btn').addEventListener('click', function () {
    isOpen = !isOpen;
    isOpen ? truncate.classList.add('open') : truncate.classList.remove('open')
    this.classList.toggle('rotate')
  });
}

export function accordionFunction() {
  const accBtn = document.getElementsByClassName("accordion__button");
  let i;

  for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function () {
      for (let j = 0; j < accBtn.length; j++) {
        accBtn[j].classList.remove("show");
        if (j != i) {
          accBtn[j].nextElementSibling.style.maxHeight = null;
        }
      }
      if (!this.nextElementSibling.offsetHeight > 0) {
        this.classList.add("show");
      }
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight / 16 + "rem";
      }
    });
  }

  window.onload = function () {
    accBtn[0].click()
  }
}