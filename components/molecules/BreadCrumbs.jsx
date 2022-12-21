import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";

export default function BreadCrumbs({ breads }) {
  return (
    <div className="my-8 w-1/2 md:w-full ">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          {breads.map((bread, i) => {
            if (i === 0) {
              return (
                <li key={bread.link}>
                  <div className="flex items-center">
                    <Link
                      href={bread.link}
                      className="font-normal text-[#615A56] text-[0.8rem] truncate overflow-hidden sm:max-w-full max-w-[1rem] w-full"
                    >
                      {bread.name}
                    </Link>
                  </div>
                </li>
              );
            }
            return (
              <li key={bread.link}>
                <div className="flex items-center">
                  <IconChevronRight className="w-4 h-4 text-[#615A56]" />
                  <Link
                    href={bread.link}
                    className="ml-1 font-normal text-[#615A56]  text-[0.8rem] sm:max-w-full  truncate max-w-[1rem] w-full"
                  >
                    {bread.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
