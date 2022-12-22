import { useState } from "react";
import Head from "next/head";
import { useBreakpoint } from "use-breakpoint";
import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Button from "@components/molecules/Button";
import DateInput from "@components/molecules/DateInput";
import FABSheet from "@components/molecules/FABSheet";
import Footer from "@components/molecules/Footer";
import Heading from "@components/molecules/Heading";
import ListCard from "@components/molecules/ListCard";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/molecules/PopOver";
import Text from "@components/molecules/Text";
import TextInput from "@components/molecules/TextInput";
import { BREAKPOINTS } from "@constants/index";
import {
  IconCalendarEvent,
  IconChevronDown,
  IconDoor,
  IconFilter,
  IconHorseToy,
  IconMinus,
  IconPlus,
  IconSeparator,
  IconStar,
  IconSwitchHorizontal,
  IconUser,
  IconUsers,
} from "@tabler/icons";

export default function ListPenginapan() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState({
    price_range: {
      min: 100000,
      max: 500000,
    },
    stars: [false, false, false, false, false],
    facility: {},
    type: {},
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

  const doChangePriceRange = ({ name, value }) => {
    setFilter({
      ...filter,
      price_range: { ...filter.price_range, [name]: parseInt(value) || 0 },
    });
  };

  const doChangeFilterDate = ({ name, value }) => {
    setFilter({ ...filter, date: { ...filter.date, [name]: value } });
  };

  const doSwitchFilterDate = () => {
    setFilter({
      ...filter,
      date: { in: filter.date.out, out: filter.date.in },
    });
  };

  const doChangeFilterOptions = ({ name, value }) => {
    setFilter({ ...filter, options: { ...filter.options, [name]: value } });
  };

  const doToggleSearch = () => {
    setShow(!show);
  };

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen text-[#252525] bg-custom-bg">
      <Head>
        <title>List Penginapan</title>
      </Head>
      <Navbar />
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex items-center justify-between">
          <BreadCrumbs
            breads={[
              { link: "/penginapan", name: "Penginapan" },
              { link: "/penginapan/list", name: "List" },
            ]}
          />
          <Button onClick={doToggleSearch} className="block md:hidden">
            Ubah Pencarian
          </Button>
        </div>
        <Heading.h2>Hotel di Sumenep</Heading.h2>
        <br />
        {/* FAB Filter */}
        {["xs", "sm", "md"].includes(breakpoint) && (
          <FABSheet
            icon={<IconFilter className="w-8 h-8 text-custom-primary_red" />}
          >
            <Text className="text-custom-primary_red mb-4 text-center">
              Filter Pencarian Hotel
            </Text>
            <hr />
            <br />
            {/* Harga per malam */}
            <Text.label>Harga per malam</Text.label>
            <div className="flex items-center gap-4 w-full">
              <TextInput
                type="number"
                name="min"
                containerClassName="w-full"
                className="!text-xs !border-none !shadow-custom !font-medium w-full"
                leftIcon="Rp"
                leftIconClassName="!text-xs !font-medium"
                value={filter.price_range.min}
                onChange={doChangePriceRange}
              />
              <IconSeparator className="w-6 h-6 text-custom-dark_grey" />
              <TextInput
                type="number"
                name="max"
                containerClassName="w-full"
                className="!text-xs !border-none !shadow-custom !font-medium w-full"
                leftIcon="Rp"
                leftIconClassName="!text-xs !font-medium"
                value={filter.price_range.max}
                onChange={doChangePriceRange}
              />
            </div>
            <br />
            {/* Bintang Hotel */}
            <Text.label>Bintang Hotel</Text.label>
            <div className="mb-2 flex items-center gap-2">
              <input type="checkbox" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <input type="checkbox" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <input type="checkbox" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <input type="checkbox" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <input type="checkbox" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <br />
            {/* Fasilitas Hotel */}
            <Text.label>Fasilitas Hotel</Text.label>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Boleh membawa hewan peliharaan
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Kolam Renang
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">AC</Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Light View
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Wifi
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Sarapan
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Ekstra Bantal
                </Text.label>
              </div>
            </div>
            <br />
            {/* Tipe Hotel */}
            <Text.label>Tipe Hotel</Text.label>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Homestay
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Apartemen
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Kos
                </Text.label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <Text.label className="!text-black !font-medium">
                  Hotel
                </Text.label>
              </div>
            </div>
          </FABSheet>
        )}
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          {/* Filter */}
          <div className="hidden lg:block">
            <div className="border shadow-md p-4 rounded-xl bg-white">
              <Text className="text-custom-primary_red mb-4 text-center">
                Filter Pencarian Hotel
              </Text>
              <hr />
              <br />
              {/* Harga per malam */}
              <Text.label>Harga per malam</Text.label>
              <div className="flex items-center gap-4">
                <TextInput
                  type="number"
                  name="min"
                  className="!text-xs !border-none !shadow-custom !font-medium"
                  leftIcon="Rp"
                  leftIconClassName="!text-xs !font-medium"
                  value={filter.price_range.min}
                  onChange={doChangePriceRange}
                />
                <IconSeparator className="w-6 h-6 text-custom-dark_grey" />
                <TextInput
                  type="number"
                  name="max"
                  className="!text-xs !border-none !shadow-custom !font-medium"
                  leftIcon="Rp"
                  leftIconClassName="!text-xs !font-medium"
                  value={filter.price_range.max}
                  onChange={doChangePriceRange}
                />
              </div>
              <br />
              {/* Bintang Hotel */}
              <Text.label>Bintang Hotel</Text.label>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <input type="checkbox" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <br />
              {/* Fasilitas Hotel */}
              <Text.label>Fasilitas Hotel</Text.label>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Boleh membawa hewan peliharaan
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Kolam Renang
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    AC
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Light View
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Wifi
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Sarapan
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Ekstra Bantal
                  </Text.label>
                </div>
              </div>
              <br />
              {/* Tipe Hotel */}
              <Text.label>Tipe Hotel</Text.label>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Homestay
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Apartemen
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Kos
                  </Text.label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <input type="checkbox" />
                  <Text.label className="!text-black !font-medium">
                    Hotel
                  </Text.label>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Options */}
            <div
              className={`${
                !show && "hidden"
              } rounded-md shadow-md p-6 bg-white border block md:flex flex-col lg:flex-row items-center gap-2`}
            >
              <div className="shadow-custom flex flex-col sm:flex-row w-full lg:w-auto lg:items-center bg-white rounded-md text-custom-black text-xs font-medium">
                <DateInput
                  name="in"
                  value={filter.date.in}
                  onChange={doChangeFilterDate}
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
                    onClick={doSwitchFilterDate}
                    className="text-custom-dark_grey p-2 -rotate-90 sm:rotate-0 shadow rounded border lg:border-none lg:rounded-none lg:shadow-none"
                  >
                    <IconSwitchHorizontal height={16} width={16} />
                  </button>
                </div>
                <DateInput
                  name="out"
                  value={filter.date.out}
                  onChange={doChangeFilterDate}
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
                containerClassName="w-full !shadow-custom !border-none !whitespace-nowrap"
                className="text-xs font-medium text-custom-black !shadow-none !border-none"
                childClassName="text-xs"
                name="option"
                label={`${filter.options.room} Kamar ${filter.options.adult} Dewasa ${filter.options.child} Anak`}
                leftIcon={
                  <IconUsers className="text-custom-dark_grey w-4 h-4" />
                }
              >
                {/* Kamar */}
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center justify-start gap-2">
                    <IconDoor className="text-custom-dark_grey w-6 h-6" />
                    <p>Kamar</p>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={doChangeFilterOptions}
                      name="room"
                      value={
                        filter.options.room != 0 ? filter.options.room - 1 : 0
                      }
                      className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                    >
                      <IconMinus className="w-4 h-4" />
                    </button>
                    <p>{filter.options.room}</p>
                    <button
                      onClick={doChangeFilterOptions}
                      name="room"
                      value={filter.options.room + 1}
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
                      onClick={doChangeFilterOptions}
                      name="adult"
                      value={
                        filter.options.adult != 0 ? filter.options.adult - 1 : 0
                      }
                      className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                    >
                      <IconMinus className="w-4 h-4" />
                    </button>
                    <p>{filter.options.adult}</p>
                    <button
                      onClick={doChangeFilterOptions}
                      name="adult"
                      value={filter.options.adult + 1}
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
                      onClick={doChangeFilterOptions}
                      name="child"
                      value={
                        filter.options.child != 0 ? filter.options.child - 1 : 0
                      }
                      className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                    >
                      <IconMinus className="w-4 h-4" />
                    </button>
                    <p>{filter.options.child}</p>
                    <button
                      onClick={doChangeFilterOptions}
                      name="child"
                      value={filter.options.child + 1}
                      className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-white"
                    >
                      <IconPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </PopOver>
              <Button className="whitespace-nowrap w-full lg:w-auto">
                Cari
              </Button>
            </div>
            {/* Content */}
            <div className="mt-4">
              <Text className="!font-normal !mb-4">
                Menampilkan 50 hotel yang tersedia
              </Text>
              <div className="">
                {[...Array(10).keys()].map((_, i) => {
                  return <ListCard key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
