import { useState } from "react";
import Tab from "@components/atomics/Tab";
import Heading from "@components/atomics/Heading";
import Rating from "@components/atomics/Rating";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";

export default function TabDesc({
  name,
  address,
  star,
  total_review,
  description,
  facilities,
  lat,
  long,
}) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="px-2">
        <Rating star={star} total_review={total_review} />
        <Heading.h2>{name}</Heading.h2>
        <div className="flex flex-row gap-1 items-center">
          <IconMapPin size={18} strokeWidth={2} color={"#615A56"} />
          <p className="font-normal text-xs sm:text-sm">{address}</p>
        </div>
      </div>
      <br />
      <Tab
        className="px-4 !text-xs !grid-cols-3"
        options={["DESKRIPSI", "LOKASI", "FASILITAS"]}
        index={index}
        setIndex={setIndex}
      />
      <br />
      {index === 0 ? (
        <div>
          <p className="text-justify font-medium sm:font-normal text-base">
            {description}
          </p>
          <br />
        </div>
      ) : index === 1 ? (
        <div>
          {lat && long && (
            <iframe
              src={`http://maps.google.com/?q=${lat},${long}`}
              className="w-full h-72 border-[1px] border-[#ABACAC] shadow-md rounded-md"
              loading="lazy"
            ></iframe>
          )}
        </div>
      ) : (
        <div className="p-4 grid grid-cols-4 items-center place-items-center">
          {facilities.map((facility, i) => {
            return (
              <div
                key={i.toString()}
                className="flex flex-col items-center justify-start"
              >
                <div className="relative h-8 w-8">
                  <Image
                    src={facility.icon_url}
                    alt={facility.name}
                    fill
                    sizes="auto"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium mt-1">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
