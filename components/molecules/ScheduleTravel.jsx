export default function ScheduleTravel({ days, address, decs }) {
  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="w-[20%]">
        <div className="flex flex-col flex-start items-center">
          <p className="text-gray-800 font-semibold md:text-xl text-base -mt-2">
            {days}
          </p>
          <p className="text-xs md:text-sm font-normal">{address}</p>
        </div>
      </div>
      <div className="border-l-2 border-custom-primary-red w-[80%] flex flex-col gap-2">
        <div className="flex flex-start items-center">
          <div className="bg-custom-primary-red w-4 h-4 flex items-center justify-center rounded-full -ml-[9px] mr-3 -mt-2"></div>
          <h4 className="text-gray-800 font-semibold md:text-xl text-base -mt-2">
            Kegiatan
          </h4>
        </div>
        <div className="ml-7 pb-6">
          <ul className="list-disc list-inside">
            {[...Array(5)].map((item, index) => {
              return (
                <li className="text-xs md:text-sm font-normal" key={index}>
                  {decs}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
