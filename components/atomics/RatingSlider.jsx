import { IconStar } from "@tabler/icons-react";
import Text from "./Text";

export default function RatingSlider({ stars = [1, 2, 3, 4, 5] }) {
  const closest = (num) => {
    let res = [0, 20, 40, 60, 100].reduce(function (prev, curr) {
      return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
    });
    if (res === 0) {
      return "w-0";
    }
    return `w-[${res}%]`;
  };

  return (
    <div>
      {stars.map((star, i) => {
        return (
          <div className="flex items-center justify-center gap-1" key={i}>
            <IconStar className="text-custom-secondary_yellow fill-custom-secondary_yellow w-5" />
            <Text className="!text-sm">{5 - i}</Text>
            <div className="w-full h-2 bg-gray-300 rounded-xl">
              <div
                className={`h-2 bg-blue-500 rounded-xl ${closest(
                  Math.round((star / stars.reduce((a, b) => a + b, 0)) * 100)
                )}`}
              ></div>
            </div>
            <Text className="!text-xs w-10">{star}</Text>
          </div>
        );
      })}
    </div>
  );
}
