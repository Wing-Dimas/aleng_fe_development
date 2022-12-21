import { useState } from "react";
import Button from "./Button";
import DateInput from "./DateInput";
import PopOver from "./PopOver";
import {
  IconUsers,
  IconMapPin,
  IconDoor,
  IconMinus,
  IconPlus,
  IconUser,
  IconHorseToy,
  IconCalendarEvent,
  IconChevronDown,
  IconSwitchHorizontal,
} from "@tabler/icons";
import TextInput from "./TextInput";

export default function DetailSearchInput({
  isOpen,
  isPenginapan,
  placeholder,
}) {
  const [check, setCheck] = useState({
    date: {
      in: new Date().toISOString().split("T")[0],
      out: new Date().toISOString().split("T")[0],
    },
    options: {
      room: 1,
      adult: 1,
      child: 1,
    },
  });

  const doSwitchCheckDate = () => {
    setCheck({
      ...check,
      date: {
        in: check.date.out,
        out: check.date.in,
      },
    });
  };

  const doChangeCheckDate = ({ name, value }) => {
    setCheck({ ...check, date: { ...check.date, [name]: value } });
  };

  const doChangeCheckOptions = (e) => {
    setCheck({
      ...check,
      options: {
        ...check.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    });
  };

  return isPenginapan ? (
    <div className={`${isOpen ? "hidden" : ""} md:block bg-white`}>
      <div className="flex md:w-full flex-col lg:flex-row items-center gap-4 justify-between p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md mb-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <div className="shadow-custom flex flex-col sm:flex-row w-full lg:w-auto lg:items-center bg-white rounded-md text-custom-black text-xs font-medium">
            <DateInput
              name="in"
              value={check.date.in}
              onChange={doChangeCheckDate}
              containerClassName="w-full lg:w-auto"
              className="shadow-none border-none"
              leftIcon={
                <IconCalendarEvent className="text-custom-dark_grey w-4 h-4" />
              }
              rightIcon={
                <IconChevronDown className="w-4 h-4 text-custom-primary_red" />
              }
            />
            <div className="lg:block flex items-center justify-end gap-2 px-2 lg:px-0">
              <div className="w-full h-[0.5px] bg-custom-light_grey lg:hidden" />
              <button
                onClick={doSwitchCheckDate}
                className="text-custom-dark_grey p-2 -rotate-90 sm:rotate-0 shadow rounded border lg:border-none lg:rounded-none lg:shadow-none"
              >
                <IconSwitchHorizontal height={16} width={16} />
              </button>
            </div>
            <DateInput
              name="out"
              value={check.date.out}
              onChange={doChangeCheckDate}
              containerClassName="w-full lg:w-auto"
              className="shadow-none border-none"
              leftIcon={
                <IconCalendarEvent className="text-custom-dark_grey w-4 h-4" />
              }
              rightIcon={
                <IconChevronDown className="w-4 h-4 text-custom-primary_red" />
              }
            />
          </div>
          <PopOver
            containerClassName="w-full !shadow-custom !border-none whitespace-nowrap"
            className="text-xs font-medium text-custom-black !shadow-none !border-none w-full"
            childClassName="text-xs !border-none !shadow-custom w-full"
            name="option"
            label={`${check.options.room} Kamar ${check.options.adult} Dewasa ${check.options.child} Anak`}
            leftIcon={<IconUsers className="text-custom-dark_grey w-4 h-4" />}
          >
            {/* Kamar */}
            <div className="mb-2 flex items-center justify-between gap-4">
              <div className="flex items-center justify-start gap-2">
                <IconDoor className="text-custom-dark_grey w-6 h-6" />
                <p>Kamar</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={doChangeCheckOptions}
                  name="room"
                  value={check.options.room != 0 ? check.options.room - 1 : 0}
                  className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                >
                  <IconMinus className="w-4 h-4" />
                </button>
                <p>{check.options.room}</p>
                <button
                  onClick={doChangeCheckOptions}
                  name="room"
                  value={check.options.room + 1}
                  className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Dewasa */}
            <div className="mb-2 flex items-center justify-between gap-4">
              <div className="flex items-center justify-start gap-2">
                <IconUser className="text-custom-dark_grey w-6 h-6" />
                <p>Orang Dewasa</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={doChangeCheckOptions}
                  name="adult"
                  value={check.options.adult != 0 ? check.options.adult - 1 : 0}
                  className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                >
                  <IconMinus className="w-4 h-4" />
                </button>
                <p>{check.options.adult}</p>
                <button
                  onClick={doChangeCheckOptions}
                  name="adult"
                  value={check.options.adult + 1}
                  className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Anak */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center justify-start gap-2">
                <IconHorseToy className="text-custom-dark_grey w-6 h-6" />
                <p>Anak-anak</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={doChangeCheckOptions}
                  name="child"
                  value={check.options.child != 0 ? check.options.child - 1 : 0}
                  className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                >
                  <IconMinus className="w-4 h-4" />
                </button>
                <p>{check.options.child}</p>
                <button
                  onClick={doChangeCheckOptions}
                  name="child"
                  value={check.options.child + 1}
                  className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </PopOver>
        </div>
        <Button className="w-full lg:w-auto !px-14">Cari</Button>
      </div>
    </div>
  ) : (
    <div className={`${isOpen ? "hidden" : ""} md:block bg-white`}>
      <div className="flex md:w-full flex-col lg:flex-row items-center gap-4 justify-between p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md mb-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <TextInput
            leftIcon={<IconMapPin className="w-5 h-5" color={"#615A56"} />}
            placeholder={placeholder}
            className="!py-4 text-xs w-full !border-none !shadow-custom !font-medium"
            containerClassName="w-full"
            name="search"
          />
        </div>
        <Button className="w-full lg:w-auto !px-14">Cari</Button>
      </div>
    </div>
  );
}
