export default function Tab({ options, className, index, setIndex }) {
  const doChangeIndex = (e) => {
    setIndex(parseInt(e.currentTarget.value));
  };

  return (
    <div
      className={`${
        className ? className + " " : ""
      }max-w-5xl mx-auto grid grid-cols-4 border-b font-body2_mobile text-body2_mobile sm:font-heading3 sm:text-heading3 text-center`}
    >
      {options.map((option, i) => {
        return (
          <button
            key={i}
            value={i}
            onClick={doChangeIndex}
            className={`${
              index === i
                ? "border-b-custom-primary_red text-custom-primary_red"
                : "border-b-transparent text-[#615A56]"
            } p-1 sm:p-2 border-b-2`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
