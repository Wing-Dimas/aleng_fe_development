export default function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`${
        className ? className + " " : ""
      }font-medium text-center text-base bg-custom-secondary_yellow py-3 px-6 rounded-md shadow-custom cursor-pointer`}
    >
      {children}
    </button>
  );
}
