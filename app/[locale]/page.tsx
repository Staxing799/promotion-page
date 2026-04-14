import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "../../components/landing-page";
import {
  defaultLocale,
  isLocale,
  landingPageCopy,
  locales,
  type Locale,
} from "../../lib/i18n";
import { getLocaleMetadata } from "../../lib/seo";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

function getLocaleOrNotFound(localeParam: string): Locale {
  if (!isLocale(localeParam)) {
    notFound();
  }

  return localeParam;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const metadata = landingPageCopy[locale].metadata;

  return getLocaleMetadata(locale, metadata);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrNotFound(localeParam);

  return <LandingPage locale={locale} content={landingPageCopy[locale]} />;
}
