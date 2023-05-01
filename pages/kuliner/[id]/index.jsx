import { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import "swiper/css";
import BreadCrumbs from "@components/atomics/BreadCrumbs";
import Button from "@components/atomics/Button";
import Container from "@components/atomics/Container";
import DateInput from "@components/atomics/DateInput";
import DetailSearchInput from "@components/molecules/DetailSearchInput";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Heading from "@components/atomics/Heading";
import MainContent from "@components/atomics/MainContent";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/atomics/PopOver";
import QuickCard from "@components/molecules/QuickCard";
import Rating from "@components/molecules/Rating";
import ReviewCard from "@components/molecules/ReviewCard";
import TabDesc from "@components/atomics/TabDesc";
import Text from "@components/atomics/Text";
import TextInput from "@components/atomics/TextInput";
import Wrapper from "@components/atomics/Wrapper";
import { IconMap, IconUser, IconMail, IconPhone } from "@tabler/icons-react";
import ReviewVisitor from "@components/molecules/ReviewVisitor";
export default function DetailKuliner({}) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");
  const [openReview, setOpenReview] = useState(false);
  const [order, setOrder] = useState({
    date: new Date().toISOString().split("T")[0],
    time: new Date().toISOString().substr(11, 5),
    name: "",
    email: "",
    notelp: "",
    search: "",
    options: {
      people: 1,
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const doOpen = () => {
    setIsOpen(!isOpen);
  };

  const doChangeOrder = ({ name, value }) => {
    setOrder({ ...order, [name]: value });
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
        <title>Detail Kuliner</title>
      </Head>
      <Navbar />
      <MainContent>
        <div className="flex flex-row md:flex-col items-center justify-between md:items-stretch w-full">
          <BreadCrumbs
            breads={[
              { name: "Kuliner", link: "/kuliner" },
              { name: "Soto Bekasi", link: "/kuliner/soto-bekasi" },
            ]}
          />
        </div>

        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{
            gridTemplateColumns: "1fr auto",
          }}
        >
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            <GalleryImage
              images={[
                "https://source.unsplash.com/random/?food&1",
                "https://source.unsplash.com/random/?food&2",
                "https://source.unsplash.com/random/?food&3",
                "https://source.unsplash.com/random/?food&4",
              ]}
            />
            <Container className="mt-4">
              <Rating count={666} rate={4.5} />
              <Heading.h2>Amanish Resto</Heading.h2>
              <div className="flex flex-row gap-1 items-center">
                <IconMap size={18} strokeWidth={2} color={"#615A56"} />
                <p className="md:text-[0.75rem] text-[0.5rem] font-normal">
                  Jl. Siwalan Pangarangan, Sumenep, Pulau Madura 69417 Indonesia
                </p>
              </div>
              <br />
              <TabDesc page="kuliner" />
            </Container>
          </div>
          {/* Price Detail */}
          <Container className="flex flex-col justify-between !gap-3 md:!gap-6">
            <div className="flex flex-col">
              <p className="flex flex-row  font-normal text-[1rem] text-dark-grey">
                Harga mulai dari
                <span className="ml-1 font-semibold  text-primary-red ">
                  Rp {"30.000"}
                </span>
              </p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-row items-center justify-between w-full gap-3">
                <div className="flex flex-col items-center gap-1 justify-start w-full ">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Tanggal Reservasi
                  </Text.label>
                  <DateInput
                    name="date"
                    value={order.date}
                    onChange={doChangeOrder}
                    containerClassName="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Tamu
                </Text.label>
                <PopOver
                  containerClassName="w-full"
                  options={order.options}
                  onChange={doChangeOrderOptions}
                  pages="kuliner"
                  name="Orang"
                />
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Pilih Waktu Reservasi
                </Text.label>
                <DateInput
                  name="time"
                  isTime
                  value={order.time}
                  onChange={doChangeOrder}
                  containerClassName="w-full"
                />
              </div>
              <div className="mt-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Nama
                </Text.label>
                <TextInput
                  name="name"
                  value={order.name}
                  placeholder="Masukkan nama lengkap"
                  onChange={doChangeOrder}
                  leftIcon={<IconUser className="w-5 h-5" />}
                />
              </div>
              <div className="mt-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Email
                </Text.label>
                <TextInput
                  name="email"
                  value={order.email}
                  type="email"
                  placeholder="Masukkan email"
                  onChange={doChangeOrder}
                  leftIcon={<IconMail className="w-5 h-5" />}
                />
              </div>
              <div className="mt-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  No Telp
                </Text.label>
                <TextInput
                  name="notelp"
                  value={order.notelp}
                  placeholder="Masukkan No Telepon"
                  onChange={doChangeOrder}
                  leftIcon={<IconPhone className="w-5 h-5" />}
                />
              </div>
            </div>
            <Button>Reservasi Sekarang</Button>
          </Container>
        </div>
        {/* Ulasan */}
        <div className="w-full mt-8 flex flex-col gap-3">
          <Heading.h2>Ulasan Pengunjung</Heading.h2>
          <ReviewVisitor
            openReview={openReview}
            setOpenReview={setOpenReview}
          />
        </div>
        {/* Restoran Serupa */}
        <div className="w-full mt-8">
          <Heading.h2>Restoran Serupa</Heading.h2>
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
                    imageUrl="https://source.unsplash.com/random/?food"
                    title="Bebek Sinjay"
                    address="Kab. Sumenep"
                    review_count={666}
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
