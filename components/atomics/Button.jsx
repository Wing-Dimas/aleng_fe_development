export default function Button({ value, onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      value={value}
      className={`${
        className ? className + " " : ""
      }font-medium text-center text-base bg-custom-secondary-yellow py-3 px-6 rounded-md shadow-custom cursor-pointer`}
    >
      {children}
    </button>
  );
}
