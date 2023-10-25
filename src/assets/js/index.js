import Swiper, { Pagination, Navigation, Autoplay } from "swiper";
import { truncateFunction } from "./modules/helpers/common.js";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
Swiper.use([Pagination, Navigation, Autoplay]);
import Core from "./modules/Core.js";
const core = new Core();

// SWIPER SLIDE
const heroSwiper = new Swiper("#heroSwiper", {
    slidesPerView: "auto",
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
    spaceBetween: 12,
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
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: "auto",
        },
    }
});

const registerProcessSwiper = new Swiper("#registerProcess", {
    spaceBetween: 12,
    slidesPerView: "auto",
    freeMode: true,
    speed: 1500,
    navigation: {
        nextEl: ".register-process__slide .swiper-button-next",
        prevEl: ".register-process__slide .swiper-button-prev",
    },
    pagination: {
        el: ".register-process__slide .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            spaceBetween: 24,
            slidesPerView: 4,
        },
        991: {
            spaceBetween: 24,
            slidesPerView: 3,
        },
        576: {
            spaceBetween: 24,
            slidesPerView: 2,
        },
    }
});

// HERO TRUNCATE TEXT
truncateFunction();