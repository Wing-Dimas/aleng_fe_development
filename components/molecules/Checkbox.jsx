import { IconCheck } from "@tabler/icons";

export default function Checkbox({
  containerClassName,
  className,
  name,
  labelClassName,
  label,
  value,
  onChange,
}) {
  const doCheck = (e) => {
    onChange({ name: e.currentTarget.name, value: e.currentTarget.checked });
  };

  return (
    <div
      className={`relative flex items-center gap-2${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      <label className="absolute h-full flex items-center justify-center top-0 w-4 pointer-events-none">
        <IconCheck
          className={`${
            value ? "text-black" : "text-transparent"
          } transition-all w-3 h-3`}
        />
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`border-2 appearance-none w-4 h-4 bg-white border-custom-black transition-all checked:bg-yellow-400 checked:border-yellow-400 rounded${
          className ? " " + className : ""
        }`}
        onChange={doCheck}
        checked={value}
      />
      <label
        className={`${
          labelClassName ? labelClassName + " " : ""
        } text-xs font-medium`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
