"use client";
import React, { useEffect, useState } from "react";
import { environment } from "../environments/environment";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Advert() {
  const [advert, setAdvert] = useState([]);
  const [showAdvert, setShowAdvert] = useState(false);
  useEffect(() => {
    async function getAdvert() {
      try {
        const response = await axios.get(
          `${environment.base_url}/banner-advertising/active`
        );
        setAdvert(response.data.data);
        setShowAdvert(true);
      } catch (error) {
        console.error(error);
      }
    }
    getAdvert();
  }, []);
  return (
    <section className="home-page-advert">
      {showAdvert ? (
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {advert.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="advert" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        ""
      )}
    </section>
  );
}

export default Advert;
