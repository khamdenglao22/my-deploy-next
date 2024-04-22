import { Inter } from "next/font/google";
import "./globals.css";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
