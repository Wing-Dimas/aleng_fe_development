/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import LSTextInput, {
  ObscuredLSTextInput,
} from "@components/atomics/LSTextInput";
import Navbar from "@components/molecules/Navbar";
import validateRegister from "@validators/registerValidator";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { unauthPage } from "protectedRoute/authentication";

export async function getServerSideProps(context) {
  await unauthPage(context);
  return {
    props: {},
  };
}

export default function RegisterPage({}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password_confirmation: "",
  });

  const [messages, setMessages] = useState({
    name: { isError: false, message: "" },
    email: { isError: false, message: "" },
    phoneNumber: { isError: false, message: "" },
    password: { isError: false, message: "" },
    password_confirmation: { isError: false, message: "" },
  });

  const doChange = ({ name, value }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validated = await validateRegister(credentials);
      if (validated.isError) {
        setMessages(validated.form);
        return;
      }
      await axios
        .post(process.env.BASE_API + "/auth/register", {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.password_confirmation,
          phoneNumber: credentials.phoneNumber,
        })
        .then((_) => {
          router.push("/login");
        });
    } catch (err) {
      setCredentials({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        password_confirmation: "",
      });
      setMessages({
        name: { isError: false, message: "" },
        email: { isError: false, message: "" },
        phoneNumber: { isError: false, message: "" },
        password: { isError: false, message: "" },
        password_confirmation: { isError: false, message: "" },
      });
    }
  };

  const handleSignIn = () => {
    signIn();
  };
  return (
    <div className="min-h-screen min-w-screen max-w-screen font-inter overflow-x-hidden text-[#252525]">
      <Head>
        <title>Sign Up | Lenjelen</title>
      </Head>
      <Navbar isFixed auth />
      {/* <div className={`max-w-full w-full relative`}>
        <div className="absolute top-0 w-full md:top-[-4.75rem]">
          <Image
            src="/static_images/sky.png"
            width={1000}
            height={50}
            alt="gambarLanjalan"
            className="drop-shadow-md w-full"
            priority
          />
        </div>
      </div> */}
      <div className="flex flex-col gap-2 md:gap-16 p-4 lg:flex-row justify-center items-center md:items-start w-full min-h-[calc(100vh-8rem)] font-semibold text-[2rem] my-[8rem]">
        <div className="w-1/2 z-50 relative justify-center flex md:mt-10 ">
          <Image
            src="/static_images/lanjalan_baner.png"
            width={600}
            height={50}
            alt="iconLanjalan"
            priority
          />
        </div>
        <div className=" rounded-md border-solid shadow-lg border-2 border-gray-200  p-9  z-50 bg-white w-full lg:w-1/3 flex flex-col justify-center items-center">
          <p className="text-[1.2rem] md:text-[2rem] text-center">
            Selamat Bergabung {session ? "Logged in" : "not logged in"}
          </p>
          <form
            className="text-sm max-w-[400px] h-full mt-[1rem] md:mt-[2.25rem] flex flex-col items-center gap-2 md:gap-3 w-full"
            onSubmit={handleSubmit}
          >
            <LSTextInput
              name="name"
              label="Nama Lengkap"
              value={credentials.name}
              onChange={doChange}
              placeholder="Masukkan Nama"
              type="text"
              message={messages.name}
            />
            <LSTextInput
              name="email"
              label="Email"
              value={credentials.email}
              onChange={doChange}
              placeholder="Masukkan Email"
              type="email"
              message={messages.email}
            />
            <LSTextInput
              name="phoneNumber"
              label="Nomer Telepon"
              value={credentials.phoneNumber}
              onChange={doChange}
              placeholder="Masukkan Nomer Telepon"
              type="text"
              message={messages.phoneNumber}
            />
            <ObscuredLSTextInput
              name="password"
              label="Password"
              value={credentials.password}
              onChange={doChange}
              placeholder="Masukkan password"
              type="password"
              message={messages.password}
            />
            <ObscuredLSTextInput
              name="password_confirmation"
              label="Konfirmasi Password"
              value={credentials.password_confirmation}
              onChange={doChange}
              placeholder="Masukkan password"
              type="password"
              message={messages.password_confirmation}
            />

            <div className="flex flex-col w-full items-center justify-center gap-1 mt-4">
              <button
                type="submit"
                className="w-full p-3 bg-[#FDD05C] hover:bg-[#F6BE30] relative text-xs md:text-sm shadow-md rounded-md cursor-pointer"
              >
                Register
              </button>
              <p className="text-xs md:text-sm">atau</p>
              <button
                onClick={handleSignIn}
                className="p-3 w-full rounded-md border-2 border-[#5B5B5B] hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
              >
                <div className="flex gap-4 justify-center max-w-sm items-center">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/static_icons/google.svg"
                      priority
                      fill
                      alt="google"
                    />
                  </div>
                  <span className="block w-max font-semibold tracking-wide text-xs md:text-sm ">
                    Masuk dengan Google
                  </span>
                </div>
              </button>
              <p className="">
                Sudah Punya Account ?{" "}
                <span className="text-red-600 hover:text-red-800 cursor-pointer">
                  <Link href="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-full relative bottom-0 w-full ">
        <div className="w-full absolute bottom-8 md:bottom-0">
          <div className="relative">
            <Image
              priority
              width={1000}
              height={1000}
              src="/static_images/batik_footer.png"
              alt="logo"
              className="w-full opacity-80"
            />
          </div>
        </div>
        <div className="bottom-8 md:bottom-7 absolute w-full z-40 md:-left-28">
          <div className="relative md:w-full">
            <Image
              priority
              width={1000}
              height={1000}
              src="/static_images/characters_madura.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="relative z-50">
          <p className="w-full absolute bg-[#FFF4E8] p-2 bottom-0 text-[#615A56] font-medium text-[0.60rem] md:text-[0.75] text-center">
            Copyright © 2022 Lenjhelenan Madura
          </p>
        </div>
      </div>
    </div>
  );
}
