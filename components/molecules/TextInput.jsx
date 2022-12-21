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
    onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
  };
  return (
    <div
      className={`relative${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      {label && <p className={labelClassName}>{label}</p>}
      <label
        className={`pointer-events-none absolute h-full flex items-center justify-center left-4${
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
        } py-4 outline-none rounded-lg shadow border w-full${
          className ? " " + className : ""
        }`}
        type="text"
        name={name}
        id={name}
      />
      <label
        className={`pointer-events-none absolute right-4 top-1/2${
          rightIconClassName ? " " + rightIconClassName : ""
        }`}
        htmlFor={name}
      >
        {rightIcon}
      </label>
    </div>
  );
}
