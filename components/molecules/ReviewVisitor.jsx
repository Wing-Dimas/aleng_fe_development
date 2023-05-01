import Container from "@components/atomics/Container";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Rating from "./Rating";
import RatingSlider from "@components/atomics/RatingSlider";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Text from "@components/atomics/Text";

export default function ReviewVisitor({ openReview, setOpenReview }) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");
  return (
    <div>
      {openReview ? (
        <Container className="!flex !flex-col md:!flex-row !gap-6 ">
          <div className="flex flex-col w-full gap-3">
            <div
              className="flex flex-row text-black text-sm font-semibold gap-2 cursor-pointer items-center"
              onClick={() => setOpenReview(false)}
            >
              <div className="p-1  rounded-full shadow-md border-[0.5px] border-black/10">
                <IconArrowLeft className="w-4 h-4 font-bold text-gray-600" />
              </div>
              Kembali
            </div>
            <div className="flex flex-col gap-6 md:flex-row w-full">
              <div className="w-full md:w-[20%]">
                <Text className="flex gap-2 cursor-pointer">
                  Ulasan Pengguna
                </Text>
                <Rating.descripted rate={4.5} count={666} />
              </div>
              <div className="w-full flex flex-col gap-6">
                <RatingSlider />
                <div className="flex flex-col gap-5 w-full h-full max-h-96 overflow-y-auto scrollbar pr-2">
                  {[...Array(5)].map((v, i) => {
                    return <ReviewCard open={true} key={i} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container className="!flex !flex-col md:!flex-row !gap-6">
          <div className="flex flex-col gap-2 w-full md:w-[20%]">
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setOpenReview(true)}
            >
              <Text>Ulasan Pengguna</Text>
              <div className="p-1  rounded-full shadow-md border-[0.5px] border-black/10">
                <IconArrowRight className="w-4 h-4 font-bold text-gray-600" />
              </div>
            </div>
            <Rating.descripted rate={4.5} count={666} />
            <RatingSlider />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[80%]">
            <Text>Ulasan yang mungkin membantumu</Text>
            <div className="flex flex-row gap-4 scrollbar-hide cursor-pointer w-full h-fit md:h-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={
                  breakpoint === "xs"
                    ? 1.3
                    : breakpoint === "sm"
                    ? 2.3
                    : breakpoint === "md"
                    ? 2.3
                    : breakpoint === "lg"
                    ? 2.8
                    : breakpoint === "xl"
                    ? 3.6
                    : breakpoint === "2xl"
                    ? 3.6
                    : 1.6
                }
                // loop={loopUlasan}
              >
                {[...Array(6)].map((item, i) => {
                  return (
                    <SwiperSlide key={i.toString()}>
                      <ReviewCard />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
