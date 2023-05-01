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
import Radio from "@components/atomics/Radio";
import Rating from "@components/molecules/Rating";
import Select from "@components/atomics/Select";
import Text from "@components/atomics/Text";
import TextInput from "@components/atomics/TextInput";
import TextArea from "@components/atomics/TextArea";
import Wrapper from "@components/atomics/Wrapper";
import { IconChevronLeft, IconUser } from "@tabler/icons-react";
import Stepper from "@components/molecules/Stepper";
import Link from "next/link";

export default function Confirm() {
  const [info, setInfo] = useState({
    person: {
      type: "tn",
      name: "",
    },
    special: {
      free_smoke: false,
      city_light_view: false,
      connected_door: false,
      rooftop: false,
    },
    note: "",
    payment: "in_place",
  });

  const doChangePerson = ({ name, value }) => {
    setInfo({ ...info, person: { ...info.person, [name]: value } });
  };

  const doChangeSpecial = ({ name, value }) => {
    setInfo({ ...info, special: { ...info.special, [name]: value } });
  };

  const doChangeInfo = ({ name, value }) => {
    setInfo({ ...info, [name]: value });
  };

  const doPayment = () => {};

  return (
    <Wrapper>
      <Head>
        <title>Confirm</title>
      </Head>
      <Navbar />

      <MainContent>
        <Stepper status="confirm" />
        <br />
        <div className="w-fit">
          <Link href="/">
            <Heading.h2 className="flex items-center gap-2 w-fit">
              <IconChevronLeft className="w-8 h-8" />
              <span>Konfirmasi Pesanan</span>
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
              <p className="rounded bg-[#F6F0E1] px-4 py-2 font-medium">
                1 Kamar
              </p>
              <div className="mt-4 flex items-start gap-2">
                <div className="min-w-max">
                  <Select
                    leftIcon={<IconUser className="w-5 h-5" />}
                    value={info.person.type}
                    name="type"
                    onChange={doChangePerson}
                    options={[
                      {
                        name: "Tuan",
                        value: "tn",
                      },
                      {
                        name: "Nyonya",
                        value: "ny",
                      },
                    ]}
                  />
                  <Text.label className="mt-1 ml-2 md:!text-[0.75rem] !text-[9px]">
                    Title
                  </Text.label>
                </div>
                <div className="w-full">
                  <TextInput
                    leftIcon={<IconUser className="w-5 h-5" />}
                    value={info.person.name}
                    name="name"
                    onChange={doChangePerson}
                    placeholder="Nama"
                  />
                  <Text.label className="mt-1 ml-2 md:!text-[0.75rem] !text-[9px]">
                    Isi sesuai KTP/Paspor/SIM (tanpa tanda baca dan gelar)
                  </Text.label>
                </div>
              </div>
            </Container>
            <Container>
              <Heading.h3>Permintaan Khusus</Heading.h3>
              <br />
              <Text.label className="md:!text-[0.75rem] !text-[9px]">
                Jika kamu punya permintaan khusus untuk membuatmu makin nyaman,
                minta di sini ya. Permintaanmu tergantung persediaan.
              </Text.label>
              <div className="flex items-center flex-wrap gap-2 my-2">
                <Checkbox
                  label="Bebas asap rokok"
                  value={info.special.free_smoke}
                  name="free_smoke"
                  onChange={doChangeSpecial}
                />
                <Checkbox
                  label="City Light View"
                  value={info.special.city_light_view}
                  name="city_light_view"
                  onChange={doChangeSpecial}
                />
                <Checkbox
                  label="Kamar dengan pintu terhubung"
                  value={info.special.connected_door}
                  name="connected_door"
                  onChange={doChangeSpecial}
                />
                <Checkbox
                  label="Lantai atas"
                  value={info.special.rooftop}
                  name="rooftop"
                  onChange={doChangeSpecial}
                />
              </div>
              <div className="md:min-h-[300px]">
                <TextArea
                  name="note"
                  value={info.note}
                  onChange={doChangeInfo}
                  placeholder="Lainnya"
                  className="md:!h-[300px]"
                />
              </div>
            </Container>
          </div>
          <div
            className="mt-4 md:mt-0 grid grid-rows-2 gap-4"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <Container>
              <Heading.h3>Detail Pemesanan</Heading.h3>
              <br />
              <div className="flex gap-4">
                <br />
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
            <Container>
              <Heading.h3>Pembayaran</Heading.h3>
              <br />
              <Radio
                containerClassName="mb-2"
                name="payment"
                value="in_place"
                id="in_place"
                label="Bayar ditempat"
                onChange={doChangeInfo}
              />
              <Radio
                name="payment"
                value="gateway"
                id="gateway"
                label="Payment Gateaway"
                onChange={doChangeInfo}
              />
              <br />
              <Link href="/checkout/payment">
                <Button onClick={doPayment} className="w-full">
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
