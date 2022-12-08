import FasilitasIcon from '@components/molecules/detailPage/fasilitasIcon';
import IconFasilitas from '../iconFasilitas';
import Stars from '../stars';

export default function TravelOptions() {
  return (
    <div className="">
      <div className="hidden md:flex flex-row w-full h-full gap-[10px] max-h-52">
        <div className="flex flex-col shadow-md rounded-md w-1/4 border-[0.5px] border-[#ABACAC]/30">
          <div className="w-full h-[80%]">
            <img
              src="/penginapan/gambar1.png"
              alt=""
              className="rounded-t-md w-full h-full object-cover object-bottom"
            />
          </div>
          <p className="px-3 py-2 font-semibold text-base h-[20%]">
            Pantai Ropet
          </p>
        </div>
        <div className="flex flex-row bg-white  shadow-md rounded-md w-3/4 items-start border-[0.5px] border-[#ABACAC]/30">
          <div className="flex flex-col w-[70%] justify-between py-3 h-full">
            <div className="flex flex-col px-5">
              <p className="font-semibold text-xl">Pantai Ropet</p>
              <div className="flex flex-row items-center gap-2">
                <Stars />
              </div>
              <p className="font-normal text-[1rem] text-[#615A56]">
                Kecamatan Dungkek, Kabupaten Sumenep, Provinsi Jawa Timur
              </p>
            </div>
            <hr className="border-[0.031rem] w-full border-[#ABACAC]/30 my-1" />
            <div className="flex flex-col px-5 gap-1">
              <p className="font-semibold text-xl">Fasilitas</p>
              <IconFasilitas />
              <IconFasilitas />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[30%] border-l-[0.031rem] border-[#ABACAC]/30 h-full p-5">
            <p className="text-right text-[#D2001A] font-normal text-[0.75rem]">
              Lihat Detail
            </p>
            <p className="text-[#D2001A] font-semibold text-[1rem] md:text-[1.5rem]">
              Rp 10.000
              <span className="text-[#615A56] text-[0.75rem] md:text-[1rem] ml-2">
                /malam
              </span>
            </p>
            <p className="cursor-pointer bg-[#FDD05C] p-2 md:px-6 md:py-3 text-center shadow-md rounded-lg font-semibold text-[0.75rem] md:text-[1rem] hover:bg-slate-500 hover:bg-none hover:text-white">
              Pesan Tiket
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-row w-full gap-2 p-2 bg-white h-full max-h-52 border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md">
        <div className="flex flex-col w-[40%] ">
          <img
            src="/penginapan/gambar1.png"
            alt=""
            className="rounded-md w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="flex flex-col gap-2  w-[60%] items-start ">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Deluxe Room</p>
              <p className="truncate font-normal text-xs">
                Jl. Siwalan Parangan
              </p>
              <p className="text-[#D2001A] font-semibold text-xs">
                Rp 10.000
                <span className="text-[#615A56] font-normal">/wisatawan</span>
              </p>
            </div>
            <div className="flex flex-row items-center  p-1 gap-1 rounded-md">
              <div className="w-[15px]">
                <img
                  src="/icons/stars-active.png"
                  className="max-w-[15px] w-full"
                />
              </div>
              <p className="text-[0.75rem] text-secondary-yellow font-medium">
                5.0
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-end">
            <p className="cursor-pointer bg-secondary-yellow px-5 py-2 text-center shadow-md rounded-md font-semibold text-[0.75rem] md:text-[1rem] hover:bg-slate-500 hover:bg-none hover:text-white">
              Pesan Tiket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
