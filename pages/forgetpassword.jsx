import Navbar from "@components/molecules/Navbar";
import Text from "@components/molecules/Text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgetPassword() {
  return (
    <div className="w-screen h-screen font-inter overflow-hidden text-[#252525] bg-white">
      <Navbar />
      <Head>
        <title>Forget Password</title>
      </Head>
      <div className="flex flex-col items-center justify-start pt-20 relative w-full h-full">
        <div className=" w-4/5 md:w-1/4 flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-row">
            <div className="relative">
              <Image
                src="/logo.png"
                priority
                width={48}
                height={48}
                alt="logo"
              />
            </div>
            <Text.label className="!text-2xl font-jua text-red-500">
              Lanjalan Madura
            </Text.label>
          </div>
          <Text className="!text-lg text-custom-black">Reset Password</Text>
          <div className="w-full">
            <div className="w-full">
              <input
                type="text"
                className="w-full p-2 font-medium h-full placeholder-gray-500 border rounded bg-gray-100 focus:outline-none px-2 text-xs focus:ring-orange-500 focus:border-orange-500"
                placeholder="Masukkan Email"
              />
            </div>
            <Text.small className="!text-xs text-dark-grey mt-1">
              Reset Password menggunakan alamat E-Mail yang terdaftar di
              Lanjalan
            </Text.small>
          </div>
          <Text className="bg-red-500 hover:bg-red-400 cursor-pointer text-white font-semibold text-center w-full p-2 rounded-md">
            Kirim
          </Text>
          <Text.small className="!font-normal !text-sm text-dark-grey">
            Kembali ke halaman{" "}
            <span className="text-red-500 hover:text-red-400 !font-medium">
              <Link href="/login">login</Link>
            </span>{" "}
            atau{" "}
            <span className="text-red-500 hover:text-red-400 !font-medium">
              {" "}
              <Link href="/register">daftar</Link>
            </span>
          </Text.small>
        </div>
      </div>
    </div>
  );
}
