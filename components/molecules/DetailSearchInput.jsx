import { useState } from "react";
import Button from "./Button";
import DateInput from "./DateInput";
import PopOver from "./PopOver";
import { IconMapPin, IconSwitchHorizontal } from "@tabler/icons";
import TextInput from "./TextInput";
import Container from "./Container";

export default function DetailSearchInput({
  isOpen,
  isPenginapan,
  placeholder,
  order,
  setOrder,
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
    <div className={`${isOpen ? "hidden" : ""} md:block`}>
      <Container className="!flex md:!w-full !flex-col lg:!flex-row !items-center !gap-4 !justify-between mb-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <div className="shadow-custom flex flex-col sm:flex-row w-full lg:w-auto lg:items-center bg-white rounded-md text-custom-black text-xs font-medium">
            <DateInput
              name="in"
              value={check.date.in}
              onChange={doChangeCheckDate}
              containerClassName="w-full lg:w-auto"
              className="shadow-none lg:shadow-custom"
            />
            <div className="lg:block flex items-center justify-end gap-2 px-2 lg:px-0">
              <div className="w-full h-[0.5px] bg-custom-light_grey lg:hidden" />
              <button
                onClick={doSwitchCheckDate}
                className="text-custom-dark_grey p-2 -rotate-90 sm:rotate-0 shadow-custom rounded-lg border lg:border-none lg:rounded-none lg:shadow-none"
              >
                <IconSwitchHorizontal height={16} width={16} />
              </button>
            </div>
            <DateInput
              name="out"
              value={check.date.out}
              onChange={doChangeCheckDate}
              containerClassName="w-full lg:w-auto"
              className="shadow-none lg:shadow-custom"
            />
          </div>
          <PopOver
            containerClassName="w-full"
            options={check.options}
            onChange={doChangeCheckOptions}
            pages="penginapan"
          />
        </div>
        <Button className="w-full lg:w-auto !px-14">Cari</Button>
      </Container>
    </div>
  ) : (
    <div className={`${isOpen ? "hidden" : ""} md:block`}>
      <Container className="!flex md:!w-full !flex-col lg:!flex-row !items-center !gap-4 !justify-between mb-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <TextInput
            leftIcon={<IconMapPin className="w-5 h-5 text-custom-dark_grey" />}
            placeholder={placeholder}
            className="!w-full"
            containerClassName="!w-full"
            name="search"
          />
        </div>
        <Button className="w-full lg:w-auto !px-14">Cari</Button>
      </Container>
    </div>
  );
}
