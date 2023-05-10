import MainContent from "@components/atomics/MainContent";
import Wrapper from "@components/atomics/Wrapper";
import Navbar from "@components/molecules/Navbar";
import {
  IconArrowsDownUp,
  IconBookmark,
  IconBoxMultiple,
  IconStarFilled,
} from "@tabler/icons-react";
import Head from "next/head";
import Heading from "@components/atomics/Heading";
import Text from "@components/atomics/Text";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Discover() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [options, setOptions] = useState({
    check_in: new Date(),
    check_out: new Date(),
    room_count: 1,
    adult_count: 1,
    child_count: 0,
  });
  const [tabId, setTabId] = useState("wisata");

  useEffect(() => {
    const query = router.query;
    setTabId(query.tabId ?? tabId);
    setOptions({
      check_in: query.in ?? options.check_in,
      check_out: query.out ?? options.check_out,
      room_count: query.room ?? options.room_count,
      adult_count: query.adult ?? options.adult_count,
      child_count: query.child ?? options.child_count,
    });
    setKeyword(query.keyword ?? keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Wrapper>
      <Head>
        <title>Discover | Lanjalan</title>
      </Head>
      <div className="sticky top-0 z-10">
        <Navbar isDiscover />
      </div>
      <MainContent isDiscover>
        <div className="fixed bottom-0 left-0 w-full flex items-center justify-center my-4">
          <div className="p-1 w-fit bg-black bg-opacity-5 backdrop-blur-md rounded-full overflow-hidden">
            <div
              className="bg-white grid items-center rounded-full overflow-hidden"
              style={{ gridTemplateColumns: "1fr auto 1fr" }}
            >
              <button className="font-semibold bg-white p-3 flex items-center gap-2">
                <IconArrowsDownUp className="h-5 w-5" />
                <span>Urutan</span>
              </button>
              <span>|</span>
              <button className="font-semibold bg-white p-3 flex items-center gap-2">
                <span>Filter</span>
                <IconBoxMultiple className="h-5 w-5" />
              </button>
            </div>
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
