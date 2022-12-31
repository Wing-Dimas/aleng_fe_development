import Link from "next/link";
import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";
import { useState } from "react";

export default function OrderCard({ showModal, setShowModal }) {
  return (
    <div className="bg-white border rounded-md">
      <div className="flex items-center gap-4 p-4">
        <div className="w-10 h-10 rounded-full bg-yellow-400" />
        <Text>Penginapan</Text>
      </div>
      <hr />
      <div className="p-4 flex justify-between">
        <div>
          <Text>Kaberaaz Luxury</Text>
          <Text.label>
            Desa Banraas, Kecamatan Dungkek, Kabupaten Sumenep
          </Text.label>
        </div>

        <Heading.h3 className="text-custom-primary_red whitespace-nowrap">
          Rp 165.000
        </Heading.h3>
      </div>
      <hr />
      <div className="p-4 flex justify-between items-end flex-wrap gap-2">
        <div>
          <Text.label>Dipesan tanggal 16 November 2022</Text.label>
          <div className="mt-1 flex items-center gap-2 flex-wrap">
            <Badge name="E-tiket sudah terbit" />
            <Badge name="Bisa Refund" />
          </div>
        </div>
        <div onClick={() => setShowModal(!showModal)}>
          <Text.label className="!text-custom-primary_red  whitespace-nowrap cursor-pointer">
            Lihat Detail
          </Text.label>
        </div>
      </div>
    </div>
  );
}
