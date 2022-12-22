import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons";

export default function Navbar({ transparentFirst = false }) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [offset, setOffset] = useState(0);
  const doPreventClose = (e) => {
    e.stopPropagation();
  };

  const doToggleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      setAnimate(true);
    }
  }, [show]);

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        setShow(false);
      }, 150);
    }
  }, [animate]);

  useEffect(() => {
    if (transparentFirst) {
      const onScroll = () => setOffset(window.pageYOffset);
      console.log(onScroll);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [transparentFirst]);

  return (
    <div
      className={`${
        offset < 10 && transparentFirst ? "bg-transparent" : "bg-white"
      } ${
        transparentFirst ? "fixed" : "sticky"
      } top-0 z-[99] w-full backdrop-blur-sm transition-all`}
    >
      {/* SIDEBAR */}
      <div
        onClick={doToggleShow}
        className={`${show ? "block" : "hidden"} ${
          animate ? "bg-opacity-25" : "bg-opacity-0"
        } transition-all fixed z-50 top-0 left-0 w-screen h-screen bg-black`}
      >
        <div
          onClick={doPreventClose}
          tabIndex={0}
          className={`${
            animate ? "translate-y-0" : "translate-y-full"
          } transition-all absolute z-[101] bottom-0 left-0 w-screen bg-white rounded-t-3xl shadow`}
        >
          <div className="p-8">
            <div className="flex items-center justify-start">
              <IconX
                className="text-custom-black cursor-pointer h-6 w-6"
                onClick={doToggleShow}
              />
            </div>
            <br />
            <div>
              <Link className="block font-semibold py-2" href="/unduh-aplikasi">
                Unduh Aplikasi
              </Link>
              <Link className="block font-semibold py-2" href="/koleksi-kamu">
                Koleksi Kamu
              </Link>
              <Link className="block font-semibold py-2" href="/cek-pesanan">
                Cek Pesanan
              </Link>
              <Link
                className="block font-semibold py-2"
                href="/jadi-partner-kami"
              >
                Jadi Partner Kami
              </Link>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-8">
              <Link
                className="rounded-full text-center font-semibold py-2.5 px-6 bg-custom-secondary_yellow border-2 border-custom-secondary_yellow shadow-md hover:bg-slate-500 hover:bg-none"
                href="/login"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="rounded-full text-center font-semibold py-2.5 px-6 bg-gradient-to-b from-yellow-400 to-red-600 text-white border-2 border-white shadow-md hover:bg-slate-500 hover:bg-none"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* AFTER SIDEBAR */}
      <div className="flex flex-row justify-center items-center py-3 md:py-1 px-4 gap-3 bg-[#003A4B] border-b-4 border-[#177B98]">
        <div className="relative w-4 h-4 md:w-6 md:h-6">
          <Image src="/utm_logo.png" alt="utm_logo" fill={true} />
        </div>
        <p className="text-white text-center text-xs">
          Platform ini dibuat oleh Universitas Trunojoyo Madura
        </p>
        <div className="relative w-4 h-4 md:w-6 md:h-6">
          <Image src="/utm_logo.png" alt="utm_logo" fill={true} />
        </div>
      </div>
      <div
        className={`${
          offset < 10 && transparentFirst ? "border-b-transparent" : ""
        } border-b shadow-md transition-all`}
      >
        <div className="max-w-7xl m-auto px-8 py-2 md:py-4 flex items-center justify-between gap-8">
          <Link href="/">
            <Image
              className="drop-shadow-md max-w-[40px] w-full"
              src="/logo.png"
              alt="me"
              width="48"
              height="48"
            />
          </Link>
          <div className="hidden md:flex items-center justify-end gap-16 font-semibold text-custom-black">
            <Link
              className={`drop-shadow-md transition-all hover:text-custom-secondary_yellow ${
                offset < 10 && transparentFirst
                  ? "text-white "
                  : "text-custom-black"
              }`}
              href="/unduh-aplikasi"
            >
              Unduh Aplikasi
            </Link>
            <Link
              className={`drop-shadow-md transition-all hover:text-custom-secondary_yellow ${
                offset < 10 && transparentFirst
                  ? "text-white"
                  : "text-custom-black"
              }`}
              href="/koleksi-kamu"
            >
              Koleksi Kamu
            </Link>
            <Link
              className={`drop-shadow-md transition-all hover:text-custom-secondary_yellow ${
                offset < 10 && transparentFirst
                  ? "text-white"
                  : "text-custom-black"
              }`}
              href="/cek-pesanan"
            >
              Cek Pesanan
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between gap-16 font-semibold">
            <Link
              className={`drop-shadow-md transition-all hover:text-custom-secondary_yellow ${
                offset < 10 && transparentFirst
                  ? "text-white"
                  : "text-custom-black"
              }`}
              href="/login"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="rounded-full py-1.5 px-6 bg-gradient-to-b from-yellow-400 to-red-600 text-white border-2 border-white shadow-md hover:bg-slate-500 hover:bg-none"
            >
              Daftar
            </Link>
          </div>
          <div className="block md:hidden cursor-pointer">
            <IconMenu2
              className={`${
                offset < 10 && transparentFirst
                  ? "text-white"
                  : "text-custom-black"
              } transition-all h-6 w-6`}
              onClick={doToggleShow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
