import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ST-Muang Thai Insurance",
  // icons: {
  //   icon: [
  //     {
  //       url: "./logo.svg",
  //       type: "image/svg",
  //     },
  //   ],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/logo.svg" sizes="any" />
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </head>
      <body>
        <div className="container responsive">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
