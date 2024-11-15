import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import axios from "axios"
import Navbar from "@components/molecules/Navbar"
import Text from "@components/atomics/Text"

export default function ForgetPassword() {
  const [email, setEmail] = useState("")
  const handleChange = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_BASE_API + "/password/email", {
        email,
      })
      if (!!res.data.mailData.token) {
        setEmail("")
      }
      Router.push("/resetpassword")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-screen h-screen font-inter overflow-hidden text-[#252525] bg-white">
      <Navbar />
      <Head>
        <title>Forget Password</title>
      </Head>
      <div className="flex flex-col items-center justify-start pt-20 relative w-full h-full">
        <div className=" w-4/5 md:w-1/4 flex flex-col gap-4 items-center justify-center">
          <Text className="!text-lg text-custom-black">Reset Password</Text>
          <div className="w-full">
            <div className="w-full">
              <input
                type="email"
                className="w-full p-2 font-medium h-full placeholder-gray-500 border rounded bg-gray-100 focus:outline-none px-2 text-xs focus:ring-orange-500 focus:border-orange-500"
                placeholder="Masukkan Email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <Text.small className="!text-xs text-dark-grey mt-1">
              Reset Password menggunakan alamat E-Mail yang terdaftar di
              Lenjhelenan
            </Text.small>
          </div>
          <div onClick={handleClick} className="w-full cursor-pointer">
            <Text className="bg-red-500 hover:bg-red-400  text-white font-semibold text-center w-full p-2 rounded-md">
              Kirim
            </Text>
          </div>
          <Text.small className="!font-normal !text-sm text-dark-grey">
            Kembali ke halaman{" "}
            <span className="text-red-500 hover:text-red-400 !font-medium">
              <Link href="/login">Login</Link>
            </span>{" "}
            atau{" "}
            <span className="text-red-500 hover:text-red-400 !font-medium">
              {" "}
              <Link href="/register">Daftar</Link>
            </span>
          </Text.small>
        </div>
      </div>
    </div>
  )
}
