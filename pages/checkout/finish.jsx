import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Button from "@components/molecules/Button";
import Checkbox from "@components/molecules/Checkbox";
import Container from "@components/molecules/Container";
import Footer from "@components/molecules/Footer";
import Heading from "@components/molecules/Heading";
import MainContent from "@components/molecules/MainContent";
import Navbar from "@components/molecules/Navbar";
import Radio from "@components/molecules/Radio";
import Rating from "@components/molecules/Rating";
import Select from "@components/molecules/Select";
import Text from "@components/molecules/Text";
import TextInput from "@components/molecules/TextInput";
import TextArea from "@components/molecules/TextArea";
import Wrapper from "@components/molecules/Wrapper";
import { IconChevronLeft, IconUser } from "@tabler/icons";
import Stepper from "@components/molecules/Stepper";
import Link from "next/link";
export default function Finish() {
  return (
    <Wrapper>
      <Head>
        <title>Finish</title>
      </Head>
      <Navbar />

      <MainContent>
        <Stepper status="finish" />
        <br />
        <div className="w-fit">
          <Link href="/checkout/payment">
            <Heading.h2 className="flex items-center gap-2 w-fit">
              <IconChevronLeft className="w-8 h-8" />
              <span>Pesanan Berhasil</span>
            </Heading.h2>
          </Link>
        </div>
        <br />
        <div className="flex flex-col gap-5">
          <Text.small className="!font-normal md:text-xs text-custom-dark_grey">
            Terima kasih sudah melakukan pembelian pada Lenjelenan Madura
          </Text.small>
          <div className="grid grid-cols-5  w-full  divide-x-2 divide-gray-300">
            <div className="flex flex-col items-center ">
              <Text.small className="!font-normal md:text-xs text-custom-dark_grey">
                ID Pesanan
              </Text.small>
              <Text>1998</Text>
            </div>
            <div className="flex flex-col items-center ">
              <Text.small className="!font-normal md:text-xs text-custom-dark_grey">
                ID Pesanan
              </Text.small>
              <Text>1998</Text>
            </div>
            <div className="flex flex-col items-center ">
              <Text.small className="!font-normal md:text-xs text-custom-dark_grey">
                ID Pesanan
              </Text.small>
              <Text>1998</Text>
            </div>
            <div className="flex flex-col items-center ">
              <Text.small className="!font-normal md:text-xs text-custom-dark_grey">
                ID Pesanan
              </Text.small>
              <Text>1998</Text>
            </div>
            <div className="flex flex-col items-center">
              <Text.small className="!font-normal md:text-xs text-custom-dark_grey">
                ID Pesanan
              </Text.small>
              <Text>1998</Text>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col p-5 shadow-md">
            <Text className="md:text-xl">Detail Pesanan</Text>
            <br />
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <div className="relative h-24 w-32 rounded-lg">
                  <Image
                    src="/image/room.jpeg"
                    fill
                    alt="room"
                    className="bg-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Text>Kaberaaz Luxury</Text>
                    <Text.label>1x Deluxe Room</Text.label>
                    <Text.label>1 Malam. 1 Dewasa. 1 Anak</Text.label>
                  </div>
                  <Rating count={666} />
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <Text.small className="!font-normal !text-xs">
                    Check In
                  </Text.small>
                  <Text.small className="!font-normal !text-xs">
                    Rab, 07 Desember 2022
                  </Text.small>
                </div>
                <div className="flex flex-row justify-between">
                  <Text.small className="!font-normal !text-xs">
                    Check Out
                  </Text.small>
                  <Text.small className="!font-normal !text-xs">
                    Rab, 07 Desember 2022
                  </Text.small>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Text className="!sm:text-xl">Permintaan Khusus</Text>
                <div className="flex flex-col bg-[#F6F0E1] rounded-md shadow-md p-2 gap-2">
                  {[...Array(4)].map((v, i) => {
                    return (
                      <div key={i} className="flex flex-row justify-between">
                        <Text.small className="!font-normal !text-xs">
                          Sarapan AC Hari
                        </Text.small>
                        <Text.small className="!font-normal !text-xs">
                          Rp.10.000
                        </Text.small>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <Text className="!sm:text-xl">Total</Text>
                <Text className="!sm:text-xl text-custom-primary_red">
                  Rp.165.000
                </Text>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
