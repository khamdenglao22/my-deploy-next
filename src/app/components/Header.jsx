"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { environment } from "../environments/environment";
import axios from "axios";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const [dataProducts, setDataProducts] = useState([]);
  const [dataServices, setDataService] = useState([]);
  const [dataServicesDetail, setDataServiceDetail] = useState([]);

  const [openService, setOpenService] = useState(false);
  const [openServiceDetail, setOpenServiceDetail] = useState(false);

  const onService = (number) => {
    alert(number);
  };

  const onOpenService = (number) => {
    setOpenService(!openService);
    setOpenServiceDetail(false);
  };

  const onOpenServiceDetail = async (service_id) => {
    try {
      const response = await axios.get(
        `${environment.base_url}/service-country?service_type_id=${service_id}`
      );
      if (service_id == 4) {
        setOpenServiceDetail(!openServiceDetail);
        setDataServiceDetail(response.data.data);
      } else {
        onOpenService();
        router.push(`/service-repair/${response.data.data[0].id}`, {
          scroll: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function getDataService() {
      try {
        const response = await axios.get(
          `${environment.base_url}/service-type`
        );
        setDataService(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDataService();
  }, []);

  return (
    <header>
      <div className="header-sticky">
        <div className="logo">
          <img src="../assets/images/left-header-logo.svg" alt="logo" />
        </div>
        <div className="nav">
          <div className="navs">
            <ul className="nav-lists">
              <li>
                <Link href="/">ໜ້າຫຼັກ</Link>
              </li>
              <li>
                <a onClick={() => onService(2)}>
                  ຜະລິດຕະພັນ
                  <img
                    src="../assets/images/icon-arow-right.svg"
                    alt="menu"
                    className="arrow-menu"
                  />
                </a>
              </li>
              <li>
                <a onClick={() => onOpenService(2)}>
                  ບໍລິການ
                  <img
                    src="../assets/images/icon-arow-right.svg"
                    alt="menu"
                    className="arrow-menu"
                  />
                </a>
              </li>
            </ul>
            <div className="nav-right">
              <div className="right-icons">
                <Link href="tel:+856 21 253159">
                  <img src="../assets/images/phoneicon.svg" />
                </Link>
                <Link href="https://www.facebook.com/STMTI" target="_blank">
                  <img src="../assets/images/fb icon.svg" />
                </Link>
                <Link href="mailto:info@stmuangthai.com">
                  <img src="../assets/images/message icon.svg" />
                </Link>
              </div>
              <div className="right-lang">
                <Link href="#" className="active">
                  LA
                </Link>
                <Link href="#">EN</Link>
              </div>
            </div>
          </div>
        </div>
        {/* service sub menu */}
        <div className={`nav-sub-service ${openService ? "active" : ""} `}>
          <div className="nav-subs">
            <ul>
              {dataServices.map((item) => {
                return (
                  <li key={item.id}>
                    <a onClick={() => onOpenServiceDetail(item.id)}>
                      {item.service_type_la}
                      {item.service_type_la != "ອູ່ສ້ອມແປງ" ? (
                        <img
                          src="../assets/images/icon-arow-right.svg"
                          alt="arrow"
                          className="arrow-menu"
                        />
                      ) : (
                        ""
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* service menu detail */}
        <div
          className={`nav-sub-service detail ${
            openServiceDetail && openService ? "active" : ""
          }`}
        >
          <div className="nav-subs">
            <ul>
              {dataServicesDetail.map((item) => {
                return (
                  <li key={item.id}>
                    <a>{item.country_name_la}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
