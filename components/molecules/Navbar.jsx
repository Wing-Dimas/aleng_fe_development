import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBeach,
  IconBuildingCottage,
  IconBus,
  IconHorseToy,
  IconMenu,
  IconSearch,
  IconSoup,
} from "@tabler/icons";
import Text from "@components/atomics/Text";

export default function Navbar({ isFixed = false }) {
  const [tabId, setTabId] = useState("wisata");
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [animateExpand, setAnimateExpand] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [expandOptions, setExpandOptions] = useState(false);
  const [animateExpandOptions, setAnimateExpandOptions] = useState(false);

  const doChangeTabId = (e) => {
    if (e.currentTarget.value == "penginapan") {
      setExpandOptions(true);
    } else {
      setAnimateExpandOptions(false);
    }
    setTabId(e.currentTarget.value);
  };

  const doExpandNavbar = () => {
    setExpandNavbar(true);
  };

  const doBlurNavbar = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setAnimateExpand(false);
    }
  };

  useEffect(() => {
    if (expandNavbar) {
      setAnimateExpand(true);
    }
  }, [expandNavbar]);

  useEffect(() => {
    if (!animateExpand) {
      setTimeout(() => {
        setExpandNavbar(false);
      }, 150);
    }
  }, [animateExpand]);

  useEffect(() => {
    if (expandOptions) {
      setAnimateExpandOptions(true);
    }
  }, [expandOptions]);

  useEffect(() => {
    if (!animateExpandOptions) {
      setTimeout(() => {
        setExpandOptions(false);
      }, 150);
    }
  }, [animateExpandOptions]);

  const doChangeKeyword = (e) => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <div
      className={
        isFixed ? "fixed w-full top-0 z-[1000]" : "sticky top-0 z-[1000]"
      }
    >
      <div className="relative" onBlur={doBlurNavbar}>
        <div
          tabIndex={1}
          className={`${
            expandNavbar ? "border-transparent shadow-none" : "shadow-sm"
          } border-b bg-white sticky top-0 z-[1000] w-full transition-all`}
        >
          <div
            style={{ gridTemplateColumns: "1fr auto 1fr" }}
            className="z-[1000] max-w-7xl m-auto px-4 sm:px-8 py-2 md:py-4 flex justify-between emd:grid items-center w-full gap-4 sm:gap-8"
          >
            <div className="hidden emd:block">
              <Link href="/">
                <Image
                  src="/static_icons/logo.png"
                  alt="logo"
                  width={48}
                  height={48}
                  className="drop-shadow-md max-w-[40px] w-full"
                />
              </Link>
            </div>
            <div className="relative w-full emd:w-96">
              <input
                value={keyword}
                onChange={doChangeKeyword}
                onFocus={doExpandNavbar}
                type="text"
                placeholder="Lagi pengen cari apa nih?"
                className="border transition-all w-full focus:ring-1 focus:ring-red-300 border-neutral-300 bg-neutral-50 hover:bg-neutral-100 focus:bg-neutral-100 rounded-full outline-none pl-12 pr-20 placeholder-shown:pl-9 placeholder-shown:pr-9 py-2.5 placeholder-shown:text-neutral-300 placeholder-shown:text-center"
              />
              <div className="absolute left-4 top-0 h-full flex flex-col items-center justify-center">
                <IconSearch className="h-5 w-5 text-neutral-400" />
              </div>
              {keyword && (
                <div className="absolute right-2 top-0 h-full flex flex-col items-center justify-center">
                  <button className="text-sm bg-custom-secondary_yellow px-2 py-1.5 font-medium rounded-full">
                    Search
                  </button>
                </div>
              )}
            </div>
            <div>
              <NavbarMenu />
            </div>
          </div>
        </div>
        <div
          tabIndex={1}
          className={`${expandNavbar ? "block" : "hidden"} ${
            animateExpand ? "translate-y-0" : "-translate-y-full"
          } transition-all z-[999] absolute top-full w-full`}
        >
          <div className="relative">
            <div className="z-[999] w-full bg-white py-4">
              <div className="scrollbar scrollbar-h-1 scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-full max-w-3xl mx-auto overflow-auto whitespace-nowrap flex-nowrap flex items-center justify-between gap-2">
                <button
                  value="wisata"
                  onClick={doChangeTabId}
                  className={`${
                    tabId === "wisata" ? "bg-neutral-100" : "border-transparent"
                  } ml-6 border rounded-full py-2 px-4 flex items-center justify-center gap-2`}
                >
                  <IconBeach className="h-5 w-5" />
                  <p>Wisata</p>
                </button>
                <button
                  value="kuliner"
                  onClick={doChangeTabId}
                  className={`${
                    tabId === "kuliner"
                      ? "bg-neutral-100"
                      : "border-transparent"
                  } border rounded-full py-2 px-4 flex items-center justify-center gap-2`}
                >
                  <IconSoup className="h-5 w-5" />
                  <p>Kuliner</p>
                </button>
                <button
                  value="penginapan"
                  onClick={doChangeTabId}
                  className={`${
                    tabId === "penginapan"
                      ? "bg-neutral-100"
                      : "border-transparent"
                  } border rounded-full py-2 px-4 flex items-center justify-center gap-2`}
                >
                  <IconBuildingCottage className="h-5 w-5" />
                  <p>Penginapan</p>
                </button>
                <button
                  value="kerajinan"
                  onClick={doChangeTabId}
                  className={`${
                    tabId === "kerajinan"
                      ? "bg-neutral-100"
                      : "border-transparent"
                  } border rounded-full py-2 px-4 flex items-center justify-center gap-2`}
                >
                  <IconHorseToy className="h-5 w-5" />
                  <p>Kerajinan</p>
                </button>
                <button
                  value="transportasi"
                  onClick={doChangeTabId}
                  className={`${
                    tabId === "transportasi"
                      ? "bg-neutral-100"
                      : "border-transparent"
                  } mr-6 border rounded-full py-2 px-4 flex items-center justify-center gap-2`}
                >
                  <IconBus className="h-5 w-5" />
                  <p>Transportasi</p>
                </button>
              </div>
            </div>
            <div
              tabIndex={1}
              className={`${
                expandOptions && expandNavbar ? "block" : "hidden"
              } ${
                animateExpandOptions && animateExpand
                  ? "translate-y-0"
                  : "-translate-y-full"
              } transition-all absolute z-[-1] bg-white w-full py-4`}
            >
              <div className="scrollbar scrollbar-h-1 scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-full relative max-w-2xl mx-auto flex flex-nowrap overflow-auto items-center justify-between">
                <div className="relative">
                  <input
                    type="date"
                    className="relative outline-none py-2 px-8 rounded-full border"
                  />
                </div>
                <input
                  type="date"
                  className="relative outline-none p-2 rounded-full border"
                />
                <select className="">
                  <option>hsdgisdog</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${expandNavbar ? "block" : "hidden"} ${
          animateExpand ? "opacity-50" : "opacity-0"
        } transition-all z-[997] absolute top-0 bg-black w-full h-screen`}
      />
    </div>
  );
}

const NavbarMenu = () => {
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
      onBlur={doBlur}
      className="relative z-[1000] flex items-center justify-end"
    >
      <button
        onClick={doFocus}
        className="transition-all hover:bg-neutral-100 flex items-center gap-2 border px-4 py-2 rounded-full"
      >
        <Text className="hidden sm:block">Menu</Text>
        <IconMenu className="h-5 w-5" />
      </button>
      <div
        tabIndex={1}
        className={`${show ? "" : "hidden "}${
          animate ? "opacity-100 scale-100 " : "opacity-0 scale-95 "
        }transition-all origin-top-right text-sm font-medium absolute flex flex-col top-12 right-0 bg-white shadow-xl border rounded-xl w-64`}
      >
        <Link
          href="/unduh-aplikasi"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          Unduh Aplikasi
        </Link>
        <Link
          href="/collection"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          Koleksi Kamu
        </Link>
        <Link
          href="/my-order"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          My Order
        </Link>
        <Link
          href="/profile"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          Profile
        </Link>
        <div className="grid grid-cols-2 p-2 gap-2">
          <Link
            className="text-center bg-gradient-to-br from-custom-gradient1 to-custom-gradient2 text-white rounded-md transition-all p-2"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="text-center bg-custom-gradient1 rounded-md transition-all p-2"
            href="/register"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
