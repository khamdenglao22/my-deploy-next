"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function RepairRight() {
  const [imageMapUrl, setImageMapUrl] = useState("");
  useEffect(() => {}, []);

  const loadLaoByProv = (id) => {};
  return (
    <>
      <div className="main-right">
        <div className="main-right-content">
          <div className="list-nav">
            <li>
              <Link href="/">ໜ້າຫຼັກ</Link>
            </li>
            <li>
              <a>ບໍລິການ</a>
            </li>
            <li>
              <a>ອູ່ສ້ອມແປງ</a>
            </li>
          </div>
          <h2>ອູ່ສ້ອມແປງ</h2>
          <div className="content">
            <div className="content-service-body">
              <div className="content-img">
                {/* <img src={imageMapUrl} alt="service-image" /> */}
              </div>
              <div className="content-province">
                <div className="content-province-lists">
                  <div className="province-list-item">
                    <a
                      className="province-list-item-product {{activeItem === item.prov_cd ? 'active' : ''}}"
                      // onClick={loadLaoByProv(item.prov_cd)}
                    >
                      <img
                        src="../assets/icons/icon-address.svg"
                        alt="service-image"
                      />
                      {/* <p>{item.prov_name_la}</p> */}
                    </a>
                  </div>
                </div>
                <div className="content-province-detail">
                  <div className="province-detail-item">
                    {/* <h4>{item.location_name_la}</h4> */}
                    <div className="province-detail-item-address">
                      <img
                        src="../assets/icons/icon-home-service-page.svg"
                        alt="service-image"
                      />
                      {/* <p>
                        {item.Village == null ? "" : "ບ້ານ"}
                        {item.Village == null
                          ? ""
                          : item.Village.vill_name_la + ","}
                        {item.District == null ? "" : "ເມືອງ"}
                        {item.District == null
                          ? ""
                          : item.District.dist_name_la + ","}
                        {item.Province == null ? "" : "ແຂວງ"}
                        {item.Province == null
                          ? ""
                          : item.Province.prov_name_la}
                      </p> */}
                    </div>
                    <div className="province-detail-item-address">
                      <img
                        src="../assets/icons/icon-phone-smal-service-page.svg"
                        alt="service-image"
                      />
                      {/* <p>
                        {item.tel}
                        {item.tel == "" ? "" : ","}
                        {item.phone}
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RepairRight;
