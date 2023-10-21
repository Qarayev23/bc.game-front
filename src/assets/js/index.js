import Swiper, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "/src/assets/scss/main.scss";
Swiper.use([Pagination, Navigation, Autoplay]);

// HERO TEXT TOGGLE
const fullText = document.querySelector(".full-text")
const shortText = document.querySelector(".short-text")
const heroText = document.querySelector(".hero__text")

document.querySelector(".text-toggle").addEventListener("click", function () {
    fullText.classList.toggle("show")
    shortText.classList.toggle("hide")
    this.classList.toggle("rotate")

    if (this.classList.contains("rotate")) {
        const maxHeight = fullText.offsetHeight
        heroText.style.maxHeight = maxHeight + "px"
    } else {
        heroText.style.maxHeight = "72px"
    }
})

window.onresize = () => {
    if (window.innerWidth > 768) {
        heroText.style.maxHeight = "auto"
    }
}

// SWIPER SLIDE
const heroSwiper = new Swiper("#heroSwiper", {
    slidesPerView: "auto",
    slidesPerGroup: 2,
    spaceBetween: 16,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    navigation: {
        nextEl: ".hero__slide .swiper-button-next",
        prevEl: ".hero__slide .swiper-button-prev",
    },
    pagination: {
        el: ".hero__slide .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        }
    }
});

const bonusSwiper = new Swiper("#bonusSwiper", {
    slidesPerView: "auto",
    freeMode: true,
    speed: 1500,
    navigation: {
        nextEl: ".bonus-offers__slide .swiper-button-next",
        prevEl: ".bonus-offers__slide .swiper-button-prev",
    },
    pagination: {
        el: ".bonus-offers__slide .swiper-pagination",
        clickable: true,
    },
});