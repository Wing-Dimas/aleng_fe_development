import MainContent from "@components/atomics/MainContent";
import Wrapper from "@components/atomics/Wrapper";
import Navbar from "@components/molecules/Navbar";
import {
  IconBookmark,
  IconCash,
  IconMapPin,
  IconSettings,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import Head from "next/head";
import Heading from "@components/atomics/Heading";
import Text from "@components/atomics/Text";
import { useRouter as useNavigator } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TextInput from "@components/atomics/TextInput";
import Select from "@components/atomics/Select";
import Button from "@components/atomics/Button";

export default function Discover() {
  const navigator = useNavigator();
  const router = useRouter();
  const [tabId, setTabId] = useState("wisata");
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

  useEffect(() => {
    const query = router.query;
    setTabId(query.tabId ?? tabId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

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

  return (
    <Wrapper>
      <Head>
        <title>Discover | Lanjalan</title>
      </Head>
      <div className="sticky top-0 z-10">
        <Navbar isDiscover />
      </div>
      {/* Drawer */}
      <div
        className={`${expand ? "block" : "hidden"} ${
          animate ? "bg-opacity-25" : "bg-opacity-0"
        } transition-all fixed h-full w-screen left-0 z-[1000] bg-black`}
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
      <MainContent isDiscover>
        <div className="fixed bottom-0 left-0 w-full flex items-center justify-center my-4">
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
        <br />
        <div className="grid grid-cols-1 exs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-8">
          {[...Array(24).keys()].map((v) => {
            return <Card key={v} num={v} tabId={tabId} />;
          })}
        </div>
      </MainContent>
    </Wrapper>
  );
}

const Card = ({ num, tabId }) => {
  const id =
    tabId === "kuliner"
      ? "culinary"
      : tabId === "penginapan"
      ? "home stay"
      : tabId === "kerajinan"
      ? "handcraft"
      : tabId === "transporatasi"
      ? "transportation"
      : "trip";
  return (
    <div>
      <div
        className="aspect-[9/10] bg-cover bg-center rounded-2xl flex justify-end p-4"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/?${id}&${num}')`,
        }}
      >
        <IconBookmark className="h-8 w-8 text-white fill-[#00000050]" />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-orange-400">
            <IconStarFilled className="h-4 w-4" />
            <Text.small className="font-semibold">4.9</Text.small>
          </div>
          <Text.small className="text-custom-primary-red">70K/malam</Text.small>
        </div>
        <Heading.h3 className="!font-bold tracking-tight">
          Pantai Ropet
        </Heading.h3>
        <Text.label className="!font-medium !text-neutral-700">
          Banraas, Dungkek, Sumenep
        </Text.label>
      </div>
    </div>
  );
};
