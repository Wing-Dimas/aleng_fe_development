import { useState } from "react"
import Tab from "@components/atomics/Tab"
import Heading from "@components/atomics/Heading"
import Rating from "@components/atomics/Rating"
import { IconMapPin } from "@tabler/icons-react"
import Image from "next/image"
import Skeleton from "react-loading-skeleton"
import Container from "@components/atomics/Container"
import ReactMarkdown from "react-markdown"
import dynamic from "next/dynamic"
import Text from "@components/atomics/Text"
const Map = dynamic(() => import("@components/atomics/Map"), {
  ssr: false,
})

export default function TabDesc({
  loaded = false,
  name,
  day,
  night,
  rundown,
  address,
  star,
  total_review,
  description,
  facilities,
  lat,
  long,
}) {
  const [index, setIndex] = useState(0)
  return !loaded ? (
    <>
      <Skeleton className="max-w-[8rem]" />
      <Skeleton className="max-w-[16rem] h-12" />
      <Skeleton className="h-48" />
    </>
  ) : (
    <Container>
      <div className="px-2">
        <>
          <Rating star={star} total_review={total_review} />
          <Heading.h2>
            {name}
            {day && night ? " (" + day + " Hari " + night + " Malam)" : ""}
          </Heading.h2>
          <div className="flex flex-row gap-1 items-center">
            <IconMapPin size={18} strokeWidth={2} color={"#615A56"} />
            <p className="font-normal text-xs sm:text-sm">{address}</p>
          </div>
        </>
      </div>
      <br />
      {!loaded ? (
        <Skeleton className="h-32" />
      ) : (
        <>
          <Tab
            className={`px-4 !text-xs ${
              facilities || rundown ? "!grid-cols-3" : "!grid-cols-2"
            }`}
            options={
              rundown
                ? ["DESKRIPSI", "LOKASI", "RUNDOWN"]
                : facilities
                ? ["DESKRIPSI", "LOKASI", "FASILITAS"]
                : ["DESKRIPSI", "LOKASI"]
            }
            index={index}
            setIndex={setIndex}
          />
          <br />
          {index === 0 ? (
            <div>
              <p className="text-justify font-medium sm:font-normal text-base">
                {description}
              </p>
              <br />
            </div>
          ) : index === 1 ? (
            <Map lat={lat} long={long} />
          ) : rundown ? (
            rundown.map((r, i) => {
              return (
                <div key={i} className="pb-4">
                  <Text>{r.rute}</Text>
                  <div className="flex items-center justify-between">
                    <Text>{r.judul}</Text>
                    <Text>
                      {r.hari}{" "}
                      {new Date(r.tanggal).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </Text>
                  </div>
                  <ReactMarkdown>{r.kegiatan}</ReactMarkdown>
                </div>
              )
            })
          ) : facilities ? (
            <div className="p-4 grid grid-cols-4 items-center place-items-center">
              {facilities.length > 0 &&
                !facilities.includes(null) &&
                facilities.map((facility, i) => {
                  return (
                    <div
                      key={i.toString()}
                      className="flex flex-col items-center justify-start"
                    >
                      <div className="relative h-8 w-8">
                        <Image
                          src={facility.icon_url}
                          alt={facility.name}
                          fill
                          sizes="auto"
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-medium mt-1">
                        {facility.name}
                      </p>
                    </div>
                  )
                })}
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </Container>
  )
}
