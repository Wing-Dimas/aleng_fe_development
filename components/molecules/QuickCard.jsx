import Heading from "@components/atomics/Heading";
import { IconBookmark, IconStarFilled } from "@tabler/icons-react";
import Text from "@components/atomics/Text";

export default function QuickCard({
  imageUrl,
  title,
  review_count,
  address,
  price,
  children,
}) {
  return (
    <div className="m-4 whitespace-nowrap">
      <div
        className="aspect-[9/10] bg-center bg-cover rounded-2xl flex justify-end p-4"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <IconBookmark className="h-8 w-8 text-white fill-[#00000050]" />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-orange-400">
            <IconStarFilled className="h-4 w-4" />
            <Text.small>{review_count}/5</Text.small>
          </div>
          {price && (
            <Text.small className="text-custom-primary-red">
              {price}K
            </Text.small>
          )}
        </div>
        <Heading.h3 className="!font-bold tracking-tight truncate">
          {title}
        </Heading.h3>
        <Text.label className="!font-medium !text-neutral-700">
          {address}
        </Text.label>
        {children}
      </div>
    </div>
  );
}
