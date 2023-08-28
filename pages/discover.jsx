import MainContent from "@components/atomics/MainContent";
import Wrapper from "@components/atomics/Wrapper";
import Navbar from "@components/molecules/Navbar";
import {
  IconBookmark,
  IconCash,
  IconLoader,
  IconMapPin,
  IconSettings,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import Head from "next/head";
import Heading from "@components/atomics/Heading";
import Text from "@components/atomics/Text";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TextInput from "@components/atomics/TextInput";
import Select from "@components/atomics/Select";
import Button from "@components/atomics/Button";
import { toRupiah } from "@utils/libs";
import HoverPlayer from "@components/molecules/HoverPlayer";
import Link from "next/link";
import axios from "axios";

export default function Discover() {
  const router = useRouter();
  const [catalogue, setCatalogue] = useState({
    paket: [],
    wisata: [],
    kuliner: [],
    penginapan: [],
    transportasi: [],
    kerajinan: [],
  });
  const [tabId, setTabId] = useState("paket");
  const [expand, setExpand] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [options, setOptions] = useState({
    check_in: new Date(),
    check_out: new Date(),
    room_count: 1,
    adult_count: 1,
    child_count: 0,
  });
  const [advancedOptions, setAdvancedOptions] = useState({
    city: "default",
    min_star: "default",
    max_price: "",
  });

  const doChangeAdvancedOptions = ({ name, value }) => {
    setAdvancedOptions({ ...advancedOptions, [name]: value });
  };

  useEffect(() => {
    const query = router.query;
    setOptions({
      check_in: query.in ?? options.check_in,
      check_out: query.out ?? options.check_out,
      room_count: query.room ?? options.room_count,
      adult_count: query.adult ?? options.adult_count,
      child_count: query.child ?? options.child_count,
    });
    setAdvancedOptions({
      city: query.city ?? advancedOptions.city,
      min_star: query.minStar ?? advancedOptions.min_star,
      max_price: query.maxPrice ?? advancedOptions.max_price,
    });
    setKeyword(query.keyword ?? keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const doExpand = () => {
    setExpand(true);
  };

  const doShrink = () => {
    setAnimate(false);
  };

  useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
      setAnimate(true);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [expand]);

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        setExpand(false);
      }, 500);
    }
  }, [animate]);

  const doSearchWithOptions = () => {
    let newQuery = `/discover?tabId=${tabId}&keyword=${keyword}`;
    if (tabId === "penginapan") {
      newQuery = `${newQuery}&room=${options.room_count}&adult=${options.adult_count}&child=${options.child_count}`;
    }
    if (advancedOptions.city !== "default") {
      newQuery = `${newQuery}&city=${advancedOptions.city}`;
    }
    if (advancedOptions.min_star !== "default") {
      newQuery = `${newQuery}&minStar=${advancedOptions.min_star}`;
    }
    if (advancedOptions.max_price !== "") {
      newQuery = `${newQuery}&maxPrice=${advancedOptions.max_price}`;
    }
    router.replace(newQuery).then(() => {
      router.reload();
    });
  };

  const getData = async (id) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://raw.githubusercontent.com/afifcodes/sample-api/main/sample/discover/${id}.json`
      );
      setCatalogue({ ...catalogue, [id]: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const query = router.query;
    setTabId(query.tabId ?? tabId);
    getData(query.tabId ?? tabId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Wrapper>
      <Head>
        <title>Discover | Lanjalan</title>
      </Head>
      <div className="sticky top-0 z-[90]">
        <Navbar isDiscover />
      </div>
      {/* Drawer */}
      <div
        className={`${expand ? "block" : "hidden"} ${
          animate ? "bg-opacity-25" : "bg-opacity-0"
        } transition-all fixed h-full w-screen left-0 z-[90] bg-black`}
      >
        <div
          className="relative grid h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          <div onClick={doShrink}></div>
          <div
            className={`${
              animate ? "translate-x-0" : "translate-x-full"
            } flex flex-col gap-4 transition-transform duration-500 h-full bg-white p-8`}
          >
            <Heading.h3>Atur Pencarian</Heading.h3>
            <TextInput
              name="max_price"
              leftIcon={<IconCash className="w-5 h-5" />}
              onChange={doChangeAdvancedOptions}
              value={advancedOptions.max_price}
              placeholder="Maksimal harga"
              type="number"
            />
            <Select
              leftIcon={<IconMapPin className="w-5 h-5" />}
              value={advancedOptions.city}
              name="city"
              onChange={doChangeAdvancedOptions}
              options={[
                {
                  name: "Kota",
                  value: "default",
                },
                {
                  name: "Bangkalan",
                  value: "bangkalan",
                },
                {
                  name: "Pamekasan",
                  value: "pamekasan",
                },
                {
                  name: "Sumenep",
                  value: "sumenep",
                },
                {
                  name: "Sampanng",
                  value: "sampang",
                },
              ]}
            />
            <Select
              leftIcon={<IconStar className="w-5 h-5" />}
              value={advancedOptions.min_star}
              name="min_star"
              onChange={doChangeAdvancedOptions}
              options={[
                {
                  name: "Rating minimal",
                  value: "default",
                },
                {
                  name: "1",
                  value: "1",
                },
                {
                  name: "2",
                  value: "2",
                },
                {
                  name: "3",
                  value: "3",
                },
                {
                  name: "4",
                  value: "4",
                },
                {
                  name: "5",
                  value: "5",
                },
              ]}
            />
            <Button onClick={doSearchWithOptions}>Atur Pencarian</Button>
          </div>
        </div>
      </div>
      <div className="z-[50] fixed bottom-0 left-0 w-full flex items-center justify-center my-4">
        <div className="p-1 w-fit bg-black bg-opacity-20 backdrop-blur-md rounded-full overflow-hidden">
          <button
            onClick={doExpand}
            className="font-semibold bg-white p-3 flex items-center gap-2 rounded-full"
          >
            <IconSettings className="h-5 w-5" />
            <span>Atur Pencarian</span>
          </button>
        </div>
      </div>
      <MainContent isDiscover>
        <br />
        <div className="grid grid-cols-1 exs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-8">
          {catalogue[tabId].map((item) => {
            return (
              <Card
                key={item.id}
                url={"/" + tabId + "/" + item.id}
                thumbnail_url={item.thumbnail_url}
                short_video_url={item.short_video_url}
                name={item.name}
                star={item.star}
                price={item.price}
                address={item.address}
                unit={
                  ["paket", "penginapan", "transportasi"].includes(tabId)
                    ? "orang"
                    : tabId === "wisata"
                    ? "wisatawan"
                    : tabId === "kuliner"
                    ? "reservasi"
                    : "item"
                }
              />
            );
          })}
        </div>
        <br />
        <br />
        <br />
      </MainContent>
    </Wrapper>
  );
}

const Card = ({
  url,
  thumbnail_url,
  short_video_url,
  name,
  star,
  price,
  address,
  unit = "malam",
}) => {
  return (
    <Link href={url}>
      <HoverPlayer
        video_url={short_video_url}
        thumbnail_url={thumbnail_url}
        className="rounded-2xl overflow-hidden aspect-[9/10]"
        alt="lenjhelenan"
      />
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-orange-400">
            <IconStarFilled className="h-4 w-4" />
            <Text.small className="font-semibold">{star}</Text.small>
          </div>
          <Text.small className="text-custom-primary-red">
            {toRupiah.format(price)}/{unit}
          </Text.small>
        </div>
        <Heading.h3 className="!font-bold tracking-tight">{name}</Heading.h3>
        <Text.label className="!font-medium !text-neutral-700">
          {address}
        </Text.label>
      </div>
    </Link>
  );
};
