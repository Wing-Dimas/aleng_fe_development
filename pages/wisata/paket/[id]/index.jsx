import { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import "swiper/css";
import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Button from "@components/molecules/Button";
import Container from "@components/molecules/Container";
import DateInput from "@components/molecules/DateInput";
import DetailSearchInput from "@components/molecules/DetailSearchInput";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Heading from "@components/molecules/Heading";
import MainContent from "@components/molecules/MainContent";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/molecules/PopOver";
import QuickCard from "@components/molecules/QuickCard";
import Rating from "@components/molecules/Rating";
import ReviewCard from "@components/molecules/ReviewCard";
import TabDesc from "@components/molecules/TabDesc";
import Text from "@components/molecules/Text";
import Wrapper from "@components/molecules/Wrapper";
import { IconCalendar, IconMapPin, IconUser } from "@tabler/icons";
import Select from "@components/molecules/Select";
import ScheduleTravel from "@components/molecules/scheduletravel";
export default function PaketWisata({}) {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [order, setOrder] = useState({
    date: new Date().toISOString().split("T")[0],
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

  const doChangeOrderOptions = (e) => {
    setOrder({
      ...order,
      options: {
        ...order.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    });
  };
  const [info, setInfo] = useState({
    date: {
      type: "tgl1",
      name: "",
    },
    person: {
      type: "pax1",
      name: "",
    },
  });
  const doChangePerson = ({ name, value }) => {
    setInfo({ ...info, person: { ...info.person, [name]: value } });
  };
  const doChangeDate = ({ name, value }) => {
    setInfo({ ...info, date: { ...info.date, [name]: value } });
  };

  return (
    <Wrapper>
      <Head>
        <title>Detail Wisata</title>
      </Head>
      <Navbar />
      <MainContent>
        <div className="flex flex-row md:flex-col items-center justify-between md:items-stretch w-full">
          <BreadCrumbs
            pages="Wisata"
            breads={[
              { link: "/wisata", name: "Wisata" },
              { link: "/wisata/paket", name: "Paket" },
            ]}
          />
          <div className="block md:hidden">
            <Button onClick={doOpen}>Ubah Pencarian</Button>
          </div>
        </div>
        <DetailSearchInput
          isOpen={isOpen}
          placeholder="Masukkan wisata yang dicari"
        />
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            <GalleryImage
              images={[
                "/wisata/gambar1.jpg",
                "/wisata/gambar2.jpeg",
                "/wisata/gambar3.jpg",
                "/wisata/gambar4.jpg",
              ]}
            />
            <Container className="mt-4">
              <Rating count={666} rate={4.5} />
              <Heading.h2>Pantai Lon Malang</Heading.h2>
              <div className="flex flex-row gap-1 items-center">
                <IconMapPin size={18} strokeWidth={2} color={"#615A56"} />
                <p className="md:text-[0.75rem] text-[0.5rem] font-normal">
                  Jl. Siwalan Pangarangan, Sumenep, Pulau Madura 69417 Indonesia
                </p>
              </div>
              <br />
              <TabDesc page="paketwisata" />
            </Container>
          </div>
          {/* Price Detail */}
          <Container className="!flex !flex-col !justify-between !gap-3 md:!gap-6">
            <div className="flex flex-col">
              <p className="font-normal text-base text-custom-dark_grey">
                Mulai Dari
              </p>
              <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                Rp 1.250.000
                <span className="ml-1 font-normal text-[1rem] text-[#615A56]">
                  /wisatawan
                </span>
              </p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-row items-center justify-between w-full gap-3">
                <div className="flex flex-col items-center gap-1 justify-start w-full ">
                  <p className="text-[#615A56] font-normal text-[0.75rem] w-full text-left after:content-['*'] after:ml-0.5">
                    Tanggal Pemberangkatan
                  </p>
                  <Select
                    leftIcon={<IconCalendar className="w-5 h-5" />}
                    value={info.date.type}
                    name="type"
                    onChange={doChangeDate}
                    options={[
                      {
                        name: "25 Desember 2022",
                        value: "tgl1",
                      },
                      {
                        name: "26 Desember 2022",
                        value: "tgl2",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <p className="text-[#615A56] font-normal text-[0.75rem] w-full text-left after:content-['*'] after:ml-0.5">
                  Wisatawan
                </p>
                <Select
                  leftIcon={<IconUser className="w-5 h-5" />}
                  value={info.person.type}
                  name="type"
                  onChange={doChangePerson}
                  options={[
                    {
                      name: "1-2 pax",
                      value: "pax1",
                    },
                    {
                      name: "3-4 pax",
                      value: "pax2",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row justify-between items-center mb-2">
                <p className="font-semibold text-[1rem]">Total</p>
                <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                  Rp<span className="ml-1 font-semibold">50.000</span>
                </p>
              </div>
              <Button>Pesan Sekarang</Button>
            </div>
          </Container>
        </div>

        <div className="w-full mt-8 flex flex-col gap-3">
          <Heading.h2>Jadwal Perjalanan</Heading.h2>
          <Container>
            <div className="flex flex-row gap-6  w-full max-h-[20rem] h-full overflow-y-scroll">
              <div className="w-full mt-4">
                <ScheduleTravel
                  days="Hari Pertama"
                  address="Bandara - Sumenep"
                  decs="Menuju Sumenep sekitar pukul 23.00"
                />
                <ScheduleTravel
                  days="Hari Kedua"
                  address="Sampang"
                  decs="Menuju Sumenep sekitar pukul 23.00"
                />
                <ScheduleTravel
                  days="Hari Ketiga"
                  address="Bandara - Sumenep"
                  decs="Menuju Sumenep sekitar pukul 23.00"
                />
              </div>
            </div>
          </Container>
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
        {/* Wisata Serupa */}
        <div className="mt-8">
          <Heading.h2>Wisata Serupa</Heading.h2>
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
                    imageUrl="/wisata/gambar5.jpg"
                    title="Air Terjun Toroan"
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