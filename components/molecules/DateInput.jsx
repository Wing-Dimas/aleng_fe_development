import { IconCalendarEvent, IconChevronDown } from "@tabler/icons";

export default function DateInput({
  isTime,
  name,
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
        className={`text-custom-dark_grey pointer-events-none text-xs font-medium absolute h-full top-0 left-4 flex items-center justify-center${
          leftIconClassName ? " " + leftIconClassName : ""
        }`}
        htmlFor={name}
      >
        <IconCalendarEvent className="w-5 h-5" />
      </label>
      <input
        className={`outline-none px-12 py-5 text-xs font-medium rounded-lg shadow-custom bg-white w-full${
          className ? " " + className : ""
        }`}
        type={isTime ? "time" : "date"}
        name={name}
        id={name}
        value={value}
        onChange={doChange}
      />
      <label
        className={`text-custom-primary_red pointer-events-none text-xs font-medium absolute h-full top-0 right-4 flex items-center justify-center${
          rightIconClassName ? " " + rightIconClassName : ""
        }`}
        htmlFor={name}
      >
        <IconChevronDown className="w-5 h-5" />
      </label>
    </div>
  );
}
