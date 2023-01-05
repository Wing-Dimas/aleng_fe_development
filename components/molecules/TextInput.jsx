export default function TextInput({
  containerClassName,
  className,
  leftIcon,
  rightIcon,
  labelClassName,
  leftIconClassName,
  rightIconClassName,
  label,
  name,
  placeholder = "",
  value,
  onChange,
}) {
  const doChange = (e) => {
    // onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
    console.log(name, e.currentTarget.value);
  };

  return (
    <div
      className={`relative${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      {label && <p className={labelClassName}>{label}</p>}
      <label
        className={`text-custom-dark_grey pointer-events-none text-xs font-medium absolute h-full flex items-center justify-center left-4${
          leftIconClassName ? " " + leftIconClassName : ""
        }`}
        htmlFor={name}
      >
        {leftIcon}
      </label>
      <input
        value={value}
        onChange={doChange}
        placeholder={placeholder}
        className={`${leftIcon ? "pl-12" : "pl-4"} ${
          rightIcon ? "pr-12" : "pr-4"
        } text-xs font-medium py-5 outline-none bg-white rounded-lg shadow-custom w-full${
          className ? " " + className : ""
        }`}
        type="text"
        name={name}
        id={name}
      />
      <label
        className={`text-custom-primary_red pointer-events-none absolute right-4 top-1/2${
          rightIconClassName ? " " + rightIconClassName : ""
        }`}
        htmlFor={name}
      >
        {rightIcon}
      </label>
    </div>
  );
}
