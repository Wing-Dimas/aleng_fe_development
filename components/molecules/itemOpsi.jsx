export default function ItemOpsi({ image, name }) {
  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center gap-2">
        <img src={image} alt="" className="w-[20px]" />
        <p className="text-xs font-semibold">{name}</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-7 h-5 bg-secondary-yellow shadow-md rounded-sm cursor-pointer hover:bg-secondary-yellow/80">
          <p className="text-sm font-semibold text-center">-</p>
        </div>
        <p className="text-sm font-semibold">0</p>
        <div className="w-7 h-5 bg-secondary-yellow shadow-md rounded-sm cursor-pointer hover:bg-secondary-yellow/80">
          <p className="text-sm font-semibold text-center">+</p>
        </div>
      </div>
    </div>
  );
}
