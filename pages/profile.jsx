import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useBreakpoint } from "use-breakpoint";
import Button from "@components/atomics/Button";
import Container from "@components/atomics/Container";
import DateInput from "@components/atomics/DateInput";
import FABSheet from "@components/atomics/FABSheet";
import Footer from "@components/molecules/Footer";
import Heading from "@components/atomics/Heading";
import MainContent from "@components/atomics/MainContent";
import Navbar from "@components/molecules/Navbar";
import Select from "@components/atomics/Select";
import Text from "@components/atomics/Text";
import TextInput from "@components/atomics/TextInput";
import Wrapper from "@components/atomics/Wrapper";
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
// import { useUserStore } from "store/userstore";
import ReverseDate from "@components/molecules/ReverseDate";
import { authPage } from "protectedRoute/authentication";

export async function getServerSideProps(context) {
  await authPage(context);
  return {
    props: {},
  };
}
export default function Profile() {
  if (typeof window !== "undefined") {
    var dataUser = JSON.parse(localStorage.getItem("user-storage"))?.state
      ?.user;
  }
  // const { data: session, status } = useSession();
  const router = useRouter();

  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [index, setIndex] = useState(0);

  const [user, setUser] = useState({
    email: "",
    fname: "",
    gender: "L",
    birth_date: "",
    no_hp: "",
    alamat: "",
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
            if (typeof window !== "undefined") {
              localStorage.removeItem("user-storage");
            }
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

  const handleSubmit = (e) => {};

  useEffect(() => {
    setUser({
      ...user,
      email: dataUser?.user?.email,
      fname: dataUser?.profile?.nama,
      gender:
        dataUser?.profile?.jenis_kelamin.toLowerCase() == "laki-laki"
          ? "L"
          : "P",
      birth_date: new Date(ReverseDate(dataUser?.profile?.tanggal_lahir))
        .toISOString()
        .substring(0, 10),
      no_hp: dataUser?.profile?.no_hp,
      alamat: dataUser?.profile?.alamat,
    });
  }, []);

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
                  <Text>{user?.fname}</Text>
                  <Text.small>{user.email}</Text.small>
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
                  <Text>{user?.fname}</Text>
                  <Text.small>{user?.email}</Text.small>
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
                value={dataUser?.user?.email}
                onChange={doChangeUser}
                placeholder="Masukkan emailmu"
                readonly="readOnly"
              />
              <br />
              <Text>Nama Lengkap</Text>
              <TextInput
                name="fname"
                value={user?.fname}
                onChange={doChangeUser}
                placeholder="Masukkan nama lengkapmu"
              />
              <br />
              <Text>Alamat Lengkap</Text>
              <TextInput
                name="alamat"
                value={user?.alamat}
                onChange={doChangeUser}
                placeholder="Masukkan Alamat lengkapmu"
              />
              <br />
              <div className="flex flex-col md:flex-row items-center gap-2">
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
                    value={user?.birth_date}
                    onChange={doChangeUser}
                  />
                </div>
              </div>
              <br />
              <Text>No Telepon</Text>
              <TextInput
                name="no_hp"
                value={user?.no_hp}
                onChange={doChangeUser}
                placeholder="Masukkan no telepon"
              />
              <br />
              <Button className="w-full" onClick={handleSubmit}>
                Perbarui Profil
              </Button>
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
