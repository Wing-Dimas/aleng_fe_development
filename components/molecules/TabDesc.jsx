import { useState } from "react";
import ClosestObject from "./ClosestObject";
import FacilityIcon from "./FacilityIcon";
import Tab from "./Tab";

export default function TabDesc({ page }) {
  console.log(page);
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Tab
        className="px-4 !text-xs !grid-cols-3"
        options={["DESKRIPSI", "LOKASI", "FASILITAS"]}
        index={index}
        setIndex={setIndex}
      />
      <br />
      {index === 0 ? (
        <div>
          <p className="text-justify font-normal text-[1rem]">
            Selain standar dari Indonesia Care, semua tamu akan mendapatkan
            Wi-Fi gratis di semua kamar dan parkir gratis jika tiba dengan
            mobil. Terletak strategis di Sumenep yang merupakan bagian Pulau
            Madura, properti ini menempatkan Anda dekat dengan atraksi dan opsi
            restoran menarik. Jangan pulang dulu sebelum berkunjung ke Bandara
            Trunojoyo yang terkenal. Properti bintang-3 ini dilengkapi dengan
            berbagai fasilitas untuk menunjang kualitas dan kenyamanan selama
            Anda menginap.
          </p>
          {page === "kuliner" && (
            <div className="flex flex-col gap-3">
              <p>Jam Operasional</p>
              <div className="flex flex-col gap-3">
                {/* <JamOperasional days="Senin" />
                      <JamOperasional days="Selasa" />
                      <JamOperasional days="Rabu" />
                      <JamOperasional days="Kamis" />
                      <JamOperasional days="Jumat" />
                      <JamOperasional days="Sabtu" />
                      <JamOperasional days="Minggu" /> */}
              </div>
            </div>
          )}
        </div>
      ) : index === 1 ? (
        <div>
          <div className="flex flex-col gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0135998053856!2d113.86801801472116!3d-7.007680994937985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9e51abefd406f%3A0xd1d721effd0ca548!2sKaberaz%20Hotel%20Sumenep!5e0!3m2!1sid!2sid!4v1670063038205!5m2!1sid!2sid"
              className="w-full h-72 border-[1px] border-[#ABACAC] shadow-md rounded-md"
              loading="lazy"
            ></iframe>
            <div className="flex flex-col md:flex-row gap-7 md:gap-20  items-start justify-start">
              {page !== "kuliner" && (
                <div>
                  <div className="flex flex-col gap-4">
                    <p className="text-xl font-semibold">Restoran Terdekat</p>
                    <div className="flex flex-col gap-3">
                      <ClosestObject object="kuliner" />
                      <ClosestObject object="kuliner" />
                      <ClosestObject object="kuliner" />
                    </div>
                  </div>
                </div>
              )}
              {page !== "wisata" && (
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
              )}
              {page !== "penginapan" && (
                <div>
                  <div className="flex flex-col gap-4">
                    <p className="text-xl font-semibold">Penginapan Terdekat</p>
                    <div className="flex flex-col gap-3">
                      <ClosestObject object="Penginapan" />
                      <ClosestObject object="Penginapan" />
                      <ClosestObject object="Penginapan" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center justify-around gap-5">
            <FacilityIcon />
            <FacilityIcon />
            <FacilityIcon />
            <FacilityIcon />
          </div>
        </div>
      )}
    </div>
  );
}
