import InputResLog from '@components/atomics/inputResLog';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@components/molecules/Navbar';
import ModalNav from '@components/molecules/modalNav';
export default function RegisterPage() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="w-screen h-screen font-inter overflow-x-hidden text-[#252525]">
      <div className="absolute w-full">
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      </div>
      <div className="max-w-full w-full relative">
        <div className="top-0 md:top-[-4.75rem] absolute w-full ">
          <img src="/image/iconTop.png" alt="logo" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:flex-row justify-center items-center w-full h-full font-semibold   text-[2rem] my-20 md:my-48">
        <div className="w-1/2 z-50 mt-36 md:mt-0">
          <img src="/image/iconlanjalan.png" alt="logo" className="" />
        </div>
        <div className=" rounded-md border-solid shadow-lg border-2 border-gray-200  p-9  z-50 bg-white w-full lg:w-1/3 flex flex-col justify-center items-center">
          <p className="text-[1.2rem] md:text-[2rem] text-center">
            Selamat Bergabung
          </p>
          <form className="text-sm max-w-[400px] h-full mt-[1rem] md:mt-[2.25rem] flex flex-col items-center gap-2 md:gap-3 w-full">
            <InputResLog
              name="name"
              text="Nama Lengkap"
              placeholder="Masukkan Nama"
              type="text"
            />
            <InputResLog
              name="email"
              text="Email"
              placeholder="Masukkan Email"
              type="email"
            />
            <InputResLog
              name="noTelp"
              text="Nomer Telepon"
              placeholder="Masukkan Nomer Telepon"
              type="text"
            />
            <InputResLog
              name="password"
              text="Password"
              placeholder="Masukkan password"
              type="password"
            />
            <InputResLog
              name="confirmPassword"
              text="Konfirmasi Password"
              placeholder="Masukkan password"
              type="confirmPassword"
            />
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-1">
                <input
                  type="checkbox"
                  className="checked:bg-blue-500 cursor-pointer"
                />
                <p className="font-medium text-[12px]">Ingat aku</p>
              </div>
              <Link href="">
                <p className="font-medium text-[12px] hover:text-blue-500">
                  Lupa password?
                </p>
              </Link>
            </div>

            <input
              type="submit"
              className="w-full p-3 bg-[#FDD05C] hover:bg-[#F6BE30] relative text-xs md:text-sm  shadow-md rounded-md cursor-pointer"
              value="Masuk"
            />
            <p className="text-xs md:text-sm">atau</p>
            <button className="p-3 w-full rounded-md border-2 border-[#5B5B5B] hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 justify-center max-w-sm items-center">
                <img src="/image/google.svg" className="w-5 " alt="google" />
                <span className="block w-max font-semibold tracking-wide text-xs md:text-sm ">
                  Masuk dengan Google
                </span>
              </div>
            </button>
            <p className="">
              Sudah Punya Account ?{' '}
              <span className="text-red-600 hover:text-red-800 cursor-pointer">
                <Link href="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
      <div className="max-w-full relative bottom-0 w-full">
        <div className="w-full relative md:absolute bottom-8 md:bottom-4">
          <img src="/image/iconBot.png" alt="logo" className="w-full" />
        </div>
        <div className="bottom-8 md:bottom-4 absolute max-w-4xl left-[-2.25rem] md:left-20 z-40">
          <img src="/image/iconChar.png" alt="logo" className="w-full" />
        </div>
        <div className="relative">
          <p className="w-full absolute bg-[#FFF4E8] p-2 bottom-0 text-[#615A56] font-medium text-[0.60rem] md:text-[0.75] text-center">
            Copyright © 2022 Lanjalan Madura
          </p>
        </div>
      </div>
      <ModalNav openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
}
