import { useContext, useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import Navbar from "@components/molecules/Navbar"
import Footer from "@components/molecules/Footer"
import Button from "@components/atomics/Button"
import Heading from "@components/atomics/Heading"
import MainContent from "@components/atomics/MainContent"
import Text from "@components/atomics/Text"
import Wrapper from "@components/atomics/Wrapper"
import { IconChevronLeft, IconUpload } from "@tabler/icons-react"
import { toRupiah } from "@utils/libs"
import { UserContext } from "@utils/useUser"
import withAuth from "@utils/withAuth"
import toast from "react-hot-toast"
import Skeleton from "react-loading-skeleton"

const MyOrderDetail = () => {
  const router = useRouter()
  const user = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [photo, setPhoto] = useState({
    file: null,
    url: null,
  })
  const [order, setOrder] = useState({
    id: null,
    destination_name: null,
    destination_type: null,
    location: null,
    total_price: null,
    order_date: null,
    ticket_number: null,
    imageUrl: null,
    status: null,
    note: null,
    number_of_orders: null,
    payment_detail: [],
  })

  const doChangePhoto = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile)
      setPhoto({ file: selectedFile, url: objectURL })
    }
  }

  const doAskVerify = async () => {
    if (isLoading) return
    const loadingToast = toast.loading("Mengunggah bukti transfer")
    try {
      setIsLoading(true)
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const formData = new FormData()
      formData.append("jumlah_bayar", order.total_price)
      formData.append("order_id", order.id)
      formData.append("bukti_bayar", photo.file)
      const { data } = await axios.post(
        process.env.BASE_API + "/auth/order/createOrderPayment",
        formData,
        config
      )
      toast.success("Berhasil mengunggah bukti transfer", { id: loadingToast })
      setIsLoading(false)
      router.reload()
    } catch (error) {
      setIsLoading(false)
      toast.error("Gagal mengunggah bukti transfer", { id: loadingToast })
    }
  }

  const getOrder = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const { data } = await axios.get(
        process.env.BASE_API + "/auth/order/getDetailOrder/" + id,
        config
      )
      setOrder(data.data)
      setLoaded(true)
    } catch (error) {
      toast.error("Gagal mendapatkan detail order")
    }
  }

  useEffect(() => {
    const query = router.query
    if (!query.id) return
    getOrder(query.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <Wrapper>
      <Head>
        <title>{`Lenjhelenan | Order | ${order.destination_name ?? ""}`}</title>
      </Head>
      <Navbar />
      {loaded ? (
        <MainContent>
          <br />
          <Link href="/my-order">
            <Heading.h2 className="flex items-center gap-2">
              <IconChevronLeft className="w-8 h-8" />
              <span>Order Details</span>
            </Heading.h2>
          </Link>
          <br />
          <div className="grid grid-cols-4 py-6 border-y">
            <div>
              <Text className="!font-normal text-neutral-500">
                Tanggal Order
              </Text>
              <Text className="!font-normal">{order.order_date}</Text>
            </div>
            <div>
              <Text className="!font-normal text-neutral-500">Tipe</Text>
              <Text className="!font-normal">Wisata</Text>
            </div>
            <div>
              <Text className="!font-normal text-neutral-500">ID Order</Text>
              <Text className="!font-normal">{order.id}</Text>
            </div>
            <div>
              <Text className="!font-normal text-neutral-500">
                Status Pembayaran
              </Text>
              <Text
                className={`!font-normal ${
                  order.status == "verified"
                    ? "text-green-500"
                    : order.status == "menunggu_pembayaran"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {order.status == "verified"
                  ? "Verified"
                  : order.status == "proses"
                  ? "Sedang Diproses"
                  : "Menunggu Pembayaran"}
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 divide-x">
            <div className="py-6 flex flex-col gap-2">
              <div className="h-64 w-64 rounded-md relative">
                <Image
                  priority
                  src={process.env.BASE_STORAGE + order.imageUrl}
                  alt="lenjhelenan"
                  fill
                  sizes="auto"
                  className="rounded-md bg-cover object-cover"
                />
              </div>
              <div>
                <Text className="!font-normal text-neutral-500">
                  {order.destination_type.charAt(0).toUpperCase() +
                    order.destination_type.slice(1)}
                </Text>
                <Heading.h2>{order.destination_name}</Heading.h2>
              </div>
              <div>
                <Text className="!font-normal text-neutral-500">Lokasi</Text>
                <Text className="!font-normal">{order.location}</Text>
              </div>
              <div>
                <Text className="!font-normal text-neutral-500">Harga</Text>
                <Text>{toRupiah.format(order.total_price)}</Text>
              </div>
            </div>
            <div className="py-6 px-4 flex flex-col gap-2">
              <div>
                {order.status == "proses" ? (
                  <div className="h-64 w-64 rounded-md relative">
                    <Image
                      priority
                      src={
                        process.env.BASE_STORAGE +
                        order.payment_detail[order.payment_detail.length - 1]
                          .payment_proof
                      }
                      alt="lenjhelenan"
                      fill
                      sizes="auto"
                      className="rounded-md bg-cover object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="relative border outline-none bg-cover rounded-lg shadow-custom max-h-64 aspect-square flex gap-2 items-center justify-center group transition-all cursor-pointer"
                    style={{
                      backgroundImage: `url(${photo.file ? photo.url : ""})`,
                    }}
                  >
                    <label
                      htmlFor="fotoInput"
                      className="flex items-center bg-black bg-opacity-50 h-full w-full cursor-pointer rounded-lg justify-center gap-2 text-white text-xs font-medium group-hover:bg-opacity-75 transition-all"
                    >
                      <IconUpload className="h-4 w-4" />
                      <span>Upload Bukti Verifikasi</span>
                    </label>
                    <input
                      id="fotoInput"
                      type="file"
                      className="hidden"
                      onChange={doChangePhoto}
                      accept=".jpg, .jpeg, .png"
                    />
                  </div>
                )}
              </div>
              <div>
                <Text className="!font-normal text-neutral-500">
                  Transfer Pada Nomor Rekening Berikut
                </Text>
                <Text>5409-1920-4582-9021 (BCA)</Text>
              </div>
              {order.status != "proses" && (
                <div>
                  <Button onClick={doAskVerify}>Minta Verifikasi</Button>
                </div>
              )}
            </div>
          </div>
        </MainContent>
      ) : (
        <MainContent>
          <Skeleton className="w-full h-12" />
          <div className="grid grid-cols-2">
            <Skeleton className="w-full h-48" />
            <Skeleton className="w-full h-48" />
          </div>
        </MainContent>
      )}
      <br />
      <br />
      <Footer />
    </Wrapper>
  )
}

export default withAuth(MyOrderDetail)
