import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  IconBriefcase,
  IconCalendarEvent,
  IconChevronDown,
  IconDoor,
  IconHorseToy,
  IconMapPin,
  IconMinus,
  IconPlus,
  IconSwitchHorizontal,
  IconUser,
  IconUsers,
} from "@tabler/icons";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import DateInput from "@components/molecules/DateInput";
import DottedUnderline from "@components/molecules/DottedUnderline";
import Footer from "@components/molecules/Footer";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/molecules/PopOver";
import QuickCard from "@components/molecules/QuickCard";
import Tab from "@components/molecules/Tab";
import Text from "@components/molecules/Text";
import Title from "@components/molecules/Title";
import Link from "next/link";
import Button from "@components/molecules/Button";
import TextInput from "@components/molecules/TextInput";

export default function Home() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [menuIndex, setMenuIndex] = useState(0);
  const [destinasi, setDestinasi] = useState("");
  const [check, setCheck] = useState({
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

  const doChangeTabIndex = (e) => {
    setMenuIndex(parseInt(e.currentTarget.value));
  };

  const doChangeDestinasi = ({ name, value }) => {
    setDestinasi(value);
  };

  const doSwitchCheckDate = () => {
    setCheck({
      ...check,
      date: {
        in: check.date.out,
        out: check.date.in,
      },
    });
  };

  const doChangeCheckDate = ({ name, value }) => {
    setCheck({ ...check, date: { ...check.date, [name]: value } });
  };

  const doChangeCheckOptions = (e) => {
    setCheck({
      ...check,
      options: {
        ...check.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    });
  };

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen">
      <Head>
        <title>Lenjelen Madura | Beranda</title>
      </Head>
      <Navbar transparentFirst />
      <div
        style={{ backgroundImage: "url('/image/hero.jpeg')" }}
        className="pt-48 bg-center bg-cover"
      >
        {/* Liburan bersama */}
        <div className="px-12 text-custom-white font-bold text-base sm:text-4xl md:text-5xl lg:text-title max-w-7xl mx-auto">
          <p>LIBURAN BERSAMA</p>
          <div className="flex items-center justify-center lg:my-8">
            <p className="sm:text-4xl md:text-5xl">LENJELEN MADURA</p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-[8px] sm:text-2xl md:text-3xl lg:text-heading2 font-semibold">
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
                menuIndex === 0
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
                menuIndex === 1
                  ? "border-b-custom-white"
                  : "border-b-transparent"
              } border-b-2 p-2 flex items-center justify-center gap-4`}
            >
              <Image
                src="/icons/kuliner-white.png"
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
                menuIndex === 2
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
        {menuIndex === 2 ? (
          <div className="px-4 max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-50 p-6 rounded-xl flex flex-col lg:flex-row items-center gap-4">
              <div className="flex flex-col sm:flex-row w-full lg:w-auto lg:items-center bg-white rounded-lg text-custom-black text-xs font-medium">
                <DateInput
                  name="in"
                  value={check.date.in}
                  onChange={doChangeCheckDate}
                  containerClassName="w-full lg:w-auto"
                  className="!shadow-none"
                  leftIcon={<IconCalendarEvent className="w-5 h-5" />}
                  rightIcon={<IconChevronDown className="w-5 h-5" />}
                />
                <div className="lg:block flex items-center justify-end gap-2 px-2 lg:px-0">
                  <div className="w-full h-[0.5px] bg-custom-light_grey lg:hidden" />
                  <button
                    onClick={doSwitchCheckDate}
                    className="text-custom-dark_grey p-2 -rotate-90 sm:rotate-0 shadow-custom rounded-lg border lg:border-none lg:rounded-none lg:shadow-none"
                  >
                    <IconSwitchHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <DateInput
                  name="out"
                  value={check.date.out}
                  onChange={doChangeCheckDate}
                  containerClassName="w-full lg:w-auto"
                  className="!shadow-none"
                  leftIcon={<IconCalendarEvent className="w-5 h-5" />}
                  rightIcon={<IconChevronDown className="w-5 h-5" />}
                />
              </div>
              <PopOver
                containerClassName="w-full !shadow-none"
                className="!shadow-none"
                options={check.options}
                onChange={doChangeCheckOptions}
                pages="penginapan"
              />
              <Button className="w-full lg:w-48 !text-xs py-5 px-12">
                Cari
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-4 max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-50 p-6 rounded-xl flex flex-col sm:flex-row gap-4">
              <TextInput
                containerClassName="w-full"
                name="destinasi"
                value={destinasi}
                onChange={doChangeDestinasi}
                leftIcon={<IconMapPin className="w-5 h-5" />}
                placeholder="Destinasi Kunjungan"
              />
              <Button className="w-full lg:w-48 !text-xs py-5 px-12">
                Cari
              </Button>
            </div>
          </div>
        )}
        <br />
      </div>
      {menuIndex === 0 ? (
        <Wisata breakpoint={breakpoint} />
      ) : menuIndex === 1 ? (
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
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Wisata <span className="text-custom-primary_red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan wisata disekitar madura untuk menemani liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/wisata/1">
                    <QuickCard
                      imageUrl="/temp/giligenting.jpeg"
                      title="Gili Genting Gili Genting Banget"
                      address="Kab. Sumenep"
                      review_count={666}
                      link="/wisata1"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <PilihanKabupaten name="Wisata" />
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Paket <span className="text-custom-primary_red">Wisata</span> Untukmu
        </Title>
        <Text className="text-center">
          Kami bisa memilihkanmu beberapa paket wisata agar kamu merasa nyaman
        </Text>
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/wisata/1">
                    <QuickCard
                      imageUrl="/temp/giligenting.jpeg"
                      title="Jelajah Gili Iyang"
                      address="Kab. Sumenep"
                      review_count={666}
                    >
                      <div className="pt-1 font-body1_mobile text-custom-primary_red flex flex-col justify-start md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                        <p>Rp 500.000</p>
                        <div className="flex items-center justify-start md:justify-end gap-2">
                          <IconBriefcase className="w-4 h-4 text-white fill-custom-primary_red" />
                          <p className="font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1">
                            Paket 3hari
                          </p>
                        </div>
                      </div>
                    </QuickCard>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="bg-white px-4 py-4 md:py-8">
        <Title className="text-center">
          Wisata <span className="text-custom-primary_red">Religi</span> dan{" "}
          <span className="text-custom-primary_red">Bersejarah</span>
        </Title>
        <DottedUnderline />
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/wisata/1">
                    <QuickCard
                      imageUrl="/temp/giligenting.jpeg"
                      title="Gili Genting"
                      address="Kab. Sumenep"
                      review_count={666}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Kuliner = ({ breakpoint }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Restoran <span className="text-custom-primary_red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan restoran disekitar madura untuk menunjang liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/kuliner/1">
                    <QuickCard
                      imageUrl="/temp/bebeksinjay.jpeg"
                      title="Bebek Sinjay"
                      address="Jl. Raya Ketengan, Bangkalan"
                      review_count={666}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <PilihanKabupaten name="Restoran" />
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Pilih <span className="text-custom-primary_red">Tipe</span> Restoranmu
        </Title>
        <Text className="text-center">
          Kami bisa memilihkanmu beberapa tipe restoran agar kamu merasa nyaman
        </Text>
        <br />
        <Tab
          className="px-4"
          options={[
            "Family Eat",
            "Makan Sepuasnya",
            "Kafe & Nongkrong",
            "Dijamin Halal",
          ]}
          index={index}
          setIndex={setIndex}
        />
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/kuliner/1">
                    <QuickCard
                      imageUrl="/temp/bebeksinjay.jpeg"
                      title="Jelajah Gili Iyang"
                      address="Jl. Raya Ketengan, Bangkalan"
                      review_count={666}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Penginapan = ({ breakpoint }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Penginapan <span className="text-custom-primary_red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan penginapan disekitar madura untuk menunjang liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/penginapan/1">
                    <QuickCard
                      imageUrl="/temp/homestay.jpeg"
                      title="Homestay Amanah"
                      address="Kab. Sumenep"
                      review_count={666}
                      price="200.000"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <PilihanKabupaten name="Penginapan" />
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Pilih <span className="text-custom-primary_red">Tipe</span>{" "}
          Penginapanmu
        </Title>
        <Text className="text-center">
          Kami bisa memilihkanmu beberapa tipe penginapan agar kamu merasa
          nyaman
        </Text>
        <br />
        <Tab
          className="px-4"
          index={index}
          setIndex={setIndex}
          options={["Bangkalan", "Pamekasan", "Sampang", "Sumenep"]}
        />
        <div className="max-w-7xl mx-auto">
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
                  <Link href="/penginapan/1">
                    <QuickCard
                      imageUrl="/temp/homestay.jpeg"
                      title="Homestay Amanah"
                      address="Kab. Sumenep"
                      review_count={666}
                      price="200.000"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const PilihanKabupaten = ({ name }) => {
  return (
    <div className="bg-[#F6F0E1] px-4 py-4 md:py-8">
      <Title className="text-center">
        Pilihan {name}{" "}
        <span className="text-custom-primary_red">di Kabupaten</span>
      </Title>
      <DottedUnderline />
      <br />
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 text-white font-body1 text-body1 sm:font-heading3 sm:text-heading3">
        <KabupatenCard name="Bangkalan" bgImage="/image/bangkalan.png" />
        <KabupatenCard name="Pamekasan" bgImage="/image/pamekasan.png" />
        <KabupatenCard name="Sampang" bgImage="/image/sampang.png" />
        <KabupatenCard name="Sumenep" bgImage="/image/sumenep.png" />
      </div>
    </div>
  );
};

const KabupatenCard = ({ bgImage, name }) => {
  return (
    <Link href="/">
      <div
        className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center sm:items-start justify-center sm:justify-start p-0 sm:p-8 bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {name}
      </div>
    </Link>
  );
};
