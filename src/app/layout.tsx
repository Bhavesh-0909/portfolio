import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhavesh | Portfolio",
  description: "Personal portfolio website of Bhavesh Choudhary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={inter.className}>
        <NextTopLoader
        height={2}
        />
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
