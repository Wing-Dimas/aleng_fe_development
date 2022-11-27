import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return <div className="border-b sticky top-0 bg-white z-[99]">
  <div className="max-w-7xl m-auto px-8 py-4 flex items-center justify-between gap-8">
    <Image src="/logo.png" alt="me" width="48" height="48" />
    <div className="flex items-center justify-end">
      <div className="flex items-center justify-end gap-16 font-semibold border-r border-black pr-16">
        <Link href="/unduh-aplikasi">Unduh Aplikasi</Link>
        <Link href="/koleksi-kamu">Koleksi Kamu</Link>
        <Link href="/cek-pesanan">Cek Pesanan</Link>
      </div>
      <div className="flex items-center justify-between gap-12 font-semibold pl-16">
        <Link href='/login'>Masuk</Link>
        <Link href='/signup' className="rounded-full py-1.5 px-6 bg-gradient-to-b from-yellow-400 to-red-600 text-white">
          Daftar
        </Link>
      </div>
    </div>
  </div>
</div>
}