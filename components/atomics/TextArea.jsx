export default function TextArea({
  className,
  name,
  placeholder,
  value,
  onChange,
}) {
  const doChange = (e) => {
    onChange({ name, value: e.currentTarget.value })
  }

  return (
    <textarea
      className={`${
        className ? className + " " : ""
      }text-xs font-medium w-full p-4 rounded-lg shadow-custom outline-none bg-white h-48 resize-none`}
      maxLength={250}
      onChange={doChange}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
    ></textarea>
  )
}
