import Core from "./modules/Core.js";
const core = new Core();

const fullscreenBtn = document.getElementById("fullscreenBtn");
const minimizeBtn = document.getElementById("minimizeBtn");
const demoBtn = document.getElementById("demo");
const iframe = document.getElementById("iframe");
const fullscreenElement = document.querySelector(".game-box");

// OPEN DEMO GAME
demoBtn.addEventListener("click", () => {
    iframe.querySelector("iframe").src = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&lang=en&lobbyUrl=https://vavada.com/tr/games/exit&cashierUrl=https://vavada.com/tr/profile/deposit/&stylename=sfws_vavada&jurisdiction=99&isGameUrlApiCalled=true"
    iframe.classList.add("active");
    fullscreenElement.classList.add("active");
});

// FULLSCREEN
fullscreenBtn.addEventListener("click", () => {
    fullscreenElement.classList.add("fullscreen");
    
    if (fullscreenElement.requestFullscreen) {
        fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen) {
        fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen) {
        fullscreenElement.msRequestFullscreen();
    }
});

// MINIMIZE
minimizeBtn.addEventListener("click", () => {
    fullscreenElement.classList.remove("fullscreen");
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenElement.classList.remove("fullscreen");
    }
});

// GAME TRUNCATE TEXT
const toggleBtn = document.querySelector('.uncover-btn');
const truncateEl = document.querySelector('.truncate');
const truncateInnerEl = document.querySelector('.truncate__inner');
const truncateRect = truncateEl.getBoundingClientRect();
let truncateInnerRect = truncateInnerEl.getBoundingClientRect();
truncateEl.style.setProperty("--truncate-height", `${truncateRect.height}px`);

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('rotate');
    if (truncateEl.classList.contains('truncate--expanded')) {
        close();
    } else {
        open();
    }
});

function open() {
    truncateEl.classList.remove('truncate--line-clamped');
    window.requestAnimationFrame(() => {
        truncateInnerRect = truncateInnerEl.getBoundingClientRect();
        truncateEl.style.setProperty("--truncate-height-expanded", `${truncateInnerRect.height}px`);
        truncateEl.classList.add('truncate--expanded');
    });
}

function close() {
    truncateEl.classList.remove('truncate--expanded');
    setTimeout(() => {
        truncateEl.classList.add('truncate--line-clamped');
    }, 300);
}