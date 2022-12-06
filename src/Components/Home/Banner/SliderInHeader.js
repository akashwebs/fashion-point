import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Sidebar.module.css";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

const SliderInHeader = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={styles}
        autoplay={true}
        navigation
      >
        <SwiperSlide>
          <Image
            width={1200}
            height={1200}
            alt="banner"
            src={
              "https://icms-image.slatic.net/images/ims-web/ad6bfb35-cb9f-4d6e-899d-9b0aa6e5b6ac.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1200}
            height={1200}
            alt="banner"
            src={
              "https://icms-image.slatic.net/images/ims-web/5086f772-88e8-42e5-b281-d62e9ec9ff08.jpg_1200x1200.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1200}
            height={1200}
            alt="banner"
            src={
              "https://icms-image.slatic.net/images/ims-web/6b125370-22ce-4172-bc1a-7bc87c7fba27.jpg_1200x1200.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderInHeader;
