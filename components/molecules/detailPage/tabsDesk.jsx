import { useState } from 'react';
import FasilitasIcon from './fasilitasIcon';
import ClosestObject from './closestObj';
import JamOperasional from './jamOperasional';

export default function TabsDesk({ pages }) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 w-full xl:w-1/2 list-none flex-wrap pt-3 flex-row border-b-[1px] border-[#ABACAC]"
          role="tablist"
        >
          <li
            className={
              '-mb-px mr-2 last:mr-0 flex-auto text-center ' +
              (openTab === 1 ? 'border-b-4 border-[#D2001A]' : null)
            }
          >
            <a
              className={
                'text-xs font-bold uppercase md:px-5 py-3 leading-normal block ' +
                (openTab === 1 ? 'text-[#D2001A]' : 'text-[#615A56]')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Deskripsi
            </a>
          </li>
          <li
            className={
              '-mb-px mr-2 last:mr-0 flex-auto text-center ' +
              (openTab === 2 ? 'border-b-4 border-[#D2001A]' : null)
            }
          >
            <a
              className={
                'text-xs font-bold uppercase md:px-5 py-3  leading-normal block ' +
                (openTab === 2 ? 'text-[#D2001A]' : 'text-[#615A56]')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Lokasi
            </a>
          </li>
          <li
            className={
              '-mb-px mr-2 last:mr-0 flex-auto text-center ' +
              (openTab === 3 ? 'border-b-4 border-[#D2001A]' : null)
            }
          >
            <a
              className={
                'text-xs font-bold uppercase md:px-5 py-3  leading-normal block ' +
                (openTab === 3 ? 'text-[#D2001A]' : 'text-[#615A56]')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Fasilitas
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-4">
          <div className="pt-5 flex-auto">
            <div className="tab-content tab-space">
              <div
                className={`flex flex-col gap-5 font-semibold text-lg ${
                  openTab === 1 ? 'block' : 'hidden'
                }`}
                id="link1"
              >
                <p className="text-justify font-normal text-[1rem]">
                  Selain standar dari Indonesia Care, semua tamu akan
                  mendapatkan Wi-Fi gratis di semua kamar dan parkir gratis jika
                  tiba dengan mobil. Terletak strategis di Sumenep yang
                  merupakan bagian Pulau Madura, properti ini menempatkan Anda
                  dekat dengan atraksi dan opsi restoran menarik. Jangan pulang
                  dulu sebelum berkunjung ke Bandara Trunojoyo yang terkenal.
                  Properti bintang-3 ini dilengkapi dengan berbagai fasilitas
                  untuk menunjang kualitas dan kenyamanan selama Anda menginap.
                </p>
                {pages == 'kuliner' ? (
                  <div className="flex flex-col gap-3">
                    <p>Jam Operasional</p>
                    <div className="flex flex-col gap-3">
                      <JamOperasional days="Senin" />
                      <JamOperasional days="Selasa" />
                      <JamOperasional days="Rabu" />
                      <JamOperasional days="Kamis" />
                      <JamOperasional days="Jumat" />
                      <JamOperasional days="Sabtu" />
                      <JamOperasional days="Minggu" />
                    </div>
                  </div>
                ) : null}
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                <div className="flex flex-col gap-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0135998053856!2d113.86801801472116!3d-7.007680994937985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9e51abefd406f%3A0xd1d721effd0ca548!2sKaberaz%20Hotel%20Sumenep!5e0!3m2!1sid!2sid!4v1670063038205!5m2!1sid!2sid"
                    className="w-full h-72 border-[1px] border-[#ABACAC] shadow-md rounded-md"
                    loading="lazy"
                  ></iframe>
                  <div className="flex flex-col md:flex-row gap-7 md:gap-20  items-start justify-start">
                    {pages == 'penginapan' || pages == 'wisata' ? (
                      <div>
                        <div className="flex flex-col gap-4">
                          <p className="text-xl font-semibold">
                            Restoran Terdekat
                          </p>
                          <div className="flex flex-col gap-3">
                            <ClosestObject object="kuliner" />
                            <ClosestObject object="kuliner" />
                            <ClosestObject object="kuliner" />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {pages == 'penginapan' || pages == 'kuliner' ? (
                      <div>
                        <div className="flex flex-col gap-4">
                          <p className="text-xl font-semibold">
                            Objek Wisata Terdekat
                          </p>
                          <div className="flex flex-col gap-3">
                            <ClosestObject object="wisata" />
                            <ClosestObject object="wisata" />
                            <ClosestObject object="wisata" />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {pages == 'wisata' || pages == 'kuliner' ? (
                      <div>
                        <div className="flex flex-col gap-4">
                          <p className="text-xl font-semibold">
                            Penginapan Terdekat
                          </p>
                          <div className="flex flex-col gap-3">
                            <ClosestObject object="Penginapan" />
                            <ClosestObject object="Penginapan" />
                            <ClosestObject object="Penginapan" />
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <div className="flex flex-row items-center justify-around gap-5">
                  <FasilitasIcon />
                  <FasilitasIcon />
                  <FasilitasIcon />
                  <FasilitasIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
