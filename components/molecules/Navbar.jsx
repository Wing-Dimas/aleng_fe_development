import { useEffect, useState, useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  IconBeach,
  IconBuildingCottage,
  IconBus,
  IconChevronLeft,
  IconHorseToy,
  IconMenu,
  IconMinus,
  IconPlus,
  IconSearch,
  IconSoup,
  IconStar,
  IconUser,
} from "@tabler/icons-react"
import Text from "@components/atomics/Text"
import { useRouter } from "next/router"
import { UserContext } from "@utils/useUser"

export default function Navbar({ isFixed = false, isDiscover = false }) {
  const router = useRouter()
  const [tabId, setTabId] = useState("paket")
  const [expandNavbar, setExpandNavbar] = useState(false)
  const [animateExpand, setAnimateExpand] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const query = router.query
    setTabId(query.tabId ?? tabId)
    setSearch(query.search ?? search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const doChangeSearch = (e) => {
    setSearch(e.currentTarget.value)
  }

  const doChangeTabId = (e) => {
    setTabId(e.currentTarget.value)
  }

  const doSearch = () => {
    router.push(`/discover?tabId=${tabId}&search=${search}`).then(() => {
      router.reload()
    })
  }

  const doExpandNavbar = () => {
    setExpandNavbar(true)
  }

  const doCloseNavbar = () => {
    setAnimateExpand(false)
  }

  const doBlurNavbar = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setAnimateExpand(false)
    }
  }

  useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = "hidden"
      setAnimateExpand(true)
    } else {
      document.body.style.overflow = "auto"
    }
  }, [expandNavbar])

  useEffect(() => {
    if (!animateExpand) {
      setTimeout(() => {
        setExpandNavbar(false)
      }, 500)
    }
  }, [animateExpand])

  return (
    <div
      className={isFixed ? "fixed w-full top-0 z-[90]" : "sticky top-0 z-[90]"}
    >
      <div onBlur={doBlurNavbar} className="relative">
        <TopNavBar
          tabId={tabId}
          isDiscover={isDiscover}
          doChangeSearch={doChangeSearch}
          doExpandNavbar={doExpandNavbar}
          expandNavbar={expandNavbar}
          doCloseNavbar={doCloseNavbar}
          search={search}
          animateExpand={animateExpand}
          doSearch={doSearch}
        />
        <div
          tabIndex={1}
          className={`${expandNavbar ? "block" : "hidden"} ${
            animateExpand ? "translate-y-0" : "-translate-y-full"
          } font-medium transition-transform duration-500 z-[96] absolute top-full w-full`}
        >
          <div className="relative">
            <TabMenu doChangeTabId={doChangeTabId} tabId={tabId} />
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`${expandNavbar ? "block" : "hidden"} ${
          animateExpand ? "opacity-25" : "opacity-0"
        } transition-opacity duration-500 z-[91] absolute top-0 bg-black w-full h-screen`}
      />
    </div>
  )
}

const TopNavBar = ({
  tabId,
  isDiscover,
  expandNavbar,
  search,
  doChangeSearch,
  doExpandNavbar,
  doCloseNavbar,
  animateExpand,
  doSearch,
}) => {
  return (
    <div
      tabIndex={1}
      className={`${expandNavbar ? "border-transparent shadow-none " : ""}${
        isDiscover ? "border-b shadow-none" : "border-b shadow-sm"
      } bg-white sticky top-0 z-[98] w-full transition-all`}
    >
      <div
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
        className={`${
          isDiscover ? "max-w-[112rem]" : "max-w-7xl"
        } m-auto px-4 md:px-8 py-2 md:py-4 flex justify-between md:grid items-center w-full gap-4 md:gap-8`}
      >
        <div
          className={`${expandNavbar ? "flex" : "hidden"} ${
            animateExpand ? "mr-0" : "-mr-[4.4rem]"
          } relative transition-all md:hidden`}
        >
          <button
            onClick={doCloseNavbar}
            className="transition-all hover:bg-neutral-100 border px-4 py-2 rounded-full"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="hidden md:flex">
          <Link href="/">
            <Image
              width={48}
              height={48}
              alt="lenjhelenan"
              src="/static_icons/logo.png"
              className="drop-shadow-md max-w-[45px] w-full"
              priority
            />
          </Link>
        </div>
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={search}
            onChange={doChangeSearch}
            onFocus={doExpandNavbar}
            placeholder="Mau cari apa nih?"
            className="border transition-all w-full focus:ring-1 focus:ring-red-300 border-neutral-300 bg-neutral-50 hover:bg-neutral-100 focus:bg-neutral-100 rounded-full outline-none pl-12 pr-20 placeholder-shown:pl-9 placeholder-shown:pr-9 py-2.5 placeholder-shown:text-neutral-300 placeholder-shown:text-center"
          />
          <div className="pointer-events-none absolute left-4 top-0 h-full flex flex-col items-center justify-center">
            <IconSearch className="h-5 w-5 text-neutral-400" />
          </div>
          <div className="absolute right-2 top-0 h-full flex flex-col items-center justify-center">
            {search ? (
              <button
                onClick={doSearch}
                className="text-sm bg-custom-secondary-yellow px-2 py-1.5 font-medium rounded-full"
              >
                Cari
              </button>
            ) : (
              <Link
                href={`/discover?tabId=${tabId}`}
                className="text-sm bg-custom-secondary-yellow px-2 py-1.5 font-medium rounded-full"
              >
                Jelajahi
              </Link>
            )}
          </div>
        </div>
        <div>
          <NavbarMenu />
        </div>
      </div>
    </div>
  )
}

const NavbarMenu = () => {
  const user = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [animate, setAnimate] = useState(false)

  const doFocus = () => {
    if (!show) {
      setShow(true)
    } else {
      setAnimate(false)
    }
  }

  const doBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setAnimate(false)
    }
  }

  useEffect(() => {
    if (show) {
      setAnimate(true)
    }
  }, [show])

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        setShow(false)
      }, 150)
    }
  }, [animate])

  return (
    <div
      onBlur={doBlur}
      className="relative z-[99] flex items-center justify-end"
    >
      <button
        onClick={doFocus}
        className="transition-all hover:bg-neutral-100 flex items-center gap-2 border px-4 py-2 rounded-full"
      >
        <Text className="hidden sm:block">Menu</Text>
        <IconMenu className="h-5 w-5" />
      </button>
      <div
        tabIndex={1}
        className={`${show ? "" : "hidden "}${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } overflow-hidden transition-all origin-top-right text-sm font-medium absolute flex flex-col top-12 right-0 bg-white shadow-xl border rounded-xl w-64`}
      >
        <Link
          href="/my-order"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          My Order
        </Link>
        <Link
          href="/profile"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          Profile
        </Link>
        {!user.isSigned && (
          <div className="grid grid-cols-2 p-2 gap-2">
            <Link
              className="text-center bg-gradient-to-br from-custom-gradient1 to-custom-gradient2 text-white rounded-md transition-all p-2"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="text-center bg-custom-gradient1 rounded-md transition-all p-2"
              href="/register"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const TabMenu = ({ tabId, doChangeTabId }) => {
  return (
    <div className="z-[97] w-full bg-white pt-0 pb-0 md:pb-4 px-0 md:px-4 border-b md:border-b-0 relative">
      <div className="pointer-events-none absolute md:hidden top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent to-white"></div>
      <div className="pointer-events-none absolute md:hidden top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent"></div>
      <div
        style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        className="bg-white md:bg-neutral-200 md:rounded-full scrollbar-custom py-4 md:py-0 px-8 md:px-0 max-w-4xl mx-auto whitespace-nowrap grid gap-4 md:gap-0 md:border-2 md:border-neutral-200"
      >
        <button
          value="paket"
          onClick={doChangeTabId}
          className={`${
            tabId === "paket"
              ? "bg-neutral-200 md:bg-neutral-100 border-neutral-300 shadow-custom"
              : "border-transparent"
          } border rounded-full py-2.5 px-3 md:px-0 flex items-center justify-center gap-2`}
        >
          <IconStar className="h-5 w-5" />
          <p>Paket Wisata</p>
        </button>
        <button
          value="wisata"
          onClick={doChangeTabId}
          className={`${
            tabId === "wisata"
              ? "bg-neutral-200 md:bg-neutral-100 border-neutral-300 shadow-custom"
              : "border-transparent"
          } border rounded-full py-2.5 px-3 md:px-0 flex items-center justify-center gap-2`}
        >
          <IconBeach className="h-5 w-5" />
          <p>Wisata</p>
        </button>
        <button
          value="restaurant"
          onClick={doChangeTabId}
          className={`${
            tabId === "restaurant"
              ? "bg-neutral-200 md:bg-neutral-100 border-neutral-300 shadow-custom"
              : "border-transparent"
          } border rounded-full py-2.5 px-3 md:px-0 flex items-center justify-center gap-2`}
        >
          <IconSoup className="h-5 w-5" />
          <p>Restaurant</p>
        </button>
        <button
          value="hotel"
          onClick={doChangeTabId}
          className={`${
            tabId === "hotel"
              ? "bg-neutral-200 md:bg-neutral-100 border-neutral-300 shadow-custom"
              : "border-transparent"
          } border rounded-full py-2.5 px-3 md:px-0 flex items-center justify-center gap-2`}
        >
          <IconBuildingCottage className="h-5 w-5" />
          <p>Hotel</p>
        </button>
        <button
          value="kerajinan"
          onClick={doChangeTabId}
          className={`${
            tabId === "kerajinan"
              ? "bg-neutral-200 md:bg-neutral-100 border-neutral-300 shadow-custom"
              : "border-transparent"
          } border rounded-full py-2.5 px-3 md:px-0 flex items-center justify-center gap-2`}
        >
          <IconHorseToy className="h-5 w-5" />
          <p>Kerajinan</p>
        </button>
        <button
          value="transportasi"
          onClick={doChangeTabId}
          className={`${
            tabId === "transportasi"
              ? "bg-neutral-200 md:bg-neutral-100 border-neutral-300 shadow-custom"
              : "border-transparent"
          } border rounded-full py-2.5 px-3 md:px-0 flex items-center justify-center gap-2`}
        >
          <IconBus className="h-5 w-5" />
          <p>Transportasi</p>
        </button>
      </div>
    </div>
  )
}

const StayOptions = ({
  options,
  doChangeRoomCount,
  doChangeAdultCount,
  doChangeChildCount,
}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <IconUser className="w-12 h-12 p-3 rounded-full bg-neutral-100 text-custom-primary-red" />
        <div>
          <p className="">Siapa aja?</p>
          <p className="text-xs text-neutral-400">Tambah tamu</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="">Ruangan</p>
          <p className="text-xs text-neutral-400">
            Berapa banyak kamar yang diperlukan
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button
            onClick={doChangeRoomCount}
            name="subtract"
            className="transition-all border text-neutral-600 rounded-full bg-neutral-100 hover:bg-neutral-200 p-1"
          >
            <IconMinus className="h-5 w-5" />
          </button>
          <p className="w-4 text-center flex items-center justify-center">
            {options.room_count}
          </p>
          <button
            onClick={doChangeRoomCount}
            name="add"
            className="transition-all border text-neutral-600 rounded-full bg-neutral-100 hover:bg-neutral-200 p-1"
          >
            <IconPlus className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="">Orang Dewasa</p>
          <p className="text-xs text-neutral-400">Usia diatas 13 tahun</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button
            onClick={doChangeAdultCount}
            name="subtract"
            className="transition-all border text-neutral-600 rounded-full bg-neutral-100 hover:bg-neutral-200 p-1"
          >
            <IconMinus className="h-5 w-5" />
          </button>
          <p className="w-4 text-center flex items-center justify-center">
            {options.adult_count}
          </p>
          <button
            onClick={doChangeAdultCount}
            name="add"
            className="transition-all border text-neutral-600 rounded-full bg-neutral-100 hover:bg-neutral-200 p-1"
          >
            <IconPlus className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="">Anak-anak</p>
          <p className="text-xs text-neutral-400">Usia dibawah 13 tahun</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button
            onClick={doChangeChildCount}
            name="subtract"
            className="transition-all border text-neutral-600 rounded-full bg-neutral-100 hover:bg-neutral-200 p-1"
          >
            <IconMinus className="h-5 w-5" />
          </button>
          <p className="w-4 text-center flex items-center justify-center">
            {options.child_count}
          </p>
          <button
            onClick={doChangeChildCount}
            name="add"
            className="transition-all border text-neutral-600 rounded-full bg-neutral-100 hover:bg-neutral-200 p-1"
          >
            <IconPlus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
