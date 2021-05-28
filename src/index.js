import Swiper from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Keyboard, Mousewheel]);

function init() {
  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    keyboard: { enabled: true, onlyInViewport: true, pageUpDown: true },
    mousewheel: {
      invert: true,
    },
  });
}

init();
