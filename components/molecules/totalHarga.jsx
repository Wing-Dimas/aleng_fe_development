export default function TotalHarga({name,harga}) {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <p className="text-left font-medium text-[0.75rem] flex flex-row items-center gap-2">
        {name}
      </p>
      <p className="flex flex-row font-medium text-[0.75rem]">
        + Rp<span className="ml-1 font-semibold">{harga}</span>
      </p>
    </div>
  );
}
