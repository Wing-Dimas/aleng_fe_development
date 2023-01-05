import { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import "swiper/css";
import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Button from "@components/molecules/Button";
import Checkbox from "@components/molecules/Checkbox";
import Container from "@components/molecules/Container";
import DateInput from "@components/molecules/DateInput";
import DetailSearchInput from "@components/molecules/DetailSearchInput";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Heading from "@components/molecules/Heading";
import MainContent from "@components/molecules/MainContent";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/molecules/PopOver";
import PriceList from "@components/molecules/PriceList";
import QuickCard from "@components/molecules/QuickCard";
import Rating from "@components/molecules/Rating";
import ReviewCard from "@components/molecules/ReviewCard";
import RoomSuggestionCard from "@components/molecules/RoomSuggestionCard";
import TabDesc from "@components/molecules/TabDesc";
import Text from "@components/molecules/Text";
import Wrapper from "@components/molecules/Wrapper";
import { IconMapPin } from "@tabler/icons";

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
    <Wrapper>
      <Head>
        <title>Detail Penginapan</title>
      </Head>
      <Navbar />
      <MainContent>
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
            <Container className="mt-4">
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
            </Container>
          </div>
          {/* Price Detail */}
          <Container className="flex flex-col justify-between">
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
                    containerClassName="!w-full"
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
                    containerClassName="!w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Tamu
                </Text.label>
                <PopOver
                  containerClassName="!w-full"
                  options={order.options}
                  onChange={doChangeOrderOptions}
                  pages="penginapan"
                />
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <Text.label>Penambahan Fasilitas (opsional)</Text.label>
                <Checkbox
                  containerClassName="w-full mb-2"
                  label={
                    <>
                      <span>Boleh membawa hewan peliharaan</span>
                      <span>+ Rp 20.000</span>
                    </>
                  }
                  labelClassName="w-full flex items-center justify-between gap-2"
                />
                <Checkbox
                  containerClassName="w-full mb-2"
                  label={
                    <>
                      <span>Boleh membawa hewan peliharaan</span>
                      <span>+ Rp 20.000</span>
                    </>
                  }
                  labelClassName="w-full flex items-center justify-between gap-2"
                />
                <Checkbox
                  containerClassName="w-full mb-2"
                  label={
                    <>
                      <span>Boleh membawa hewan peliharaan</span>
                      <span>+ Rp 20.000</span>
                    </>
                  }
                  labelClassName="w-full flex items-center justify-between gap-2"
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
          </Container>
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
          <Container className="!flex !flex-col md:!flex-row !gap-3 md:!gap-6">
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
          </Container>
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
      </MainContent>
      <Footer />
    </Wrapper>
  );
}
