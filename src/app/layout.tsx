import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | 운전연수예약미니프로젝트",
    default: "운전연수예약미니프로젝트",
  },
  description: "운전연수예약프로젝트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
