import Image from "next/image";
import React from "react";

const AppAds = () => {
  return (
    <div className="bg-accent md:py-10 py-5">
      <div className="p-10 mx-auto mt-10 mb-10 grid grid-cols-9 mid-container">
        <div className="col-span-3 hidden lg:block">
          <Image
            src="/homePageImage/app_ads_image1.svg"
            alt="Picture of the author"
            className="p-10"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:col-span-3 col-span-9 flex flex-col justify-center p-2">
          <h1 className="lg:text-3xl sm:text-2xl text-xl font-semibold text-center mb-5">
            Get Your Daily Needs From Our Fashion Point Store
          </h1>
          <p className="text-center">
            There are many products you will find our shop, Choose your daily
            necessary product from our Fashion point shop and get some special offer.
          </p>
          <div className="flex justify-center mt-10 gap-5">
            <Image
              src="/homePageImage/app-store.svg"
              alt="Picture of the author"
              width={200}
              height={200}
            />
            <Image
              src="/homePageImage/play-store.svg"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="col-span-3 hidden lg:block">
          <Image
            src="/homePageImage/app_ads_image2.svg"
            alt="Picture of the author"
            className="p-10"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AppAds;
