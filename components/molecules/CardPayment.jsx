import Image from "next/image";
import Text from "./Text";

export default function CardPayment() {
  return (
    <div className="flex flex-row items-center w-min sm:w-full  gap-2 border-2 rounded-md border-custom-dark_grey p-1">
      <div className="relative w-28">
        <Image src="/payment/shoppe.png" alt="cardPayment" width={1000} height={1000} className="" />
      </div>
      <div>
        <Text className="text-custom-dark_grey !text-sm">ShoppePay</Text>
        <Text.small className="text-custom-dark_grey !text-xs">Pay With Shoppe</Text.small>
      </div>
    </div>
  );
}
