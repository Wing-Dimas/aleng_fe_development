import Container from "@components/atomics/Container";
import Rating from "@components/atomics/Rating";
import RatingSlider from "@components/atomics/RatingSlider";
import Text from "@components/atomics/Text";
import { IconArrowRight, IconStar } from "@tabler/icons-react";
import Carousel from "@components/molecules/Carousel";
import Image from "next/image";

const ShortReview = ({ star, stars, total_review, comments }) => {
  return (
    <div>
      <Container>
        <div
          className="flex flex-col lg:grid gap-8"
          style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}
        >
          <div className="flex flex-col justify-between">
            <div>
              <Text>Ulasan Pengguna</Text>
              <Rating.review
                star={star}
                total_review={total_review}
                className="text-red-500 !font-medium"
              />
            </div>
            <div className="mt-2">
              <RatingSlider
                percentages={stars.map((star) => {
                  return `${Math.abs(star / total_review) * 100}%`;
                })}
                stars={stars}
              />
            </div>
          </div>
          <div>
            <Text>Ulasan yang mungkin membantumu</Text>
            <Carousel className="mt-2">
              {comments.map((comment, i) => {
                return (
                  <Carousel.item key={i}>
                    <Comments
                      name={comment.name}
                      profile_pic_url={comment.profile_pic_url}
                      date={comment.date}
                      star={comment.star}
                      text={comment.text}
                    />
                  </Carousel.item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Comments = ({ name, profile_pic_url, date, star, text }) => {
  return (
    <div className="mx-2.5 flex flex-col border p-4 shadow-md rounded-md aspect-video">
      <div className="flex items-center justify-between">
        <div className="flex items-start justify-start gap-2 w-full h-full">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={profile_pic_url}
              alt="profile_pic"
              fill
              sizes="auto"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xs font-medium">{name}</p>
            <p className="text-[0.6rem] font-normal text-neutral-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center bg-yellow-100 p-1 gap-1 rounded-md">
          <IconStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <p className="text-xs text-red-500 font-medium">{star}</p>
        </div>
      </div>
      <hr className="border my-4" />
      <p className="text-neutral-700 text-xs font-medium text-ellipsis overflow-hidden line-clamp-3">
        {text}
      </p>
    </div>
  );
};

export default ShortReview;
