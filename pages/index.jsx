import { useEffect, useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  IconBeach,
  IconBriefcase,
  IconBuildingCottage,
  IconBus,
  IconHorseToy,
  IconSoup,
} from "@tabler/icons-react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import DateInput from "@components/atomics/DateInput";
import DottedUnderline from "@components/atomics/DottedUnderline";
import Footer from "@components/molecules/Footer";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/atomics/PopOver";
import QuickCard from "@components/molecules/QuickCard";
import Tab from "@components/atomics/Tab";
import Text from "@components/atomics/Text";
import Title from "@components/atomics/Title";
import Link from "next/link";
import Button from "@components/atomics/Button";
import TextInput from "@components/atomics/TextInput";
import { useUserStore } from "store/userstore";
import Cookies from "js-cookie";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
export default function Home({}) {
  const cookie = Cookies.get("token");
  const changeUserStore = useUserStore((state) => state.fetchUser);
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

  useEffect(() => {
    if (cookie != undefined) {
      changeUserStore(process.env.BASE_API + "/auth/user/profile", cookie);
    }
  }, [cookie]);

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen">
      <Head>
        <title>Lenjelen Madura | Beranda</title>
      </Head>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('/static_images/hero.jpeg')",
        }}
        className="pt-24 pb-12 bg-center bg-cover"
      >
        {/* Liburan bersama */}
        <div className="px-4 sm:px-12 text-custom-white max-w-7xl mx-auto text-center">
          <p className="font-bold text-4xl lg:text-title">
            Lenjhelenan Madhureh
          </p>
          <p className="sm:mt-4 text-xs sm:text-base font-semibold">
            Rencanakan liburan serumu bersama kami
          </p>
        </div>
        {/* tabbar */}
        <div className="px-4 my-2 sm:my-8">
          <div className="font-medium max-w-3xl mx-auto">
            <div
              style={{
                gridTemplateColumns: "repeat(5, 1fr)",
              }}
              className="scrollbar-custom text-xs sm:text-base grid bg-neutral-200 rounded-full border-2 border-neutral-200"
            >
              <button
                value={0}
                onClick={doChangeTabIndex}
                className={`${
                  menuIndex === 0 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconBeach className="h-5 w-5" />
                <p>Wisata</p>
              </button>
              <button
                value={1}
                onClick={doChangeTabIndex}
                className={`${
                  menuIndex === 1 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconSoup className="h-5 w-5" />
                <p>Kuliner</p>
              </button>
              <button
                value={2}
                onClick={doChangeTabIndex}
                className={`${
                  menuIndex === 2 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconBuildingCottage className="h-5 w-5" />
                <p>Penginapan</p>
              </button>
              <button
                value={3}
                onClick={doChangeTabIndex}
                className={`${
                  menuIndex === 3 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconHorseToy className="h-5 w-5" />
                <p>Kerajinan</p>
              </button>
              <button
                value={4}
                onClick={doChangeTabIndex}
                className={`${
                  menuIndex === 4 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconBus className="h-5 w-5" />
                <p>Transportasi</p>
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
      {menuIndex === 0 ? (
        <Wisata breakpoint={breakpoint} />
      ) : menuIndex === 1 ? (
        <Kuliner breakpoint={breakpoint} />
      ) : menuIndex === 2 ? (
        <Penginapan breakpoint={breakpoint} />
      ) : menuIndex === 3 ? (
        <Kerajinan breakpoint={breakpoint} />
      ) : (
        <Transportasi breakpoint={breakpoint} />
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
                      imageUrl="https://source.unsplash.com/random/?tour&1"
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
                      imageUrl="https://source.unsplash.com/random/?tour&2"
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
                      imageUrl="https://source.unsplash.com/random/?tour&3"
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
                      imageUrl="https://source.unsplash.com/random/?food&1"
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
                      imageUrl="https://source.unsplash.com/random/?food&2"
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
                      imageUrl="https://source.unsplash.com/random/?homestay&1"
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
                      imageUrl="https://source.unsplash.com/random/?homestay&2"
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

const Kerajinan = ({ breakpoint }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Kerajinan <span className="text-custom-primary_red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan kerajinan madura untuk kenang-kenangan liburanmu
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
                  <Link href="/kerajinan/1">
                    <QuickCard
                      imageUrl="https://source.unsplash.com/random/?handcraft&1"
                      title="Kerajinan Batok Kelapa"
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
      <PilihanKabupaten name="Kerajinan" />
    </div>
  );
};

const Transportasi = ({ breakpoint }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Transportasi <span className="text-custom-primary_red">Populer</span>{" "}
          di Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan transportasi disekitar madura untuk menunjang
          liburanmu
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
                  <Link href="/transportasi/1">
                    <QuickCard
                      imageUrl="https://source.unsplash.com/random/?transportation&1"
                      title="Kapal Penyebrangan"
                      address="Kab. Bangkalan"
                      review_count={666}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <PilihanKabupaten name="Transportasi" />
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Pilih <span className="text-custom-primary_red">Tipe</span>{" "}
          Transportasi
        </Title>
        <Text className="text-center">
          Kami bisa memilihkanmu beberapa tipe transportasi agar kamu merasa
          nyaman
        </Text>
        <br />
        <Tab
          className="px-4"
          index={index}
          setIndex={setIndex}
          options={["Kapal", "Bus", "Ojek", "Bentor"]}
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
                  <Link href="/transportasi/1">
                    <QuickCard
                      imageUrl="https://source.unsplash.com/random/?transportation&2"
                      title="Kapal Penyebrangan"
                      address="Kab. Bangkalan"
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
        <KabupatenCard
          name="Bangkalan"
          bgImage="/static_images/bangkalan.png"
        />
        <KabupatenCard
          name="Pamekasan"
          bgImage="/static_images/pamekasan.png"
        />
        <KabupatenCard name="Sampang" bgImage="/static_images/sampang.png" />
        <KabupatenCard name="Sumenep" bgImage="/static_images/sumenep.png" />
      </div>
    </div>
  );
};

const KabupatenCard = ({ bgImage, name }) => {
  return (
    <Link href="/wisata/list">
      <div
        className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center sm:items-start justify-center sm:justify-start p-0 sm:p-8 bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {name}
      </div>
    </Link>
  );
};
