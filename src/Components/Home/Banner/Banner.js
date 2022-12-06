import React from "react";
import SidebarMenu from "./SiebarMenu";
import SliderInHeader from "./SliderInHeader";

const Banner = () => {
  return (
    <div className="bg-secondary pb-5">
      <div className="mid-container mx-auto px-2">
        <div className="flex gap-3">
          <div className="lg:w-[27%] lg:block hidden max-h-96 bg-white mt-4 pt-3 ">
            <SidebarMenu />
          </div>
          {/* -----------------------------slider */}
          <div className="lg:w-[73%] w-full mt-4 ">
            <SliderInHeader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
