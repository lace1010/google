import Head from "next/head";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import HomeForm from "../components/HomeForm";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Google</title>
        <meta
          name="description"
          content="Google clone to show api and front end capabilities"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <HomeForm />
      <Footer />
    </div>
  );
}
