import axios from "axios";
import Image from "next/image";
import Banner from "./components/Banner";

// export async function generateMetadata() {
//   const id = 6;
//   // fetch data
//   const res = await axios.get(
//     `https://www.stmuangthai.com/bof/api/service-country/${id}`
//   );
//   return {
//     title: res.data.data.seo_title,
//     description: res.data.data.seo_description,
//   };
// }

async function getDataService(country_id) {
  const res = await axios.get(
    `https://www.stmuangthai.com/bof/api/service-country/${country_id}`
  );
  // console.log(res.data.data);
  return res.data.data;
}

export default async function Home() {
  const data = await getDataService(6);
  return (
    <>
      <Banner />
    </>
  );
}
