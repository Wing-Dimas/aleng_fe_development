export default function InputReservasi({ name, type, placeholder, gambar }) {
  return (
    <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
      <p className="text-[#615A56] font-normal text-[0.75rem] w-full text-left after:content-['*'] after:ml-0.5">
        {name}
      </p>
      <div className=" flex items-center gap-2 border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md w-full py-1 px-5">
        <img src={gambar} className="max-w-[24px] w-full " />
        <input
          type={type}
          className="w-full p-2 font-medium h-full placeholder-gray-500 border rounded bg-gray-100 focus:outline-none px-2 text-xs focus:ring-orange-500 focus:border-orange-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
