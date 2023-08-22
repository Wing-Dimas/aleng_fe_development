import { IconStarFilled } from "@tabler/icons-react";

const Rating = ({ star = 5, total_review }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(Math.round(star))].map((v, i) => {
          return <IconStarFilled key={i} className="w-4 h-4 text-yellow-400" />;
        })}
      </div>
      <p className="font-medium text-xs sm:text-sm">
        <span className="text-red-500">{star}</span> / {total_review} Reviews
      </p>
    </div>
  );
};

Rating.review = ({ star = 5, total_review, className }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(Math.round(star))].map((v, i) => {
            return (
              <IconStarFilled key={i} className="w-4 h-4 text-yellow-400" />
            );
          })}
        </div>
        <p
          className={`${
            className ? className + " " : ""
          }font-caption-mobile text-caption-mobile sm:font-caption1 sm:text-caption1`}
        >
          {star}
        </p>
      </div>
      <p className="mt-1 text-xs sm:text-sm font-medium">
        Dari {total_review} review pengunjung
      </p>
    </div>
  );
};

export default Rating;
