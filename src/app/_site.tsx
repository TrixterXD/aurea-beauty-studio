import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "../components/Header";
import type { Dictionary } from "../i18n/en";
import { locales, type Locale } from "../i18n/locales";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = new URL("https://aurea-beauty-studio-gamma.vercel.app/");

export function siteMetadata(locale: Locale, { title, description, imageAlt }: Dictionary["seo"]): Metadata {
  const url = locales[locale].path;
  const images = [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: imageAlt }];

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: locales.en.path, ru: locales.ru.path, ro: locales.ro.path, "x-default": locales.en.path },
    },
    openGraph: { type: "website", url, title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
    icons: { icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" } },
  };
}

export default function SiteLayout({
  locale,
  copy,
  children,
}: { locale: Locale; copy: Dictionary; children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${cormorant.variable} ${manrope.variable}`}>
      <body id="top">
        <Header locale={locale} copy={copy.header} nav={copy.nav} />
        {children}
      </body>
    </html>
  );
}
