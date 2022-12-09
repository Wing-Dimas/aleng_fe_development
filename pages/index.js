import {
  IconBookmark,
  IconBriefcase,
  IconCalendarEvent,
  IconChevronDown,
  IconMapPin,
  IconMenu2,
  IconStar,
  IconSwitch,
  IconSwitchHorizontal,
} from "@tabler/icons";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "@components/molecules/Footer";
import Navbar from "@components/molecules/Navbar";
import useBreakpoint from "use-breakpoint";
import Head from "next/head";

const BREAKPOINTS = {
  xs: 300,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function Home() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [tabIndex, setTabIndex] = useState(0);

  const doChangeTabIndex = (e) => {
    setTabIndex(parseInt(e.currentTarget.value));
  };

  return (
    <div className="font-inter min-h-screen min-w-screen max-h-screen max-w-screen">
      <Head>
        <title>Lenjelen Madura | Beranda</title>
      </Head>
      <Navbar is_transparent fixed />
      <div
        style={{ backgroundImage: "url('/image/hero.jpeg')" }}
        className="pt-48 bg-center bg-cover"
      >
        {/* Liburan bersama */}
        <div className="px-12 text-custom-white font-bold text-base lg:text-title max-w-7xl mx-auto">
          <p>LIBURAN BERSAMA</p>
          <div className="flex items-center justify-center lg:my-8">
            <p>LENJELEN MADURA</p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-[8px] lg:text-heading2 font-semibold">
              RENCANAKAN LIBURAN SERUMU BERSAMA KAMI
            </p>
          </div>
        </div>
        {/* tabbar */}
        <div className="text-custom-white font-semibold text-xs sm:font-heading3 sm:text-heading3 sm:my-8 px-4 max-w-xl mx-auto">
          <div className="grid grid-cols-3 border-b border-b-custom-white">
            <button
              value={0}
              onClick={doChangeTabIndex}
              className={`${
                tabIndex === 0
                  ? "border-b-custom-white"
                  : "border-b-transparent"
              } border-b-2 p-2 flex items-center justify-center gap-4`}
            >
              <Image
                src="/icons/beach.png"
                width={24}
                height={24}
                alt="beach"
              />
              <p>WISATA</p>
            </button>
            <button
              value={1}
              onClick={doChangeTabIndex}
              className={`${
                tabIndex === 1
                  ? "border-b-custom-white"
                  : "border-b-transparent"
              } border-b-2 p-2 flex items-center justify-center gap-4`}
            >
              <Image
                src="/icons/kuliner.png"
                width={24}
                height={24}
                alt="kuliner"
              />
              <p>KULINER</p>
            </button>
            <button
              value={2}
              onClick={doChangeTabIndex}
              className={`${
                tabIndex === 2
                  ? "border-b-custom-white"
                  : "border-b-transparent"
              } border-b-2 p-2 flex items-center justify-center gap-4`}
            >
              <Image
                src="/icons/hotel.png"
                width={24}
                height={24}
                alt="hotel"
              />
              <p>PENGINAPAN</p>
            </button>
          </div>
        </div>
        <br />
        {/* Search bar */}
        {tabIndex === 2 ? (
          <div className="px-4 max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-50 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center bg-white w-full rounded-md">
                <div className="relative w-full">
                  <IconCalendarEvent
                    height={24}
                    width={24}
                    className="absolute top-3 left-3"
                  />
                  <input
                    type="date"
                    className="appearance-none px-12 py-4 rounded-md sm:rounded-l-md w-full font-semibold text-xs text-custom-black"
                  />
                  <IconChevronDown
                    height={24}
                    width={24}
                    className="absolute top-3.5 right-3 text-custom-primary_red"
                  />
                </div>
                <button className="p-2 rounded shadow border -rotate-90 sm:rotate-0">
                  <IconSwitchHorizontal height={16} width={16} />
                </button>
                <div className="relative w-full">
                  <IconCalendarEvent
                    height={24}
                    width={24}
                    className="absolute top-3 left-3"
                  />
                  <input
                    type="date"
                    className="appearance-none px-12 py-4 rounded-md sm:rounded-r-md w-full font-semibold text-xs text-custom-black"
                  />
                  <IconChevronDown
                    height={24}
                    width={24}
                    className="absolute top-3.5 right-3 text-custom-primary_red"
                  />
                </div>
              </div>
              <button className="text-custom-black bg-[#FDD05C] p-4 rounded-md w-full sm:w-auto font-semibold text-xs">
                Cari
              </button>
            </div>
          </div>
        ) : (
          <div className="px-4 max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-50 p-6 rounded-xl flex flex-col sm:flex-row gap-4">
              <div className="relative text-custom-black sm:w-full">
                <label htmlFor="destinasi">
                  <IconMapPin
                    height={24}
                    width={24}
                    className="absolute top-3 left-3"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Destinasi kunjungan"
                  id="destinasi"
                  name="destinasi"
                  className="pl-12 pr-4 py-4 rounded-md w-full font-semibold text-xs text-custom-black"
                />
              </div>
              <button className="text-custom-black bg-[#FDD05C] p-4 rounded-md w-full sm:w-auto font-semibold text-xs">
                Cari
              </button>
            </div>
          </div>
        )}
        <br />
      </div>
      {tabIndex === 0 ? (
        <Wisata breakpoint={breakpoint} />
      ) : tabIndex === 1 ? (
        <Kuliner breakpoint={breakpoint} />
      ) : (
        <Penginapan breakpoint={breakpoint} />
      )}
      <Footer />
    </div>
  );
}

const Wisata = ({ breakpoint }) => {
  return (
    <div>
      {/* Wisata Populer */}
      <div className="text-center px-4 py-4 md:my-4">
        <p className="text-custom-black font-heading3 text-heading3 md:text-heading1 md:font-heading1">
          Wisata <span className="text-custom-primary_red">Populer</span> di
          Madura
        </p>
        <p className="font-body2 text-body2 sm:font-body1 sm:text-body1 sm: text-[#252525]">
          Kami menawarkan wisata disekitar madura untuk menemani liburanmu
        </p>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap max-w-xs">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] max-w-xs bg-cover bg-center rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/giligenting.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-2 font-heading3_mobile text-heading3_mobile sm:font-heading3 sm:text-heading3 text-custom-black">
                    Gili Genting
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56] text-xs">
                    Kab. Sumenep
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Pilihan Wisata */}
      <div className="bg-[#F6F0E1] px-4 py-8 sm:px-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-custom-black font-heading2_mobile text-heading2_mobile sm:text-heading1 sm:font-heading1">
            Pilihan Wisata{" "}
            <span className="text-custom-primary_red">di Kabupaten</span>
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <div className="h-1 rounded-full bg-custom-primary_red flex-grow" />
            <div className="h-1 w-8 rounded-full bg-custom-primary_red" />
            <div className="h-1 w-20 rounded-full bg-custom-primary_red" />
          </div>
          <br />
          <div className="grid grid-cols-2 gap-4 text-white font-body1 text-body1 sm:font-heading3 sm:text-heading3">
            <div
              className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center justify-center bg-center"
              style={{ backgroundImage: "url('/image/bangkalan.png')" }}
            >
              Bangkalan
            </div>
            <div
              className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center justify-center bg-center"
              style={{ backgroundImage: "url('/image/pamekasan.png')" }}
            >
              Pamekasan
            </div>
            <div
              className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center justify-center bg-center"
              style={{ backgroundImage: "url('/image/sampang.png')" }}
            >
              Sampang
            </div>
            <div
              className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center justify-center bg-center"
              style={{ backgroundImage: "url('/image/sumenep.png')" }}
            >
              Sumenep
            </div>
          </div>
        </div>
      </div>
      {/* Paket wisata */}
      <div className="text-center px-4 pb-4 pt-8">
        <p className="font-heading3_mobile text-heading3_mobile sm:font-heading1 sm:text-heading1 text-custom-black">
          Paket <span className="text-custom-primary_red">Wisata</span> Untukmu
        </p>
        <p className="font-body2_mobile text-body2_mobile sm:font-body1 sm:text-body1 text-[#252525]">
          Kami bisa memilihkanmu beberapa paket wisata agar kamu merasa nyaman
        </p>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-cover bg-center rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/giligenting.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-1 font-heading3_mobile text-heading3_mobile sm:font-heading3 sm:text-heading3 text-custom-black">
                    Jelajah Gili Iyang
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56] text-xs">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56] text-xs">
                    Kab. Sumenep
                  </p>
                  <div className="pt-1 font-body1_mobile text-custom-primary_red flex flex-wrap items-center justify-between gap-4">
                    <p>Rp 500.000</p>
                    <div className="flex items-center justify-end gap-2">
                      <IconBriefcase className="w-4 h-4 text-white fill-custom-primary_red" />
                      <p className="font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1">
                        Paket 3hari
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Wisata Religi dan Bersejarah */}
      <div className="bg-white px-4 pt-8">
        <p className="text-center text-custom-black font-heading2_mobile text-heading2_mobile sm:font-heading1 sm:text-heading1">
          Wisata <span className="text-custom-primary_red">Religi</span> dan{" "}
          <span className="text-custom-primary_red">Bersejarah</span>
        </p>
        <div className="flex gap-2 max-w-md mx-auto pt-3">
          <div className="h-1 rounded-full bg-custom-primary_red flex-grow" />
          <div className="h-1 w-8 rounded-full bg-custom-primary_red" />
          <div className="h-1 w-20 rounded-full bg-custom-primary_red" />
        </div>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-center bg-cover rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/giligenting.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-2 font-heading3_mobile text-heading3_mobile sm:font-heading3 sm:text-heading3 text-custom-black">
                    Gili Genting
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-[#615A56] text-xs">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                    Kab. Sumenep
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const Kuliner = ({ breakpoint }) => {
  const [restoranIndex, setRestoranIndex] = useState(0);

  const doChangeRestoranIndex = (e) => {
    setRestoranIndex(parseInt(e.currentTarget.value));
  };

  return (
    <div>
      {/* Restoran Populer */}
      <div className="text-center px-4 pb-4 pt-8">
        <p className="text-custom-black font-heading3_mobile text-heading3_mobile sm:font-heading1 sm:text-heading1">
          Restoran <span className="text-custom-primary_red">Populer</span> di
          Madura
        </p>
        <p className="font-body2_mobile text-body2_mobile sm:font-body1 sm:text-body1 text-[#252525]">
          Kami menawarkan restoran disekitar madura untuk menunjang liburanmu
        </p>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-center bg-cover rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/bebeksinjay.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-2 font-heading3_mobile text-heading3_mobile sm:font-heading3 sm:text-heading3 text-custom-black">
                    Bebek Sinjay
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56] text-xs">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                    Jl. Raya Ketengan, Bangkalan
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Pilihan Restoran */}
      <div className="bg-[#F6F0E1] px-4 py-8">
        <p className="text-center text-custom-black font-heading2_mobile text-heading2_mobile sm:font-heading1 sm:text-heading1">
          Pilihan Restoran{" "}
          <span className="text-custom-primary_red">di Kabupaten</span>
        </p>
        <div className="flex gap-2 pt-2 max-w-md mx-auto">
          <div className="h-1 rounded-full bg-custom-primary_red flex-grow" />
          <div className="h-1 w-8 rounded-full bg-custom-primary_red" />
          <div className="h-1 w-20 rounded-full bg-custom-primary_red" />
        </div>
        <br />
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 text-white font-body1 text-body1 sm:font-heading3 sm:text-heading3">
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/bangkalan.png')" }}
          >
            Bangkalan
          </div>
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/pamekasan.png')" }}
          >
            Pamekasan
          </div>
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/sampang.png')" }}
          >
            Sampang
          </div>
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/sumenep.png')" }}
          >
            Sumenep
          </div>
        </div>
      </div>
      {/* Pilih tipe restoranmu */}
      <div className="text-center px-4 pb-4 pt-8">
        <p className="font-heading3_mobile text-heading3_mobile sm:font-heading1 sm:text-heading1 text-custom-black">
          Pilih <span className="text-custom-primary_red">Tipe</span> Restoranmu
        </p>
        <p className="font-body2_mobile text-body2_mobile sm:font-body1 sm:text-body1 text-[#252525]">
          Kami bisa memilihkanmu beberapa tipe restoran agar kamu merasa nyaman
        </p>
      </div>
      <br />
      <div className="px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-4 border-b font-body2_mobile text-body2_mobile sm:font-heading3 sm:text-heading3 text-center">
          <button
            value={0}
            onClick={doChangeRestoranIndex}
            className={`${
              restoranIndex === 0
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Family Eat
          </button>
          <button
            value={1}
            onClick={doChangeRestoranIndex}
            className={`${
              restoranIndex === 1
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Makan Sepuasnya
          </button>
          <button
            value={2}
            onClick={doChangeRestoranIndex}
            className={`${
              restoranIndex === 2
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Kafe & Nongkrong
          </button>
          <button
            value={3}
            onClick={doChangeRestoranIndex}
            className={`${
              restoranIndex === 3
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Dijamin Halal
          </button>
        </div>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-center bg-cover rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/bebeksinjay.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-2 font-heading3_mobile text-heading3_mobile sm:font-heading3 sm:text-heading3 text-custom-black">
                    Jelajah Gili Iyang
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56] text-xs">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                    Jl. Raya Ketengan, Bangkalan
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const Penginapan = ({ breakpoint }) => {
  const [penginapanIndex, setPenginapanIndex] = useState(0);

  const doChangePenginapanIndex = (e) => {
    setPenginapanIndex(parseInt(e.currentTarget.value));
  };

  return (
    <div>
      {/* Penginapan Populer */}
      <div className="text-center px-4 pb-4 pt-8">
        <p className="font-heading3_mobile text-heading3_mobile sm:font-heading1 sm:text-heading1 text-custom-black">
          Penginapan <span className="text-custom-primary_red">Populer</span> di
          Madura
        </p>
        <p className="font-body2_mobile text-body2_mobile sm:font-body1 sm:text-body1 text-[#252525]">
          Kami menawarkan penginapan disekitar madura untuk menunjang liburanmu
        </p>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-center bg-cover rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/homestay.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-2 font-heading3_mobile text-heading3_mobile sm:font-heading3 sm:text-heading3 text-custom-black">
                    Homestay Amanah
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                    Kab. Sumenep
                  </p>
                  <p className="pt-1 font-body1_mobile text-body1_mobile text-custom-primary_red">
                    Rp 200.000
                    <span className="font-caption_mobile text-caption_mobile sm:font-caption2 sm:text-caption2 text-[#615A56]">
                      /malam
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Pilihan Restoran */}
      <div className="bg-[#F6F0E1] px-4 py-8">
        <p className="text-center text-custom-black font-heading2_mobile text-heading2_mobile sm:font-heading1 sm:text-heading1">
          Pilihan Penginapan{" "}
          <span className="text-custom-primary_red">di Kabupaten</span>
        </p>
        <div className="flex gap-2 pt-2 max-w-md mx-auto">
          <div className="h-1 rounded-full bg-custom-primary_red flex-grow" />
          <div className="h-1 w-8 rounded-full bg-custom-primary_red" />
          <div className="h-1 w-20 rounded-full bg-custom-primary_red" />
        </div>
        <br />
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 text-white font-body1 text-body1 sm:font-heading3 sm:text-heading3">
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/bangkalan.png')" }}
          >
            Bangkalan
          </div>
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/pamekasan.png')" }}
          >
            Pamekasan
          </div>
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/sampang.png')" }}
          >
            Sampang
          </div>
          <div
            className="bg-cover rounded-md flex items-center justify-center h-16 sm:h-24 lg:h-48 bg-center"
            style={{ backgroundImage: "url('/image/sumenep.png')" }}
          >
            Sumenep
          </div>
        </div>
      </div>
      {/* Pilih tipe restoranmu */}
      <div className="text-center px-4 pb-4 pt-8">
        <p className="font-heading3_mobile text-heading3_mobile sm:font-heading1 sm:text-heading1 text-custom-black">
          Pilih <span className="text-custom-primary_red">Tipe</span>{" "}
          Penginapanmu
        </p>
        <p className="font-body2_mobile text-body2_mobile sm:font-body1 sm:text-body1 text-[#252525]">
          Kami bisa memilihkanmu beberapa tipe penginapan agar kamu merasa
          nyaman
        </p>
      </div>
      <br />
      <div className="px-4">
        <div className="max-w-2xl mx-auto grid grid-cols-4 border-b font-body2_mobile text-body2_mobile sm:font-heading3 sm:text-heading3 text-xs text-center">
          <button
            value={0}
            onClick={doChangePenginapanIndex}
            className={`${
              penginapanIndex === 0
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Bangkalan
          </button>
          <button
            value={1}
            onClick={doChangePenginapanIndex}
            className={`${
              penginapanIndex === 1
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Pamekasan
          </button>
          <button
            value={2}
            onClick={doChangePenginapanIndex}
            className={`${
              penginapanIndex === 2
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Sampang
          </button>
          <button
            value={3}
            onClick={doChangePenginapanIndex}
            className={`${
              penginapanIndex === 3
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            Sumenep
          </button>
        </div>
      </div>
      <div className="pb-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={
            breakpoint === "xs"
              ? 1.5
              : breakpoint === "sm"
              ? 2.5
              : breakpoint === "md"
              ? 2.5
              : breakpoint === "lg"
              ? 3.5
              : breakpoint === "xl"
              ? 3.5
              : breakpoint === "2xl"
              ? 4
              : 4
          }
        >
          {[...Array(20)].map((v, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <div className="m-4 p-4 shadow overflow-ellipsis rounded-3xl whitespace-nowrap">
                  <div
                    className="relative aspect-[1/1.1] sm:aspect-[1.3/1] bg-center bg-cover rounded-3xl"
                    style={{
                      backgroundImage: "url('/temp/homestay.jpeg')",
                    }}
                  >
                    <div className="absolute top-2 right-2 p-2 rounded-full bg-yellow-400">
                      <IconBookmark
                        height={24}
                        width={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="pt-2 font-heading3_mobile text-heading3 sm:font-heading3 sm:text-heading3 text-custom-black">
                    Homestay Amanah
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((v, i) => {
                      return (
                        <IconStar
                          key={i}
                          height={16}
                          width={16}
                          className="text-custom-secondary_yellow fill-custom-secondary_yellow"
                        />
                      );
                    })}
                    <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                      666 Reviews
                    </p>
                  </div>
                  <p className="pt-1 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
                    Kab. Sumenep
                  </p>
                  <p className="pt-1 font-body1_mobile text-body1_mobile text-custom-primary_red">
                    Rp 200.000
                    <span className="font-caption_mobile text-caption_mobile sm:font-caption2 sm:text-caption2 text-[#615A56]">
                      /malam
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
