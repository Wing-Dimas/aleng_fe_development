import Image from "next/image";

export default function FacilityIcon({ url, name }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative max-w-[25px] w-full">
        <Image width={1000} height={1000} src={url} alt="logo" />
      </div>
      <p className="text-[#615A56] font-medium text-xs">{name}</p>
    </div>
  );
}
