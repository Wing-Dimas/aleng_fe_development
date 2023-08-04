import { useState } from "react";
import Head from "next/head";
import Button from "@components/atomics/Button";
import Container from "@components/atomics/Container";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Heading from "@components/atomics/Heading";
import MainContent from "@components/atomics/MainContent";
import Navbar from "@components/molecules/Navbar";
import ScheduleTravel from "@components/molecules/ScheduleTravel";
import Select from "@components/atomics/Select";
import Rating from "@components/molecules/Rating";
import TabDesc from "@components/atomics/TabDesc";
import Text from "@components/atomics/Text";
import Wrapper from "@components/atomics/Wrapper";
import { IconCalendar, IconMapPin, IconUser } from "@tabler/icons-react";
import ReviewVisitor from "@components/molecules/ReviewVisitor";
export default function PaketWisata({}) {
  const [openReview, setOpenReview] = useState(false);

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
        <title>Detail Paket Wisata</title>
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
              <div className="flex flex-row justify-between items-center">
                <Heading.h2>Paket Wisata Pantai Lon Malang</Heading.h2>
                <Text className="font-semibold text-[10px] md:text-base text-custom-primary_red">
                  Paket 2 Hari 2 Malam
                </Text>
              </div>
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
          <ReviewVisitor
            openReview={openReview}
            setOpenReview={setOpenReview}
          />
        </div>
      </MainContent>
      <Footer />
    </Wrapper>
  );
}
