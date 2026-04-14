import type { MetadataRoute } from "next";
import { locales } from "../lib/i18n";
import { defaultLocale } from "../lib/i18n";
import { getLocaleUrl, getSiteOrigin } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getSiteOrigin(),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...locales.map((locale) => ({
      url: getLocaleUrl(locale),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === defaultLocale ? 1 : 0.9,
    })),
  ];
}
