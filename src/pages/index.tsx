import Head from "next/head";
import Home from "@/views/Home";
import PageContainer from "@/components/Layout/PageContainer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageContainer>
        <Home />
      </PageContainer>
    </>
  );
};

export default HomePage;
