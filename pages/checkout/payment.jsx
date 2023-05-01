import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Button from "@components/atomics/Button";
import Checkbox from "@components/atomics/Checkbox";
import Container from "@components/atomics/Container";
import Footer from "@components/molecules/Footer";
import Heading from "@components/atomics/Heading";
import MainContent from "@components/atomics/MainContent";
import Navbar from "@components/molecules/Navbar";
import Rating from "@components/molecules/Rating";
import Text from "@components/atomics/Text";
import TextInput from "@components/atomics/TextInput";
import TextArea from "@components/atomics/TextArea";
import Wrapper from "@components/atomics/Wrapper";
import { IconChevronLeft } from "@tabler/icons-react";
import Stepper from "@components/molecules/Stepper";
import Link from "next/link";
import CardPayment from "@components/molecules/CardPayment";
export default function Payment() {
  const doChangeInfo = ({ name, value }) => {
    setInfo({ ...info, [name]: value });
  };
  return (
    <Wrapper>
      <Head>
        <title>Payment</title>
      </Head>
      <Navbar />

      <MainContent>
        <Stepper status="payment" />
        <br />
        <div className="w-fit">
          <Link href="/checkout/confirm">
            <Heading.h2 className="flex items-center gap-2 w-fit">
              <IconChevronLeft className="w-8 h-8" />
              <span>Pembayaran</span>
            </Heading.h2>
          </Link>
        </div>
        <br />
        <div
          className="md:grid grid-cols-2 gap-4"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          <div
            className="grid grid-rows-2 gap-4"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <Container>
              <Heading.h3>Detail Tamu</Heading.h3>
              <br />
              <div className="w-full flex flex-col gap-3">
                <TextInput
                  // value={info.person.name}
                  // name="name"
                  // onChange={doChangePerson}
                  label="Nama Lengkap"
                  labelClassName="font-semibold text-sm"
                  placeholder="Masukkan Nama Lengkapmu"
                />
                <div className="flex flex-row items-center gap-3 w-full">
                  <TextInput
                    // value={info.person.name}
                    // name="name"
                    // onChange={doChangePerson}
                    label="Alamat Email"
                    labelClassName="font-semibold text-sm"
                    placeholder="Masukkan Email"
                    containerClassName="w-full"
                  />
                  <TextInput
                    // value={info.person.name}
                    // name="name"
                    // onChange={doChangePerson}
                    label="No Telp"
                    labelClassName="font-semibold text-sm"
                    placeholder="Masukkan Nomer Telp"
                    containerClassName="w-full"
                  />
                </div>
              </div>
            </Container>
            <Container>
              <Heading.h3>Pilih Metode Pembayaran</Heading.h3>
              <br />
              <div className="flex flex-col gap-2">
                <Text>E-Wallet</Text>
                <div className=" grid-cols-1 grid sm:grid-cols-3 gap-3">
                  <CardPayment id="1" name="payment" />
                  <CardPayment id="2" name="payment" />
                  <CardPayment id="3" name="payment" />
                  <CardPayment id="4" name="payment" />
                  <CardPayment id="5" name="payment" />
                  <CardPayment id="6" name="payment" />
                  <CardPayment id="7" name="payment" />
                </div>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <Text>Bank Transfer</Text>
                <div className=" grid-cols-1 grid sm:grid-cols-3 gap-3">
                  <CardPayment id="9" name="payment" />
                  <CardPayment id="8" name="payment" />
                </div>
              </div>
            </Container>
          </div>

          <div
            className="mt-4 md:mt-0 grid grid-rows-2 gap-4"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <Container className="">
              <Heading.h3>Detail Pemesanan</Heading.h3>
              <br />
              <div className="flex gap-4">
                <div className="relative h-24 w-32 rounded-lg">
                  <Image
                    src="https://source.unsplash.com/random/?homestay"
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
              <br />
              <hr />
              <br />
              <div className="flex items-center justify-between gap-2">
                <Text.label>Check-in</Text.label>
                <Text.label>Rabu, 07 Desember 2022</Text.label>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Text.label>Check-out</Text.label>
                <Text.label>Rabu, 07 Desember 2022</Text.label>
              </div>
              <br />
              <Text>Rincian Harga</Text>
              <br />
              <div className="p-2 rounded-lg bg-[#F6F0E1]">
                <div className="flex items-center justify-between gap-2">
                  <Text.label>1 Malam</Text.label>
                  <Text.label className="text-right">Rp 150.000</Text.label>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Text.label>Sarapan pagi</Text.label>
                  <Text.label className="text-right">Rp 10.000</Text.label>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Text.label>Ekstra bantal</Text.label>
                  <Text.label className="text-right">Rp 5.000</Text.label>
                </div>
              </div>
              <br />
              <div className="flex items-center justify-between gap-2">
                <Heading.h3>Total</Heading.h3>
                <Heading.h3 className="text-custom-primary_red">
                  Rp 165.000
                </Heading.h3>
              </div>
            </Container>
            <Container className="flex flex-col justify-end">
              <Heading.h3>Pembayaran</Heading.h3>
              <br />
              <Link href="/checkout/finish">
                <Button
                  // onClick={doPayment}
                  className="w-full"
                >
                  Lanjut Bayar
                </Button>
              </Link>
            </Container>
          </div>
        </div>
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
