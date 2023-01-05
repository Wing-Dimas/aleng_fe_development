import { useState } from "react";
import Head from "next/head";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Button from "@components/molecules/Button";
import Checkbox from "@components/molecules/Checkbox";
import Container from "@components/molecules/Container";
import DateInput from "@components/molecules/DateInput";
import FABSheet from "@components/molecules/FABSheet";
import Footer from "@components/molecules/Footer";
import Heading from "@components/molecules/Heading";
import ListCard from "@components/molecules/ListCard";
import MainContent from "@components/molecules/MainContent";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/molecules/PopOver";
import Text from "@components/molecules/Text";
import TextInput from "@components/molecules/TextInput";
import Wrapper from "@components/molecules/Wrapper";
import {
  IconFilter,
  IconSeparator,
  IconStar,
  IconSwitchHorizontal,
} from "@tabler/icons";

export default function ListPenginapan() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState({
    price_range: {
      min: 100000,
      max: 500000,
    },
    stars: {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    },
    facilities: {
      pet: false,
      pool: false,
      ac: false,
      light_view: false,
      wifi: false,
      breakfast: false,
      extra_pillow: false,
    },
    types: {
      homestay: false,
      apartment: false,
      dorm: false,
      hotel: false,
    },
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

  const doChangeFilterOptions = (e) => {
    setFilter({
      ...filter,
      options: {
        ...filter.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    });
  };

  const doChangeFilterStars = ({ name, value }) => {
    setFilter({ ...filter, stars: { ...filter.stars, [name]: value } });
  };

  const doChangeFilterFacilities = ({ name, value }) => {
    setFilter({
      ...filter,
      facilities: { ...filter.facilities, [name]: value },
    });
  };

  const doChangeFilterHotelTypes = ({ name, value }) => {
    setFilter({ ...filter, types: { ...filter.types, [name]: value } });
  };

  const doToggleSearch = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <Head>
        <title>List Penginapan</title>
      </Head>
      <Navbar />
      <MainContent>
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
          <FABSheet icon={<IconFilter className="w-8 h-8" />}>
            <Text className="text-custom-primary_red mb-4 text-center">
              Filter Pencarian Hotel
            </Text>
            <hr />
            <br />
            <Text.label>Harga per malam</Text.label>
            <div className="flex items-center gap-4 w-full">
              <TextInput
                type="number"
                name="min"
                containerClassName="!w-full"
                leftIcon="Rp"
                value={filter.price_range.min}
                onChange={doChangePriceRange}
              />
              <IconSeparator className="w-6 h-6 text-custom-dark_grey" />
              <TextInput
                type="number"
                name="max"
                containerClassName="!w-full"
                leftIcon="Rp"
                value={filter.price_range.max}
                onChange={doChangePriceRange}
              />
            </div>
            <br />
            <Text.label>Bintang Hotel</Text.label>
            <div className="flex flex-col gap-2">
              <Checkbox
                name="one"
                value={filter.stars.one}
                onChange={doChangeFilterStars}
                label={
                  <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                }
              />
              <Checkbox
                name="two"
                value={filter.stars.two}
                onChange={doChangeFilterStars}
                labelClassName="flex items-center gap-2"
                label={
                  <>
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </>
                }
              />
              <Checkbox
                name="three"
                value={filter.stars.three}
                onChange={doChangeFilterStars}
                labelClassName="flex items-center gap-2"
                label={
                  <>
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </>
                }
              />
              <Checkbox
                name="four"
                value={filter.stars.four}
                onChange={doChangeFilterStars}
                labelClassName="flex items-center gap-2"
                label={
                  <>
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </>
                }
              />
              <Checkbox
                name="five"
                value={filter.stars.five}
                onChange={doChangeFilterStars}
                labelClassName="flex items-center gap-2"
                label={
                  <>
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </>
                }
              />
            </div>
            <br />
            <Text.label>Fasilitas Hotel</Text.label>
            <div className="flex flex-col gap-2">
              <Checkbox
                name="pet"
                value={filter.facilities.pet}
                onChange={doChangeFilterFacilities}
                label="Boleh membawa hewan peliharaan"
              />
              <Checkbox
                name="pool"
                value={filter.facilities.pool}
                onChange={doChangeFilterFacilities}
                label="Kolam Renang"
              />
              <Checkbox
                name="ac"
                value={filter.facilities.ac}
                onChange={doChangeFilterFacilities}
                label="AC"
              />
              <Checkbox
                name="light_view"
                value={filter.facilities.light_view}
                onChange={doChangeFilterFacilities}
                label="Light View"
              />
              <Checkbox
                name="wifi"
                value={filter.facilities.wifi}
                onChange={doChangeFilterFacilities}
                label="Wifi"
              />
              <Checkbox
                name="breakfast"
                value={filter.facilities.breakfast}
                onChange={doChangeFilterFacilities}
                label="Sarapan"
              />
              <Checkbox
                name="extra_pillow"
                value={filter.facilities.extra_pillow}
                onChange={doChangeFilterFacilities}
                label="Ekstra Bantal"
              />
            </div>
            <br />
            <Text.label>Tipe Hotel</Text.label>
            <div className="flex flex-col gap-2">
              <Checkbox
                name="homestay"
                value={filter.types.homestay}
                onChange={doChangeFilterHotelTypes}
                label="Homestay"
              />
              <Checkbox
                name="apartment"
                value={filter.types.apartment}
                onChange={doChangeFilterHotelTypes}
                label="Apartemen"
              />
              <Checkbox
                name="dorm"
                value={filter.types.dorm}
                onChange={doChangeFilterHotelTypes}
                label="Kos"
              />
              <Checkbox
                name="hotel"
                value={filter.types.hotel}
                onChange={doChangeFilterHotelTypes}
                label="Hotel"
              />
            </div>
          </FABSheet>
        )}
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          {/* Filter */}
          <div className="hidden lg:block">
            <Container>
              <Text className="text-custom-primary_red mb-4 text-center">
                Filter Pencarian Hotel
              </Text>
              <hr />
              <br />
              <Text.label>Harga per malam</Text.label>
              <div className="flex items-center gap-4">
                <TextInput
                  type="number"
                  name="min"
                  leftIcon="Rp"
                  value={filter.price_range.min}
                  onChange={doChangePriceRange}
                />
                <IconSeparator className="w-6 h-6 text-custom-dark_grey" />
                <TextInput
                  type="number"
                  name="max"
                  leftIcon="Rp"
                  value={filter.price_range.max}
                  onChange={doChangePriceRange}
                />
              </div>
              <br />
              <Text.label>Bintang Hotel</Text.label>
              <div className="flex flex-col gap-2">
                <Checkbox
                  name="one"
                  value={filter.stars.one}
                  onChange={doChangeFilterStars}
                  label={
                    <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  }
                />
                <Checkbox
                  name="two"
                  value={filter.stars.two}
                  onChange={doChangeFilterStars}
                  labelClassName="flex items-center gap-2"
                  label={
                    <>
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </>
                  }
                />
                <Checkbox
                  name="three"
                  value={filter.stars.three}
                  onChange={doChangeFilterStars}
                  labelClassName="flex items-center gap-2"
                  label={
                    <>
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </>
                  }
                />
                <Checkbox
                  name="four"
                  value={filter.stars.four}
                  onChange={doChangeFilterStars}
                  labelClassName="flex items-center gap-2"
                  label={
                    <>
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </>
                  }
                />
                <Checkbox
                  name="five"
                  value={filter.stars.five}
                  onChange={doChangeFilterStars}
                  labelClassName="flex items-center gap-2"
                  label={
                    <>
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </>
                  }
                />
              </div>
              <br />
              <Text.label>Fasilitas Hotel</Text.label>
              <div className="flex flex-col gap-2">
                <Checkbox
                  name="pet"
                  value={filter.facilities.pet}
                  onChange={doChangeFilterFacilities}
                  label="Boleh membawa hewan peliharaan"
                />
                <Checkbox
                  name="pool"
                  value={filter.facilities.pool}
                  onChange={doChangeFilterFacilities}
                  label="Kolam Renang"
                />
                <Checkbox
                  name="ac"
                  value={filter.facilities.ac}
                  onChange={doChangeFilterFacilities}
                  label="AC"
                />
                <Checkbox
                  name="light_view"
                  value={filter.facilities.light_view}
                  onChange={doChangeFilterFacilities}
                  label="Light View"
                />
                <Checkbox
                  name="wifi"
                  value={filter.facilities.wifi}
                  onChange={doChangeFilterFacilities}
                  label="Wifi"
                />
                <Checkbox
                  name="breakfast"
                  value={filter.facilities.breakfast}
                  onChange={doChangeFilterFacilities}
                  label="Sarapan"
                />
                <Checkbox
                  name="extra_pillow"
                  value={filter.facilities.extra_pillow}
                  onChange={doChangeFilterFacilities}
                  label="Ekstra Bantal"
                />
              </div>
              <br />
              <Text.label>Tipe Hotel</Text.label>
              <div className="flex flex-col gap-2">
                <Checkbox
                  name="homestay"
                  value={filter.types.homestay}
                  onChange={doChangeFilterHotelTypes}
                  label="Homestay"
                />
                <Checkbox
                  name="apartment"
                  value={filter.types.apartment}
                  onChange={doChangeFilterHotelTypes}
                  label="Apartemen"
                />
                <Checkbox
                  name="dorm"
                  value={filter.types.dorm}
                  onChange={doChangeFilterHotelTypes}
                  label="Kos"
                />
                <Checkbox
                  name="hotel"
                  value={filter.types.hotel}
                  onChange={doChangeFilterHotelTypes}
                  label="Hotel"
                />
              </div>
            </Container>
          </div>
          <div>
            <Container
              className={`${
                !show && "hidden"
              } md:flex flex-col lg:flex-row items-center gap-2`}
            >
              <div className="mb-2 lg:mb-0 shadow-custom flex flex-col sm:flex-row w-full lg:w-auto lg:items-center bg-white rounded-lg">
                <DateInput
                  name="in"
                  value={filter.date.in}
                  onChange={doChangeFilterDate}
                  containerClassName="w-full lg:w-auto"
                  className="!shadow-none md:!shadow-custom"
                />
                <div className="lg:block flex items-center justify-end gap-2 px-2 lg:px-0">
                  <div className="w-full h-[0.5px] bg-custom-light_grey lg:hidden" />
                  <button
                    onClick={doSwitchFilterDate}
                    className="text-custom-dark_grey p-2 -rotate-90 sm:rotate-0 shadow rounded-lg border lg:border-none lg:rounded-none lg:shadow-none"
                  >
                    <IconSwitchHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <DateInput
                  name="out"
                  value={filter.date.out}
                  onChange={doChangeFilterDate}
                  containerClassName="w-full lg:w-auto"
                  className="!shadow-none md:!shadow-custom"
                />
              </div>
              <PopOver
                containerClassName="!w-full !mb-2 lg:!mb-0"
                options={filter.options}
                onChange={doChangeFilterOptions}
                pages="penginapan"
              />
              <Button className="whitespace-nowrap w-full lg:w-auto">
                Cari
              </Button>
            </Container>
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
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  );
}
