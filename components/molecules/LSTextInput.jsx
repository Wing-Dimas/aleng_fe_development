export default function LSTextInput({
  value,
  onChange,
  name,
  label,
  placeholder,
  type,
  message,
  readonly,
}) {
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
}
