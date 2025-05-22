import type { Metadata } from "next";

import "@/styles/reset.scss";
import "@/styles/typography.scss";
import "@/styles/common.scss";
import "@/styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className={`antialiased max-w-[480px] mx-auto`}>
        <Header></Header>
        <div className="px-s min-h-[84dvh]">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
