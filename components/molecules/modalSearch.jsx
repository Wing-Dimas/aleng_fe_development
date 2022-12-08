import { Users, ArrowsRightLeft, MapPin } from 'tabler-icons-react';
import 'animate.css';
import DateTime from './dataTime';
export default function ModalSearch({
  openSearch,
  openOpsiSearch,
  setOpenOpsiSearch,
  pages,
  placeholder,
}) {
  return (
    <div>
      {openSearch ? (
        <div>
          {pages == 'penginapan' ? (
            <div className="justify-center items-center flex md:hidden overflow-x-hidden mb-4 animate__animated  animate__slow animate__fadeIn">
              <div className="flex w-full flex-col lg:flex-row items-center gap-4 justify-between p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md mb-4">
                <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
                  <div className="flex flex-col w-full justify-start items-center py-4 px-6 border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md">
                    <div className="w-full">
                      <DateTime type="date" />
                    </div>
                    <div className="flex flex-row w-full h-[40px] items-center justify-between">
                      <hr className="border-[0.5px] border-[#ABACAC]/40 w-[85%]" />
                      <div className="flex flex-row items-center justify-center max-w-[2rem] max-h-[2rem]  w-full h-full">
                        <ArrowsRightLeft
                          size={16}
                          strokeWidth={3}
                          color={'#615A56'}
                          className="w-full h-full rotate-90 bg-white shadow-lg rounded-md border-[0.5px] border-[#ABACAC]/20 p-2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <DateTime type="date" />
                    </div>
                  </div>
                  <div
                    className="flex flex-row gap-2 md:gap-4 hover:bg-gray-200 w-full items-center justify-start md:justify-center py-3 px-6 cursor-pointer border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md"
                    onClick={() => setOpenOpsiSearch(!openOpsiSearch)}
                  >
                    <Users size={24} strokeWidth={2} color={'#615A56'} />
                    <p className="font-medium text-xs text-black cursor-pointer ">
                      1 Kamar, 1 Dewasa, 1 Anak
                    </p>
                  </div>
                </div>
                <p className="font-medium text-base lg:max-w-sm w-full text-center text-black bg-[#FDD05C] hover:bg-secondary-yellow/80 py-3 px-14 rounded-md shadow-md cursor-pointer">
                  Cari
                </p>
              </div>
            </div>
          ) : (
            <div className="justify-center items-center flex md:hidden overflow-x-hidden mb-4 animate__animated  animate__slow animate__fadeIn">
              <div className="flex w-full flex-col lg:flex-row items-center gap-4 justify-between p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md mb-4">
                <div className="flex flex-row gap-4 w-full justify-center items-center py-2 px-6 border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md">
                  <MapPin size={18} strokeWidth={2} color={'#615A56'} />
                  <input
                    type="text"
                    className="w-full p-2 font-medium h-full placeholder-gray-500 border rounded bg-gray-100 focus:outline-none px-2 text-xs focus:ring-orange-500 focus:border-orange-500"
                    placeholder={placeholder}
                  />
                </div>
                <p className="font-medium text-base lg:max-w-sm w-full text-center text-black bg-[#FDD05C] hover:bg-secondary-yellow/80 py-3 px-14 rounded-md shadow-md cursor-pointer">
                  Cari
                </p>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
