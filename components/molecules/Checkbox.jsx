import { IconCheck } from "@tabler/icons";

export default function Checkbox({
  containerClassName,
  className,
  name,
  labelClassName,
  label,
}) {
  return (
    <div
      className={`relative flex items-center gap-4${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      <label className="absolute top-1 left-0.5 pointer-events-none">
        <IconCheck className="w-4 h-4" />
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`border-2 appearance-none w-5 h-5 checked:bg-yellow-400 checked:border-yellow-400 rounded${
          className ? " " + className : ""
        }`}
      />
      <label className={labelClassName ? labelClassName : ""} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
