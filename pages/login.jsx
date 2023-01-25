/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import Checkbox from "@components/molecules/Checkbox";
import LSTextInput from "@components/molecules/LSTextInput";
import Navbar from "@components/molecules/Navbar";
import validateLogin from "@validators/loginValidator";
// import { signIn, useSession } from "next-auth/react";
import { unauthPage } from "protectedRoute/authentication";

export async function getServerSideProps(context) {
  await unauthPage(context);
  return {
    props: {},
  };
}

export default function LoginPage({}) {
  // const { data: session, status } = useSession();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberme: false,
  });
  const [messages, setMessages] = useState({
    email: { isError: false, message: "" },
    password: { isError: false, message: "" },
  });

  const doChange = ({ name, value }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.rememberme == true) {
      try {
        const validated = await validateLogin(credentials);
        if (validated.isError) {
          setMessages(validated.form);
          return;
        }
        const res = await axios.post(process.env.BASE_API + "/auth/login", {
          email: credentials.email,
          password: credentials.password,
        });
        if (!!res.data.access_token) {
          Cookies.set("token", res.data.access_token);
          router.push("/");
        }
        setCredentials({ email: "", password: "", rememberme: false });
        setMessages({
          email: { isError: false, message: "" },
          password: { isError: false, message: "" },
        });
      } catch (err) {
        setCredentials({ email: "", password: "", rememberme: false });
        setMessages({
          email: { isError: false, message: "" },
          password: { isError: false, message: "" },
        });
      }
    } else {
      setCredentials({ email: "", password: "", rememberme: false });
      setMessages({
        email: { isError: false, message: "" },
        password: { isError: false, message: "" },
      });
    }
  };

  const handleSignIn = () => {
    signIn();
  };

  return (
    <div className="min-h-screen min-w-screen max-w-screen font-inter overflow-x-hidden text-[#252525] ">
      <Head>
        <title>Login | Lenjelen</title>
      </Head>
      <Navbar transparentFirst />
      <div className={`max-w-full w-full relative bg-white`}>
        <div className="absolute top-0 w-full md:top-[-4.75rem]">
          <Image
            src="/icons/sky.png"
            width={1000}
            height={50}
            alt="gambarLanjalan"
            className="drop-shadow-md w-full"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:flex-row justify-center items-center w-full min-h-[calc(100vh-16rem)] h-full font-semibold text-[2rem] my-[8rem]">
        <div className="w-1/2 z-50 relative  justify-center flex">
          <Image
            src="/icons/lanjalan.png"
            width={700}
            height={50}
            alt="iconLanjalan"
            priority
          />
        </div>
        <div className=" rounded-md border-solid shadow-lg border-2 border-gray-200 p-9 z-50 bg-white w-full lg:w-1/3 flex flex-col justify-center items-center">
          <p className="text-[1.2rem] md:text-[2rem] text-center">
            Selamat Datang Kembali
          </p>
          <form
            className="text-sm max-w-[400px] h-full mt-[1rem] md:mt-[2.25rem] flex flex-col items-center gap-2 md:gap-3 w-full"
            onSubmit={handleSubmit}
          >
            <LSTextInput
              name="email"
              label="Email"
              value={credentials.email}
              onChange={doChange}
              placeholder="Masukkan Email"
              type="email"
              message={messages.email}
            />
            <LSTextInput.obscure
              name="password"
              label="Password"
              value={credentials.password}
              onChange={doChange}
              placeholder="Masukkan Password"
              type="password"
              message={messages.password}
            />
            <div className="flex flex-row justify-between w-full">
              <Checkbox
                name="rememberme"
                value={credentials.rememberme}
                onChange={doChange}
                label="Ingat aku"
              />
              <Link href="/forgetpassword">
                <p className="font-medium text-[12px] hover:text-blue-500">
                  Lupa password?
                </p>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#FDD05C] hover:bg-[#F6BE30] relative text-xs md:text-sm  shadow-md rounded-md cursor-pointer"
            >
              Masuk
            </button>
            <p className="text-xs md:text-sm">atau</p>
            <button
              className="p-3 w-full rounded-md border-2 border-[#5B5B5B] hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
              onClick={handleSignIn}
            >
              <div className="flex gap-4 justify-center max-w-sm items-center">
                <img src="/icons/google.svg" className="w-5 " alt="google" />
                <span className="block w-max font-semibold tracking-wide text-xs md:text-sm ">
                  Masuk dengan Google
                </span>
              </div>
            </button>

            <p className="">
              Belum Punya Account ?{" "}
              <span className="text-red-600 hover:text-red-800 cursor-pointer">
                <Link href="/register">Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
      <div className="max-w-full relative bottom-0 w-full ">
        <div className="w-full absolute bottom-8 md:bottom-4">
          <img src="/icons/surface.png" alt="logo" className="w-full" />
        </div>
        <div className="bottom-8 md:bottom-4 absolute max-w-4xl left-[-2.25rem] md:left-20 z-40">
          <img src="/icons/characters.png" alt="logo" className="w-full" />
        </div>
        <div className="relative">
          <p className="w-full absolute bg-[#FFF4E8] p-2 bottom-0 text-[#615A56] font-medium text-[0.60rem] md:text-[0.75] text-center">
            Copyright © 2022 Lanjalan Madura
          </p>
        </div>
      </div>
    </div>
  );
}
