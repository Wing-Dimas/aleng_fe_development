export default function InputResLog({name,text,placeholder,type}) {
  return (
    <label htmlFor={name} className="w-full">
      <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5">
        {text}
      </span>
      <input
        id={name}
        placeholder={placeholder}
        className="w-full block font-medium placeholder-gray-500 border rounded border-[#615A56] bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        type={type}
      />
    </label>
  );
}
