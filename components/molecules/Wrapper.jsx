export default function Wrapper({ children }) {
  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen text-[#252525] bg-custom-bg">
      {children}
    </div>
  );
}
