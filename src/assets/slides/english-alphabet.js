const slideFormatter = (slide, slideGroup) => {
  return `<div class="swiper-slide">
        ${slide.text.toUpperCase()}
    </div>`;
};
export default {
  name: "English Alphabet",
  description: "Letters of the English Alphabet",
  slideFormatter,
  slides: [
    {
      text: "a",
    },
    {
      text: "b",
    },
    {
      text: "c",
    },
    {
      text: "d",
    },
    {
      text: "e",
    },
    {
      text: "f",
    },
    {
      text: "g",
    },
    {
      text: "h",
    },
    {
      text: "i",
    },
    {
      text: "j",
    },
    {
      text: "k",
    },
    {
      text: "l",
    },
    {
      text: "m",
    },
    {
      text: "n",
    },
    {
      text: "o",
    },
    {
      text: "p",
    },
    {
      text: "q",
    },
    {
      text: "r",
    },
    {
      text: "s",
    },
    {
      text: "t",
    },
    {
      text: "u",
    },
    {
      text: "v",
    },
    {
      text: "w",
    },
    {
      text: "x",
    },
    {
      text: "y",
    },
    {
      text: "z",
    },
  ],
};
