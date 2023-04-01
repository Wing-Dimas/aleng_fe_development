import Footer from "@components/molecules/Footer";
import Navbar from "@components/molecules/Navbar";
import { useState } from "react";
import "swiper/css";
import { useBreakpoint } from "use-breakpoint";
import Image from "next/image";
import OrderCard from "@components/molecules/OrderCard";
import Head from "next/head";
import Button from "@components/atomics/Button";
import { BREAKPOINTS } from "@constants/index";
import FABSheet from "@components/atomics/FABSheet";
import { IconChevronLeft, IconFilter } from "@tabler/icons";
import Text from "@components/atomics/Text";
import Heading from "@components/atomics/Heading";
import ModalDetailOrder from "@components/molecules/ModalDetailOrder";
import Link from "next/link";
import Wrapper from "@components/atomics/Wrapper";
import MainContent from "@components/atomics/MainContent";
import Container from "@components/atomics/Container";

export default function PesananSaya() {
  const tabStatus = [
    "Menunggu Pembayaran",
    "Sudah Dibayar",
    "Pembayaran Expired",
    "Refund",
  ];
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const doChangeIndex = (e) => {
    setIndex(parseInt(e.currentTarget.value));
  };
  return (
    <Wrapper>
      <Head>
        <title>Pesanan Saya</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <Link href="/">
          <Heading.h2 className="flex items-center gap-2">
            <IconChevronLeft className="w-8 h-8" />
            <span>Cek Pesanan</span>
          </Heading.h2>
        </Link>
        <br />
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-3 h-full max-w-7xl"
          style={{ gridTemplateColumns: "minmax(14rem, 100%) 1fr" }}
        >
          <div>
            <Container className="hidden lg:flex flex-col !border-none !shadow-none">
              <p className="font-semibold text-base">Filter Pesanan</p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                  <Text.label>Produk</Text.label>
                  <div className="">
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Penginapan
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Wisata
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Paket Wisata
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Kuliner
                      </Text.label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Text.label>Tanggal Pesanan</Text.label>
                  <div className="">
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Minggu Ini
                      </Text.label>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <input type="checkbox" />
                      <Text.label className="!text-black !font-medium">
                        Bulan Ini
                      </Text.label>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {/* mobile */}
          {["xs", "sm", "md"].includes(breakpoint) && (
            <FABSheet
              icon={<IconFilter className="w-8 h-8 text-custom-primary_red" />}
            >
              <div className="p-4 rounded-xl bg-custom-white">
                <Text className="mb-4">Filter Pesanan</Text>
                <hr />
                <br />
                {/* Fasilitas Hotel */}
                <Text.label>Produk</Text.label>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Penginapan
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Wisata
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Paket Wisata
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Kuliner
                    </Text.label>
                  </div>
                </div>
                <br />
                {/* Tipe Hotel */}
                <Text.label>Tanggal Pesan</Text.label>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Minggu ini
                    </Text.label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" />
                    <Text.label className="!text-black !font-medium">
                      Bulan ini
                    </Text.label>
                  </div>
                </div>
              </div>
            </FABSheet>
          )}
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-4 flex-nowrap overflow-x-auto">
              {tabStatus.map((title, i) => {
                return (
                  <Button
                    key={title}
                    value={i}
                    onClick={doChangeIndex}
                    className={`!whitespace-nowrap !rounded-full !shadow-none ${
                      index == i
                        ? "!bg-gradient-to-b !from-custom-gradient1 !to-custom-gradient2 !text-white"
                        : "!bg-white !text-custom-black"
                    }`}
                  >
                    {title}
                  </Button>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 rounded-xl">
              {[...Array(4)].map((v, i) => (
                <OrderCard
                  key={i}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              ))}
            </div>
          </div>
        </div>
        <ModalDetailOrder showModal={showModal} setShowModal={setShowModal} />
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
