import { Walk } from 'tabler-icons-react';
export default function ClosestObject({ object }) {
  return (
    <div className='flex flex-row items-start justify-center gap-6'>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-[#D2001A] p-3 rounded-full">
          {object == 'wisata' ? (
            <img
              src="/icons/building-carousel-white.png"
              alt="building"
              className="w-[1rem]"
            />
          ) : (
            <img
              src="/icons/kuliner-white.png"
              alt="kuliner"
              className="w-[1rem]"
            />
          )}
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-left font-medium text-[0.75rem]">
            Rumah Makan Ayam Bumbu Hitam
          </p>
          <div className="flex flex-row items-center justify-start w-full">
            <Walk size={14} strokeWidth={2} color={'#D2001A'} />
            <p className="text-[#D2001A] font-normal text-[0.75rem]">
              16 menit
            </p>
          </div>
        </div>
      </div>
      <p className='text-[0.75rem] text-[#D2001A] font-normal'>
        300<span>m</span>
      </p>
    </div>
  );
}
