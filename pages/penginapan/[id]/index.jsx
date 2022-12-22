import { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import "swiper/css";
import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Button from "@components/molecules/Button";
import DateInput from "@components/molecules/DateInput";
import DetailSearchInput from "@components/molecules/DetailSearchInput";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Heading from "@components/molecules/Heading";
import Navbar from "@components/molecules/Navbar";
import OptionalFacilityCard from "@components/molecules/OptionalFacilityCard";
import PopOver from "@components/molecules/PopOver";
import PriceList from "@components/molecules/PriceList";
import QuickCard from "@components/molecules/QuickCard";
import Rating from "@components/molecules/Rating";
import ReviewCard from "@components/molecules/ReviewCard";
import RoomSuggestionCard from "@components/molecules/RoomSuggestionCard";
import TabDesc from "@components/molecules/TabDesc";
import Text from "@components/molecules/Text";
import {
  IconUsers,
  IconMapPin,
  IconCalendarEvent,
  IconChevronDown,
  IconPlus,
  IconMinus,
  IconHorseToy,
  IconUser,
  IconDoor,
} from "@tabler/icons";

export default function DetailPenginapan({}) {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [order, setOrder] = useState({
    date: {
      in: new Date().toISOString().split("T")[0],
      out: new Date().toISOString().split("T")[0],
    },
    options: {
      room: 1,
      adult: 1,
      child: 1,
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const doOpen = () => {
    setIsOpen(!isOpen);
  };

  const doChangeOrderDate = ({ name, value }) => {
    setOrder({ ...order, date: { ...order.date, [name]: value } });
  };

  const doChangeOrderOptions = (e) => {
    setOrder({
      ...order,
      options: {
        ...order.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    });
  };

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen text-[#252525] bg-custom-bg">
      <Head>
        <title>Detail Penginapan</title>
      </Head>
      <Navbar />
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-row md:flex-col items-center justify-between md:items-stretch w-full">
          <BreadCrumbs
            pages="Penginapan"
            breads={[
              { link: "/penginapan", name: "Penginapan" },
              { link: "/penginapan/detail", name: "Detail" },
            ]}
          />
          <div className="block md:hidden">
            <Button onClick={doOpen}>Ubah Pencarian</Button>
          </div>
        </div>
        <DetailSearchInput isOpen={isOpen} isPenginapan />
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            <GalleryImage
              images={[
                "/penginapan/gambar1.png",
                "/penginapan/gambar2.png",
                "/penginapan/gambar3.png",
                "/penginapan/gambar4.png",
              ]}
            />
            <div className="p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 md:mt-4 shadow-md rounded-md h-full bg-white">
              <Rating count={666} rate={4.5} />
              <Heading.h2>Kaberaz Luxury By Amithya</Heading.h2>
              <div className="flex flex-row gap-1 items-center">
                <IconMapPin size={18} strokeWidth={2} color={"#615A56"} />
                <p className="md:text-[0.75rem] text-[0.5rem] font-normal">
                  Jl. Siwalan Pangarangan, Sumenep, Pulau Madura 69417 Indonesia
                </p>
              </div>
              <br />
              <TabDesc page="penginapan" />
            </div>
          </div>
          {/* Price Detail */}
          <div className="border-[0.5px] p-[1rem] min-h-full w-full h-full border-[#ABACAC]/30 shadow-md rounded-md flex flex-col justify-between bg-white">
            <div className="flex flex-col">
              <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                150.000
                <span className="ml-1 font-normal text-[1rem] text-[#615A56]">
                  /malam
                </span>
              </p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-3">
                <div className="flex flex-col items-center gap-1 justify-start w-full md:w-1/2 ">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Check-In
                  </Text.label>
                  <DateInput
                    name="in"
                    value={order.date.in}
                    onChange={doChangeOrderDate}
                    containerClassName="w-full !text-xs !font-medium shadow-custom"
                    className="shadow-none border-none"
                    leftIcon={
                      <IconCalendarEvent className="text-custom-dark_grey w-4 h-4" />
                    }
                    rightIcon={
                      <IconChevronDown className="w-4 h-4 text-custom-primary_red" />
                    }
                  />
                </div>
                <div className="flex flex-col items-center gap-1 justify-start w-full md:w-1/2">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Check-Out
                  </Text.label>
                  <DateInput
                    name="out"
                    value={order.date.out}
                    onChange={doChangeOrderDate}
                    containerClassName="w-full !text-xs !font-medium shadow-custom"
                    className="shadow-none border-none"
                    leftIcon={
                      <IconCalendarEvent className="text-custom-dark_grey w-4 h-4" />
                    }
                    rightIcon={
                      <IconChevronDown className="w-4 h-4 text-custom-primary_red" />
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Tamu
                </Text.label>
                <PopOver
                  containerClassName="w-full !shadow-custom !border-none"
                  className="text-xs font-medium text-custom-black !shadow-none !border-none"
                  childClassName="text-xs"
                  name="option"
                  label={`${order.options.room} Kamar ${order.options.adult} Dewasa ${order.options.child} Anak`}
                  leftIcon={
                    <IconUsers className="text-custom-dark_grey w-4 h-4" />
                  }
                >
                  {/* Kamar */}
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-2">
                      <IconDoor className="text-custom-dark_grey w-6 h-6" />
                      <p>Kamar</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={doChangeOrderOptions}
                        name="room"
                        value={
                          order.options.room != 0 ? order.options.room - 1 : 0
                        }
                        className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                      >
                        <IconMinus className="w-4 h-4" />
                      </button>
                      <p>{order.options.room}</p>
                      <button
                        onClick={doChangeOrderOptions}
                        name="room"
                        value={order.options.room + 1}
                        className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                      >
                        <IconPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {/* Dewasa */}
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-2">
                      <IconUser className="text-custom-dark_grey w-6 h-6" />
                      <p>Orang Dewasa</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={doChangeOrderOptions}
                        name="adult"
                        value={
                          order.options.adult != 0 ? order.options.adult - 1 : 0
                        }
                        className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                      >
                        <IconMinus className="w-4 h-4" />
                      </button>
                      <p>{order.options.adult}</p>
                      <button
                        onClick={doChangeOrderOptions}
                        name="adult"
                        value={order.options.adult + 1}
                        className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                      >
                        <IconPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {/* Anak */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-2">
                      <IconHorseToy className="text-custom-dark_grey w-6 h-6" />
                      <p>Anak-anak</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={doChangeOrderOptions}
                        name="child"
                        value={
                          order.options.child != 0 ? order.options.child - 1 : 0
                        }
                        className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                      >
                        <IconMinus className="w-4 h-4" />
                      </button>
                      <p>{order.options.child}</p>
                      <button
                        onClick={doChangeOrderOptions}
                        name="child"
                        value={order.options.child + 1}
                        className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                      >
                        <IconPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </PopOver>
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <Text.label>Penambahan Fasilitas (opsional)</Text.label>
                <OptionalFacilityCard
                  facilities={[
                    {
                      name: "Boleh membawa hewan peliharaan",
                      price: "20.000",
                    },
                    {
                      name: "Boleh membawa hewan peliharaan",
                      price: "20.000",
                    },
                    {
                      name: "Boleh membawa hewan peliharaan",
                      price: "20.000",
                    },
                  ]}
                />
                <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                  <Text.label>Harga</Text.label>
                  <PriceList
                    items={[
                      { name: "1 Malam", price: "150.000" },
                      { name: "Sarapan Pagi", price: "10.000" },
                      { name: "Ekstra Bantal", price: "5.000" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-[1rem]">Total</p>
                <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                  Rp<span className="ml-1 font-semibold">150.000</span>
                </p>
              </div>
              <Button className="mt-3">Pesan Sekarang</Button>
            </div>
          </div>
        </div>
        {/* Penawaran */}
        <div className="w-full mt-8 flex flex-col gap-3">
          <Heading.h2>Penawaran Tipe Kamar Lainnya</Heading.h2>
          <div className="flex flex-col gap-4">
            <RoomSuggestionCard />
            <RoomSuggestionCard />
          </div>
        </div>
        {/* Ulasan */}
        <div className="w-full mt-8 flex flex-col gap-3">
          <Heading.h2>Ulasan Pengunjung</Heading.h2>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md w-full h-full">
            <div className="flex flex-col gap-2 w-1/2 md:w-[20%]">
              <Text>Ulasan Pengguna</Text>
              <Rating.descripted rate={4.5} count={666} />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[80%]">
              <Text>Ulasan yang mungkin membantumu</Text>
              <div className="flex flex-row gap-4 scrollbar-hide cursor-pointer overflow-x-scroll w-full">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={
                    breakpoint === "xs"
                      ? 1.3
                      : breakpoint === "sm"
                      ? 2.3
                      : breakpoint === "md"
                      ? 2.3
                      : breakpoint === "lg"
                      ? 2.8
                      : breakpoint === "xl"
                      ? 3.6
                      : breakpoint === "2xl"
                      ? 3.6
                      : 1.6
                  }
                  // loop={loopUlasan}
                >
                  {[...Array(6)].map((item, i) => {
                    return (
                      <SwiperSlide key={i.toString()}>
                        <ReviewCard />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* Penginapan Serupa */}
        <div className="mt-8">
          <Heading.h2>Penginapan Serupa</Heading.h2>
          <Swiper
            spaceBetween={0}
            slidesPerView={
              breakpoint === "xs"
                ? 1.5
                : breakpoint === "sm"
                ? 2.2
                : breakpoint === "md"
                ? 2.5
                : breakpoint === "lg"
                ? 3.2
                : breakpoint === "xl"
                ? 3.5
                : breakpoint === "2xl"
                ? 4.2
                : 4.5
            }
          >
            {[...Array(20)].map((v, i) => {
              return (
                <SwiperSlide key={i.toString()}>
                  <QuickCard
                    imageUrl="/temp/homestay.jpeg"
                    title="Homestay Amanah"
                    address="Kab. Sumenep"
                    review_count={666}
                    price="200.000"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
