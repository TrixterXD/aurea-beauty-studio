import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = new URL("https://aurea-beauty-studio-gamma.vercel.app/");
const title = "AURÉ — Beauty Studio";
const description =
  "Discover AURÉ, a concept beauty studio celebrating timeless elegance, thoughtful treatments, and beauty in balance.";
const image = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "AURÉ Beauty Studio — Beauty in balance.",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: { type: "website", url: siteUrl, title, description, images: [image] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" } },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body id="top">
        <Header />
        {children}
      </body>
    </html>
  );
}
