import Swiper from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "swiper/swiper-bundle.css";
import slides from "./slides";

SwiperCore.use([Keyboard, Mousewheel]);

const slideList = (slideDeck) => {
  return slideDeck.slides.map((slide) =>
    slideDeck.slideFormatter(slide, slideDeck)
  );
};

const loadSlides = (slideObj) => {
  swiper.removeAllSlides();
  swiper.appendSlide(slideList(slideObj));
  swiper.slideTo(1);
};

function init() {
  document.querySelector("#menu-button").addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    keyboard: { enabled: true, onlyInViewport: true, pageUpDown: true },
    mousewheel: {
      invert: true,
    },
  });

  loadSlides(slides[0]);
}

init();
