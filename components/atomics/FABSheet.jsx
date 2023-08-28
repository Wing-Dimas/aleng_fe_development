import { useEffect, useState } from "react";

export default function FABSheet({ className, icon, children }) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  const doToggleSheet = () => {
    if (!show) {
      setShow(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    if (show) {
      setAnimate(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        setShow(false);
      }, 150);
    }
  }, [animate]);

  return (
    <>
      <div
        onClick={doToggleSheet}
        className={`${show ? "block" : "hidden"} ${
          animate ? "bg-opacity-25" : "bg-opacity-0"
        } z-[50] bg-black fixed top-0 left-0 h-screen w-screen transition-all`}
      />
      <div
        className={`${show ? "block" : "hidden"} ${
          animate ? "translate-y-0" : "translate-y-full"
        } ${
          className ? className + " " : ""
        }transition-all z-[51] max-h-screen w-screen fixed left-0 bottom-0 bg-white p-4 rounded-t-3xl`}
      >
        {children}
      </div>
      <div className="fixed z-[50] right-8 bottom-8">
        <button
          onClick={doToggleSheet}
          className="p-2 rounded-full shadow bg-custom-secondary-yellow text-custom-primary-red"
        >
          {icon}
        </button>
      </div>
    </>
  );
}
