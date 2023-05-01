import { IconParking, IconStar, IconToiletPaper } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/atomics/Button";
import Heading from "@components/atomics/Heading";
import Rating from "./Rating";
import Text from "@components/atomics/Text";

export default function ListCardPenginapan() {
  return (
    <div
      className="grid grid-cols-2 gap-2 mb-4 bg-white md:bg-transparent p-2 md:p-0 rounded-xl md:rounded-none"
      style={{ gridTemplateColumns: "auto 1fr" }}
    >
      <div className="bg-white rounded-2xl">
        <div className="relative h-24 w-24 md:h-48 md:w-72 rounded-b-lg rounded-t-lg md:rounded-b-none md:rounded-t-2xl">
          <Image
            src="https://source.unsplash.com/random/?homestay"
            fill
            alt="room"
            className="object-cover rounded-b-lg rounded-t-lg md:rounded-b-none md:rounded-t-2xl"
          />
        </div>
        <div className="p-2 hidden md:block">
          <Heading.h3>Kaberaaz Luxury</Heading.h3>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center justify-between">
          <Heading.h3>Kaberaaz Luxury</Heading.h3>
          <div className="flex items-center gap-2 justify-end text-yellow-400">
            <IconStar className="w-3 h-3 fill-yellow-400" />
            <span className="text-xs">4.5</span>
          </div>
        </div>
        <Text.label>Jl. Siwalan Parangan</Text.label>
        <div className="flex items-end justify-end">
          <Text className="text-custom-primary_red whitespace-nowrap !text-right">
            Rp 150.000
          </Text>
          <Text.label>/malam</Text.label>
        </div>
        <div className="w-full flex items-center justify-end">
          <Button className="!text-xs !p-2">Pesan Sekarang</Button>
        </div>
      </div>
      <div
        className="bg-white rounded-2xl hidden md:grid grid-cols-2"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        {/* Detail */}
        <div className="border-r my-2">
          <div className="px-4 py-2">
            <Heading.h3>Kaberaaz Luxury</Heading.h3>
            <Rating count={666} />
            <Text.label className="mt-1">
              Desa Banraas, Kecamatan Dungkek, Kabupaten Sumenep
            </Text.label>
          </div>
          <hr />
          <div className="px-4 py-2">
            <Heading.h3>Fasilitas</Heading.h3>
            <div className="flex items-center gap-2 mb-1">
              <IconToiletPaper className="w-5 h-5 text-custom-black" />
              <Text.label>Toilet Umum</Text.label>
            </div>
            <div className="flex items-center gap-2">
              <IconParking className="w-5 h-5 text-custom-black" />
              <Text.label>Area Parkir</Text.label>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-end w-full">
              <Link className="text-custom-primary_red text-xs" href="/">
                Lihat Detail
              </Link>
            </div>
            <div className="flex items-end justify-end">
              <Heading.h3 className="!text-custom-primary_red !text-right">
                Rp 70.000
              </Heading.h3>
              <Text.small className="!font-normal">/malam</Text.small>
            </div>
          </div>
          <Button>Pesan Tiket</Button>
        </div>
      </div>
    </div>
  );
}
