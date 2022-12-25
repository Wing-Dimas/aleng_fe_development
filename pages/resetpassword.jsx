import Footer from "@components/molecules/Footer";
import LSTextInput from "@components/molecules/LSTextInput";
import Navbar from "@components/molecules/Navbar";
import Text from "@components/molecules/Text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import validator from "validator";

export default function ResetPassword() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const [emailError, setEmailError] = useState({ message: "", status: false });
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
    } else if (name == "password") {
      if (value.length > 8) {
        setPasswordError({ message: "Password sudah sesuai", status: true });
        setCredentials({ ...credentials, [name]: value });
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
    <div className="w-screen h-screen font-inter overflow-hidden text-[#252525] bg-white">
      <Navbar />
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className="flex flex-col items-center justify-start pt-14 relative w-full h-full">
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
          <div className="w-full flex flex-col gap-1">
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
              name="password"
              label="Password"
              value={credentials.password}
              onChange={doChange}
              placeholder="Masukkan Password"
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
            <Text.small className="!text-xs text-dark-grey mt-1">
              Reset Password menggunakan alamat E-Mail yang terdaftar di
              Lanjalan
            </Text.small>
          </div>
          <Text className="bg-red-500 hover:bg-red-400 cursor-pointer text-white font-semibold text-center w-full p-2 rounded-md">
            Kirim
          </Text>
        </div>
      </div>
    </div>
  );
}
