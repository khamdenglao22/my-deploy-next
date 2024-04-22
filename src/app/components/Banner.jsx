"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Banner() {
  const [bannerData, setBannerData] = useState([]);
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
      } catch (error) {
        console.error(error);
      }
    }
    getAdvert();
  }, []);
  return (
    <>
      {bannerData.map((item) => {
        return (
          <div key={item.id}>
            <img
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={item.image}
              alt="Next.js Logo"
              width={180}
              height={37}
            />
          </div>
        );
      })}
    </>
  );
}

export default Banner;
