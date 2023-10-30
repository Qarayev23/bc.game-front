import rater from "rater-js";
import Core from "./modules/Core.js";
const core = new Core();
import { accordionFunction, truncateFunction } from "./modules/helpers/common.js";

const fullscreenBtn = document.getElementById("fullscreenBtn");
const minimizeBtn = document.getElementById("minimizeBtn");
const demoBtn = document.getElementById("demo");
const iframe = document.getElementById("iframe");
const fullscreenElement = document.querySelector(".game-box");

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

// OPEN DEMO GAME
demoBtn.addEventListener("click", () => {
    iframe.querySelector("iframe").src = "https://cw.playngonetwork.com/Casino/IframedView?pid=565&amp;gid=&amp;gameId=310&amp;lang=en_GB&amp;practice=1&amp;channel=desktop&amp;div=egamings_game_frame&amp;width=100%&amp;height=100%&amp;user=&amp;password=&amp;ctx=&amp;demo=2&amp;brand=&amp;lobby=&amp;rccurrentsessiontime=0&amp;rcintervaltime=0&amp;rcaccounthistoryurl=&amp;rccontinueurl=&amp;rcexiturl=&amp;rchistoryurlmode=&amp;autoplaylimits=0&amp;autoplayreset=0&amp;callback=&amp;rcmga=&amp;resourcelevel=0&amp;hasjackpots=False&amp;country=&amp;region=&amp;pauseplay=&amp;playlimit=&amp;selftest=&amp;sessiontime=&amp;coreweburl=https://cw.playngonetwork.com/&amp;showpoweredby=True"
    iframe.classList.add("active");
    fullscreenElement.classList.add("active");
    // showIframeOverlay("fullscreen");
});

// FULLSCREEN
fullscreenBtn.addEventListener("click", () => {
    fullscreenElement.classList.add("fullscreen");
    fullscreenElement.classList.add(`${hasTouchScreen ? "mobile" : ""}`);
    // showIframeOverlay("active");
    if (fullscreenElement.requestFullscreen) {
        fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen) {
        fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen) {
        fullscreenElement.msRequestFullscreen();
    }

    document.documentElement.style.transform = "rotate(90deg)";
});

// MINIMIZE
minimizeBtn.addEventListener("click", () => {
    fullscreenElement.classList.remove("fullscreen");
    fullscreenElement.classList.remove("mobile");
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
});


// SHOW IFRAME OVERLAY
// const showIframeOverlay = (className) => {
//     if (fullscreenElement.classList.contains(className) && !JSON.parse(sessionStorage.getItem("isShowIframeOverlay")) && hasTouchScreen) {
//         sessionStorage.setItem("isShowIframeOverlay", "true");

//         setTimeout(() => {
//             document.querySelector(".iframe-box-overlay").classList.add("show");

//             setInterval(() => {
//                 document.querySelector(".iframe-box-overlay").classList.remove("show");
//             }, 5000);
//         }, 5000);
//     }
// }

// FULLSCREEN CHANGE
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenElement.classList.remove("fullscreen");
    }
});

window.addEventListener("orientationchange", () => {
    if (screen.orientation.type === "portrait-primary") {
        // Cihaz dikey konumda, dikey kal
        document.documentElement.style.transform = "";
    } else {
        // Cihaz yatay konumda, yatayda kal
        document.documentElement.style.transform = "rotate(90deg)";
    }
});


// RATING STAR
const myRater = rater({
    starSize: 19,
    rating: 4.5,
    element: document.querySelector("#rater"),
    rateCallback: function rateCallback(rating, done) {
        console.log(rating);
        this.setRating(rating);
        done();
    }
});

// TRUNCATE GAME DESCRIPTION TEXT
truncateFunction()

// ACCORDION
accordionFunction();