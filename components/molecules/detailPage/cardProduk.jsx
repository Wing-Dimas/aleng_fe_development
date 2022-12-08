import Stars from '../stars';

export default function CardProduk({ pages,name,gambar }) {
  return (
    <div className="flex min-w-[200px] gap-2 md:min-w-[250px] w-full  h-full flex-col border-[0.5px] p-3 border-[#ABACAC]/30 shadow-md rounded-md">
      <div className="w-full max-w-[250px] relative">
        <img
          src={gambar}
          alt=""
          className="w-full h-full shadow-md rounded-md object-cover"
        />
        <div className="absolute p-2 m-1 bg-[#FDD05C] rounded-full top-0 right-0">
          <img
            src="/icons/bookmark-fill.png"
            alt=""
            className="max-w-[20px] w-full"
          />
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-xl">{name}</p>
        <Stars />
        <p className="font-normal text-sm text-[#615A56]">Kab. Sumenep</p>
        {pages == 'kuliner' ? null : (
          <p className="font-medium text-base text-[#D2001A]">
            Rp<span className="">200.000</span>
            <span className="font-normal text-xs text-[#615A56]">/malam</span>
          </p>
        )}
      </div>
    </div>
  );
}
