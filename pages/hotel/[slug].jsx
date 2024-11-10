import { useContext, useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import axios from "axios"
import Skeleton from "react-loading-skeleton"
import toast from "react-hot-toast"
import Wrapper from "@components/atomics/Wrapper"
import Footer from "@components/molecules/Footer"
import GalleryImage from "@components/molecules/GalleryImage"
import Navbar from "@components/molecules/Navbar"
import ShortReview from "@components/molecules/ShortReview"
import TabDesc from "@components/molecules/TabDesc"
import Button from "@components/atomics/Button"
import Container from "@components/atomics/Container"
import DateInput from "@components/atomics/DateInput"
import Heading from "@components/atomics/Heading"
import MainContent from "@components/atomics/MainContent"
import PopOver from "@components/atomics/PopOver"
import Text from "@components/atomics/Text"
import TextArea from "@components/atomics/TextArea"
import { toRupiah } from "@utils/libs"
import { UserContext } from "@utils/useUser"

export default function DetailHotel() {
  const router = useRouter()
  const user = useContext(UserContext)
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({
    slug: "",
    name: "",
    description: "",
    lat: 0,
    long: 0,
    city: "",
    address: "",
    open: "",
    close: "",
    facilities: [
      {
        icon_url: "",
        name: "",
      },
    ],
    price: 0,
    reviews: {
      rating: 0,
      total_review: 0,
      total_rating: [0, 0, 0, 0, 0],
      comments: [
        {
          name: "",
          profile_pic_url: "",
          date: "",
          rating: 0,
          text: "",
        },
      ],
    },
    image_urls: [],
    video_url: "",
    video_thumbnail_url: "",
  })
  const [order, setOrder] = useState({
    catatan: "",
    date: new Date().toISOString().split("T")[0],
    options: {
      room: 1,
      adult: 1,
      child: 1,
    },
  })

  const doChangeOrder = ({ name, value }) => {
    setOrder({ ...order, [name]: value })
  }

  const doChangeOrderOptions = (e) => {
    setOrder({
      ...order,
      options: {
        ...order.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    })
  }

  const getData = async (slug) => {
    try {
      const {
        data: { data },
      } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/hotel/showBySlug/${slug}`)
      setData(data)
      setLoaded(true)
    } catch (err) {
      toast.error("Gagal menampilkan hotel\nCoba untuk memuat ulang")
    }
  }

  const doOrder = async () => {
    if (isLoading) return
    if (!user.isSigned) {
      router.push("/login")
      return
    }
    const loadingToast = toast.loading("Sedang membuat order")
    try {
      setIsLoading(true)
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const createOrder = await axios.post(
        process.env.NEXT_PUBLIC_BASE_API + "/auth/order/createOrder",
        {
          user_id: user.userId,
          jumlah_pemesan: order.options.people.adult,
          tanggal_checkin: order.date,
          catatan: order.catatan,
        },
        config
      )
      const createOrderDetail = await axios.post(
        process.env.NEXT_PUBLIC_BASE_API + "/auth/order/createOrderDetail",
        {
          tipe: "hotel",
          id_destinasi: data.id,
          catatan: order.catatan,
          harga: data.price,
          order_id: createOrder.data.data.id,
        },
        config
      )
      toast.success("Berhasil membuat order", { id: loadingToast })
      setIsLoading(false)
      router.push("/my-order/" + createOrder.data.data.id)
    } catch (error) {
      setIsLoading(false)
      toast.error("Gagal membuat order", { id: loadingToast })
    }
  }

  useEffect(() => {
    const query = router.query
    if (!query.slug) return
    getData(query.slug)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <Wrapper>
      <Head>
        <title>{`Lenjhelenan | ${data.name ?? ""}`}</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full h-full"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          <div>
            <GalleryImage
              loaded={loaded}
              image_urls={data.image_urls}
              alt={data.name ?? ""}
              video_url={data.video_url}
            />
            <br />
            <TabDesc
              loaded={loaded}
              name={data.name}
              address={data.address}
              star={data.reviews.star ?? 0}
              total_review={data.reviews.total_review}
              facilities={data.facilities}
              lat={data.lat}
              long={data.long}
              description={data.description}
            />
          </div>
          {!loaded ? (
            <div>
              <Skeleton
                containerClassName="min-w-[16rem] h-full"
                className="min-w-[16rem] h-full"
              />
            </div>
          ) : (
            <Container className="!flex !flex-col !justify-between !gap-3 md:!gap-6">
              <div className="flex flex-col">
                <div className="flex items-end gap-1">
                  <p className="font-semibold text-red-500">
                    {toRupiah.format(data.price)}
                  </p>
                  <p className="text-xs sm:text-sm font-medium">/malam</p>
                </div>
                <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
                <div className="flex flex-col items-center gap-1 w-full">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Tanggal Order
                  </Text.label>
                  <DateInput
                    name="date"
                    value={order.date}
                    onChange={doChangeOrder}
                    containerClassName="!w-full"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 w-full mt-3">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Tamu
                  </Text.label>
                  <PopOver
                    containerClassName="!w-full"
                    options={order.options}
                    onChange={doChangeOrderOptions}
                    pages="hotel"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 w-full mt-3">
                  <Text.label className="after:content-['*'] after:ml-0.5">
                    Catatan
                  </Text.label>
                  <TextArea
                    name="catatan"
                    onChange={doChangeOrder}
                    value={order.catatan}
                    placeholder="Catatan"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <p className="font-semibold text-[1rem]">Total</p>
                  <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                    {toRupiah.format(
                      order.options.adult * order.options.room * data.price
                    )}
                  </p>
                </div>
                <Button className="mt-4" onClick={doOrder}>
                  Pesan Sekarang
                </Button>
              </div>
            </Container>
          )}
        </div>
        <br />
        {!loaded ? (
          <>
            <Skeleton className="h-12 max-w-xs" />
            <Skeleton className="h-72" />
          </>
        ) : (
          <>
            <Heading.h2 className="mb-2">Ulasan Pengunjung</Heading.h2>
            <ShortReview
              star={data.reviews.star}
              stars={data.reviews.stars}
              total_review={data.reviews.total_review}
              comments={data.reviews.comments}
            />
          </>
        )}
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  )
}
