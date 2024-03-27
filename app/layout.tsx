import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import DonutIcon from "@/public/assets/images/donut.png";
import { NextAuthProvider } from "@/components/layouts/NextAuthProvider";
import { authOptions } from "@/lib/nextauth";
import { getServerSession } from "next-auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <NextAuthProvider session={session}>
        <body className={poppin.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
