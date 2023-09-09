export default function Title({ className, children }) {
  return (
    <p
      className={`tracking-tight text-custom-black font-heading2-mobile text-heading2-mobile sm:font-heading1 sm:text-heading1${
        className ? " " + className : ""
      }`}
    >
      {children}
    </p>
  )
}
