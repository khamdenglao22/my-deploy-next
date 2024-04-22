import axios from "axios";
import Image from "next/image";

export async function generateMetadata() {
  const id = 6;
  // fetch data
  const res = await axios.get(
    `https://www.stmuangthai.com/bof/api/service-country/${id}`
  );
  return {
    title: res.data.data.seo_title,
    description: res.data.data.seo_description,
  };
}

async function getDataService(country_id) {
  const res = await axios.get(
    `https://www.stmuangthai.com/bof/api/service-country/${country_id}`
  );
  console.log(res.data.data);
  return res.data.data;
}

export default async function Home() {
  const data = await getDataService(6);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="next/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
