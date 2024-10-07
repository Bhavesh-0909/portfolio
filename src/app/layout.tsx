import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhavesh Choudhary | Full Stack Developer Portfolio",
  description: "Explore the portfolio of Bhavesh Choudhary, a full-stack developer with a passion for building dynamic web applications using modern technologies like Next.js, React, and Tailwind CSS.",
  keywords: "Bhavesh Choudhary, full-stack developer, portfolio, React.js, Next.js, Tailwind CSS, web development",
  authors: [{ name: "Bhavesh Choudhary" }],
  openGraph: {
    title: "Bhavesh Choudhary | Full Stack Developer Portfolio",
    description: "Discover the work and projects of Bhavesh Choudhary, a full-stack developer skilled in React.js, Next.js, and modern web technologies.",
    url: "https://bhavesh-portfolio-tau.vercel.app/",
    siteName: "Bhavesh Portfolio",
    images: [
      {
        url: "https://bhavesh-portfolio-tau.vercel.app/bc.png",
        width: 1200,
        height: 630,
        alt: "Bhavesh Choudhary Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bhavesh_Dev07",
    title: "Bhavesh Choudhary | Full Stack Developer Portfolio",
    description: "Check out my personal portfolio website.",
    images: [{ url : "https://bhavesh-portfolio-tau.vercel.app/bc.png"}],
  }
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bhavesh Choudhary",
              "jobTitle": "Full Stack Developer",
              "url": "https://bhavesh-portfolio-tau.vercel.app/",
              "sameAs": [
                "https://www.instagram.com/_bhavesh_7",
                "https://x.com/Bhavesh_Dev07",
                "https://github.com/Bhavesh-0909",
                "https://www.linkedin.com/in/bhavesh-choudhary-700617285/"
              ],
              "description": "Full-stack developer building dynamic web applications using React.js, Next.js, and Tailwind CSS.",
              "image": "https://bhavesh-portfolio-tau.vercel.app/bc.png",
            }
          `}
        </script>
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
