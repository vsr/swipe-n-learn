const slideFormatter = (slide, slideGroup) => {
  return `<div class="swiper-slide">
        <img src="${slide.img}"  />
    </div>`;
};
export default {
  name: "Wild Animals",
  description: "Pictures of wild animals",
  slideFormatter,
  slides: [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Panthera_tiger_in_a_marshy_area_in_captivity.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Polar_Bear_AdF.jpg/1200px-Polar_Bear_AdF.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg",
    },
  ],
};
