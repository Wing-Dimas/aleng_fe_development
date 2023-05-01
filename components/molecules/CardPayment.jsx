import Image from "next/image";
import Text from "@components/atomics/Text";
import { useState } from "react";

export default function CardPayment({ id, name }) {
  const [status, setStatus] = useState(null);

  const handleClick = (event) => {
    console.log(event.currentTarget.checked);
    // setStatus(event.currentTarget.value);
  };

  return (
    <div className="">
      <input
        type="radio"
        id={id}
        name={name}
        className="hidden sr-only peer"
        onClick={handleClick}
      />
      <label
        htmlFor={id}
        className={`flex flex-row items-center w-min sm:w-full  gap-2 border-2 rounded-md border-custom-dark-grey p-1  cursor-pointer peer-checked:border-[#FDD05C]  peer-checked:bg-[#F6F0E1]`}
      >
        <div className="relative w-28">
          <Image
            src="/static_icons/shoppe.png"
            alt="cardPayment"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Text className="text-custom-dark-grey !text-sm">ShoppePay</Text>
          <Text.small className="text-custom-dark-grey !text-xs">
            Pay With Shoppe
          </Text.small>
        </div>
      </label>
    </div>
  );
}
