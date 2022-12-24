import Navbar from "@components/molecules/Navbar";
import Text from "@components/molecules/Text";
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage({}) {
  return (
    <div className="w-screen h-screen font-inter overflow-hidden text-[#252525] bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center relative w-full ">
        <div className="relative">
          <Image
            src="/icons/error.png"
            width={500}
            height={400}
            alt="ImageError"
            className=""
          />
        </div>
        <Link href="/" className="absolute bottom-[30px] md:bottom-[40px]">
          <Text className="bg-custom-secondary_yellow hover:bg-yellow-200  py-2 px-3 rounded-full text-custom-dark_grey border-2 cursor-pointer text-center border-custom-dark_grey shadow-md">
            Back To Home
          </Text>
        </Link>
      </div>
    </div>
  );
}
