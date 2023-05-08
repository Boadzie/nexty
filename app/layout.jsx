import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Nexty",
  description: "Awesome Nexty World",
  keywords:
    "website, web developement, design, nextjs, react, html, css, javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="bg-[#000a3d] text-white">{children}</main>
      </body>
    </html>
  );
}
