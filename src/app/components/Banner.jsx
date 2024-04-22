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
    async function getAdvert() {
      try {
        // const response = await axios.get(
        //   `${environment.base_url}/banner-advertising/active`
        // );
        const res = await axios.get(
          `https://www.stmuangthai.com/bof/api/banner/page`
        );
        console.log(res.data.data);
        setBannerData(res.data.data);
        setShowBanner(true);
      } catch (error) {
        console.error(error);
      }
    }
    getAdvert();
  }, []);
  return (
    <>
      <div className="sli">
        <div className="sli-banner">
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
              // controller={{ control: controlledSwiper }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Autoplay, Pagination, Thumbs]}
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
      </div>
    </>
  );
}

export default Banner;
