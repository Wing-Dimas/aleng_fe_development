import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function BreadCrumbs({ breads }) {
  return (
    <div className="my-8 w-full ">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          {breads.map((bread, i) => {
            if (i === 0) {
              return (
                <li key={bread.link}>
                  <div className="flex items-center">
                    <Link
                      href={bread.link}
                      className="font-normal text-[#615A56] text-[0.8rem]  w-full"
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
                    className="ml-1 font-normal text-[#615A56]  text-[0.8rem] w-full"
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
