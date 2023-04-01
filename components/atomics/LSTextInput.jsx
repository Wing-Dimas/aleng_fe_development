import { IconEye, IconEyeOff } from "@tabler/icons";
import { useState } from "react";

const LSTextInput = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  type,
  message,
  readonly,
}) => {
  const doChange = (e) => {
    onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
  };
  return (
    <label htmlFor={name} className="w-full">
      <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5">
        {label}
      </span>
      <input
        value={value}
        onChange={doChange}
        id={name}
        name={name}
        placeholder={placeholder ?? ""}
        className="w-full block font-medium placeholder-gray-500 border rounded border-[#615A56] bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        type={type ?? "text"}
        readOnly={readonly}
      />
      <p
        className={`mb-0 text-xs ${
          message?.isError ? "text-custom-primary_red" : "text-green-700"
        }`}
      >
        {message?.message}
      </p>
    </label>
  );
};

const ObscuredLSTextInput = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  type,
  message,
  rightIconClassName,
  readonly,
}) => {
  const doChange = (e) => {
    onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
  };
  const [show, setShow] = useState(false);

  const doToggleShow = () => {
    setShow(!show);
  };
  return (
    <label htmlFor={name} className="w-full">
      <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5">
        {label}
      </span>
      <div className="relative">
        <input
          value={value}
          onChange={doChange}
          id={name}
          name={name}
          placeholder={placeholder ?? ""}
          className="w-full block font-medium placeholder-gray-500 border rounded border-[#615A56] bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          type={show ? "text" : "password"}
          readOnly={readonly}
        />
        <div className="text-custom-primary_red text-xs font-medium absolute h-full flex items-center justify-center top-0 right-4">
          {show ? (
            <IconEye onClick={doToggleShow} className="w-5 h-5" />
          ) : (
            <IconEyeOff onClick={doToggleShow} className="h-5 w-5" />
          )}
        </div>
      </div>
      <p
        className={`mb-0 text-xs ${
          message?.isError ? "text-custom-primary_red" : "text-green-700"
        }`}
      >
        {message?.message}
      </p>
    </label>
  );
};

export { ObscuredLSTextInput };
export default LSTextInput;
