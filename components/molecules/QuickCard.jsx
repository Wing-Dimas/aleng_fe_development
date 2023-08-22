import Heading from "@components/atomics/Heading";
import { IconBookmark, IconStarFilled } from "@tabler/icons-react";
import Text from "@components/atomics/Text";
import { toRupiah } from "@utils/libs";
import Link from "next/link";
import HoverPlayer from "./HoverPlayer";

export default function QuickCard({
  url,
  image_url,
  video_url,
  name,
  star,
  address,
  price,
  children,
}) {
  return (
    <Link href={url} className="m-4 whitespace-nowrap">
      <HoverPlayer
        video_url={video_url}
        thumbnail_url={image_url}
        className="rounded-2xl overflow-hidden aspect-[9/10]"
        alt="lenjhelenan"
      />
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-orange-400">
            <IconStarFilled className="h-4 w-4" />
            <Text.small>{star}/5</Text.small>
          </div>
          {price && (
            <Text.small className="text-custom-primary-red">
              {toRupiah.format(price)}
            </Text.small>
          )}
        </div>
        <Heading.h3 className="!font-bold tracking-tight truncate">
          {name}
        </Heading.h3>
        <Text.label className="!font-medium !text-neutral-700">
          {address}
        </Text.label>
        {children}
      </div>
    </Link>
  );
}
