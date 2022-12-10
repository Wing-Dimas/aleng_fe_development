import { X } from 'tabler-icons-react';
import Link from 'next/link';
import 'animate.css';
import ItemOpsi from './itemOpsi';
export default function ModalOpsiTamu({
  openOpsiTamu,
  setOpenOpsiTamu,
  pages,
}) {
  return (
    <div>
      {openOpsiTamu ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden animate__animated  animate__slow animate__bounceIn overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex flex-col items-end gap-6 max-w-xs max-h-xs mx-6 md:mx-0 w-full p-4 h-auto bg-white border-[0.5px] border-dark-grey/30 rounded-lg shadow-md">
              <X
                size={24}
                strokeWidth={3}
                color={'black'}
                className="cursor-pointer rotate-180 transition duration-500 ease-in-out  hover:rotate-0"
                onClick={() => setOpenOpsiTamu(!openOpsiTamu)}
              />
              <div className="w-full ">
                {pages == 'kuliner' ? (
                  <ItemOpsi image="/icons/peoples-black.png" name="orang" />
                ) : (
                  <div className='flex flex-col gap-2'>
                    <ItemOpsi image="/icons/sleep.png" name="Kamar" />
                    <ItemOpsi image="/icons/peoples-black.png" name="Dewasa" />
                    <ItemOpsi image="/icons/baby.png" name="Anak-anak" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
