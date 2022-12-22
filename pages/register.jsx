import LSTextInput from "@components/molecules/LSTextInput";
import Link from "next/link";
import Navbar from "@components/molecules/Navbar";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import validator from "validator";

export default function RegisterPage({}) {
  const [credentials, setCredentials] = useState({
    fname: "",
    email: "",
    notelepon: "",
    password: "",
    repassword: "",
  });
  const [emailError, setEmailError] = useState({ message: "", status: false });
  const [nameError, setNameError] = useState({
    message: "",
    status: false,
  });
  const [telephoneError, setTelephoneError] = useState({
    message: "",
    status: false,
  });
  const [passwordError, setPasswordError] = useState({
    message: "",
    status: false,
  });
  const [RePasswordError, setRePasswordError] = useState({
    message: "",
    status: false,
  });

  const doChange = ({ name, value }) => {
    if (name === "email") {
      if (validator.isEmail(value)) {
        setEmailError({ message: "Email sudah benar", status: true });
      } else {
        if (value === "") {
          setEmailError({ message: "Email tidak boleh kosong", status: false });
        } else {
          setEmailError({ message: "Email harus lengkap", status: false });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    } else if (name === "fname") {
      if (value.length > 0) {
        if (/[^a-zA-Z]/.test(value)) {
          setNameError({
            message: "Nama harus berupa huruf",
            status: false,
          });
        } else {
          setNameError({ message: "Nama sudah benar", status: true });
        }
      } else {
        if (/[^a-zA-Z]/.test(value)) {
          setNameError({
            message: "Nama harus berupa huruf",
            status: false,
          });
        } else if (value === "") {
          setNameError({
            message: "Nama tidak boleh kosong",
            status: false,
          });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    } else if (name === "notelepon") {
      if (value.length > 0) {
        if (/[^0-9]/.test(value)) {
          setTelephoneError({
            message: "Telephone harus berupa angka",
            status: false,
          });
        } else {
          setTelephoneError({ message: "Telephone sudah benar", status: true });
        }
      } else {
        if (/[^0-9]/.test(value)) {
          setTelephoneError({
            message: "Telephone harus berupa angka",
            status: false,
          });
        } else if (value === "") {
          setTelephoneError({
            message: "Telephone tidak boleh kosong",
            status: false,
          });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    } else if (name === "password") {
      if (value.length > 8) {
        setPasswordError({ message: "Password sudah sesuai", status: true });
      } else {
        if (value.length !== 0) {
          setPasswordError({
            message: "Password harus lebih dari 8 karakter",
            status: false,
          });
        } else {
          setPasswordError({
            message: "Password tidak boleh kosong",
            status: false,
          });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    } else if (name === "repassword") {
      if (value.length > 8) {
        setRePasswordError({
          message: "Password sudah sesuai",
          status: true,
        });
      } else {
        if (value.length !== 0) {
          setRePasswordError({
            message: "Password harus lebih dari 8 karakter",
            status: false,
          });
        } else {
          setRePasswordError({
            message: "Password tidak boleh kosong",
            status: false,
          });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    }
  };

  return (
    <div className="min-h-screen min-w-screen max-w-screen font-inter overflow-x-hidden text-[#252525]">
      <Head>
        <title>Sign Up | Lenjelen</title>
      </Head>
      <Navbar transparentFirst />
      <div className={`max-w-full w-full relative`}>
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
      <div className="flex flex-col gap-2 p-4 lg:flex-row justify-center items-center w-full h-full font-semibold text-[2rem] my-24 md:my-48">
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
              errorMassage={nameError}
            />
            <LSTextInput
              name="email"
              label="Email"
              value={credentials.email}
              onChange={doChange}
              placeholder="Masukkan Email"
              type="email"
              errorMassage={emailError}
            />
            <LSTextInput
              name="notelepon"
              label="Nomer Telepon"
              value={credentials.notelepon}
              onChange={doChange}
              placeholder="Masukkan Nomer Telepon"
              type="text"
              errorMassage={telephoneError}
            />
            <LSTextInput
              name="password"
              label="Password"
              value={credentials.password}
              onChange={doChange}
              placeholder="Masukkan password"
              type="password"
              errorMassage={passwordError}
            />
            <LSTextInput
              name="repassword"
              label="Konfirmasi Password"
              value={credentials.repassword}
              onChange={doChange}
              placeholder="Masukkan password"
              type="confirmPassword"
              errorMassage={RePasswordError}
            />

            <div className="flex flex-col w-full items-center justify-center gap-1 mt-4">
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
            </div>
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
