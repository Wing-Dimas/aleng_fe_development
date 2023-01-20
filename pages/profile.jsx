import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useBreakpoint } from "use-breakpoint";
import Button from "@components/molecules/Button";
import Container from "@components/molecules/Container";
import DateInput from "@components/molecules/DateInput";
import FABSheet from "@components/molecules/FABSheet";
import Footer from "@components/molecules/Footer";
import Heading from "@components/molecules/Heading";
import MainContent from "@components/molecules/MainContent";
import Navbar from "@components/molecules/Navbar";
import Select from "@components/molecules/Select";
import Text from "@components/molecules/Text";
import TextInput from "@components/molecules/TextInput";
import Wrapper from "@components/molecules/Wrapper";
import { BREAKPOINTS } from "@constants/index";
import {
  IconChevronLeft,
  IconHelp,
  IconLock,
  IconSettings,
  IconUser,
} from "@tabler/icons";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({
    email: "",
    fname: "",
    gender: "L",
    birth_date: Date(),
    no_hp: "",
    password: "",
    repassword: "",
  });
  const doChangeUser = ({ name, value }) => {
    setUser({ ...user, [name]: value });
  };
  const handleClick = async (e) => {
    const cookie = Cookies.get("token");
    if (cookie) {
      try {
        await axios
          .post(
            process.env.BASE_API + "/auth/logout",
            {},
            {
              headers: {
                Authorization: `Bearer ${cookie}`,
              },
            }
          )
          .then((res) => {
            Cookies.remove("token");
            const cookie = Cookies.get("token");
            if (cookie == undefined) {
              router.push("/");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
    if (status == "authenticated") {
      signOut();
    }
  };

  useEffect(() => {
    const cookie = Cookies.get("token");
    if (status == "unauthenticated") {
      if (cookie == undefined) {
        router.push("/");
      }
    }
  }, [status]);

  return (
    <Wrapper>
      <Head>
        <title>Profil</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <Link href="/">
          <Heading.h2 className="flex items-center gap-2">
            <IconChevronLeft className="w-8 h-8" />
            <span>Profil</span>
          </Heading.h2>
        </Link>
        <br />
        <div
          className="block lg:grid lg:grid-cols-2 gap-3 h-full max-w-7xl"
          style={{ gridTemplateColumns: "auto 1fr" }}
        >
          <div className="hidden lg:block">
            <Container className="w-80">
              <div className="flex items-start gap-2">
                <div className="h-12 w-12 rounded-full bg-red-500" />
                <div>
                  <Text>Oliver Sykez</Text>
                  <Text.small>oliversykez@gmail.com</Text.small>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex flex-col gap-2">
                <div onClick={() => setIndex(0)} className="cursor-pointer">
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 0 ? "text-red-600" : null
                    }`}
                  >
                    <IconUser className="w-5 h-5" />
                    <span>Sunting Profil</span>
                  </Text.small>
                </div>
                <div onClick={() => setIndex(1)} className="cursor-pointer">
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 1 ? "text-red-600" : null
                    }`}
                  >
                    <IconLock className="w-5 h-5" />
                    <span>Ubah Password</span>
                  </Text.small>
                </div>
                <div onClick={() => setIndex(2)} className="cursor-pointer">
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 2 ? "text-red-600" : null
                    }`}
                  >
                    <IconHelp className="w-5 h-5" />
                    <span>Bantuan</span>
                  </Text.small>
                </div>
              </div>
              <br />
              <Button
                className="w-full bg-custom-primary_red text-white"
                onClick={handleClick}
              >
                Keluar
              </Button>
            </Container>
          </div>

          {["xs", "sm", "md"].includes(breakpoint) && (
            <FABSheet
              icon={
                <IconSettings className="w-8 h-8 text-custom-primary_red" />
              }
            >
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-red-500" />
                <div>
                  <Text>Oliver Sykez</Text>
                  <Text.small>oliversykez@gmail.com</Text.small>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex flex-col">
                <div className="cursor-pointer" onClick={() => setIndex(0)}>
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 0 ? "text-red-600" : null
                    }`}
                  >
                    <IconUser className="w-5 h-5" />
                    <span>Sunting Profil</span>
                  </Text.small>
                </div>
                <div className="cursor-pointer" onClick={() => setIndex(1)}>
                  <Text.small
                    className={`flex items-center gap-2 cursor-pointer ${
                      index == 1 ? "text-red-600" : null
                    }`}
                  >
                    <IconLock className="w-5 h-5" />
                    <span>Ubah Password</span>
                  </Text.small>
                </div>
                <div className="cursor-pointer" onClick={() => setIndex(2)}>
                  <Text.small
                    className={`flex items-center gap-2 cursor-pointer ${
                      index == 2 ? "text-red-600" : null
                    }`}
                  >
                    <IconHelp className="w-5 h-5" />
                    <span>Bantuan</span>
                  </Text.small>
                </div>
              </div>

              <br />
              <Button
                className="w-full bg-custom-primary_red text-white"
                onClick={handleClick}
              >
                Keluar
              </Button>
            </FABSheet>
          )}
          {index == 0 ? (
            <Container>
              <Heading.h3>Informasi User</Heading.h3>
              <Text.small>
                Pada halaman ini kamu bisa mengedit informasi terkait data kamu
                yang diperlukan. Pembaruan akan muncul setelah kurang lebih 5
                menit mulai dari kamu edit.
              </Text.small>
              <br />
              <Text>Alamat Email</Text>
              <TextInput
                name="email"
                value={user.email}
                onChange={doChangeUser}
                placeholder="Masukkan emailmu"
              />
              <br />
              <Text>Nama Lengkap</Text>
              <TextInput
                name="fname"
                value={user.fname}
                onChange={doChangeUser}
                placeholder="Masukkan nama lengkapmu"
              />
              <br />
              <div className="flex items-center gap-2">
                <div className="w-full">
                  <Text>Jenis Kelamin</Text>
                  <Select
                    leftIcon={<IconUser className="w-5 h-5" />}
                    value={user.gender}
                    name="gender"
                    onChange={doChangeUser}
                    options={[
                      {
                        name: "Laki-Laki",
                        value: "L",
                      },
                      {
                        name: "Perempuan",
                        value: "P",
                      },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <Text>Tanggal Lahir</Text>
                  <DateInput
                    name="birth_date"
                    value={user.birth_date}
                    onChange={doChangeUser}
                  />
                </div>
              </div>
              <br />
              <Text>No Telepon</Text>
              <TextInput
                name="no_hp"
                value={user.no_hp}
                onChange={doChangeUser}
                placeholder="Masukkan no telepon"
              />
              <br />
              <Button className="w-full">Perbarui Profil</Button>
            </Container>
          ) : index == 1 ? (
            <Container>
              <Heading.h3>Ubah Password</Heading.h3>
              <Text.small>Pada halaman ini kamu bisa Ubah Password</Text.small>
              <br />
              <Text>Password</Text>
              <TextInput.obscure
                name="password"
                value={user.password}
                onChange={doChangeUser}
                placeholder="Masukkan password"
              />
              <br />
              <Text>Ulangi Password</Text>
              <TextInput.obscure
                name="repassword"
                value={user.repassword}
                onChange={doChangeUser}
                placeholder="Masukkan ulang password"
              />
              <br />
              <Button className="w-full">Ubah Password</Button>
            </Container>
          ) : (
            <Container>
              <Heading.h3>Bantuan</Heading.h3>
            </Container>
          )}
        </div>
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
