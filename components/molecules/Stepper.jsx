export default function Stepper({ status }) {
  return (
    <div className="mt-24">
      <nav className="">
        <ol className="flex justify-center items-center">
          <li
            className={`relative w-[150px] text-center text-sm 
                after:content-[''] after:absolute after:left-[40%] after:top-[-150%] after:w-5 after:h-5 
              after:bg-custom-white after:border-2 after:border-custom-primary_red after:rounded-full after:z-50 text-custom-primary_red`}
          >
            Konfirmasi
          </li>

          <li
            className={`relative w-[150px] text-center text-sm 
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(-150%+0.5rem)] before:w-full before:h-1 
            before:bg-gray-300
            after:content-[''] after:absolute after:left-[40%] after:top-[-150%] after:w-5 after:h-5 
            after:bg-gray-300 after:rounded-full after:z-50  ${
              status == "finish" || status== "payment"
                ? " after:bg-custom-white after:border-2 after:border-custom-primary_red before:bg-custom-primary_red text-custom-primary_red"
                : null
            }`}
          >
            Pembayaran
          </li>
          <li
            className={`relative w-[150px] text-center text-sm 
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(-150%+0.5rem)] before:w-full before:h-1 
            before:bg-gray-300
            after:content-[''] after:absolute after:left-[40%] after:top-[-150%] after:w-5 after:h-5 
            after:bg-gray-300 after:rounded-full after:z-50 ${
              status == "finish"
                ? "after:bg-custom-white after:border-2 after:border-custom-primary_red before:bg-custom-primary_red text-custom-primary_red"
                : null
            }`}
          >
            Selesai
          </li>
        </ol>
      </nav>
    </div>
  );
}
