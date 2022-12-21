import { useEffect, useState } from "react";

export default function PopOver({
  name,
  leftIcon,
  label,
  className,
  containerClassName,
  childClassName,
  children,
}) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  const doFocus = () => {
    if (!show) {
      setShow(true);
    } else {
      setAnimate(false);
    }
  };

  const doBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setAnimate(false);
    }
  };

  useEffect(() => {
    if (show) {
      setAnimate(true);
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
    <div
      className={`${
        containerClassName ? containerClassName + " " : ""
      }relative`}
      onBlur={doBlur}
    >
      <div
        tabIndex={0}
        className={`${show ? "" : "hidden "}${
          animate ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-2 "
        }${
          childClassName ? childClassName + " " : ""
        }transition-all absolute top-14 w-full rounded bg-white shadow p-4 border z-[99]`}
      >
        {children}
      </div>
      <input
        type="checkbox"
        name={name}
        className="w-full h-full absolute opacity-0 cursor-pointer"
        onClick={doFocus}
      />
      <div
        className={`${
          className ? className + " " : ""
        }bg-white p-4 rounded-lg shadow border w-full`}
      >
        <div className="flex items-center gap-4">
          {leftIcon}
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
}
