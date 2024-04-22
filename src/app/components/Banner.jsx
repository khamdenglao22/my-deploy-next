"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  A11y,
  Controller,
  Thumbs,
} from "swiper/modules";

function Banner() {
  const [bannerData, setBannerData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    async function getBanner() {
      try {
        const res = await axios.get(
          `https://www.stmuangthai.com/bof/api/banner/page`
        );
        // console.log(res.data.data);
        setBannerData(res.data.data);
        setShowBanner(true);
      } catch (error) {
        console.error(error);
      }
    }
    getBanner();
  }, []);
  return (
    <>
      <div className="sli">
        <div className="sli-banner">
          {showBanner ? (
            <Swiper
              modules={[Thumbs]}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              className="mySwiper"
            >
              {bannerData.map((item, i) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img src={item.image} alt="image" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            ""
          )}
        </div>

        <div className="sli-center">
          {showBanner ? (
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper"
            >
              {bannerData.map((item, i) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.image}
                      alt="image"
                      width={100}
                      height={200}
                      quality={100}
                      placeholder="empty"
                      //   style={{ width: "500px", height: "100px" }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Banner;
