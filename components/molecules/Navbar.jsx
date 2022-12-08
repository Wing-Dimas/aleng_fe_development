import Image from 'next/image';
import Link from 'next/link';
import { Menu2 } from 'tabler-icons-react';

export default function Navbar({ openNav, setOpenNav }) {
  return (
    <div className="sticky top-0 z-[99] ">
      <div className="flex flex-row justify-center items-center py-3 px-4 gap-3 bg-[#003A4B] border-b-4 border-[#177B98]">
        <img src="/logo-UTM.png" alt="logoUTM" className="" />
        <p className="text-white text-center text-xs">
          Platform ini dibuat oleh Universitas Trunojoyo Madura
        </p>
        <img src="/logo-UTM.png" alt="logoUTM" className="" />
      </div>
      <div className="border-b  bg-white/30  shadow-md border border-gray-200 backdrop-blur-sm">
        <div className="max-w-7xl m-auto px-8 py-2 md:py-4 flex items-center justify-between gap-8">
          <Image
            className="drop-shadow-md max-w-[40px] w-full"
            src="/logo.png"
            alt="me"
            width="48"
            height="48"
          />
          <div className="md:flex items-center justify-end gap-16 font-semibold hidden">
            <Link className="drop-shadow-md" href="/unduh-aplikasi">
              Unduh Aplikasi
            </Link>
            <Link className="drop-shadow-md" href="/koleksi-kamu">
              Koleksi Kamu
            </Link>
            <Link className="drop-shadow-md" href="/cek-pesanan">
              Cek Pesanan
            </Link>
          </div>
          <div className="md:flex hidden items-center justify-between gap-12 font-semibold pl-16">
            <Link className="drop-shadow-md" href="/login">
              Masuk
            </Link>
            <Link
              href="/signup"
              className="rounded-full py-1.5 px-6 bg-gradient-to-b from-yellow-400 to-red-600 text-white border-2 border-white shadow-md hover:bg-slate-500 hover:bg-none"
            >
              Daftar
            </Link>
          </div>
          <div className="flex md:hidden rotate-0 transition duration-500 ease-in-out hover:rotate-180 cursor-pointer">
            <Menu2
              size={24}
              strokeWidth={2}
              color={'#252525'}
              className={`${openNav ? 'hidden' : null}`}
              onClick={() => setOpenNav(!openNav)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
