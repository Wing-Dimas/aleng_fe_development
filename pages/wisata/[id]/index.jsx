import { useEffect, useState } from "react";
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
import Rating from "@components/molecules/Rating";
import TabDesc from "@components/atomics/TabDesc";
import Text from "@components/atomics/Text";
import Wrapper from "@components/atomics/Wrapper";
import { IconMapPin } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import QuickCard from "@components/molecules/QuickCard";
import ReviewVisitor from "@components/molecules/ReviewVisitor";
export default function DetailWisata({}) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");
  const [openReview, setOpenReview] = useState(false);
  const [order, setOrder] = useState({
    date: new Date().toISOString().split("T")[0],
    options: {
      people: 1,
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);

  const doOpen = () => {
    setIsOpen(!isOpen);
  };

  const doChangeDate = ({ name, value }) => {
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

  //coba
  // useEffect(() => {
  //   try {
  //     axios
  //       .get("http://api.lenjelenanmadura.id/api/wisata/showAll")
  //       .then((res) => {
  //         setItem(res?.data?.data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

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
              { link: "/wisata/detail", name: "Detail" },
            ]}
          />
          {/* <div className="block md:hidden">
            <Button onClick={doOpen}>Ubah Pencarian</Button>
          </div> */}
        </div>
        {/* <DetailSearchInput
          isOpen={isOpen}
          placeholder="Masukkan wisata yang dicari"
        /> */}
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            <GalleryImage
              images={[
                "https://source.unsplash.com/random/?tour&1",
                "https://source.unsplash.com/random/?tour&2",
                "https://source.unsplash.com/random/?tour&3",
                "https://source.unsplash.com/random/?tour&4",
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
              <TabDesc page="wisata" />
            </Container>
          </div>
          {/* Price Detail */}
          <Container className="!flex !flex-col !justify-between !gap-3 md:!gap-6">
            <div className="flex flex-col">
              <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                10.000
                <span className="ml-1 font-normal text-[1rem] text-[#615A56]">
                  /wisatawan
                </span>
              </p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-col items-center gap-1 w-full">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Tanggal Tiket
                </Text.label>
                <DateInput
                  name="date"
                  value={order.date}
                  onChange={doChangeDate}
                  containerClassName="w-full"
                />
              </div>
              <div className="flex flex-col items-center gap-1 w-full mt-3">
                <Text.label className="after:content-['*'] after:ml-0.5">
                  Wisatawan
                </Text.label>
                <PopOver
                  containerClassName="w-full"
                  options={order.options}
                  onChange={doChangeOrderOptions}
                  pages="wisata"
                  name="Wisatawan"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-[1rem]">Total</p>
                <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                  Rp<span className="ml-1 font-semibold">50.000</span>
                </p>
              </div>
              <Link href="/checkout/confirm">
                <p className="font-medium text-center mt-3 hover:bg-secondary-yellow/80 text-base text-black bg-[#FDD05C] py-3 px-14 rounded-md shadow-md cursor-pointer">
                  Pesan Sekarang
                </p>
              </Link>
            </div>
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
            {/* {item &&
              item.map((item, i) => {
                console.log(item);
                return (
                  <SwiperSlide key={i.toString()}>
                    <QuickCard
                      imageUrl="https://source.unsplash.com/random/?tour"
                      title={item?.nama_wisata}
                      address={`Kab. ${item?.kota}`}
                      review_count={666}
                      price={item?.harga}
                    />
                  </SwiperSlide>
                );
              })} */}
            {[...Array(20)].map((v, i) => {
              return (
                <SwiperSlide key={i.toString()}>
                  <QuickCard
                    imageUrl="https://source.unsplash.com/random/?homestay"
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
