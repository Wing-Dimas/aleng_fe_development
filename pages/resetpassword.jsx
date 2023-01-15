import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import LSTextInput from "@components/molecules/LSTextInput";
import Navbar from "@components/molecules/Navbar";
import Text from "@components/molecules/Text";

export default function ResetPassword() {
  const router = useRouter();
  useEffect(() => {
    const email = Cookies.get("email");
    const token = Cookies.get("token");
    setCredentials({ ...credentials, email: email, token: token });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    repassword: "",
    token: "",
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
    if (name == "password") {
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
      if (value.length !== 0) {
        if (credentials.password !== value) {
          setRePasswordError({
            message: "Password Tidak Sama",
            status: false,
          });
        } else {
          setRePasswordError({
            message: "Password Sudah Sama",
            status: true,
          });
        }
      } else {
        setRePasswordError({
          message: "Password tidak boleh kosong",
          status: false,
        });
      }

      setCredentials({ ...credentials, [name]: value });
    }
  };

  const handleClick = async () => {
    try {
      await axios
        .post(process.env.BASE_API + "/resetPassword", {
          token: credentials.token,
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.repassword,
        })
        .then((res) => {
          router.push("/login");
          Cookies.remove("email");
          Cookies.remove("token");
        });
    } catch (err) {
      console.log(err);
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
              readonly="readOnly"
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
              type="password"
              errorMassage={RePasswordError}
            />
            <Text.small className="!text-xs text-dark-grey mt-1">
              Reset Password menggunakan alamat E-Mail yang terdaftar di
              Lanjalan
            </Text.small>
          </div>
          <div className="w-full" onClick={handleClick}>
            <Text className="bg-red-500 hover:bg-red-400 cursor-pointer text-white font-semibold text-center w-full p-2 rounded-md">
              Kirim
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
