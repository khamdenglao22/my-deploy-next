import axios from "axios";
import React from "react";
import { environment } from "../environments/environment";

async function getDataSocial() {
  const res = await axios.get(`${environment.base_url}/social`);
  // console.log(res.data.data);
  return res.data.data;
}

export default async function Footer() {
  const dataSocial = await getDataSocial();

  return (
    <>
      <footer>
        <div className="footer-detail">
          <div className="footer-detail-info">
            <a
              className="footer-detail-location"
              target="_blank"
              href="https://www.google.com/maps/place/%E0%BA%81%E0%BA%B8%E0%BB%88%E0%BA%A1+%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%AA%E0%BA%B1%E0%BA%94+ST+%E0%BA%88%E0%BA%B3%E0%BA%81%E0%BA%B1%E0%BA%94/@17.9709893,102.5671514,17z/data=!3m1!4b1!4m6!3m5!1s0x312469a85507a1e9:0x32f81164276dd11a!8m2!3d17.9709893!4d102.5671514!16s%2Fg%2F11r9t9np5?authuser=0&entry=ttu"
            >
              <h5>
                ບໍລິ​ສັດ ເອັສທີ - ເມືອງໄທ ປະກັນໄພ ຈຳກັດ (ນະຄອນຫລວງວຽງຈັນ).
              </h5>
              <p>
                ອາຄານ ເອັສທີ ກຣຸບ, ຊັ້ນ 3, ເຮືອນເລກທີ 02, ຖະໜົນ ສຸພານຸວົງ, ບ້ານ
                ເມືອງວາທ່າ, ເມືອງ ສີໂຄດຕະບອງ, ນະຄອນຫລວງວຽງຈັນ, ສປປ ລາວ.
              </p>
            </a>
            <a
              className="footer-detail-location"
              target="_blank"
              href="https://www.google.com/maps/place/ST+Bank+,Savannakhet+Branch/@16.5579173,104.7452121,17z/data=!3m1!4b1!4m6!3m5!1s0x313dc605f61c7d07:0xb7bb6785e916ee8!8m2!3d16.5579173!4d104.7452121!16s%2Fg%2F1hm3vvqcw?hl=th-LA&entry=ttu"
            >
              <h5>
                ບໍລິ​ສັດ ເອັສທີ - ເມືອງໄທ ປະກັນໄພ ຈຳກັດ (ແຂວງ ສະຫວັນນະເຂດ).
              </h5>
              <p>ບ້ານ ໄຊຍະພູມ, ເມືອງ ນະຄອນໄກສອນ, ແຂວງ ສະຫວັນນະເຂດ, ສປປ ລາວ.</p>
            </a>
            <div className="footer-detail-social">
              {dataSocial.map((item) => {
                return (
                  <div key={item.id}>
                    <a href={item.social_link} target="_blank">
                      <img src={item.image} alt="image" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-detail-products">
            <div className="footer-detail-product">
              <h5>ຜະ​ລິດ​ຕະ​ພັນ</h5>
              <li>
                <a href="#nogo">ປະກັນຊີວິດ</a>
              </li>
              <li>
                <a href="#nogo">ປະກັນໄພທົ່ວໄປ</a>
              </li>
            </div>
            <div className="footer-detail-product service">
              <h5>ບໍລິການ</h5>
              <li>
                <a href="#nogo">ໂຮງໝໍ</a>
              </li>
              <li>
                <a href="#nogo">ອູ່ສ້ອມແປງ</a>
              </li>
            </div>
            <div className="footer-detail-product news-title">
              <h5 style={{ cursor: "pointer" }}>ຂ່າວ &amp; ກິດ​ຈະ​ກໍາ​</h5>
            </div>
          </div>
          <div className="footer-detail-news-about">
            <div className="footer-detail-product about">
              <h5>ກ່ຽວ​ກັບ​ເຮົາ</h5>
              <li>
                <a href="#nogo">ປະຫວັດຄວາມເປັນມາ</a>
              </li>
              <li>
                <a href="#nogo">ວິໄສທັດ</a>
              </li>
              <li>
                <a href="#nogo">ແຜນຜັງໂຄງຮ່າງ</a>
              </li>
            </div>
            <div className="footer-detail-product job">
              <h5 style={{ cursor: "pointer" }}>ຮ່ວມງານກັບເຮົາ</h5>
            </div>
          </div>
          <div className="footer-detail-contact-job">
            <div
              className="footer-detail-product contact"
              style={{ marginBottom: 0 }}
            >
              <h5 style={{ cursor: "pointer" }}>ຕິດຕໍ່ພວກເຮົາ</h5>
            </div>
            <div
              className="footer-detail-call-info"
              style={{ paddingBottom: 45 }}
            >
              <div className="footer-detail-call-info-more">
                <a href="#">
                  <img
                    src="../assets/images/icon-phone-small.svg"
                    alt="image"
                  />
                  <p>(+856) 21 253079 (ນະຄອນຫລວງວຽງຈັນ)</p>
                </a>
              </div>
              <div className="footer-detail-call-info-more">
                <a href="#">
                  <img
                    src="../assets/images/icon-phone-small.svg"
                    alt="image"
                  />
                  <p>041 215 588 (ສະຫວັນນະເຂດ)</p>
                </a>
              </div>
              <div className="footer-detail-call-info-more">
                <a href="#">
                  <img src="../assets/images/icon-message.svg" alt="image" />
                  <p>info@stmuangthai.com</p>
                </a>
              </div>
              <div className="footer-detail-call-info-more">
                <a href="#">
                  <img src="../assets/images/icon-print.svg" alt="image" />
                  <p>(+856) 21 253159</p>
                </a>
              </div>
            </div>
          </div>
          <div
            className="footer-detail-call-info"
            style={{ paddingBottom: 45 }}
          >
            <div className="footer-detail-call-sale">
              <img src="../assets/images/icon-phone-big.svg" alt="image" />
              <div className="footer-detail-call-sale-info">
                <h3>ຝ່າຍຂາຍ</h3>
                <h3>020 5445 1234</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <h4 style={{ paddingRight: 5 }}>© 2024 ST-Muang Thai Co Ltd.</h4>
          <h4>Web Development by SVENG IT Solution.</h4>
        </div>
      </footer>
    </>
  );
}
