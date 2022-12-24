import Footer from "@components/molecules/Footer";
import Navbar from "@components/molecules/Navbar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useBreakpoint } from "use-breakpoint";
import Image from "next/image";
import OrderCard from "@components/molecules/OrderCard";
import Head from "next/head";
import Button from "@components/molecules/Button";
import { BREAKPOINTS } from "@constants/index";
import FABSheet from "@components/molecules/FABSheet";
import { IconChevronLeft, IconFilter } from "@tabler/icons";
import Text from "@components/molecules/Text";
import Heading from "@components/molecules/Heading";

export default function PesananSaya() {
  const titleStatus = [
    { title: "Menunggu Pembayaran" },
    { title: "Sudah Dibayar" },
    { title: "Pembayaran Expired" },
    { title: "refund" },
  ];
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [index, setIndex] = useState(0);

  const doChangeIndex = (e) => {
    setIndex(parseInt(e.currentTarget.value));
  };
  return (
    <div className="w-screen h-screen font-inter overflow-x-hidden text-[#252525] bg-white">
      <Head>
        <title>Pesanan Saya</title>
      </Head>
      <Navbar />
      <div className={`mx-4 lg:mx-[7.5rem] mt-8`}>
        <div className="flex flex-col md:flex-row items-start  justify-center gap-3 w-full h-full">
          <div className="flex-col w-full md:w-[35%] h-full flex gap-2">
            <Heading.h2 className="flex items-center gap-2">
              <IconChevronLeft className="w-8 h-8" />
              <span>Cek Pesanan</span>
            </Heading.h2>
            <div className=" border-[#ABACAC]/30 p-[1rem] shadow-md rounded-md border-[0.5px] hidden md:flex flex-col">
              <p className="font-semibold text-base">Filter Pesanan</p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                  <Text.label>Produk</Text.label>
                  <div className="">
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Penginapan
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Wisata
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Paket Wisata
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Kuliner
                      </Text.label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Text.label>Tanggal Pesanan</Text.label>
                  <div className="">
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Minggu Ini
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Bulan Ini
                      </Text.label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          {["xs", "sm", "md"].includes(breakpoint) && (
            <FABSheet
              icon={<IconFilter className="w-8 h-8 text-custom-primary_red" />}
            >
              <div className="p-4 rounded-xl bg-custom-white">
                <Text className="mb-4">Filter Pesanan</Text>
                <hr />
                <br />
                {/* Fasilitas Hotel */}
                <Text.label>Produk</Text.label>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Penginapan
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Wisata
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Paket Wisata
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Kuliner
                    </Text.label>
                  </div>
                </div>
                <br />
                {/* Tipe Hotel */}
                <Text.label>Tanggal Pesan</Text.label>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Minggu ini
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Bulan ini
                    </Text.label>
                  </div>
                </div>
              </div>
            </FABSheet>
          )}
          <div className="min-h-full  w-full md:w-[65%] h-full  flex flex-col gap-6">
            <div className="flex flex-row items-center w-full flex-nowrap whitespace-nowrap overflow-auto scrollbar-hide">
              <Swiper
                spaceBetween={20}
                slidesPerView={
                  breakpoint === "xs"
                    ? 1.6
                    : breakpoint === "sm"
                    ? 2.3
                    : breakpoint === "md"
                    ? 1.6
                    : breakpoint === "lg"
                    ? 1.6
                    : breakpoint === "xl"
                    ? 2.3
                    : breakpoint === "2xl"
                    ? 3.3
                    : 3.3
                }
              >
                {titleStatus?.map((item, i) => {
                  return (
                    <SwiperSlide key={i.toString()}>
                      <Button
                        value={i}
                        onClick={doChangeIndex}
                        className={`!rounded-full w-full ${
                          index === i
                            ? "!bg-gradient-to-b !from-custom-gradient1 !to-custom-gradient2 !text-white"
                            : "!bg-white !text-custom-black !shadow-none border-[#ABACAC]/30 border-[0.5px]"
                        }`}
                      >
                        {item.title}
                      </Button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex flex-col gap-2 bg-custom-white py-4 rounded-xl">
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-10`}>
        <Footer />
      </div>
    </div>
  );
}
