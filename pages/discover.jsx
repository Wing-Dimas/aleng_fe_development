import Wrapper from "@components/atomics/Wrapper";
import Navbar from "@components/molecules/Navbar";
import Head from "next/head";

export default function Discover() {
  return (
    <Wrapper>
      <Head>
        <title>Discover | Lanjalan</title>
      </Head>
      <Navbar withShadow={false} />
    </Wrapper>
  );
}
