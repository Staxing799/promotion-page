import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import { defaultLocale, isLocale } from "../lib/i18n";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ShopSync.show | AI Video Localization for Global Commerce",
  description:
    "Upload one ecommerce video and turn it into multilingual subtitles, translated voiceovers, and lip-matched video variants for every storefront.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    locale?: string;
  }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const htmlLang = locale && isLocale(locale) ? locale : defaultLocale;

  return (
    <html lang={htmlLang} data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
