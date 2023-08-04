import { useState } from "react";
import FacilityIcon from "../molecules/FacilityIcon";
import Tab from "@components/atomics/Tab";
import JamOperasional from "../molecules/JamOperasional";
import Text from "@components/atomics/Text";

export default function TabDesc({ page, desc, lat, long, facility }) {
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
          <p className="text-justify font-normal text-[1rem]">{desc}</p>
          <br />
          {page === "kuliner" && (
            <div className="flex flex-col gap-3">
              <Text>Jam Operasional</Text>
              <div className="flex flex-col gap-3">
                <JamOperasional
                  days="Senin"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
                <JamOperasional
                  days="Selasa"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
                <JamOperasional
                  days="Rabu"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
                <JamOperasional
                  days="Kamis"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
                <JamOperasional
                  days="Jumat"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
                <JamOperasional
                  days="Sabtu"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
                <JamOperasional
                  days="Minggu"
                  decs="Buka sepanjang hari dari 06:00-23:00"
                />
              </div>
            </div>
          )}
        </div>
      ) : index === 1 ? (
        <div>
          {long !== "" && lat !== "" && (
            <iframe
              src={`http://maps.google.com/?q=${lat},${long}`}
              className="w-full h-72 border-[1px] border-[#ABACAC] shadow-md rounded-md"
              loading="lazy"
            ></iframe>
          )}
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center justify-around gap-5">
            {facility.map((f, i) => {
              return (
                <FacilityIcon
                  key={i.toString()}
                  url={f.image_url}
                  name={f.title}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
