/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import validator from "validator";
import Checkbox from "@components/molecules/Checkbox";
import LSTextInput from "@components/molecules/LSTextInput";
import Navbar from "@components/molecules/Navbar";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberme: false,
  });
  const [errors, setErrors] = useState({
    email: { isError: false, message: "" },
    password: { isError: false, message: "" },
  });

  const doChange = ({ name, value }) => {
    if (name === "email") {
      if (validator.isEmail(value)) {
        setErrors({
          ...errors,
          email: { isError: false, message: "Email sudah benar" },
        });
      } else {
        if (value === "") {
          setErrors({
            ...errors,
            email: { isError: true, message: "Email tidak boleh kosong" },
          });
        } else {
          setErrors({
            ...errors,
            email: { isError: true, message: "Email harus lengkap" },
          });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    } else if (name == "password") {
      if (value.length > 8) {
        setErrors({
          ...errors,
          password: { isError: false, message: "Password sudah sesuai" },
        });
        setCredentials({ ...credentials, [name]: value });
      } else {
        if (value.length !== 0) {
          setErrors({
            ...errors,
            password: {
              isError: true,
              message: "Password harus lebih dari 8 karakter",
            },
          });
        } else {
          setErrors({
            ...errors,
            password: { isError: true, message: "Password tidak boleh kosong" },
          });
        }
      }
      setCredentials({ ...credentials, [name]: value });
    }

    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.rememberme == true) {
      try {
        await axios
          .post(process.env.BASE_API + "/auth/login", {
            email: credentials.email,
            password: credentials.password,
          })
          .then((res) => {
            if (res?.data?.access_token != undefined) {
              Cookies.set("token", res?.data?.access_token);
              router.push("/");
            } else {
              setCredentials({ email: "", password: "", rememberme: false });
              setErrors({
                email: { isError: false, message: "" },
                password: { isError: false, message: "" },
              });
            }
          });
      } catch (err) {
        setCredentials({ email: "", password: "", rememberme: false });
        setErrors({
          email: { isError: false, message: "" },
          password: { isError: false, message: "" },
        });
      }
    } else {
      setCredentials({ email: "", password: "", rememberme: false });
      setErrors({
        email: { isError: false, message: "" },
        password: { isError: false, message: "" },
      });
    }
  };

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen min-w-screen max-w-screen font-inter overflow-x-hidden text-[#252525]">
      <Head>
        <title>Login | Lenjelen</title>
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
              error={errors.email}
            />
            <LSTextInput
              name="password"
              label="Password"
              value={credentials.password}
              onChange={doChange}
              placeholder="Masukkan Password"
              type="password"
              error={errors.password}
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
            {/* <Link href="/api/auth/signup/callback" className="w-full"> */}
            <button
              className="p-3 w-full rounded-md border-2 border-[#5B5B5B] hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
              onClick={() => {
                window.location = "http://lenjelenanmadura.id/api/auth/signup";
              }}
            >
              <div className="flex gap-4 justify-center max-w-sm items-center">
                <img src="/icons/google.svg" className="w-5 " alt="google" />
                <span className="block w-max font-semibold tracking-wide text-xs md:text-sm ">
                  Masuk dengan Google
                </span>
              </div>
            </button>
            {/* </Link> */}
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
