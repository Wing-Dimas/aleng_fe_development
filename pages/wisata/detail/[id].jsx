import Footer from '@components/molecules/Footer';
import { useEffect, useState } from 'react';
import Navbar from '@components/molecules/Navbar';
import MainImage from '@components/molecules/detailPage/mainImage';
import BreadCrumbs from '@components/molecules/breadCrumbs';
import Search from '@components/molecules/search';
import { Users, MapPin } from 'tabler-icons-react';
import TotalHarga from '@components/molecules/totalHarga';
import Stars from '@components/molecules/stars';
import StarsUlasan from '@components/molecules/detailPage/starsUlasan';
import CardUlasan from '@components/molecules/detailPage/cardUlasan';
import TabsDesk from '@components/molecules/detailPage/tabsDesk';
import TravelOptions from '@components/molecules/detailPage/travelOptions';
import AddFasilitas from '@components/molecules/detailPage/addFasilitas';
import ModalNav from '@components/molecules/modalNav';
import ModalOpsiSearch from '@components/molecules/modalOpsiSearch';
import ModalOpsiTamu from '@components/molecules/modalOpsiTamu';
import ModalSearch from '@components/molecules/modalSearch';
import CardProduk from '@components/molecules/detailPage/cardProduk';
import DateTime from '@components/molecules/dataTime';
export default function DetailWisata({}) {
  const [openNav, setOpenNav] = useState(false);
  const [openOpsiSearch, setOpenOpsiSearch] = useState(false);
  const [openOpsiTamu, setOpenOpsiTamu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="w-screen h-screen font-inter overflow-x-hidden text-[#252525] bg-white">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div className={`mx-4 lg:mx-[7.5rem] ${openNav ? 'blur-3xl' : null}`}>
        <div className="flex flex-row md:flex-col items-center justify-between md:items-stretch w-full">
          <BreadCrumbs pages="Wisata" />
          <Search
            openOpsiSearch={openOpsiSearch}
            setOpenOpsiSearch={setOpenOpsiSearch}
            openSearch={openSearch}
            setOpenSearch={setOpenSearch}
            pages="wisata"
            placeholder="Masukkan wisata yang di cari"
          />
        </div>
        <ModalSearch
          openSearch={openSearch}
          openOpsiSearch={openOpsiSearch}
          setOpenOpsiSearch={setOpenOpsiSearch}
          placeholder="Masukkan wisata yang di cari"
          pages="wisata"
        />
        <div className="flex flex-col md:flex-row items-start  justify-center gap-3 w-full h-full">
          <div className="flex flex-col w-full md:w-[65%] h-full">
            <MainImage
              image1="/wisata/gambar1.jpg"
              image2="/wisata/gambar2.jpeg"
              image3="/wisata/gambar3.jpg"
              image4="/wisata/gambar4.jpg"
            />
            <div className="p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 md:mt-4 shadow-md rounded-md h-full">
              <Stars />
              <p className="font-semibold text-[1rem] md:text-[2rem] text-[#252525]">
                Pantai Lon Malang
              </p>
              <div className="flex flex-row gap-1 items-center">
                <MapPin size={18} strokeWidth={2} color={'#615A56'} />
                <p className="md:text-[0.75rem] text-[0.5rem] font-normal">
                  Jl. Siwalan Pangarangan, Sumenep, Pulau Madura 69417 Indonesia
                </p>
              </div>
              <TabsDesk pages="wisata" />
            </div>
          </div>
          <div className="border-[0.5px] p-[1rem] min-h-full  w-full md:w-[35%] h-full  border-[#ABACAC]/30 shadow-md rounded-md flex flex-col  justify-between md:gap-20">
            <div className="flex flex-col">
              <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                10.000
                <span className="ml-1 font-normal text-[1rem] text-[#615A56]">
                  /wisatawan
                </span>
              </p>
              <hr className="border-[0.5px]/30 border-[#ABACAC] my-3" />
              <div className="flex flex-row items-center justify-between w-full gap-3">
                <div className="flex flex-col items-center gap-1 justify-start w-full ">
                  <p className="text-[#615A56] font-normal text-[0.75rem] w-full text-left after:content-[after:ml-0.5">
                    Tanggal Tiket
                  </p>
                  <div className=" flex  border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md w-full py-3 px-5">
                    <DateTime pages="wisata" type="date" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 justify-start w-full my-3">
                <p className="text-[#615A56] font-normal text-[0.75rem] w-full text-left after:content-['*'] after:ml-0.5">
                  Wisatawan
                </p>
                <div
                  className="flex flex-row gap-2 w-full hover:bg-gray-200 items-center justify-start py-3 px-5 cursor-pointer border-[0.5px] border-[#ABACAC]/20 shadow-md rounded-md"
                  onClick={() => setOpenOpsiTamu(!openOpsiTamu)}
                >
                  <Users size={24} strokeWidth={2} color={'#615A56'} />
                  <p className="font-medium text-xs text-black cursor-pointer ">
                    {5} Wisatawan
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-[1rem]">Total</p>
                <p className="flex flex-row  font-semibold text-[1rem] text-[#D2001A]">
                  Rp<span className="ml-1 font-semibold">50.000</span>
                </p>
              </div>
              <p className="font-medium text-center mt-3 hover:bg-secondary-yellow/80 text-base text-black bg-[#FDD05C] py-3 px-14 rounded-md shadow-md cursor-pointer">
                Pesan Sekarang
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col gap-3">
          <p className="font-semibold text-[1.5rem]">Ulasan Pengunjung</p>
          <div className="flex flex-row gap-6 p-[1.5rem] border-[0.5px] border-[#ABACAC]/30 shadow-md rounded-md w-full h-full">
            <div className="flex flex-col gap-2 w-1/2 md:w-[20%]">
              <p className="font-semibold md:text-[1rem] text-sm">
                Ulasan Pengguna
              </p>
              <StarsUlasan />
            </div>
            <div className="flex flex-col gap-2 w-1/2 md:w-[80%]">
              <p className="font-semibold text-[1rem] hidden md:flex">
                Ulasan yang mungkin membantumu
              </p>
              <div className="flex flex-row gap-4 scrollbar-hide cursor-pointer overflow-x-scroll w-full">
                <CardUlasan />
                <CardUlasan />
                <CardUlasan />
                <CardUlasan />
                <CardUlasan />
                <CardUlasan />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col gap-3">
          <p className="font-semibold text-[1.5rem]">Wisata Serupa</p>
          <div className="flex flex-row gap-4  w-full h-full scrollbar-hide cursor-pointer overflow-x-scroll">
            <CardProduk
              name="Air Terjun Toroan"
              pages="wisata"
              gambar="/wisata/gambar5.jpg"
            />
            <CardProduk
              name="Air Terjun Toroan"
              pages="wisata"
              gambar="/wisata/gambar5.jpg"
            />
            <CardProduk
              name="Air Terjun Toroan"
              pages="wisata"
              gambar="/wisata/gambar5.jpg"
            />
            <CardProduk
              name="Air Terjun Toroan"
              pages="wisata"
              gambar="/wisata/gambar5.jpg"
            />
            <CardProduk
              name="Air Terjun Toroan"
              pages="wisata"
              gambar="/wisata/gambar5.jpg"
            />
          </div>
        </div>
      </div>
      <div className={`mt-10 ${openNav ? 'blur-3xl' : null}`}>
        <Footer />
      </div>
      <ModalNav openNav={openNav} setOpenNav={setOpenNav} />
      <ModalOpsiSearch
        openOpsiSearch={openOpsiSearch}
        setOpenOpsiSearch={setOpenOpsiSearch}
      />
      <ModalOpsiTamu
        openOpsiTamu={openOpsiTamu}
        setOpenOpsiTamu={setOpenOpsiTamu}
      />
    </div>
  );
}
