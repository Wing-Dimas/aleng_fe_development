import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import { useUserStore } from "store/userstore";
import Text from "@components/atomics/Text";
import Title from "@components/atomics/Title";
import Carousel from "@components/molecules/Carousel";
import DottedUnderline from "@components/molecules/DottedUnderline";
import Footer from "@components/molecules/Footer";
import Navbar from "@components/molecules/Navbar";
import QuickCard from "@components/molecules/QuickCard";
import {
  IconBeach,
  IconBuildingCottage,
  IconBus,
  IconHorseToy,
  IconSoup,
} from "@tabler/icons-react";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
export default function Home({}) {
  const cookie = Cookies.get("token");
  const changeUserStore = useUserStore((state) => state.fetchUser);
  const [menuIndex, setMenuIndex] = useState(0);

  const doChangeTabIndex = (e) => {
    setMenuIndex(parseInt(e.currentTarget.value));
  };

  useEffect(() => {
    if (cookie != undefined) {
      changeUserStore(process.env.BASE_API + "/auth/user/profile", cookie);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="px-4 sm:px-12 text-white max-w-7xl mx-auto text-center">
          <p className="font-bold text-4xl lg:text-6xl">Lenjhelenan Madhureh</p>
          <p className="sm:mt-4 text-xs sm:text-base font-semibold">
            Rencanakan liburan serumu bersama kami
          </p>
        </div>
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
        <Wisata />
      ) : menuIndex === 1 ? (
        <Kuliner />
      ) : menuIndex === 2 ? (
        <Penginapan />
      ) : menuIndex === 3 ? (
        <Kerajinan />
      ) : (
        <Transportasi />
      )}
      <Footer />
    </div>
  );
}

const Wisata = () => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Wisata <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan wisata disekitar madura untuk menemani liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="wisata-1">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <QuickCard
                    imageUrl={`https://source.unsplash.com/random/?tour&${i}`}
                    title="Gili Genting Gili Genting Banget"
                    address="Kab. Sumenep"
                    review_count={666}
                    link="/wisata1"
                  />
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Wisata" />
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Paket <span className="text-custom-primary-red">Wisata</span> Untukmu
        </Title>
        <Text className="text-center">
          Kami bisa memilihkanmu beberapa paket wisata agar kamu merasa nyaman
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="wisata-2">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <QuickCard
                    imageUrl={`https://source.unsplash.com/random/?tour&${i}`}
                    title="Jelajah Gili Iyang"
                    address="Kab. Sumenep"
                    review_count={666}
                  >
                    <Text.small className="text-custom-primary-red">
                      500K/3 hari
                    </Text.small>
                  </QuickCard>
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="bg-white px-4 py-4 md:py-8">
        <Title className="text-center">
          Wisata <span className="text-custom-primary-red">Religi</span> dan{" "}
          <span className="text-custom-primary-red">Bersejarah</span>
        </Title>
        <DottedUnderline />
        <div className="max-w-7xl mx-auto">
          <Carousel id="wisata-3">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <Link href="/wisata/1">
                    <QuickCard
                      imageUrl={`https://source.unsplash.com/random/?tour&${i}`}
                      title="Gili Genting"
                      address="Kab. Sumenep"
                      review_count={666}
                    />
                  </Link>
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const Kuliner = () => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Restoran <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan restoran disekitar madura untuk menunjang liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="kuliner-1">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <Link href="/kuliner/1">
                    <QuickCard
                      imageUrl={`https://source.unsplash.com/random/?food&${i}`}
                      title="Bebek Sinjay"
                      address="Jl. Raya Ketengan, Bangkalan"
                      review_count={666}
                    />
                  </Link>
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Restoran" />
    </div>
  );
};

const Penginapan = () => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Penginapan <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan penginapan disekitar madura untuk menunjang liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="penginapan-1">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <Link href="/penginapan/1">
                    <QuickCard
                      imageUrl={`https://source.unsplash.com/random/?homestay&${i}`}
                      title="Home Stay Amanah"
                      address="Kab. Sumenep"
                      review_count={666}
                      price="200"
                    />
                  </Link>
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Penginapan" />
    </div>
  );
};

const Kerajinan = () => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Kerajinan <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan kerajinan madura untuk kenang-kenangan liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="kerajinan-1">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <Link href="/kerajinan/1">
                    <QuickCard
                      imageUrl={`https://source.unsplash.com/random/?handcraft&${i}`}
                      title="Kerajinan Batok Kelapa"
                      address="Jl. Raya Ketengan, Bangkalan"
                      review_count={666}
                    />
                  </Link>
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Kerajinan" />
    </div>
  );
};

const Transportasi = () => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Transportasi <span className="text-custom-primary-red">Populer</span>{" "}
          di Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan transportasi disekitar madura untuk menunjang
          liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="transportasi-1">
            {[...Array(20)].map((v, i) => {
              return (
                <Carousel.item key={i.toString()}>
                  <Link href="/transportasi/1">
                    <QuickCard
                      imageUrl={`https://source.unsplash.com/random/?transportation&${i}`}
                      title="Kapal Penyebrangan"
                      address="Kab. Bangkalan"
                      review_count={666}
                    />
                  </Link>
                </Carousel.item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Transportasi" />
    </div>
  );
};

const PilihanKabupaten = ({ name }) => {
  return (
    <div className="bg-[#F6F0E1] px-4 py-4 md:py-8">
      <Title className="text-center">
        Pilihan {name}{" "}
        <span className="text-custom-primary-red">di Kabupaten</span>
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
