export default function AddFasilitas() {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <label className="text-left font-medium text-[0.75rem] w-[50%] flex flex-row items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          // checked={checked}
          // onChange={handleChange}
          className="accent-secondary-yellow"
        />
        Boleh membawa hewan peliharaan
      </label>
      <p className="flex flex-row font-medium text-[0.75rem] w-[50%] justify-end">
        + Rp<span className="ml-1 font-semibold">20.000</span>
      </p>
    </div>
  );
}
