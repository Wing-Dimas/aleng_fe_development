import { IconBookmark, IconStar } from "@tabler/icons";

export default function QuickCard({
  imageUrl,
  title,
  star,
  review_count,
  address,
  price,
  children,
}) {
  return (
    <div className="m-4 p-4 shadow-custom rounded-3xl whitespace-nowrap cursor-pointer bg-white">
      <div
        className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-center bg-cover rounded-3xl"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
          <IconBookmark height={24} width={24} className="text-white" />
        </div>
      </div>
      <p className="pt-2 truncate font-heading3_mobile text-heading3 sm:font-heading3 sm:text-heading3 text-custom-black">
        {title}
      </p>
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
          {review_count} Reviews
        </p>
      </div>
      <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
        {address}
      </p>
      {price && (
        <p className="pt-1 font-body1_mobile text-body1_mobile text-custom-primary_red">
          Rp {price}
          <span className="font-caption_mobile text-caption_mobile sm:font-caption2 sm:text-caption2 text-[#615A56]">
            /malam
          </span>
        </p>
      )}
      {children}
    </div>
  );
}
