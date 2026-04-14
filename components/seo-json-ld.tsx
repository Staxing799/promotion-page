import type { LandingPageContent, Locale } from "../lib/i18n";
import {
  createPageUrl,
  getLocaleUrl,
  getSeoContent,
  getSiteOrigin,
  siteName,
} from "../lib/seo";

type SeoJsonLdProps = {
  content: LandingPageContent;
  locale: Locale;
};

export function SeoJsonLd({ content, locale }: SeoJsonLdProps) {
  const seo = getSeoContent(locale);
  const origin = getSiteOrigin();
  const pageUrl = getLocaleUrl(locale);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: origin,
    inLanguage: locale,
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: pageUrl,
    offers: {
      "@type": "Offer",
      price: "9",
      priceCurrency: "USD",
      url: createPageUrl,
    },
    description: seo.metadata.description,
    featureList: seo.schemaFeatures,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
