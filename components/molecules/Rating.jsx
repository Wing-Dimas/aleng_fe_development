import { IconStar } from "@tabler/icons-react";

const Rating = ({ count }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((v, i) => {
        return (
          <IconStar
            key={i}
            className="w-4 h-4 text-custom-secondary_yellow fill-custom-secondary_yellow"
          />
        );
      })}
      <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
        {count} Reviews
      </p>
    </div>
  );
};

Rating.descripted = ({ rate, count }) => {
  return (
    <div>
      <div className="flex items-center">
        {[...Array(5)].map((v, i) => {
          return (
            <IconStar
              key={i}
              className="w-4 h-4 text-custom-secondary_yellow fill-custom-secondary_yellow"
            />
          );
        })}
        <p className="ml-2 text-xs text-custom-primary_red">{rate}/5</p>
      </div>
      <p className="mt-2 text-xs text-[#615A56]">
        Dari {count} review pengujung
      </p>
    </div>
  );
};

Rating.comment = () => {
  return (
    <div>
      <div className="flex items-center">
        {[...Array(5)].map((v, i) => {
          return (
            <IconStar
              key={i}
              className="w-2 h-2 text-custom-secondary_yellow fill-custom-secondary_yellow"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
