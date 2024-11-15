import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import Skeleton from "react-loading-skeleton"
import toast from "react-hot-toast"
import Text from "@components/atomics/Text"
import Title from "@components/atomics/Title"
import Carousel from "@components/molecules/Carousel"
import DottedUnderline from "@components/molecules/DottedUnderline"
import Footer from "@components/molecules/Footer"
import Navbar from "@components/molecules/Navbar"
import QuickCard from "@components/molecules/QuickCard"
import {
  IconBeach,
  IconBuildingCottage,
  IconBus,
  IconHorseToy,
  IconSoup,
  IconStar,
} from "@tabler/icons-react"

export default function Home() {
  const [index, setIndex] = useState(0)
  const [populars, setPopulars] = useState({
    wisata: [],
    paket_wisata: [],
    restaurant: [],
    hotel: [],
    transportasi: [],
    kerajinan: [],
  })

  const doChangeTabIndex = (e) => {
    setIndex(parseInt(e.currentTarget.value))
  }

  const getPopulars = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/popularSite`)
      setPopulars(data)
    } catch (error) {
      toast.error("Gagal menampilkan data\nCoba untuk memuat ulang")
    }
  }

  useEffect(() => {
    getPopulars()
  }, [])

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen">
      <Head>
        <title>Lenjhelenan Madura | Beranda</title>
      </Head>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('/static_images/hero.png')",
        }}
        className="pt-24 pb-12 bg-center bg-cover"
      >
        <div className="px-4 sm:px-12 text-white max-w-7xl mx-auto text-center">
          <p className="font-bold text-4xl lg:text-6xl">Lenjhelenan Madhureh</p>
          <p className="sm:mt-4 text-xs sm:text-base font-semibold">
            Rencanakan liburan serumu bersama kami
          </p>
        </div>
        <div className="px-4 my-2 sm:my-8">
          <div className="font-medium max-w-5xl mx-auto whitespace-nowrap">
            <div
              style={{
                gridTemplateColumns: "repeat(6, 1fr)",
              }}
              className="scrollbar-custom text-xs sm:text-base grid bg-neutral-200 rounded-full border-2 border-neutral-200"
            >
              <button
                value={0}
                onClick={doChangeTabIndex}
                className={`${
                  index === 0 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconStar className="h-5 w-5" />
                <p>Paket Wisata</p>
              </button>
              <button
                value={1}
                onClick={doChangeTabIndex}
                className={`${
                  index === 1 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconBeach className="h-5 w-5" />
                <p>Wisata</p>
              </button>
              <button
                value={2}
                onClick={doChangeTabIndex}
                className={`${
                  index === 2 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconSoup className="h-5 w-5" />
                <p>Restaurant</p>
              </button>
              <button
                value={3}
                onClick={doChangeTabIndex}
                className={`${
                  index === 3 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconBuildingCottage className="h-5 w-5" />
                <p>Hotel</p>
              </button>
              <button
                value={4}
                onClick={doChangeTabIndex}
                className={`${
                  index === 4 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconHorseToy className="h-5 w-5" />
                <p>Kerajinan</p>
              </button>
              <button
                value={5}
                onClick={doChangeTabIndex}
                className={`${
                  index === 5 ? "bg-white shadow-custom" : "bg-transparent"
                } transition-all font-medium border-2 rounded-full p-2.5 flex items-center justify-center gap-2`}
              >
                <IconBus className="h-5 w-5" />
                <p>Transportasi</p>
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
      {index === 0 ? (
        <PaketWisata populars={populars.paket_wisata} />
      ) : index === 1 ? (
        <Wisata populars={populars.wisata} />
      ) : index === 2 ? (
        <Restaurant populars={populars.restaurant} />
      ) : index === 3 ? (
        <Hotel populars={populars.hotel} />
      ) : index === 4 ? (
        <Kerajinan populars={populars.kerajinan} />
      ) : (
        <Transportasi populars={populars.transportasi} />
      )}
      <Footer />
    </div>
  )
}

const PaketWisata = ({ populars }) => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Paket Wisata <span className="text-custom-primary-red">Populer</span>{" "}
          di Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan wisata disekitar madura untuk menemani liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="paket-1">
            {populars.length > 0 ? (
              populars.map((popular) => {
                return (
                  <Carousel.item key={popular.slug}>
                    <QuickCard
                      url={"/paket/" + popular.slug}
                      image_url={popular.thumbnail_url}
                      video_url={popular.short_video_url}
                      name={popular.name}
                      city={popular.city}
                      rating={popular.rating}
                    />
                  </Carousel.item>
                )
              })
            ) : (
              <>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
              </>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

const Wisata = ({ populars }) => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Wisata <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan wisata disekitar madura untuk menemani liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="wisata-1">
            {populars.length > 0 ? (
              populars.map((popular) => {
                return (
                  <Carousel.item key={popular.slug}>
                    <QuickCard
                      url={"/wisata/" + popular.slug}
                      image_url={popular.thumbnail_url}
                      video_url={popular.short_video_url}
                      name={popular.name}
                      city={popular.city}
                      rating={popular.rating}
                    />
                  </Carousel.item>
                )
              })
            ) : (
              <>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
              </>
            )}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Wisata" url="wisata" />
    </div>
  )
}

const Restaurant = ({ populars }) => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Restoran <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan restoran disekitar madura untuk menunjang liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="restaurant-1">
            {populars.length > 0 ? (
              populars.map((popular) => {
                return (
                  <Carousel.item key={popular.slug}>
                    <QuickCard
                      url={"/restaurant/" + popular.slug}
                      image_url={popular.thumbnail_url}
                      video_url={popular.short_video_url}
                      name={popular.name}
                      city={popular.city}
                      rating={popular.rating}
                    />
                  </Carousel.item>
                )
              })
            ) : (
              <>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
              </>
            )}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Restoran" url="restaurant" />
    </div>
  )
}

const Hotel = ({ populars }) => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Hotel <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan hotel disekitar madura untuk menunjang liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="hotel-1">
            {populars.length > 0 ? (
              populars.map((popular) => {
                return (
                  <Carousel.item key={popular.slug}>
                    <QuickCard
                      url={"/hotel/" + popular.slug}
                      image_url={popular.thumbnail_url}
                      video_url={popular.short_video_url}
                      name={popular.name}
                      city={popular.city}
                      rating={popular.rating}
                      price={popular.price}
                    />
                  </Carousel.item>
                )
              })
            ) : (
              <>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
              </>
            )}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Hotel" url="hotel" />
    </div>
  )
}

const Kerajinan = ({ populars }) => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Kerajinan <span className="text-custom-primary-red">Populer</span> di
          Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan kerajinan madura untuk kenang-kenangan liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="kerajinan-1">
            {populars.length > 0 ? (
              populars.map((popular) => {
                return (
                  <Carousel.item key={popular.slug}>
                    <QuickCard
                      url={"/kerajinan/" + popular.slug}
                      image_url={popular.thumbnail_url}
                      video_url={popular.short_video_url}
                      name={popular.name}
                      city={popular.city}
                      rating={popular.rating}
                    />
                  </Carousel.item>
                )
              })
            ) : (
              <>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
              </>
            )}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Kerajinan" url="kerajinan" />
    </div>
  )
}

const Transportasi = ({ populars }) => {
  return (
    <div>
      <div className="px-4 py-4 md:py-8">
        <Title className="text-center">
          Transportasi <span className="text-custom-primary-red">Populer</span>{" "}
          di Madura
        </Title>
        <Text className="text-center">
          Kami menawarkan transportasi disekitar madura untuk menunjang
          liburanmu
        </Text>
        <div className="max-w-7xl mx-auto">
          <Carousel id="transportasi-1">
            {populars.length > 0 ? (
              populars.map((popular) => {
                return (
                  <Carousel.item key={popular.slug}>
                    <QuickCard
                      url={"/transportasi/" + popular.slug}
                      image_url={popular.thumbnail_url}
                      video_url={popular.short_video_url}
                      name={popular.name}
                      city={popular.city}
                      rating={popular.rating}
                    />
                  </Carousel.item>
                )
              })
            ) : (
              <>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
                <Carousel.item>
                  <div className="m-4">
                    <Skeleton className="h-96" />
                  </div>
                </Carousel.item>
              </>
            )}
          </Carousel>
        </div>
      </div>
      <PilihanKabupaten name="Transportasi" url="transportasi" />
    </div>
  )
}

const PilihanKabupaten = ({ name, url }) => {
  return (
    <div className="bg-[#F6F0E1] px-4 py-4 md:py-8">
      <Title className="text-center">
        Pilihan {name}{" "}
        <span className="text-custom-primary-red">di Kabupaten</span>
      </Title>
      <DottedUnderline />
      <br />
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 text-white font-body1 text-body1 sm:font-heading3 sm:text-heading3">
        <KabupatenCard
          url={url + "&city=bangkalan"}
          name="Bangkalan"
          bgImage="/static_images/bangkalan.png"
        />
        <KabupatenCard
          url={url + "&city=pamekasan"}
          name="Pamekasan"
          bgImage="/static_images/pamekasan.png"
        />
        <KabupatenCard
          url={url + "&city=sampang"}
          name="Sampang"
          bgImage="/static_images/sampang.png"
        />
        <KabupatenCard
          url={url + "&city=sumenep"}
          name="Sumenep"
          bgImage="/static_images/sumenep.png"
        />
      </div>
    </div>
  )
}

const KabupatenCard = ({ bgImage, name, url }) => {
  return (
    <Link href={"/discover?tabId=" + url}>
      <div
        className="h-16 sm:h-24 lg:h-48 bg-cover rounded-md flex items-center sm:items-start justify-center sm:justify-start p-0 sm:p-8 bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {name}
      </div>
    </Link>
  )
}
