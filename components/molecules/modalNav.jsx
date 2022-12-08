import { useState } from 'react';
import { X } from 'tabler-icons-react';
import Link from 'next/link';
import 'animate.css'
export default function ModalNav({ openNav, setOpenNav }) {
  return (
    <div>
      {openNav ? (
        <div className={`absolute md:hidden animate__animated  animate__slow animate__slideInUp bottom-0 w-full gap-6 bg-white border-[0.5px] border-[#ABACAC]/50 px-5 pt-5 pb-10 z-[100] rounded-t-[2rem] h-auto flex flex-col`}>
          <X
            size={24}
            strokeWidth={3}
            color={'black'}
            className="cursor-pointer rotate-180 transition duration-500 ease-in-out  hover:rotate-0"
            onClick={() => setOpenNav(!openNav)}
          />
          <div className="flex flex-col items-center gap-4 font-semibold">
            <Link
              className="drop-shadow-md text-lg hover:text-primary-red"
              href="/unduh-aplikasi"
            >
              Unduh Aplikasi
            </Link>
            <Link
              className="drop-shadow-md text-lg hover:text-primary-red"
              href="/koleksi-kamu"
            >
              Koleksi Kamu
            </Link>
            <Link
              className="drop-shadow-md text-lg hover:text-primary-red"
              href="/cek-pesanan"
            >
              Cek Pesanan
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 font-semibold w-full">
            <Link
              className="rounded-full py-2 px-6 w-1/2 text-center text-secondary-black border-2 bg-[#FFEBB6] border-white shadow-md hover:bg-slate-500 hover:bg-none"
              href="/login"
            >
              Masuk
            </Link>
            <Link
              href="/signup"
              className="rounded-full py-2 px-6 text-center w-1/2 bg-gradient-to-b from-yellow-400 to-red-600 text-white border-2 border-white shadow-md hover:bg-slate-500 hover:bg-none"
            >
              Daftar
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
