import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import { Navigation } from "swiper";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function Carousel({ id, spaceBetween = 0, children }) {
  const { breakpoint, _, __ } = useBreakpoint(BREAKPOINTS, "xs");
  return (
    <div className="relative">
      <div className="absolute z-10 top-0 -right-4 h-full flex items-center justify-center">
        <IconChevronRight
          className={`h-8 w-8 text-neutral-500 cursor-pointer swiper-button-next-${id}`}
        />
      </div>
      <div className="absolute z-10 top-0 -left-4 h-full flex items-center justify-center">
        <IconChevronLeft
          className={`h-8 w-8 text-neutral-500 cursor-pointer swiper-button-prev-${id}`}
        />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-${id}`,
          prevEl: `.swiper-button-prev-${id}`,
          disabledClass: "opacity-25",
        }}
        spaceBetween={spaceBetween}
        slidesPerView={
          breakpoint === "xs"
            ? 2
            : breakpoint === "sm"
            ? 2
            : breakpoint === "md"
            ? 3
            : breakpoint === "lg"
            ? 3
            : breakpoint === "xl"
            ? 4
            : breakpoint === "2xl"
            ? 4
            : 5
        }
      >
        {children}
      </Swiper>
    </div>
  );
}

Carousel.item = ({ children }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};
Carousel.item.displayName = "SwiperSlide";
