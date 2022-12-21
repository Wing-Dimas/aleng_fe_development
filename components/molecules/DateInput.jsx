export default function DateInput({
  isTime,
  name,
  leftIcon,
  rightIcon,
  label,
  containerClassName,
  leftIconClassName,
  rightIconClassName,
  labelClassName,
  className,
  value,
  onChange,
}) {
  const doChange = (e) => {
    onChange({ name: name, value: e.currentTarget.value });
  };
  return (
    <div
      className={`relative${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      {label && <p className={labelClassName}>{label}</p>}
      <label
        className={`pointer-events-none absolute h-full top-0 left-4 flex items-center justify-center${
          leftIconClassName ? " " + leftIconClassName : ""
        }`}
        htmlFor={name}
      >
        {leftIcon}
      </label>
      <input
        className={`outline-none px-12 py-4 rounded-lg shadow border w-full${
          className ? " " + className : ""
        }`}
        type={isTime ? "time" : "date"}
        name={name}
        id={name}
        value={value}
        onChange={doChange}
      />
      <label
        className={`pointer-events-none absolute h-full top-0 right-4 flex items-center justify-center${
          rightIconClassName ? " " + rightIconClassName : ""
        }`}
        htmlFor={name}
      >
        {rightIcon}
      </label>
    </div>
  );
}
