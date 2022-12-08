export default function JamOperasional({ days }) {
  return (
    <div className="flex flex-row items-center w-full">
      <p className="w-[15%] font-normal text-base">{days}</p>
      <p className="w-[85%] font-normal text-base bg-secondary-yellow/60 text-center py-1 rounded-md shadow-md">Buka sepanjang hari dari 06:00-23:00</p>
    </div>
  );
}
