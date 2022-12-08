import Image from "next/image";
import Link from "next/link";

export default function Navbar({ is_transparent = false, fixed = false }) {
  return (
    <div className={`${fixed ? "fixed top-0 w-screen left-0" : ""} z-[99]`}>
      <div
        className={`${
          is_transparent
            ? "bg-black bg-opacity-50 backdrop-blur-sm"
            : "bg-white"
        } flex items-center justify-center gap-4 whitespace-nowrap overflow-x-auto text-[10px] sm:text-body1 py-2 px-4 border-b-8 border-b-[#177B98]`}
      >
        <div className="relative h-4 w-4 sm:w-8 sm:h-8">
          <Image src="/icons/utm_logo.png" alt="logo_utm" fill={true} />
        </div>
        <p className="text-custom-white font-medium">
          Platform ini dibuat oleh Universitas Trunojoyo Madura
        </p>
        <div className="relative h-4 w-4 sm:w-8 sm:h-8">
          <Image src="/icons/utm_logo.png" alt="logo_utm" fill={true} />
        </div>
      </div>
      <div
        className={`${
          is_transparent ? "bg-opacity-50" : ""
        } bg-white sticky top-0 bg-white/30 z-[99] shadow-md backdrop-blur-sm`}
      >
        <div className="max-w-7xl m-auto px-8 py-4 flex items-center justify-between gap-8">
          <Image
            className="drop-shadow-md"
            src="/logo.png"
            alt="me"
            width="48"
            height="48"
          />
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-end gap-16 font-semibold border-r border-black pr-16">
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
            <div className="flex items-center justify-between gap-12 font-semibold pl-16">
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
          </div>
        </div>
      </div>
    </div>
  );
}
