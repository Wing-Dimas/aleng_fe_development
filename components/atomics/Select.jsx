import { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

export default function Select({
  containerClassName,
  className,
  childClassName,
  buttonClassName,
  leftIcon,
  name,
  value,
  onChange,
  options,
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

  const doChange = (e) => {
    onChange({ name, value: e.currentTarget.value });
    doFocus();
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
      }relative w-full text-left`}
      onBlur={doBlur}
    >
      <div
        tabIndex={0}
        className={`${show ? "" : "hidden "}${
          animate ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-2 "
        }${
          childClassName ? childClassName + " " : ""
        }max-h-96 overflow-y-auto transition-all text-left absolute top-16 w-full rounded-md bg-white shadow-custom p-2 border z-[99]`}
      >
        {options.map((o, i) => {
          return (
            <button
              value={o.value}
              onClick={doChange}
              key={o.value}
              className={`${
                buttonClassName ? buttonClassName + " " : ""
              }w-full px-12 py-3 text-xs font-medium transition-all bg-white hover:bg-neutral-200 text-left rounded-md`}
            >
              {o.name}
            </button>
          );
        })}
      </div>
      <button
        onClick={doFocus}
        className={`${
          className ? className + " " : ""
        }outline-none px-12 py-5 text-xs font-medium rounded-lg shadow-custom w-full text-left`}
      >
        {options.find((o, i) => o.value == value).name}
      </button>
      <div className="absolute h-full w-full pointer-events-none top-0 flex px-4 items-center justify-between">
        {leftIcon}
        <IconChevronDown className="h-5 w-5 text-custom-primary-red" />
      </div>
    </div>
  );
}
