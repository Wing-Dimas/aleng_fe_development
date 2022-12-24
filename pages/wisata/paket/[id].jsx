import { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@constants/index";
import "swiper/css";
import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Button from "@components/molecules/Button";
import DateInput from "@components/molecules/DateInput";
import DetailSearchInput from "@components/molecules/DetailSearchInput";
import Footer from "@components/molecules/Footer";
import GalleryImage from "@components/molecules/GalleryImage";
import Heading from "@components/molecules/Heading";
import Navbar from "@components/molecules/Navbar";
import PopOver from "@components/molecules/PopOver";
import QuickCard from "@components/molecules/QuickCard";
import Rating from "@components/molecules/Rating";
import ReviewCard from "@components/molecules/ReviewCard";
import TabDesc from "@components/molecules/TabDesc";
import Text from "@components/molecules/Text";
import {
  IconCalendarEvent,
  IconChevronDown,
  IconDoor,
  IconHorseToy,
  IconMapPin,
  IconMinus,
  IconPlus,
  IconUser,
  IconUsers,
} from "@tabler/icons";

export default function PaketWisata({}) {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "xs");
  const [order, setOrder] = useState({
    date: new Date().toISOString().split("T")[0],
    options: {
      room: 1,
      adult: 1,
      child: 1,
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const doOpen = () => {
    setIsOpen(!isOpen);
  };

  const doChangeDate = ({ name, value }) => {
    setOrder({ ...order, [name]: value });
  };

  const doChangeOrderOptions = (e) => {
    setOrder({
      ...order,
      options: {
        ...order.options,
        [e.currentTarget.name]: parseInt(e.currentTarget.value),
      },
    });
  };
  return <div></div>;
}
