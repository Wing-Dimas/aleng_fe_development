export default function BreadCrumbs({pages, prev, current }) {
  return (
    <div className="my-8 w-1/2 md:w-full ">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          <li>
            <div className="flex items-center">
              <p className="font-normal text-[#615A56] text-[0.8rem] truncate overflow-hidden sm:max-w-full max-w-[1rem] w-full">
                {pages}
              </p>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-4 h-4  text-[#615A56]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="ml-1 font-normal text-[#615A56]  text-[0.8rem] sm:max-w-full  truncate max-w-[1rem] w-full">
                Sumenep
              </p>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-4 h-4  text-[#615A56]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="ml-1 font-normal text-[#615A56] text-[0.8rem]  sm:max-w-full  truncate max-w-[1rem] w-full">
                Kaberaz Luxury
              </p>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
