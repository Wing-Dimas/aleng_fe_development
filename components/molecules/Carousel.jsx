import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({ children, slidesPerView }) => {
  return (
    <Swiper spaceBetween={0} slidesPerView={slidesPerView}>
      {children}
    </Swiper>
  );
};

Carousel.item = ({ children }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};

export default Carousel;
