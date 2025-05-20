import type { Metadata } from "next";

import "@/app/styles/reset.scss";
import "@/app/styles/typography.scss";
import "@/app/styles/common.scss";
import "@/app/styles/globals.css";

import Header from "@/components/header";

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
      <body className={`antialiased max-w-[480px] mx-auto px-s`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
