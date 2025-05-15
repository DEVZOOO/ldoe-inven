import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/styles/reset.scss";
import "@/app/styles/globals.css";

import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LDOE INVEN",
  description: "Last Day On Earth Inven by DEVZOOO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[480px] mx-auto px-[20px]`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
