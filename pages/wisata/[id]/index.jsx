import { useEffect, useState } from "react";
import Head from "next/head";
import Container from "@components/atomics/Container";
import DateInput from "@components/atomics/DateInput";
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
import Link from "next/link";
import ReviewVisitor from "@components/molecules/ReviewVisitor";
import { useRouter } from "next/router";
import axios from "axios";

export default function DetailWisata({}) {
  const router = useRouter();
  const [wisata, setWisata] = useState({
    id: "",
    title: "",
    description: "",
    lat: "",
    long: "",
    open: "",
    address: "",
    close: "",
    facility: [],
    price: "",
    review: {
      star: "",
      total_review: "",
      count: [],
      comment: [],
    },
    image: [],
  });
  const [openReview, setOpenReview] = useState(false);
  const [order, setOrder] = useState({
    date: new Date().toISOString().split("T")[0],
    options: {
      people: 1,
    },
  });

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

  const getWisata = async ({ id }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/wisata/show/" + id
      );
      const res = data.data[0];
      setWisata(res);
    } catch (error) {
      console.log(error);
      console.log("Error Fetching Wisata");
    }
  };

  useEffect(() => {
    let { id } = router.query;
    if (!id) {
      return;
    }
    getWisata({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Wrapper>
      <Head>
        <title>Detail Wisata</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            <GalleryImage images={wisata.image.map((im, i) => im.url)} />
            <Container className="mt-4">
              <Rating
                count={wisata.review.total_review}
                rate={wisata.review.star}
              />
              <Heading.h2>{wisata.title}</Heading.h2>
              <div className="flex flex-row gap-1 items-center">
                <IconMapPin size={18} strokeWidth={2} color={"#615A56"} />
                <p className="md:text-[0.75rem] text-[0.5rem] font-normal">
                  {wisata.address}
                </p>
              </div>
              <br />
              <TabDesc
                page="wisata"
                desc={wisata.description}
                lat={wisata.lat}
                long={wisata.long}
                facility={wisata.facility}
              />
            </Container>
          </div>
          {/* Price Detail */}
          <Container className="!flex !flex-col !justify-between !gap-3 md:!gap-6">
            <div className="flex flex-col">
              <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                {wisata.price}
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
                  Rp
                  <span className="ml-1 font-semibold">
                    {order.options.people * wisata.price}.000
                  </span>
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
            star={wisata.review.star}
            total_review={wisata.review.total_review}
            comments={wisata.review.comment}
            star_count={wisata.review.count}
            openReview={openReview}
            setOpenReview={setOpenReview}
          />
        </div>
        <br />
      </MainContent>
      <Footer />
    </Wrapper>
  );
}
