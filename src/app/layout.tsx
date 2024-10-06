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
      <head>
      <link rel="icon" href="/bc.png" type="image/png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="Wdn4rfd9N766rJ45I77_04HWKZmuEJRsDclI1xgJu3E" />
      </head>
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
