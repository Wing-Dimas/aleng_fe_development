import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="shadow-md bg-[#F9F8F6]">
      <div className="max-w-7xl m-auto p-8">
        <div className="flex justify-between gap-8">
          <div className="flex-shrink">
            <Link href="/" className="flex items-center gap-4 mb-8">
              <div className="relative h-12 w-12">
                <Image
                  src="/static_icons/logo.png"
                  fill={true}
                  sizes="auto"
                  alt="lenjhelenan"
                />
              </div>
              <p className="font-jua text-red-500 text-2xl">Lanjalan Madura</p>
            </Link>
            <p className="text-neutral-500 mb-8">
              Lanjalan Madura adalah sebuah platform untuk menemani liburanmu,
              jelajahi wisata madura yang tidak pernah kamu temui sebelumnnya
              dan menginap di beberapa penginapan yang ada
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                className="relative h-5 w-5 rounded-full bg-red-100 flex items-center justify-center"
              >
                <Image
                  src="/static_icons/twitter.png"
                  fill={true}
                  sizes="auto"
                  alt="twitter"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="relative h-5 w-5 rounded-full bg-red-100 flex items-center justify-center"
              >
                <Image
                  src="/static_icons/instagram.png"
                  fill={true}
                  sizes="auto"
                  alt="instagram"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="relative h-5 w-5 rounded-full bg-red-100 flex items-center justify-center"
              >
                <Image
                  src="/static_icons/youtube.png"
                  fill={true}
                  sizes="auto"
                  alt="youtube"
                />
              </a>
            </div>
          </div>
          <div className="flex-grow flex-shrink-0 lg:flex justify-end gap-16 hidden">
            <div>
              <p className="block text-neutral-700 text-xl font-semibold mb-4">
                Tentang
              </p>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <Link href="/tentang/cara-pesan" className="block">
                  Cara Pesan
                </Link>
                <Link href="/tentang/hubungi-kami" className="block">
                  Hubungi Kami
                </Link>
                <Link href="/tentang/pusat-bantuan" className="block">
                  Pusat Bantuan
                </Link>
                <Link href="/tentang/tentang-kami" className="block">
                  Tentang Kami
                </Link>
              </div>
            </div>
            <div>
              <p className="block text-neutral-700 text-xl font-semibold mb-4">
                Produk
              </p>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <Link href="/produk/tiket-wisata" className="block">
                  Tiket Wisata
                </Link>
                <Link href="/produk/booking-hotel" className="block">
                  Booking Hotel
                </Link>
                <Link href="/produk/paket-wisata" className="block">
                  Paket Wisata
                </Link>
                <Link href="/produk/wisata-sejarah" className="block">
                  Wisata Sejarah
                </Link>
                <Link href="/produk/kuliner-menarik" className="block">
                  Kuliner Menarik
                </Link>
              </div>
            </div>
            <div>
              <p className="block text-neutral-700 text-xl font-semibold mb-4">
                Pembayaran
              </p>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <Link href="/pembayaran/about" className="block">
                  About
                </Link>
                <Link href="/pembayaran/terms" className="block">
                  Terms
                </Link>
                <Link href="/pembayaran/privacy-policy" className="block">
                  Privacy Policy
                </Link>
                <Link href="/pembayaran/careers" className="block">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="block text-neutral-700 text-xl font-semibold mb-4"
              >
                Download App
              </a>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <a href="#" target="_blank" className="block">
                  Documentation
                </a>
                <a href="#" target="_blank" className="block">
                  License
                </a>
                <a href="#" target="_blank" className="block">
                  Changelog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 text-center p-4 md:p-6">
        Copyright © 2023 Lenjhelenan Madura
      </div>
    </div>
  );
}
