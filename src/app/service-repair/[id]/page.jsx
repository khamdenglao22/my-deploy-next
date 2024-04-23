import Advert from "@/app/components/Advert";
import Messenger from "@/app/components/Messenger";
import React from "react";
// import RepairRight from "./RepairRight";
import { environment } from "@/app/environments/environment";
import axios from "axios";
import RepairRight from "./RepairRight";

async function getDataService(country_id) {
  const res = await axios.get(
    `${environment.base_url}/service-country/${country_id}`
  );
  // console.log(res.data.data);
  return res.data.data;
}

export async function generateMetadata({ params }) {
  const id = params.id;
  // fetch data
  const res = await axios.get(`${environment.base_url}/service-country/${id}`);
  return {
    title: res.data.data.seo_title,
  };
}

export default async function page({ params }) {
  const data = await getDataService(params.id);

  return (
    <>
      <div className="main">
        <Messenger />
        <img
          className="bg-water"
          src="../assets/images/bg-water.svg"
          alt="water"
        />
        <div className="main-left">
          <img
            className="image-address"
            src="../assets/images/image-address-4.jpg"
            alt="image-service"
          />
          <img
            className="image-opacity"
            src="../assets/images/image-address-hospital-background.svg"
            alt="image-service"
          />
          <div className="main-left-text service">
            <h5>ອູ່ສ້ອມແປງ</h5>
            <p>
              ເຕັມທີ່ກັບທຸກ Life Style ເອັສທີ-ເມືອງໄທ ປະກັນໄພ ພ້ອມໃຫ້ບໍລິການ
            </p>
          </div>
        </div>
        <RepairRight />
      </div>
      <Advert />
    </>
  );
}
