import {
  IconChevronDown,
  IconDoor,
  IconHorseToy,
  IconMinus,
  IconPlus,
  IconUser,
  IconUsers,
} from "@tabler/icons";
import { useEffect, useState } from "react";

export default function PopOver({
  className,
  containerClassName,
  childClassName,
  options,
  onChange,
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
      }relative whitespace-nowrap`}
      onBlur={doBlur}
    >
      <input
        type="checkbox"
        className="w-full h-full absolute z-[3] opacity-0 cursor-pointer"
        onClick={doFocus}
      />
      <div
        tabIndex={0}
        className={`${show ? "" : "hidden "}${
          animate ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-2 "
        }${
          childClassName ? childClassName + " " : ""
        }transition-all text-xs absolute top-16 w-full rounded-lg bg-white shadow p-5 border z-[99]`}
      >
        {/* Kamar */}
        <div className="mb-2 flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <IconDoor className="text-custom-dark_grey w-5 h-5" />
            <p className="font-medium text-xs text-custom-black">Kamar</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onChange}
              name="room"
              value={options.room != 0 ? options.room - 1 : 0}
              className="w-5 h-5 flex items-center justify-center rounded bg-yellow-400 text-white"
            >
              <IconMinus className="w-4 h-4" />
            </button>
            <p className="font-medium text-xs text-custom-black">
              {options.room}
            </p>
            <button
              onClick={onChange}
              name="room"
              value={options.room + 1}
              className="w-5 h-5 flex items-center justify-center rounded bg-yellow-400 text-white"
            >
              <IconPlus className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Dewasa */}
        <div className="mb-2 flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <IconUser className="text-custom-dark_grey w-5 h-5" />
            <p className="font-medium text-xs text-custom-black">
              Orang Dewasa
            </p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onChange}
              name="adult"
              value={options.adult != 0 ? options.adult - 1 : 0}
              className="w-5 h-5 flex items-center justify-center rounded bg-yellow-400 text-white"
            >
              <IconMinus className="w-4 h-4" />
            </button>
            <p className="font-medium text-xs text-custom-black">
              {options.adult}
            </p>
            <button
              onClick={onChange}
              name="adult"
              value={options.adult + 1}
              className="w-5 h-5 flex items-center justify-center rounded bg-yellow-400 text-white"
            >
              <IconPlus className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Anak */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <IconHorseToy className="text-custom-dark_grey w-5 h-5" />
            <p className="font-medium text-xs text-custom-black">Anak-anak</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onChange}
              name="child"
              value={options.child != 0 ? options.child - 1 : 0}
              className="w-5 h-5 flex items-center justify-center rounded bg-yellow-400 text-white"
            >
              <IconMinus className="w-4 h-4" />
            </button>
            <p className="font-medium text-xs text-custom-black">
              {options.child}
            </p>
            <button
              onClick={onChange}
              name="child"
              value={options.child + 1}
              className="w-5 h-5 flex items-center justify-center rounded bg-yellow-400 text-white"
            >
              <IconPlus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          className ? className + " " : ""
        }bg-white px-12 py-5 text-xs font-medium rounded-lg shadow-custom w-full text-custom-black`}
      >
        {`${options.room} Kamar ${options.adult} Dewasa ${options.child} Anak`}
        <div className="absolute z-[2] top-0 left-0 px-4 h-full w-full flex items-center justify-between gap-4 text-xs font-medium text-custom-dark_grey">
          <IconUsers className="w-5 h-5" />
          <IconChevronDown className="w-5 h-5 text-custom-primary_red" />
        </div>
      </div>
    </div>
  );
}
