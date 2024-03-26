import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import DonutIcon from "@/public/assets/images/donut.png";

export const metadata: Metadata = {
  title: "Donuts",
  description: "Donuts",
  icons: "../public/assets/images/donut.png",
};

const poppin = Poppins({
  weight: "400", // 400 & 700
  preload: false,
  variable: "--poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  );
}
