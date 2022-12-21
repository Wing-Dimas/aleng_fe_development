import BreadCrumbs from "@components/molecules/BreadCrumbs";
import Caption from "@components/molecules/Caption";
import Checkbox from "@components/molecules/Checkbox";
import DateInput from "@components/molecules/DateInput";
import Heading from "@components/molecules/Heading";
import Navbar from "@components/molecules/Navbar";
import Text from "@components/molecules/Text";
import TextInput from "@components/molecules/TextInput";
import Title from "@components/molecules/Title";
import { IconCalendar, IconChevronDown, IconUser } from "@tabler/icons";
import Head from "next/head";
import { useState } from "react";

export default function DesignSystem() {
  const [breads, setBreads] = useState([
    { link: "wisata", name: "Wisata" },
    { link: "sumenep", name: "Sumenep" },
    { link: "pelabuhan", name: "Pelabuhan" },
  ]);
  return (
    <div className="font-inter">
      <Head>
        <title>Design System</title>
      </Head>
      <Navbar />
      <div className="max-w-7xl p-8 m-auto">
        <DSPage name="Breadcrumbs" properties={["breads"]}>
          <BreadCrumbs breads={breads} />
        </DSPage>
        <DSPage name="Title" properties={["children"]} options={["className"]}>
          <Title>Title</Title>
        </DSPage>
        <DSPage
          name="Heading"
          properties={["children"]}
          options={["className", "h2", "h3", "isMobile"]}
        >
          <Heading>Heading 1</Heading>
          <Heading.h2>Heading 2</Heading.h2>
          <Heading.h3>Heading 3</Heading.h3>
        </DSPage>
        <DSPage
          name="Text"
          properties={["children"]}
          options={["className", "small", "isMobile"]}
        >
          <Text>Text</Text>
          <Text.small>Text small</Text.small>
        </DSPage>
        <DSPage
          name="Caption"
          properties={["children"]}
          options={["className", "small", "isMobile"]}
        >
          <Caption>Caption</Caption>
          <Caption.small>Caption small</Caption.small>
        </DSPage>
        <DSPage
          name="DateInput"
          properties={["name"]}
          options={[
            "label",
            "leftIcon",
            "rightIcon",
            "isTime",
            "className",
            "containerClassName",
            "leftIconClassName",
            "labelClassName",
          ]}
        >
          <DateInput
            leftIcon={<IconCalendar className="w-6 h-6" />}
            rightIcon={<IconChevronDown className="w-6 h-6" />}
            label="Check In"
          />
        </DSPage>
        <DSPage
          name="Checkbox"
          properties={["name", "label"]}
          options={["className", "containerClassName", "labelClassName"]}
        >
          <Checkbox label="Boleh membawa hewan peliharaan" />
        </DSPage>
        <DSPage
          name="TextInput"
          properties={["name", "label"]}
          options={[
            "placeholder",
            "className",
            "containerClassName",
            "labelClassName",
            "leftIconClassName",
            "rightIcon",
            "rightIconClassName",
          ]}
        >
          <TextInput
            leftIcon={<IconUser className="w-6 h-6" />}
            label="Isi disini"
          />
          <TextInput />
        </DSPage>
      </div>
    </div>
  );
}

const DSPage = ({ name, properties = [], options = [], children }) => {
  return (
    <div id={name} className="p-4 rounded border shadow mb-4">
      <p className="text-neutral-600 mb-4"># {name}</p>
      {children}
      <div className="flex items-center gap-2 mt-4">
        {properties.map((p, i) => {
          return (
            <span
              key={i}
              className="py-1 px-3 text-xs font-semibold rounded-full bg-red-600 text-red-100"
            >
              {p}
            </span>
          );
        })}
        {options.map((o, i) => {
          return (
            <span
              key={i}
              className="py-1 px-3 text-xs font-semibold rounded-full bg-green-600 text-green-100"
            >
              {o}
            </span>
          );
        })}
      </div>
    </div>
  );
};
