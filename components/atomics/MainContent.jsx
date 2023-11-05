export default function MainContent({ isDiscover, children }) {
  return (
    <div
      className={`${
        isDiscover ? "max-w-[112rem] px-4 md:px-8" : "max-w-7xl px-4"
      } mx-auto`}
    >
      {children}
    </div>
  )
}
