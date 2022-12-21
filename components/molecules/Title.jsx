export default function Title({ className, children }) {
  return (
    <p
      className={`text-custom-black font-heading2_mobile text-heading2_mobile sm:font-heading1 sm:text-heading1${
        className ? " " + className : ""
      }`}
    >
      {children}
    </p>
  );
}
