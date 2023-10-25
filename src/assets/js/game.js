import Core from "./modules/Core.js";
const core = new Core();
import { truncateFunction } from "./modules/helpers/common.js";

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
    showIframeOverlay("fullscreen");
});

// FULLSCREEN
fullscreenBtn.addEventListener("click", () => {
    fullscreenElement.classList.add("fullscreen");
    showIframeOverlay("active");
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

// FULLSCREEN CHANGE
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenElement.classList.remove("fullscreen");
    }
});

// MOBILE DEVICE DETECTION
var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true;
    } else {
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}

// SHOW IFRAME OVERLAY
const showIframeOverlay = (className) => {
    if (fullscreenElement.classList.contains(className) && !JSON.parse(sessionStorage.getItem("isShowIframeOverlay")) && hasTouchScreen) {
        sessionStorage.setItem("isShowIframeOverlay", "true");

        setTimeout(() => {
            document.querySelector(".iframe-box-overlay").classList.add("show");

            setInterval(() => {
                document.querySelector(".iframe-box-overlay").classList.remove("show");
            }, 5000);
        }, 5000);
    }
}

// TRUNCATE GAME DESCRIPTION TEXT
truncateFunction()
