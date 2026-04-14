import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "./i18n";

export const siteName = "Lipsync.show";
export const createPageUrl = "https://www.lipsync.show/create";

const defaultSiteOrigin = "https://www.lipsync.show";

export function getSiteOrigin() {
  return process.env.NEXT_PUBLIC_SITE_URL || defaultSiteOrigin;
}

export function getMetadataBase() {
  return new URL(getSiteOrigin());
}

export function getLocalePath(locale: Locale) {
  return `/${locale}`;
}

export function getLocaleUrl(locale: Locale) {
  return `${getSiteOrigin()}${getLocalePath(locale)}`;
}

export function getLanguageAlternates() {
  const alternates = Object.fromEntries(
    locales.map((locale) => [locale, getLocaleUrl(locale)]),
  ) as Record<string, string>;

  alternates["x-default"] = getLocaleUrl(defaultLocale);

  return alternates;
}

export type KeywordCluster = {
  tag: string;
  title: string;
  description: string;
  keywords: string[];
};

export type SearchIntentCard = {
  tag: string;
  title: string;
  description: string;
  terms: string[];
};

export type SeoLandingContent = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  keywordSection: {
    eyebrow: string;
    title: string;
    description: string;
    clusters: KeywordCluster[];
  };
  searchIntentSection: {
    eyebrow: string;
    title: string;
    description: string;
    cards: SearchIntentCard[];
  };
  schemaFeatures: string[];
};

const fallbackKeywords = [
  "ai video localization",
  "ecommerce video translation",
  "product video dubbing",
  "multilingual product video",
  "cross-border ecommerce video tool",
  "video lip sync translation",
  "ai subtitle generator for ecommerce",
  "multilingual video ads",
];

const seoContentByLocale: Partial<Record<Locale, SeoLandingContent>> = {
  en: {
    metadata: {
      title:
        "Lipsync.show | AI Video Translation, Dubbing and Lip Sync for Cross-Border Ecommerce",
      description:
        "Translate product videos for Amazon, Shopify, TikTok Shop, Temu, Shopee and DTC stores with multilingual subtitles, voiceovers and lip-synced exports built for cross-border ecommerce teams.",
      keywords: [
        "cross-border ecommerce video translation",
        "ai video localization for ecommerce",
        "amazon product video translation",
        "amazon listing video localization",
        "shopify product video translation",
        "shopify multilingual product video",
        "tiktok shop ad translation",
        "tiktok shop video dubbing",
        "temu product video translation",
        "shopee listing video translation",
        "aliexpress product video dubbing",
        "ugc ad localization",
        "product video lip sync",
        "multilingual video ads",
        "product demo video dubbing",
        "ai voiceover for ecommerce",
        "video subtitle translation",
        "multilingual storefront video",
        "ecommerce video dubbing software",
        "bulk video translation for sellers",
        "cross-border product video localization",
        "regional voiceover for ecommerce videos",
      ],
    },
    keywordSection: {
      eyebrow: "SEO Coverage",
      title: "Long-tail keyword coverage for cross-border ecommerce video workflows",
      description:
        "These topic clusters map directly to how operators search when they need product video translation, subtitle generation, voiceover replacement, or lip sync for international ecommerce growth.",
      clusters: [
        {
          tag: "Marketplace listings",
          title: "Product page and marketplace video localization keywords",
          description:
            "Capture teams searching for ways to localize PDP videos, marketplace explainers, and listing assets without rebuilding every edit by hand.",
          keywords: [
            "amazon product video translation",
            "amazon listing video localization",
            "shopify product video translation",
            "shopify multilingual product video",
            "temu product video translation",
            "shopee listing video dubbing",
          ],
        },
        {
          tag: "UGC and paid social",
          title: "Creator ad, UGC and short-form commerce search terms",
          description:
            "Win traffic from operators scaling ads across regions, especially when top-performing creator clips need native-sounding language and matched mouth movement.",
          keywords: [
            "tiktok shop ad translation",
            "ugc ad voiceover",
            "creator video lip sync",
            "multilingual social commerce video",
            "facebook ad video dubbing",
            "instagram reel translation",
          ],
        },
        {
          tag: "DTC education",
          title: "Product demos, explainers and conversion content terms",
          description:
            "Serve brands localizing demos, tutorials, unboxings, founder videos, and customer education assets for region-specific storefronts and landing pages.",
          keywords: [
            "product demo video translation",
            "explainer video localization",
            "how to video dubbing",
            "founder video translation",
            "unboxing video subtitles",
            "customer testimonial dubbing",
          ],
        },
        {
          tag: "Scale operations",
          title: "High-intent operational keywords for fast-moving teams",
          description:
            "Bring in teams that care about scale, speed, and workflow efficiency across multiple markets, languages, channels, and product lines.",
          keywords: [
            "bulk video translation for ecommerce",
            "ecommerce video dubbing platform",
            "multilingual video generator for ecommerce",
            "ai subtitle generator for sellers",
            "cross-border ecommerce video tool",
            "lip sync video translator",
          ],
        },
      ],
    },
    searchIntentSection: {
      eyebrow: "Intent Pages",
      title: "High-intent topics cross-border sellers and brands actually search",
      description:
        "This content layer is designed around buyer intent, not vanity terms, so search engines can connect the page to practical ecommerce localization problems.",
      cards: [
        {
          tag: "Amazon",
          title: "Amazon PDP and listing video translation",
          description:
            "For sellers adapting one product video into multilingual marketplace assets that keep claims, CTA language, and subtitle timing aligned.",
          terms: [
            "amazon pdp video translation",
            "amazon listing video dubbing",
            "amazon product video subtitles",
          ],
        },
        {
          tag: "Shopify",
          title: "Shopify product page video localization",
          description:
            "For DTC teams turning product explainers and conversion videos into localized storefront modules for more than one market.",
          terms: [
            "shopify product video localization",
            "shopify multilingual video",
            "shopify video translation app",
          ],
        },
        {
          tag: "TikTok Shop",
          title: "TikTok Shop UGC ad translation and lip sync",
          description:
            "For growth teams reusing high-performing creator content across paid social, social commerce, and regional ad accounts.",
          terms: [
            "tiktok shop ugc translation",
            "tiktok ad dubbing",
            "creator video translation",
          ],
        },
        {
          tag: "Temu and Shopee",
          title: "Localized product videos for value marketplaces",
          description:
            "For operators launching product videos faster across Temu, Shopee, and other regional channels that reward volume and speed.",
          terms: [
            "temu video translation",
            "shopee product video localization",
            "multilingual marketplace video",
          ],
        },
        {
          tag: "DTC landing pages",
          title: "Explainer, founder and landing page video dubbing",
          description:
            "For brands that need international landing pages to feel native, credible, and consistent with the rest of the store experience.",
          terms: [
            "landing page video translation",
            "founder video dubbing",
            "dtc explainer localization",
          ],
        },
        {
          tag: "Workflow efficiency",
          title: "Subtitle, voiceover and lip sync in one workflow",
          description:
            "For teams searching for a faster production system instead of stitching together multiple tools for captions, translation, dubbing and sync.",
          terms: [
            "subtitle voiceover lip sync workflow",
            "ai video localization workflow",
            "one upload multilingual video",
          ],
        },
      ],
    },
    schemaFeatures: [
      "Translate ecommerce product videos into multiple languages",
      "Generate subtitles, voiceovers and lip-synced video exports",
      "Support Amazon, Shopify, TikTok Shop, Temu, Shopee and DTC workflows",
      "Localize UGC ads, demos, explainers and marketplace listing videos",
    ],
  },
  zh: {
    metadata: {
      title:
        "Lipsync.show | 跨境电商商品视频翻译、配音与口型同步 SEO 落地页",
      description:
        "面向 Amazon、Shopify、TikTok Shop、Temu、Shopee 与独立站团队的 AI 视频本地化工具，支持商品视频翻译、多语言字幕、AI 配音和口型同步。",
      keywords: [
        "跨境电商视频翻译",
        "商品视频本地化",
        "amazon商品视频翻译",
        "amazon视频本地化",
        "shopify商品视频翻译",
        "shopify多语言视频",
        "tiktok shop广告翻译",
        "tiktok shop视频配音",
        "temu商品视频翻译",
        "shopee商品视频翻译",
        "aliexpress视频配音",
        "跨境电商ai配音",
        "商品视频字幕生成",
        "商品视频口型同步",
        "多语言商品视频",
        "独立站视频翻译",
        "产品演示视频翻译",
        "跨境电商ugc翻译",
        "视频配音软件 跨境电商",
        "跨境电商视频出海工具",
        "多语言广告视频生成",
        "商品详情页视频翻译",
      ],
    },
    keywordSection: {
      eyebrow: "SEO 词群覆盖",
      title: "围绕跨境电商高意图搜索词构建可索引内容",
      description:
        "这些关键词集群对应卖家、品牌方和投放团队的真实搜索需求，不是单纯堆词，而是把商品视频翻译、配音、字幕和口型同步场景拆成可被搜索引擎理解的专题内容。",
      clusters: [
        {
          tag: "平台上架",
          title: "商品详情页与平台视频本地化关键词",
          description:
            "覆盖 Amazon、Shopify、Temu、Shopee 等平台在上架、详情页讲解和商品视频复用上的搜索需求。",
          keywords: [
            "amazon商品视频翻译",
            "amazon详情页视频本地化",
            "shopify商品视频翻译",
            "shopify多语言商品视频",
            "temu商品视频翻译",
            "shopee商品视频配音",
          ],
        },
        {
          tag: "广告投放",
          title: "UGC、达人素材与短视频广告关键词",
          description:
            "覆盖 TikTok Shop、短视频广告、达人口播与 UGC 素材出海时最常见的翻译和配音搜索意图。",
          keywords: [
            "tiktok shop广告翻译",
            "ugc视频配音",
            "达人口播翻译",
            "广告视频口型同步",
            "多语言短视频广告",
            "跨境电商视频配音",
          ],
        },
        {
          tag: "站内转化",
          title: "产品演示、讲解和独立站转化视频关键词",
          description:
            "覆盖产品演示、开箱、使用教程、品牌讲解和独立站落地页视频等强转化内容的本地化需求。",
          keywords: [
            "产品演示视频翻译",
            "讲解视频配音",
            "独立站视频翻译",
            "品牌介绍视频本地化",
            "开箱视频字幕生成",
            "商品教程视频翻译",
          ],
        },
        {
          tag: "运营提效",
          title: "批量处理与跨市场扩量关键词",
          description:
            "覆盖需要快速批量出多语言版本、提高投放复用效率、减少剪辑返工的运营团队搜索需求。",
          keywords: [
            "批量视频翻译 跨境电商",
            "跨境电商视频出海工具",
            "商品视频多语言生成",
            "ai字幕生成 跨境卖家",
            "视频配音软件 跨境电商",
            "口型同步视频翻译",
          ],
        },
      ],
    },
    searchIntentSection: {
      eyebrow: "搜索意图专题",
      title: "让页面覆盖跨境卖家真正会搜的业务场景词",
      description:
        "按平台、渠道和具体任务拆分专题内容，帮助搜索引擎判断这个页面与跨境电商视频本地化需求高度相关。",
      cards: [
        {
          tag: "Amazon",
          title: "Amazon 商品详情页视频翻译与多语言上架",
          description:
            "面向需要把一个商品讲解视频复用到多个站点和语言版本的卖家团队。",
          terms: [
            "amazon商品视频翻译",
            "amazon listing video localization",
            "amazon视频字幕生成",
          ],
        },
        {
          tag: "Shopify",
          title: "Shopify 商品页视频本地化与独立站转化",
          description:
            "面向独立站品牌把讲解视频、对比视频和转化视频同步到不同市场的需求。",
          terms: [
            "shopify商品视频翻译",
            "shopify多语言视频",
            "独立站视频本地化",
          ],
        },
        {
          tag: "TikTok Shop",
          title: "TikTok Shop 达人广告翻译、配音与口型同步",
          description:
            "面向复用爆款达人视频、短视频广告和社媒素材的投放团队。",
          terms: [
            "tiktok shop广告翻译",
            "达人视频配音",
            "短视频口型同步",
          ],
        },
        {
          tag: "Temu / Shopee",
          title: "Temu、Shopee 等平台的批量商品视频处理",
          description:
            "面向多平台铺货和多市场扩量团队，重点覆盖批量翻译和快速出片需求。",
          terms: [
            "temu商品视频翻译",
            "shopee商品视频翻译",
            "多语言商品视频生成",
          ],
        },
        {
          tag: "落地页",
          title: "产品演示、品牌介绍与落地页视频配音",
          description:
            "面向品牌介绍、Founder 视频、功能讲解与独立站落地页视频本地化场景。",
          terms: [
            "产品演示视频翻译",
            "品牌介绍视频配音",
            "落地页视频翻译",
          ],
        },
        {
          tag: "一体化流程",
          title: "字幕、配音、口型同步一体化工作流",
          description:
            "面向正在搜索更高效工作流、想减少剪辑返工和多工具切换成本的团队。",
          terms: [
            "字幕 配音 口型同步",
            "ai视频本地化工作流",
            "一条视频生成多语言版本",
          ],
        },
      ],
    },
    schemaFeatures: [
      "面向跨境电商的商品视频翻译与本地化",
      "支持多语言字幕、AI 配音和口型同步输出",
      "适配 Amazon、Shopify、TikTok Shop、Temu、Shopee 与独立站",
      "适合商品视频、达人广告、讲解视频和详情页视频复用",
    ],
  },
};

export function getSeoContent(locale: Locale) {
  return seoContentByLocale[locale] || seoContentByLocale.en!;
}

const openGraphLocaleMap: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  ja: "ja_JP",
};

export function getLocaleMetadata(
  locale: Locale,
  fallback: {
    title: string;
    description: string;
  },
): Metadata {
  const seo = getSeoContent(locale);
  const title = seo.metadata.title || fallback.title;
  const description = seo.metadata.description || fallback.description;
  const keywords =
    seo.metadata.keywords.length > 0 ? seo.metadata.keywords : fallbackKeywords;
  const canonical = getLocaleUrl(locale);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName,
      locale: openGraphLocaleMap[locale],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
