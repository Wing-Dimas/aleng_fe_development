export default function OptionalFacilityCard({ facilities }) {
  return (
    <div className="flex flex-col gap-2 w-full items-center justify-start rounded-md">
      {facilities.map((f, i) => {
        return (
          <div
            key={i}
            className="flex flex-row justify-between items-center w-full"
          >
            <label className="text-left font-medium text-[0.75rem] w-[50%] flex flex-row items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-secondary-yellow" />
              {f.name}
            </label>
            <p className="flex flex-row font-medium text-[0.75rem] w-[50%] justify-end">
              + Rp<span className="ml-1 font-semibold">{f.price}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
