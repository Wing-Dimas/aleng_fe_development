import { X } from 'tabler-icons-react';
import Link from 'next/link';
import 'animate.css';
import ItemOpsi from './itemOpsi';
export default function ModalOpsiSearch({ openOpsiSearch, setOpenOpsiSearch }) {
  return (
    <div>
      {openOpsiSearch ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden animate__animated  animate__slow animate__bounceIn overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex flex-col items-end gap-6 max-w-xs max-h-xs mx-6 md:mx-0 w-full p-4 h-auto bg-white border-[0.5px] border-dark-grey/30 rounded-lg shadow-md">
              <X
                size={24}
                strokeWidth={3}
                color={'black'}
                className="cursor-pointer rotate-180 transition duration-500 ease-in-out  hover:rotate-0"
                onClick={() => setOpenOpsiSearch(!openOpsiSearch)}
              />
              <div className="w-full  flex flex-col gap-2">
                <ItemOpsi image="/icons/sleep.png" name="Kamar" />
                <ItemOpsi image="/icons/peoples-black.png" name="Dewasa" />
                <ItemOpsi image="/icons/baby.png" name="Anak-anak" />
              </div>
              <p className="w-full bg-secondary-yellow text-center p-1 rounded-md font-medium text-xl">Perbarui</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
