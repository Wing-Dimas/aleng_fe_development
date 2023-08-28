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
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function DetailPenginapan() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    lat: -7.1299981954715035,
    long: 112.72517694200859,
    city: "",
    address: "",
    open: "00:00",
    close: "24:00",
    facilities: [
      {
        icon_url: "",
        name: "",
      },
    ],
    price: 0,
    reviews: {
      star: 0,
      total_review: 0,
      stars: [0, 0, 0, 0, 0],
      comments: [
        {
          name: "",
          profile_pic_url: "",
          date: "",
          star: 0,
          text: "",
        },
      ],
    },
    image_urls: [],
    video_url: "",
    video_thumbnail_url: "",
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

  const getData = async (id) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://raw.githubusercontent.com/afifcodes/sample-api/main/sample/penginapan/${id}.json`
      );
      setData(data);
      setLoaded(true);
    } catch (err) {
      console.log("Error");
      console.log(err);
    }
  };

  useEffect(() => {
    const query = router.query;
    if (!query.id) return;
    getData(query.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

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
              loaded={loaded}
              image_urls={data.image_urls}
              alt={data.name ?? ""}
              video_url={data.video_url}
              video_thumbnail_url={data.video_thumbnail_url}
            />
            <br />
            <TabDesc
              loaded={loaded}
              name={data.name}
              address={data.address}
              star={data.reviews.star}
              total_review={data.reviews.total_review}
              facilities={data.facilities}
              lat={data.lat}
              long={data.long}
              description={data.description}
            />
          </div>
          {!loaded ? (
            <div>
              <Skeleton
                containerClassName="min-w-[16rem] h-full"
                className="min-w-[16rem] h-full"
              />
            </div>
          ) : (
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
          )}
        </div>
        <br />
        {!loaded ? (
          <>
            <Skeleton className="h-12 max-w-xs" />
            <Skeleton className="h-72" />
          </>
        ) : (
          <>
            <Heading.h2 className="mb-2">Ulasan Pengunjung</Heading.h2>
            <ShortReview
              star={data.reviews.star}
              stars={data.reviews.stars}
              total_review={data.reviews.total_review}
              comments={data.reviews.comments}
            />
          </>
        )}
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
