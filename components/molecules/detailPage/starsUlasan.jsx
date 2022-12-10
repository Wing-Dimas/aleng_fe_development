export default function StarsUlasan() {
  const stars = [1, 1, 1, 1, 0];
  return (
    <div className="flex flex-col gap-1 items-start">
      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row items-center">
          {stars &&
            stars.map((star,index) => {
              if (star == 1) {
                return (
                  <img
                    src="/icons/stars-active.png"
                    alt="stars"
                    key={index}
                    className="w-[16px]"
                  />
                );
              } else {
                return (
                  <img
                    src="/icons/stars.png"
                    alt="stars"
                    key={index}
                    className="w-[16px]"
                  />
                );
              }
            })}
        </div>
        <p className="flex flex-row items-center font-normal text-[0.75rem] text-[#D2001A]">
          4<span>/5</span>
        </p>
      </div>
      <p className="flex gap-1 flex-row items-center font-normal flex-wrap text-[0.625rem] text-[#615A56]">
        Dari {666} ulasan pengunjung
      </p>
    </div>
  );
}
