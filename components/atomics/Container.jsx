export default function Container({ className, children }) {
  return (
    <div
      className={`${
        className ? className + " " : ""
      }p-4 rounded-xl border border-neutral-300 shadow-xl bg-custom-white`}
    >
      {children}
    </div>
  );
}
