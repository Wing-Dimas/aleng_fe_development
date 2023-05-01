import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
const TextInput = ({
  type = "text",
  containerClassName,
  className,
  leftIcon,
  rightIcon,
  labelClassName = "",
  leftIconClassName,
  rightIconClassName,
  label,
  name,
  placeholder = "",
  value,
  onChange,
  readonly,
  pattern,
  inputMode,
}) => {
  const doChange = (e) => {
    if (e.currentTarget.name == "no_hp") {
      if (!isNaN(e.target.value)) {
        onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
      }
    } else {
      onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
    }
  };

  return (
    <div
      className={`relative${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      {label && <p className={labelClassName}>{label}</p>}
      {leftIcon && (
        <label
          className={`text-custom-dark_grey pointer-events-none text-xs font-medium absolute h-full flex items-center justify-center left-4 top-0${
            leftIconClassName ? " " + leftIconClassName : ""
          }`}
          htmlFor={name}
        >
          {leftIcon}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={doChange}
        placeholder={placeholder}
        className={`${leftIcon ? "pl-12" : "pl-4"} ${
          rightIcon ? "pr-12" : "pr-4"
        } text-xs font-medium py-5 outline-none bg-white rounded-lg shadow-custom w-full${
          className ? " " + className : ""
        }`}
        name={name}
        id={name}
        readOnly={readonly}
      />
      {rightIcon && (
        <label
          className={`text-custom-primary_red pointer-events-none text-xs font-medium absolute h-full flex items-center justify-center top-0 right-4${
            rightIconClassName ? " " + rightIconClassName : ""
          }`}
          htmlFor={name}
        >
          {rightIcon}
        </label>
      )}
    </div>
  );
};

TextInput.obscure = ({
  containerClassName,
  className,
  leftIcon,
  rightIcon,
  labelClassName = "",
  leftIconClassName,
  rightIconClassName,
  label,
  name,
  placeholder = "",
  value,
  onChange,
  readonly,
}) => {
  const doChange = (e) => {
    onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const doToggleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className={`relative${
        containerClassName ? " " + containerClassName : ""
      }`}
    >
      {label && <p className={labelClassName}>{label}</p>}
      {leftIcon && (
        <label
          className={`text-custom-dark_grey pointer-events-none text-xs font-medium absolute h-full flex items-center justify-center left-4 top-0${
            leftIconClassName ? " " + leftIconClassName : ""
          }`}
          htmlFor={name}
        >
          {leftIcon}
        </label>
      )}
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={doChange}
        placeholder={placeholder}
        className={`${leftIcon ? "pl-12" : "pl-4"} ${
          rightIcon ? "pr-12" : "pr-4"
        } text-xs font-medium py-5 outline-none bg-white rounded-lg shadow-custom w-full${
          className ? " " + className : ""
        }`}
        name={name}
        id={name}
      />
      <label
        className={`text-custom-primary_red text-xs font-medium absolute h-full flex items-center justify-center top-0 right-4${
          rightIconClassName ? " " + rightIconClassName : ""
        }`}
        htmlFor={name}
      >
        {show ? (
          <IconEye onClick={doToggleShow} className="w-5 h-5" />
        ) : (
          <IconEyeOff onClick={doToggleShow} className="h-5 w-5" />
        )}
      </label>
    </div>
  );
};

export default TextInput;
