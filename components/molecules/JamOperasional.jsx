export default function JamOperasional({ days }) {
  return (
    <div className="flex flex-row items-center w-full">
      <p className="w-[30%] md:w-[10%] font-normal text-base text-center">{days}</p>
      <p className="w-[70%] md:w-[90%] font-normal text-base bg-custom-secondary_yellow/30 text-center p-1 rounded-md shadow-md">
        Buka sepanjang hari dari 06:00-23:00
      </p>
    </div>
  );
}
