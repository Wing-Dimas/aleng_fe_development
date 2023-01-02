import { IconCopy, IconX } from "@tabler/icons";
import Text from "./Text";
import Image from "next/image";
import Rating from "./Rating";

export default function ModalDetailOrder({ showModal, setShowModal }) {
  return (
    <div>
      {showModal ? (
        <div className="justify-center items-center flex fixed inset-0 top-20 z-50">
          <div className="w-10/12 md:w-1/2 h-[400px] bg-white rounded-lg shadow-md border-2 relative">
            <div className="text-custom-black cursor-pointer rounded-md h-6 w-6 p-1 absolute right-3 top-[-10px] bg-custom-primary_red flex justify-center items-center">
              <IconX
                className="h-6 w-6 text-white "
                onClick={() => setShowModal(!showModal)}
              />
            </div>
            <div className="flex flex-col p-5 gap-3 overflow-y-auto scrollbar-hide h-full">
              <Text className="!text-lg text-center">Detail Transaksi</Text>
              <hr className="" />
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-between">
                  <Text.small className="!font-normal !text-xs">
                    Nomor pemesanan:
                  </Text.small>
                  <div className="flex flex-row items-center">
                    <Text.small className="!font-semibold !text-xs">
                      34535345
                    </Text.small>
                    <IconCopy className="h-4 w-4 cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Text.small className="!font-normal !text-xs">
                    Tanggal pemesanan:
                  </Text.small>
                  <Text.small className="!font-normal !text-xs text-end ">
                    01 Desember 2022, 09:00 WIB
                  </Text.small>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex flex-col gap-2">
                    <Text className="!sm:text-xl">Detail Pesanan</Text>
                    <div className="flex flex-row gap-2 items-center justify-start ">
                      <div className="relative max-w-[30%] md:max-w-[20%] w-full md:max-w-1/6">
                        <Image
                          src="/penginapan/gambar1.png"
                          width={1000}
                          height={1000}
                          alt="ImagePesanan"
                          className="rounded-md shadow-md"
                        />
                      </div>
                      <div className="flex flex-col gap-1  max-w-[70%] md:max-w-[80%] w-full">
                        <div className="flex flex-col">
                          <Text className="text-custom-dark_grey">
                            Kaberaz Luxury
                          </Text>
                          <Text.small className="text-custom-dark_grey">
                            {1} Deluxe Room
                          </Text.small>
                          <div className="flex flex-row items-center gap-1 text-custom-dark_grey">
                            <Text.small>1 Malam</Text.small>
                            <Text.small>1 Dewasa</Text.small>
                            <Text.small>1 Anak</Text.small>
                          </div>
                        </div>
                        <Rating count={666} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <Text.small className="!font-normal !text-xs">
                    Check In
                  </Text.small>
                  <Text.small className="!font-normal !text-xs">
                    Rab, 07 Desember 2022
                  </Text.small>
                </div>
                <div className="flex flex-row justify-between">
                  <Text.small className="!font-normal !text-xs">
                    Check Out
                  </Text.small>
                  <Text.small className="!font-normal !text-xs">
                    Rab, 07 Desember 2022
                  </Text.small>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Text className="!sm:text-xl">Permintaan Khusus</Text>
                <div className="flex flex-col bg-[#F6F0E1] rounded-md shadow-md p-2 gap-2">
                  {[...Array(4)].map((v, i) => {
                    return (
                      <div key={i} className="flex flex-row justify-between">
                        <Text.small className="!font-normal !text-xs">
                          Sarapan AC Hari
                        </Text.small>
                        <Text.small className="!font-normal !text-xs">
                          Rp.10.000
                        </Text.small>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <Text className="!sm:text-xl">Total</Text>
                <Text className="!sm:text-xl text-custom-primary_red">
                  Rp.165.000
                </Text>
              </div>
              <div className="flex flex-row items-center justify-end gap-2">
                <p className="bg-custom-secondary_yellow shadow-md rounded-md p-2 cursor-pointer">
                  Beli Lagi
                </p>
                <p className="border-2 border-custom-secondary_yellow shadow-md rounded-md p-2 cursor-pointer">
                  Berikan Ulasan
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}
