import { useState } from "react";
import Head from "next/head";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import Button from "@components/molecules/Button";
import FABSheet from "@components/molecules/FABSheet";
import Footer from "@components/molecules/Footer";
import Heading from "@components/molecules/Heading";
import Navbar from "@components/molecules/Navbar";
import OrderCard from "@components/molecules/OrderCard";
import Text from "@components/molecules/Text";
import { IconChevronLeft, IconFilter } from "@tabler/icons";

export default function MyOrder() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [index, setIndex] = useState(0);

  const doChangeIndex = (e) => {
    setIndex(parseInt(e.currentTarget.value));
  };

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen text-[#252525] bg-custom-bg">
      <Head>
        <title>Pesanan Saya</title>
      </Head>
      <Navbar />
      <div className="max-w-7xl px-4 mx-auto">
        <br />
        <Heading.h2 className="flex items-center gap-2">
          <IconChevronLeft className="w-8 h-8" />
          <span>Cek Pesanan</span>
        </Heading.h2>
        <br />
        <div
          className="block lg:grid lg:grid-cols-2 gap-4"
          style={{
            gridTemplateColumns: "1fr auto",
          }}
        >
          {/* Filter Sheet */}
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
          {/* Filter */}
          <div className="hidden lg:block">
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
          </div>
          <div>
            <div className="flex items-center gap-8 w-full flex-nowrap overflow-x-auto whitespace-nowrap scrollbar-hide">
              <Button
                value={0}
                onClick={doChangeIndex}
                className={`!rounded-full ${
                  index === 0
                    ? "!bg-gradient-to-b !from-custom-gradient1 !to-custom-gradient2 !text-white"
                    : "!bg-white !text-custom-black !shadow-none"
                }`}
              >
                Menunggu Pembayaran
              </Button>
              <Button
                value={1}
                onClick={doChangeIndex}
                className={`!rounded-full ${
                  index === 1
                    ? "!bg-gradient-to-b !from-custom-gradient1 !to-custom-gradient2 !text-white"
                    : "!bg-white !text-custom-black !shadow-none"
                }`}
              >
                Sudah Dibayar
              </Button>
              <Button
                value={2}
                onClick={doChangeIndex}
                className={`!rounded-full ${
                  index === 2
                    ? "!bg-gradient-to-b !from-custom-gradient1 !to-custom-gradient2 !text-white"
                    : "!bg-white !text-custom-black !shadow-none"
                }`}
              >
                Pembayaran Expired
              </Button>
              <Button
                value={3}
                onClick={doChangeIndex}
                className={`!rounded-full ${
                  index === 3
                    ? "!bg-gradient-to-b !from-custom-gradient1 !to-custom-gradient2 !text-white"
                    : "!bg-white !text-custom-black !shadow-none"
                }`}
              >
                Refund
              </Button>
            </div>
            <br />
            <div className="flex flex-col gap-2 bg-custom-white p-4 rounded-xl">
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
