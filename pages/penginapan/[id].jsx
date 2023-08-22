import Container from "@components/atomics/Container";
import DateInput from "@components/atomics/DateInput";
import Heading from "@components/atomics/Heading";
import MainContent from "@components/atomics/MainContent";
import PopOver from "@components/atomics/PopOver";
import Text from "@components/atomics/Text";
import Wrapper from "@components/atomics/Wrapper";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Navbar from "@components/molecules/Navbar";
import ShortReview from "@components/molecules/ShortReview";
import TabDesc from "@components/molecules/TabDesc";
import { toRupiah } from "@utils/libs";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DetailPenginapan() {
  const router = useRouter();
  const [data, setData] = useState({
    id: "2b0ad7dc-2668-4c0c-84bb-95b76937c2e1",
    name: "Kaberaz Luxury By Amithya",
    description:
      "Aliquip eiusmod mollit deserunt occaecat. Nostrud amet non ex Lorem qui ex. Laboris exercitation amet aliqua laborum minim in amet adipisicing veniam reprehenderit enim tempor reprehenderit consectetur. Magna nulla proident culpa labore labore enim elit cillum dolore ad velit deserunt. Ullamco eiusmod cillum aute exercitation amet exercitation deserunt id aute enim eu. Aliquip aute amet dolore amet labore nostrud velit aute enim est sit non magna incididunt. Pariatur reprehenderit labore nostrud do amet deserunt dolor mollit magna anim sit ut.",
    lat: -7.1299981954715035,
    long: 112.72517694200859,
    address: "Jl. Siwalan Pangarangan, Sumenep, Pulau Madura 69417 Indonesia",
    open: "",
    close: "",
    facilities: [
      {
        icon_url: "/temp/ac.png",
        name: "AC",
      },
    ],
    price: 150000,
    reviews: {
      star: 4.0,
      total_review: 200,
      stars: [0, 20, 40, 60, 80],
      comments: [
        {
          name: "Oliver Sykez",
          profile_pic_url:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          date: "17 Nov 2022",
          star: 5.0,
          text: "Mantap tempatnya sangat artistik hehe ada ada saja ini dia mah hehe aaku aja disini sangat bahagia sekali hehe sampai jeumpa kawan kawan ku disana",
        },
      ],
    },
    image_urls: [
      "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
    video_url: "/sample.mp4",
    video_thumbnail_url:
      "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  });
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

  const doChangeDate = ({ name, value }) => {
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
        <title>{`Lenjhelenan | ${data.name ?? ""}`}</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          <div>
            <GalleryImage
              image_urls={data.image_urls}
              alt={data.name ?? ""}
              video_url={data.video_url}
              video_thumbnail_url={data.video_thumbnail_url}
            />
            <br />
            <Container>
              <TabDesc
                name={data.name}
                address={data.address}
                star={data.reviews.star}
                total_review={data.reviews.total_review}
                facilities={data.facilities}
                lat={data.lat}
                long={data.long}
                description={data.description}
              />
            </Container>
          </div>
          <Container className="!flex !flex-col !justify-between !gap-3 md:!gap-6">
            <div className="flex flex-col">
              <div className="flex items-end gap-1">
                <p className="font-semibold text-red-500">
                  {toRupiah.format(data.price)}
                </p>
                <p className="text-xs sm:text-sm font-medium">/malam</p>
              </div>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-3">
                <div className="flex flex-col items-center gap-1 w-full">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Check-In
                  </Text.label>
                  <DateInput
                    name="in"
                    value={order.date.in}
                    onChange={doChangeDate}
                    containerClassName="!w-full"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Check-Out
                  </Text.label>
                  <DateInput
                    name="out"
                    value={order.date.out}
                    onChange={doChangeDate}
                    containerClassName="!w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 w-full mt-3">
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
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-[1rem]">Total</p>
                <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                  {toRupiah.format(
                    order.options.adult * order.options.room * data.price
                  )}
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
        <br />
        <Heading.h2 className="mb-2">Ulasan Pengunjung</Heading.h2>
        <ShortReview
          star={data.reviews.star}
          stars={data.reviews.stars}
          total_review={data.reviews.total_review}
          comments={data.reviews.comments}
        />
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
