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

const loadSlide = (swiper, slideObj) => {
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
      invert: false,
    },
  });

  document.querySelector("#slide-list").innerHTML = slides
    .map(
      (slide, index) => `
    <li class="slide-list__item" data-slide-index="${index}">
      <span class="slide-list__item-title">${slide.name}</span>
      <span class="slide-list__item-desc">${slide.description}</span>
    </li>
  `
    )
    .join("");

  const getListItem = (el) => {
    if (el.classList.contains("slide-list__item")) {
      return el;
    }
    return el && getListItem(el.parentElement);
  };

  document.querySelector("#slide-list").addEventListener("click", (ev) => {
    const item = getListItem(ev.target);
    if (item) {
      const index = parseInt(item.getAttribute("data-slide-index"), 10);
      loadSlide(swiper, slides[index]);
      document.body.classList.remove("menu-open");
    }
  });

  loadSlide(swiper, slides[0]);
}

init();
