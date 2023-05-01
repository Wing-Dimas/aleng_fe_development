import { useState } from "react";
import Head from "next/head";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import BreadCrumbs from "@components/atomics/BreadCrumbs";
import Button from "@components/atomics/Button";
import Checkbox from "@components/atomics/Checkbox";
import Container from "@components/atomics/Container";
import DateInput from "@components/atomics/DateInput";
import FABSheet from "@components/atomics/FABSheet";
import Footer from "@components/molecules/Footer";
import Heading from "@components/atomics/Heading";
import ListCardWisata from "@components/molecules/ListCardWisata";
import MainContent from "@components/atomics/MainContent";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/atomics/PopOver";
import Text from "@components/atomics/Text";
import TextInput from "@components/atomics/TextInput";
import Wrapper from "@components/atomics/Wrapper";
import {
  IconFilter,
  IconMapPin,
  IconSeparator,
  IconStar,
  IconSwitchHorizontal,
} from "@tabler/icons-react";

export default function ListWisata() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState({
    price_range: {
      min: 100000,
      max: 500000,
    },
    types: {
      pantai: false,
      bersejarah: false,
      mangrove: false,
      outbound: false,
    },
    search: "",
  });

  const doChangeFilterPriceRange = ({ name, value }) => {
    setFilter({
      ...filter,
      price_range: { ...filter.price_range, [name]: parseInt(value) || 0 },
    });
  };

  const doChangeFilterWisataTypes = ({ name, value }) => {
    setFilter({ ...filter, types: { ...filter.types, [name]: value } });
  };

  const doChangeFilterSearch = ({ _, value }) => {
    setFilter({ ...filter, search: value });
  };

  const doToggleSearch = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <Head>
        <title>List Wisata</title>
      </Head>
      <Navbar />
      <MainContent>
        <div className="flex items-center justify-between">
          <BreadCrumbs
            breads={[
              { link: "/", name: "Wisata" },
              { link: "/wisata/list", name: "List" },
            ]}
          />
          <Button onClick={doToggleSearch} className="block md:hidden">
            Ubah Pencarian
          </Button>
        </div>
        <Heading.h2>Wisata di Sumenep</Heading.h2>
        <br />
        {/* FAB Filter */}
        {["xs", "sm", "md"].includes(breakpoint) && (
          <FABSheet icon={<IconFilter className="w-8 h-8" />}>
            <Text className="text-custom-primary_red mb-4 text-center">
              Filter Pencarian Wisata
            </Text>
            <hr />
            <br />
            <Text.label>Harga wisata</Text.label>
            <div className="mt-1 flex items-center gap-4 w-full">
              <TextInput
                type="number"
                name="min"
                containerClassName="!w-full"
                leftIcon="Rp"
                value={filter.price_range.min}
                onChange={doChangeFilterPriceRange}
              />
              <IconSeparator className="w-6 h-6 text-custom-dark_grey" />
              <TextInput
                type="number"
                name="max"
                containerClassName="!w-full"
                leftIcon="Rp"
                value={filter.price_range.max}
                onChange={doChangeFilterPriceRange}
              />
            </div>
            <br />
            <Text.label>Tipe Wisata</Text.label>
            <div className="mt-1 flex flex-col gap-2">
              <Checkbox
                name="pantai"
                value={filter.types.pantai}
                onChange={doChangeFilterWisataTypes}
                label="Pantai"
              />
              <Checkbox
                name="bersejarah"
                value={filter.types.bersejarah}
                onChange={doChangeFilterWisataTypes}
                label="Bersejarah"
              />
              <Checkbox
                name="mangrove"
                value={filter.types.mangrove}
                onChange={doChangeFilterWisataTypes}
                label="Mangrove"
              />
              <Checkbox
                name="outbound"
                value={filter.types.outbound}
                onChange={doChangeFilterWisataTypes}
                label="Outbound"
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
            <Container className="w-max max-w-sm">
              <Text className="text-custom-primary_red mb-4 text-center">
                Filter Pencarian Wisata
              </Text>
              <hr />
              <br />
              <Text.label>Harga wisata</Text.label>
              <div className="mt-1 flex items-center gap-4">
                <TextInput
                  type="number"
                  name="min"
                  leftIcon="Rp"
                  value={filter.price_range.min}
                  onChange={doChangeFilterPriceRange}
                />
                <IconSeparator className="w-6 h-6 text-custom-dark_grey" />
                <TextInput
                  type="number"
                  name="max"
                  leftIcon="Rp"
                  value={filter.price_range.max}
                  onChange={doChangeFilterPriceRange}
                />
              </div>
              <br />
              <Text.label>Tipe Wisata</Text.label>
              <div className="mt-1 flex flex-col gap-2">
                <Checkbox
                  name="pantai"
                  value={filter.types.pantai}
                  onChange={doChangeFilterWisataTypes}
                  label="Pantai"
                />
                <Checkbox
                  name="bersejarah"
                  value={filter.types.bersejarah}
                  onChange={doChangeFilterWisataTypes}
                  label="Bersejarah"
                />
                <Checkbox
                  name="mangrove"
                  value={filter.types.mangrove}
                  onChange={doChangeFilterWisataTypes}
                  label="Mangrove"
                />
                <Checkbox
                  name="outbound"
                  value={filter.types.outbound}
                  onChange={doChangeFilterWisataTypes}
                  label="Outbound"
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
              <TextInput
                name="search"
                value={filter.search}
                onChange={doChangeFilterSearch}
                placeholder="Destinasi kunjungan"
                leftIcon={<IconMapPin className="w-5 h-5" />}
                className="w-full"
                containerClassName="w-full"
              />
              <Button className="whitespace-nowrap w-full lg:w-auto">
                Cari
              </Button>
            </Container>
            <div className="mt-4">
              <Text className="!font-normal !mb-4">
                Menampilkan 50 Wisata yang tersedia
              </Text>
              <div className="">
                {[...Array(10).keys()].map((_, i) => {
                  return <ListCardWisata key={i} />;
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
