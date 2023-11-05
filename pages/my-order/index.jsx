import { useState, useContext, useEffect } from "react"
import Head from "next/head"
import Footer from "@components/molecules/Footer"
import Navbar from "@components/molecules/Navbar"
import Wrapper from "@components/atomics/Wrapper"
import "swiper/css"
import withAuth from "@utils/withAuth"
import MainContent from "@components/atomics/MainContent"
import Link from "next/link"
import Heading from "@components/atomics/Heading"
import { IconChevronLeft } from "@tabler/icons-react"
import axios from "axios"
import { UserContext } from "@utils/useUser"
import toast from "react-hot-toast"
import { toRupiah } from "@utils/libs"

const MyOrder = () => {
  const user = useContext(UserContext)
  const [orders, setOrders] = useState([])
  const tabStatus = [
    { name: "Semua Order", value: "semua_order" },
    { name: "Verified", value: "verified" },
    { name: "Menunggu Pembayaran", value: "menunggu_pembayaran" },
    { name: "Sedang Diproses", value: "proses" },
  ]
  const [filter, setFilter] = useState("semua_order")

  const doFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const formatStatus = (status) => {
    switch (status) {
      case "verified":
        return "Verified"
      case "proses":
        return "Sedang Diproses"
      default:
        return "Menunggu Pembayaran"
    }
  }

  const getOrders = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const { data } = await axios.get(
        process.env.BASE_API +
          "/auth/order/getOrdersBySpecifiedUser/" +
          user.userId,
        config
      )
      setOrders(data.data.data)
    } catch (error) {
      toast.error("Gagal mendapatkan order")
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <Wrapper>
      <Head>
        <title>Pesanan Saya</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <Link href="/">
          <Heading.h2 className="flex items-center gap-2">
            <IconChevronLeft className="w-8 h-8" />
            <span>My Order</span>
          </Heading.h2>
        </Link>
        <br />
        <div className="flex items-center gap-4">
          {tabStatus.map((tab, i) => {
            return (
              <button
                key={i}
                value={tab.value}
                onClick={doFilter}
                className={`${
                  filter == tab.value
                    ? "bg-neutral-200"
                    : "bg-white hover:bg-neutral-100"
                } transition-all p-2 border rounded-md font-medium text-xs sm:text-sm`}
              >
                {tab.name}
              </button>
            )
          })}
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders
            .filter((order) => {
              if (filter == "semua_order") return true
              return order.status == filter
            })
            .map((order, i) => {
              return (
                <div
                  key={i}
                  className="border flex flex-col transition-all hover:shadow-md rounded-md font-medium text-xs sm:text-sm"
                >
                  <div className="p-4 flex-grow flex flex-col justify-between border-b">
                    <div className="flex items-start justify-between">
                      <p>{order.destination_name}</p>
                      <p className="text-neutral-500 whitespace-nowrap">
                        {order.order_date}
                      </p>
                    </div>
                    <br />
                    <div className="flex items-start justify-between">
                      <p>{toRupiah.format(order.total_price)}</p>
                      <p
                        className={`${
                          order.status == "menunggu_pembayaran"
                            ? "text-red-500"
                            : order.status == "verified"
                            ? "text-green-500"
                            : "text-yellow-500"
                        } whitespace-nowrap`}
                      >
                        {formatStatus(order.status)}
                      </p>
                    </div>
                  </div>
                  <Link href={"/my-order/" + order.id} className="p-4 block">
                    Lihat Selengkapnya
                  </Link>
                </div>
              )
            })}
        </div>
        <br />
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  )
}

export default withAuth(MyOrder)
