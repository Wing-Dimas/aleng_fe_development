import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import LSTextInput from "@components/molecules/LSTextInput";
import Navbar from "@components/molecules/Navbar";
import Text from "@components/molecules/Text";
import validateResetPassword from "@validators/resetPasswordValidator";

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
    password_confirmation: "",
    token: "",
  });

  const [messages, setMessages] = useState({
    password: { isError: false, message: "" },
    password_confirmation: { isError: false, message: "" },
  });

  const doChange = ({ name, value }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleClick = async () => {
    try {
      const validated = await validateResetPassword(credentials);
      if (validated.isError) {
        setMessages(validated.form);
        return;
      }
      const _ = await axios.post(
        process.env.BASE_API + "/resetPassword",
        credentials
      );
      router.push("/login");
      Cookies.remove("email");
      Cookies.remove("token");
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
              message={messages.password}
            />
            <LSTextInput
              name="password_confirmation"
              label="Konfirmasi Password"
              value={credentials.password_confirmation}
              onChange={doChange}
              placeholder="Masukkan password"
              type="password"
              message={messages.password_confirmation}
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
