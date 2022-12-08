export default function Stars() {
  const stars = [1, 1, 1, 1, 0];
  return (
    <div className="flex flex-row gap-1 items-center">
      <div className="flex flex-row items-center">
        {stars &&
          stars.map((star, index) => {
            if (star == 1) {
              return (
                <img
                  src="/icons/stars-active.png"
                  key={index}
                  alt="stars"
                  className="w-[16px]"
                />
              );
            } else {
              return (
                <img
                  src="/icons/stars.png"
                  key={index}
                  alt="stars"
                  className="w-[16px]"
                />
              );
            }
          })}
      </div>
      <p className="flex flex-row gap-1 items-center font-normal text-[0.75rem] text-[#D2001A]">
        666<span>reviews</span>
      </p>
    </div>
  );
}
