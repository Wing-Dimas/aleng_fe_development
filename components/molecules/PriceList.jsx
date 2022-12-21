export default function PriceList({ items }) {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-start bg-[#F6F0E1] py-3 px-6 cursor-pointer rounded-md">
      {items.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-row justify-between items-center w-full"
          >
            <p className="text-left font-medium text-[0.75rem] flex flex-row items-center gap-2">
              {item.name}
            </p>
            <p className="flex flex-row font-medium text-[0.75rem]">
              + Rp<span className="ml-1 font-semibold">{item.price}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
