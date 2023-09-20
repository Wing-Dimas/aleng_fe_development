import Image from "next/image"
import Link from "next/link"
import Navbar from "@components/molecules/Navbar"
import Text from "@components/atomics/Text"
import Head from "next/head"

export default function ErrorPage({}) {
  return (
    <div className="w-screen h-screen font-inter overflow-hidden text-[#252525] bg-white">
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center relative w-full ">
        <div className="relative">
          <Image
            src="/static_images/404.png"
            width={500}
            height={400}
            alt="lenjhelenan"
            className=""
          />
        </div>
        <Link href="/" className="absolute bottom-[30px] md:bottom-[40px]">
          <Text className="bg-custom-secondary-yellow hover:bg-yellow-200  py-2 px-3 rounded-full text-custom-dark-grey border-2 cursor-pointer text-center border-custom-dark-grey shadow-md">
            Back To Home
          </Text>
        </Link>
      </div>
    </div>
  )
}
