import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line arrow-body-style
const Banner = () => {
  return (
    <Swiper
      className="w-screen h-96"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className="w-full bg-brand">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-300">Slide 2</SwiperSlide>
    </Swiper>
  );
};

export default Banner;
