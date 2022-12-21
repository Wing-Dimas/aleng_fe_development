import LSTextInput from "@components/molecules/LSTextInput";
import Link from "next/link";
import Navbar from "@components/molecules/Navbar";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
export default function RegisterPage() {
  const [credentials, setCredentials] = useState({
    fname: "",
    email: "",
    notelepon: "",
    password: "",
    repassword: "",
    rememberme: false,
  });

  const doChange = ({ name, value }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="w-screen h-screen font-inter overflow-x-hidden text-[#252525] bg">
      <Head>
        <title>Sign Up | Lenjelen</title>
      </Head>
      <Navbar transparentFirst />
      <div className="max-w-full w-full absolute top-0 left-0 blur-3xl">
        <div className="relative w-full h-96">
          <Image src="/icons/sky.png" alt="logo" fill className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:flex-row justify-center items-center w-full h-full font-semibold text-[2rem]">
        <div className="w-1/2 z-50 mt-36 md:mt-0">
          <img src="/icons/lanjalan.png" alt="logo" />
        </div>
        <div className=" rounded-md border-solid shadow-lg border-2 border-gray-200  p-9  z-50 bg-white w-full lg:w-1/3 flex flex-col justify-center items-center">
          <p className="text-[1.2rem] md:text-[2rem] text-center">
            Selamat Bergabung
          </p>
          <form className="text-sm max-w-[400px] h-full mt-[1rem] md:mt-[2.25rem] flex flex-col items-center gap-2 md:gap-3 w-full">
            <LSTextInput
              name="fname"
              label="Nama Lengkap"
              value={credentials.fname}
              onChange={doChange}
              placeholder="Masukkan Nama"
              type="text"
            />
            <LSTextInput
              name="email"
              label="Email"
              value={credentials.email}
              onChange={doChange}
              placeholder="Masukkan Email"
              type="email"
            />
            <LSTextInput
              name="notelepon"
              label="Nomer Telepon"
              value={credentials.notelepon}
              onChange={doChange}
              placeholder="Masukkan Nomer Telepon"
              type="text"
            />
            <LSTextInput
              name="password"
              label="Password"
              value={credentials.password}
              onChange={doChange}
              placeholder="Masukkan password"
              type="password"
            />
            <LSTextInput
              name="repassword"
              label="Konfirmasi Password"
              value={credentials.repassword}
              onChange={doChange}
              placeholder="Masukkan password"
              type="confirmPassword"
            />
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-1">
                <input
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                  value={credentials.rememberme}
                  onChange={doChange}
                  className="checked:bg-blue-500 cursor-pointer"
                />
                <label htmlFor="rememberme" className="font-medium text-[12px]">
                  Ingat aku
                </label>
              </div>
              <Link href="">
                <p className="font-medium text-[12px] hover:text-blue-500">
                  Lupa password?
                </p>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#FDD05C] hover:bg-[#F6BE30] relative text-xs md:text-sm shadow-md rounded-md cursor-pointer"
            >
              Register
            </button>
            <p className="text-xs md:text-sm">atau</p>
            <button className="p-3 w-full rounded-md border-2 border-[#5B5B5B] hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 justify-center max-w-sm items-center">
                <img src="/icons/google.svg" className="w-5 " alt="google" />
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
          </form>
        </div>
      </div>
      <div className="max-w-full relative bottom-0 w-full">
        <div className="w-full relative md:absolute bottom-8 md:bottom-4">
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
