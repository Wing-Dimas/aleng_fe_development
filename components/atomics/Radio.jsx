import { IconCircle } from "@tabler/icons-react";

export default function Radio({
  containerClassName,
  className,
  name,
  id,
  labelClassName,
  label,
  value,
  onChange,
}) {
  const doCheck = (e) => {
    onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
  };

  return (
    <div
      className={`relative flex items-center gap-2${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        id={id}
        className={`peer border-2 appearance-none w-4 h-4 bg-white border-custom-black transition-all checked:bg-yellow-400 checked:border-yellow-400 rounded${
          className ? " " + className : ""
        }`}
        onChange={doCheck}
        value={value}
      />
      <label className="absolute top-0.5 left-0.5 pointer-events-none peer-checked:text-black text-transparent transition-all">
        <IconCircle className="w-3 h-3" />
      </label>
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
