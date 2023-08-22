import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Checkbox from "@components/atomics/Checkbox";
import LSTextInput, {
  ObscuredLSTextInput,
} from "@components/atomics/LSTextInput";
import Navbar from "@components/molecules/Navbar";
import validateLogin from "@validators/loginValidator";
import Text from "@components/atomics/Text";

export default function LoginPage() {
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

  const handleSignIn = () => {};

  return (
    <div className="min-h-screen min-w-screen max-w-screen font-inter overflow-x-hidden text-[#252525] ">
      <Head>
        <title>Lenjhelenan | Login</title>
      </Head>
      <Navbar isFixed auth />
      <div className="flex flex-col gap-2 md:gap-16 p-4 lg:flex-row justify-center  items-center md:items-start w-full min-h-[calc(100vh-16rem)] h-full font-semibold text-[2rem] my-[8rem] mb-52">
        <div className="lg:w-1/2 z-50 relative justify-center flex w-full ">
          <Image
            src="/static_images/lenjhelenan.png"
            width={600}
            height={50}
            alt="lenjhelenan"
            priority
            className="w-1/2 lg:w-full"
          />
        </div>
        <div className=" rounded-md border-solid shadow-lg border-2 border-gray-200 p-9 z-50 bg-white w-full lg:w-1/3 flex flex-col justify-center items-center">
          <Text className="md:text-[2rem] text-center">
            Selamat Datang Kembali
          </Text>
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
            <ObscuredLSTextInput
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
            <br />
            <Text className="">
              Belum Punya Akun?{" "}
              <span className="text-red-600 hover:text-red-800 cursor-pointer">
                <Link href="/register">Register</Link>
              </span>
            </Text>
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
              alt="lenjhelenan"
              className="w-full opacity-80"
            />
          </div>
        </div>
        <div className="bottom-8 md:bottom-7 absolute w-full z-40 md:left-8">
          <div className="relative md:w-1/2">
            <Image
              priority
              width={1000}
              height={1000}
              src="/static_images/characters_madura.png"
              alt="lenjhelenan"
            />
          </div>
        </div>
        <div className="relative z-50">
          <p className="w-full absolute bg-[#FFF4E8] p-2 bottom-0 text-[#615A56] font-medium text-[0.60rem] md:text-[0.75] text-center">
            Copyright © 2023 Lenjhelenan Madura
          </p>
        </div>
      </div>
    </div>
  );
}
