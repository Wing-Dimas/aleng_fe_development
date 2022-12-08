import { Users, ArrowsRightLeft, MapPin } from 'tabler-icons-react';
import DateTime from './dataTime';

export default function Search({
  openOpsiSearch,
  setOpenOpsiSearch,
  openSearch,
  setOpenSearch,
  pages,
  placeholder,
}) {
  return (
    <div>
      {pages == 'penginapan' ? (
        <div>
          <div className="hidden w-1/2 md:flex md:w-full flex-col lg:flex-row items-center gap-4 justify-between p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md mb-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="flex flex-row gap-4 w-full justify-center items-center py-3 px-6 border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md">
                <DateTime type="date" />
                <ArrowsRightLeft size={18} strokeWidth={2} color={'#615A56'} />
                <DateTime type="date" />
              </div>
              <div
                className="flex flex-row gap-4 hover:bg-gray-200 w-full items-center justify-center py-3 px-6 cursor-pointer border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md"
                onClick={() => setOpenOpsiSearch(!openOpsiSearch)}
              >
                <Users size={24} strokeWidth={2} color={'#615A56'} />
                <p className="font-medium text-xs text-black cursor-pointer ">
                  1 Kamar, 1 Dewasa, 1 Anak
                </p>
              </div>
            </div>
            <p className="font-medium text-base lg:max-w-sm w-full text-center text-black bg-[#FDD05C] hover:bg-secondary-yellow/80 py-3 px-14 rounded-md shadow-md cursor-pointer">
              Ubah Pencarian
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="hidden w-1/2 md:flex md:w-full flex-col lg:flex-row items-center gap-4 justify-between p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md mb-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 w-1/2">
              <div className="flex flex-row gap-4 w-full justify-center items-center py-2 px-6 border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md">
                <MapPin size={18} strokeWidth={2} color={'#615A56'} />
                <input
                  type="text"
                  className="w-full p-2 font-medium h-full placeholder-gray-500 border rounded bg-gray-100 focus:outline-none px-2 text-xs focus:ring-orange-500 focus:border-orange-500"
                  placeholder={placeholder}
                />
              </div>
            </div>
            <p className="font-medium text-base lg:max-w-sm w-full text-center text-black bg-[#FDD05C] hover:bg-secondary-yellow/80 py-3 px-14 rounded-md shadow-md cursor-pointer">
              Ubah Pencarian
            </p>
          </div>
        </div>
      )}
      <div className="flex md:hidden flex-col">
        <p
          className="font-medium text-base lg:max-w-sm w-full text-center text-black bg-[#FDD05C] hover:bg-secondary-yellow/80 py-3 px-5 rounded-md shadow-md cursor-pointer"
          onClick={() => setOpenSearch(!openSearch)}
        >
          Ubah Pencarian
        </p>
      </div>
    </div>
  );
}
