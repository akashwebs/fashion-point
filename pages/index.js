import Head from "next/head";
import AppAds from "../src/Components/Home/AppAds/AppAds";
import Banner from "../src/Components/Home/Banner/Banner";
import Category from "../src/Components/Home/Category/Category";
import DiscountProducts from "../src/Components/Home/DiscountProducts/DiscountProducts";
import DownloadApp from "../src/Components/Home/DownloadApp/DownloadApp";
import NewsLetter from "../src/Components/Home/NewsLetter/NewsLetter";
import PopularProducts from "../src/Components/Home/PopularProducts/PopularProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fashion Point</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Category />
      <PopularProducts />
      <DownloadApp />
      <DiscountProducts />
      <NewsLetter />
      <AppAds />
      
    </>
  )
}
