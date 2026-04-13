export const locales = ["en", "zh", "es", "fr", "de", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "preferred-language";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
};

type Signal = {
  value: string;
  label: string;
};

type ShowcaseCard = {
  tag: string;
  title: string;
  text: string;
};

type WorkflowCard = {
  index: string;
  title: string;
  description: string;
};

type ModelCard = {
  badge: string;
  name: string;
  description: string;
  speed: string;
  bestFor: string;
};

type PricingCard = {
  name: string;
  price: string;
  detail: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

type BlogCard = {
  tag: string;
  title: string;
  description: string;
  cta: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type Section = {
  eyebrow: string;
  title: string;
  description: string;
};

export type LandingPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    showcase: string;
    pricing: string;
    blog: string;
    models: string;
    signIn: string;
    languageLabel: string;
  };
  platformStripLabel: string;
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  signals: Signal[];
  visual: {
    sourceBadge: string;
    outputBadge: string;
    sourceTitle: string;
    sourceSubtitle: string;
    outputTitle: string;
    outputSubtitle: string;
    translate: string;
  };
  showcase: Section & {
    cards: ShowcaseCard[];
  };
  workflow: Section & {
    cards: WorkflowCard[];
  };
  models: Section & {
    speedLabel: string;
    bestForLabel: string;
    cards: ModelCard[];
  };
  pricing: Section & {
    cards: PricingCard[];
  };
  blog: Section & {
    cards: BlogCard[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const platformItems = [
  "Amazon",
  "Shopify",
  "TikTok Shop",
  "Temu",
  "AliExpress",
  "Shopee",
];

export const landingPageCopy = {} as Record<Locale, LandingPageContent>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value?: string | null): Locale | null {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();
  if (isLocale(normalized)) {
    return normalized;
  }

  const baseLanguage = normalized.split("-")[0];
  if (isLocale(baseLanguage)) {
    return baseLanguage;
  }

  return null;
}

export function pickPreferredLocale(
  cookieLocale?: string,
  acceptLanguageHeader?: string | null,
): Locale {
  const cookieMatch = normalizeLocale(cookieLocale);
  if (cookieMatch) {
    return cookieMatch;
  }

  if (acceptLanguageHeader) {
    const candidates = acceptLanguageHeader.split(",");

    for (const candidate of candidates) {
      const languageTag = candidate.split(";")[0]?.trim();
      const headerMatch = normalizeLocale(languageTag);
      if (headerMatch) {
        return headerMatch;
      }
    }
  }

  return defaultLocale;
}

landingPageCopy.en = {
  metadata: {
    title: "ShopSync.show | AI Video Localization for Global Commerce",
    description:
      "Upload one ecommerce video and turn it into multilingual subtitles, translated voiceovers, and lip-matched video variants for every storefront.",
  },
  nav: {
    showcase: "Showcase",
    pricing: "Pricing",
    blog: "Blog",
    models: "AI Models",
    signIn: "Sign In",
    languageLabel: "Language",
  },
  platformStripLabel: "Built for teams selling across channels",
  hero: {
    eyebrow: "Cross-border video localization",
    titleBefore: "",
    titleHighlight: "Localize",
    titleAfter: " Any Product Video With Voice, Subtitle and Lip Sync",
    description:
      "Upload one ecommerce video and instantly turn it into multilingual storefront assets with translated subtitles, region-matched audio, and mouth movement that stays synced to every language.",
    primaryCta: "Get Started",
    secondaryCta: "Explore Models",
  },
  signals: [
    { value: "1 Upload", label: "One source video for every region" },
    { value: "20+ Locales", label: "Subtitles, voiceovers, and lip sync" },
    { value: "Minutes", label: "Launch-ready exports without re-editing" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "ES",
    sourceTitle: "Source video",
    sourceSubtitle: "Original creator clip",
    outputTitle: "Localized output",
    outputSubtitle: "Voice plus lip sync",
    translate: "Translate",
  },
  showcase: {
    eyebrow: "Showcase",
    title: "One upload becomes a full stack of market-ready video outputs",
    description:
      "Turn one product video into multiple localized assets for marketplaces, paid social, and owned channels without rebuilding every edit.",
    cards: [
      {
        tag: "Marketplace videos",
        title: "Turn one PDP clip into localized listing assets",
        text: "Keep product claims, CTA language, and subtitle timing aligned across Amazon, Shopify, and regional storefronts.",
      },
      {
        tag: "Paid social",
        title: "Reuse winning UGC ads in every target market",
        text: "Translate creator speech, replace the voice track, and keep mouth movement matched so ads still feel native.",
      },
      {
        tag: "Owned channels",
        title: "Publish regional explainers without rebuilding edits",
        text: "Export ready-to-post videos for landing pages, email campaigns, post-purchase flows, and store modules.",
      },
    ],
  },
  workflow: {
    eyebrow: "How It Works",
    title: "Simple enough for fast launch teams, polished enough for global brands",
    description:
      "Upload once, translate once, then export multiple synchronized variants without reopening the edit timeline.",
    cards: [
      {
        index: "01",
        title: "Upload your original product video",
        description:
          "Add a founder pitch, creator clip, demo, unboxing, or education video in one step.",
      },
      {
        index: "02",
        title: "Choose markets, voices, and subtitle style",
        description:
          "Generate translated captions, natural voiceovers, and market-specific phrasing from the same source clip.",
      },
      {
        index: "03",
        title: "Export lip-synced videos for every storefront",
        description:
          "Publish multilingual versions that look localized instead of recycled, even when shoppers watch with sound on.",
      },
    ],
  },
  models: {
    eyebrow: "AI Models",
    title: "Three specialized engines for localization speed, quality and realism",
    description:
      "Choose the workflow that best matches subtitle generation, voice quality, or lip-sync realism.",
    speedLabel: "Speed",
    bestForLabel: "Best for",
    cards: [
      {
        badge: "Fastest",
        name: "Subtitle Engine",
        description:
          "Create precise multilingual caption tracks for marketplace listings, paid social, and storefront modules.",
        speed: "Ultra fast",
        bestFor: "Volume translation",
      },
      {
        badge: "Most Natural",
        name: "Voice Studio",
        description:
          "Generate clear regional voiceovers with tone that fits product demos, creator scripts, and founder videos.",
        speed: "Fast",
        bestFor: "Spoken clarity",
      },
      {
        badge: "Highest Impact",
        name: "Lip Sync Studio",
        description:
          "Match mouth movement to translated speech so your product video keeps trust high in every language.",
        speed: "Balanced",
        bestFor: "Conversion lift",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Start with one product line, then scale to every market you own",
    description:
      "Pricing is framed for ecommerce teams that want to test, validate, and then expand localized video production.",
    cards: [
      {
        name: "Starter",
        price: "$29",
        detail: "For testing one winning creative in a few new regions.",
        features: [
          "20 localized renders",
          "Subtitle and voice export",
          "Up to 3 markets per project",
        ],
        cta: "Choose Starter",
      },
      {
        name: "Growth",
        price: "$99",
        detail: "For ecommerce teams scaling product videos every week.",
        features: [
          "100 localized renders",
          "Full lip sync workflow",
          "Batch exports for multiple channels",
        ],
        cta: "Choose Growth",
        featured: true,
      },
      {
        name: "Scale",
        price: "Custom",
        detail: "For catalog-heavy brands, agencies, and marketplace operators.",
        features: [
          "Unlimited market setup",
          "Priority processing",
          "Dedicated success support",
        ],
        cta: "Talk to Sales",
      },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Content angles that speak directly to cross-border operators",
    description:
      "Use educational content to reinforce trust and show that the product understands global ecommerce workflows.",
    cards: [
      {
        tag: "Playbook",
        title: "How to adapt one Amazon PDP video for 8 regions",
        description:
          "A lean workflow for sellers who want faster localization without rebuilding every edit by hand.",
        cta: "Read more",
      },
      {
        tag: "Playbook",
        title: "When lip sync matters more than subtitles alone",
        description:
          "Why visual trust can make translated product videos feel more native and more credible.",
        cta: "Read more",
      },
      {
        tag: "Playbook",
        title: "A faster TikTok Shop localization playbook",
        description:
          "Turn high-performing creator clips into multilingual ad variants for paid social and live commerce.",
        cta: "Read more",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions buyers ask before they localize product videos at scale",
    items: [
      {
        question: "What kinds of videos work best for this workflow?",
        answer:
          "Talking-head product demos, founder videos, creator testimonials, unboxings, and customer education clips perform especially well.",
      },
      {
        question:
          "Can the same source clip generate subtitles, translated audio, and lip sync together?",
        answer:
          "Yes. The landing page is built around a one-upload workflow that outputs all three layers from the same original video.",
      },
      {
        question: "Is this meant only for social media videos?",
        answer:
          "No. The positioning fits marketplace listing videos, storefront modules, paid ads, short-form commerce, and regional landing pages.",
      },
      {
        question: "Why emphasize lip sync for cross-border ecommerce?",
        answer:
          "Because translated audio feels more believable when the mouth movement supports it. That extra realism helps the video feel native in-market.",
      },
    ],
  },
  cta: {
    eyebrow: "Ready to transform your videos",
    title: "Give one winning ecommerce video a global rollout.",
    description:
      "Start with a single source clip, then export multilingual subtitles, translated audio, and lip-synced variants for every market that matters this quarter.",
    primaryCta: "Request Demo",
    secondaryCta: "Back to Top",
  },
};

landingPageCopy.zh = {
  metadata: {
    title: "ShopSync.show | 面向跨境电商的 AI 视频本地化",
    description:
      "上传一个商品视频，自动生成多语言字幕、配音与口型同步版本，适配不同国家和渠道。",
  },
  nav: {
    showcase: "案例展示",
    pricing: "价格",
    blog: "博客",
    models: "AI 模型",
    signIn: "登录",
    languageLabel: "语言",
  },
  platformStripLabel: "专为多渠道跨境销售团队打造",
  hero: {
    eyebrow: "跨境视频本地化",
    titleBefore: "将任意商品视频",
    titleHighlight: "本地化",
    titleAfter: "为字幕、配音与口型同步版本",
    description:
      "上传一个电商视频，即可生成多语言店铺视频素材，自动完成字幕翻译、目标市场配音，以及与语音同步的口型效果。",
    primaryCta: "立即开始",
    secondaryCta: "查看模型",
  },
  signals: [
    { value: "1 次上传", label: "一个源视频覆盖多个市场" },
    { value: "20+ 语言地区", label: "字幕、配音与口型同步" },
    { value: "数分钟", label: "无需重复剪辑即可导出" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "ZH",
    sourceTitle: "原始视频",
    sourceSubtitle: "创作者原始素材",
    outputTitle: "本地化结果",
    outputSubtitle: "配音加口型同步",
    translate: "翻译",
  },
  showcase: {
    eyebrow: "案例展示",
    title: "一次上传，产出完整的多市场视频素材组合",
    description:
      "一个商品视频可以扩展成平台视频、广告视频和站内视频，无需为每个国家重新返工剪辑。",
    cards: [
      {
        tag: "平台视频",
        title: "把一个 PDP 视频变成多语种商品详情素材",
        text: "在 Amazon、Shopify 和各地区店铺中，保持产品卖点、字幕节奏和 CTA 表达一致。",
      },
      {
        tag: "付费投放",
        title: "把高表现 UGC 广告复制到更多目标市场",
        text: "翻译达人讲解，替换目标语言音轨，并保留匹配的口型，让广告看起来更自然。",
      },
      {
        tag: "自有渠道",
        title: "无需重剪即可发布区域化产品讲解视频",
        text: "一键导出用于落地页、邮件营销、购买后流程和店铺模块的视频版本。",
      },
    ],
  },
  workflow: {
    eyebrow: "使用流程",
    title: "足够简单，适合快节奏投放团队，也足够专业，适合全球品牌",
    description:
      "上传一次、翻译一次，再导出多个同步版本，无需反复打开剪辑时间线。",
    cards: [
      {
        index: "01",
        title: "上传原始商品视频",
        description:
          "支持品牌创始人讲解、达人视频、产品演示、开箱和教育类视频，一步完成上传。",
      },
      {
        index: "02",
        title: "选择市场、声音和字幕风格",
        description:
          "从同一个源视频生成翻译字幕、自然配音和目标市场更贴近本地表达的文案语气。",
      },
      {
        index: "03",
        title: "导出适配每个店铺的口型同步视频",
        description:
          "让多语言版本看起来像原生制作，而不是简单改字幕，尤其适合开声音观看的用户。",
      },
    ],
  },
  models: {
    eyebrow: "AI 模型",
    title: "三种专用引擎，分别优化速度、质量和真实感",
    description:
      "你可以按字幕批量生成、配音效果或口型自然度来选择最适合的工作流。",
    speedLabel: "速度",
    bestForLabel: "适合",
    cards: [
      {
        badge: "最快",
        name: "字幕引擎",
        description:
          "快速生成精确的多语言字幕轨，适用于商品详情页、广告素材和站内视频模块。",
        speed: "极速",
        bestFor: "批量翻译",
      },
      {
        badge: "最自然",
        name: "配音工作室",
        description:
          "生成更自然的地区化配音，适合产品演示、达人脚本和品牌创始人出镜视频。",
        speed: "快速",
        bestFor: "语音自然度",
      },
      {
        badge: "最有说服力",
        name: "口型同步工作室",
        description:
          "让目标语言语音与嘴型匹配，帮助商品视频在不同语言下依然保持信任感。",
        speed: "均衡",
        bestFor: "提升转化",
      },
    ],
  },
  pricing: {
    eyebrow: "价格",
    title: "先从单个爆款开始，再扩展到你所有目标市场",
    description:
      "定价方式适合电商团队先测试验证，再把视频本地化能力扩展到更多商品和渠道。",
    cards: [
      {
        name: "Starter",
        price: "$29",
        detail: "适合先测试一个爆款素材在几个新市场的表现。",
        features: ["20 次本地化渲染", "支持字幕与配音导出", "每个项目最多 3 个市场"],
        cta: "选择 Starter",
      },
      {
        name: "Growth",
        price: "$99",
        detail: "适合每周持续扩展商品视频的电商团队。",
        features: ["100 次本地化渲染", "完整口型同步流程", "支持多渠道批量导出"],
        cta: "选择 Growth",
        featured: true,
      },
      {
        name: "Scale",
        price: "定制",
        detail: "适合 SKU 多、市场多的品牌、代理商和平台卖家。",
        features: ["不限市场配置", "优先处理队列", "专属成功支持"],
        cta: "联系销售",
      },
    ],
  },
  blog: {
    eyebrow: "博客",
    title: "直接面向跨境运营团队的内容主题",
    description:
      "用教育内容强化专业感，让用户看到这不是普通翻译工具，而是懂跨境视频流程的产品。",
    cards: [
      {
        tag: "实战指南",
        title: "如何把一个 Amazon PDP 视频快速扩展到 8 个地区",
        description: "适合卖家团队的轻量化流程，不用手工重剪也能快速本地化上线。",
        cta: "阅读更多",
      },
      {
        tag: "实战指南",
        title: "为什么口型同步比只有字幕更重要",
        description: "当画面与声音同时本地化时，商品视频会更像原生内容，也更容易建立信任。",
        cta: "阅读更多",
      },
      {
        tag: "实战指南",
        title: "更快的 TikTok Shop 视频本地化方法",
        description: "把高转化达人视频改造成多语言广告素材，用于投放和直播电商场景。",
        cta: "阅读更多",
      },
    ],
  },
  faq: {
    eyebrow: "常见问题",
    title: "用户在批量本地化商品视频前最常问的问题",
    items: [
      {
        question: "哪些类型的视频最适合这种流程？",
        answer:
          "产品讲解、创始人出镜、达人测评、开箱和客户教育类视频都非常适合。",
      },
      {
        question: "一个源视频能同时生成字幕、翻译音频和口型同步吗？",
        answer:
          "可以。这个落地页就是围绕“一次上传，同时产出三层结果”的工作流来设计的。",
      },
      {
        question: "这只是给社媒短视频用的吗？",
        answer:
          "不是。它同样适合商品详情页视频、店铺模块、付费广告、短视频带货和各区域落地页。",
      },
      {
        question: "为什么跨境电商尤其需要口型同步？",
        answer:
          "因为当目标语言的声音和嘴型一致时，视频会更真实、更像原生制作，也更容易提升信任感。",
      },
    ],
  },
  cta: {
    eyebrow: "准备好升级你的视频了吗",
    title: "让一个高表现商品视频，直接走向全球市场。",
    description:
      "从一个源视频开始，为本季度最重要的国家和渠道导出多语言字幕、配音和口型同步版本。",
    primaryCta: "预约演示",
    secondaryCta: "回到顶部",
  },
};

landingPageCopy.es = {
  metadata: {
    title: "ShopSync.show | Localización de video con IA para ecommerce global",
    description:
      "Sube un solo video de producto y conviértelo en versiones con subtítulos, voz y lip sync para varios idiomas.",
  },
  nav: {
    showcase: "Casos",
    pricing: "Precios",
    blog: "Blog",
    models: "Modelos IA",
    signIn: "Iniciar sesión",
    languageLabel: "Idioma",
  },
  platformStripLabel: "Pensado para equipos que venden en múltiples canales",
  hero: {
    eyebrow: "Localización de video para ecommerce global",
    titleBefore: "",
    titleHighlight: "Localiza",
    titleAfter: " cualquier video de producto con voz, subtítulos y lip sync",
    description:
      "Sube un solo video de ecommerce y conviértelo al instante en recursos multilingües para storefronts con subtítulos traducidos, audio natural y sincronización labial en cada idioma.",
    primaryCta: "Empezar",
    secondaryCta: "Ver modelos",
  },
  signals: [
    { value: "1 carga", label: "Un solo video origen para cada mercado" },
    { value: "20+ idiomas", label: "Subtítulos, voz y lip sync" },
    { value: "Minutos", label: "Exports listos sin re-editar" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "ES",
    sourceTitle: "Video original",
    sourceSubtitle: "Clip original del creador",
    outputTitle: "Salida localizada",
    outputSubtitle: "Voz más sincronización labial",
    translate: "Traducir",
  },
  showcase: {
    eyebrow: "Casos",
    title: "Una carga se convierte en un paquete completo de videos para cada mercado",
    description:
      "Reutiliza un video de producto en marketplaces, anuncios y canales propios sin rehacer toda la edición.",
    cards: [
      {
        tag: "Videos de marketplace",
        title: "Convierte un video PDP en assets localizados para listings",
        text: "Mantén alineados los claims del producto, el CTA y el timing de subtítulos entre Amazon, Shopify y storefronts regionales.",
      },
      {
        tag: "Paid social",
        title: "Lleva tus anuncios UGC ganadores a nuevos mercados",
        text: "Traduce la voz del creador, reemplaza el audio y conserva el movimiento de labios para que el anuncio siga viéndose nativo.",
      },
      {
        tag: "Canales propios",
        title: "Publica explicaciones regionales sin rehacer el montaje",
        text: "Exporta videos listos para landing pages, email marketing, flujos post-compra y módulos de tienda.",
      },
    ],
  },
  workflow: {
    eyebrow: "Cómo funciona",
    title: "Lo bastante simple para equipos rápidos y lo bastante sólido para marcas globales",
    description:
      "Sube una vez, traduce una vez y exporta múltiples variantes sincronizadas sin volver a la línea de tiempo.",
    cards: [
      {
        index: "01",
        title: "Sube tu video original de producto",
        description:
          "Añade un pitch del fundador, un clip UGC, una demo, un unboxing o un video educativo en un solo paso.",
      },
      {
        index: "02",
        title: "Elige mercados, voces y estilo de subtítulos",
        description:
          "Genera subtítulos traducidos, voces naturales y una redacción más local desde el mismo video fuente.",
      },
      {
        index: "03",
        title: "Exporta videos con lip sync para cada storefront",
        description:
          "Publica versiones multilingües que parezcan creadas para el mercado local, no simplemente recicladas.",
      },
    ],
  },
  models: {
    eyebrow: "Modelos IA",
    title: "Tres motores especializados para velocidad, calidad y realismo",
    description:
      "Elige el flujo ideal según necesites subtítulos rápidos, mejor voz o sincronización labial más convincente.",
    speedLabel: "Velocidad",
    bestForLabel: "Ideal para",
    cards: [
      {
        badge: "Más rápido",
        name: "Motor de subtítulos",
        description:
          "Crea pistas multilingües precisas para listings, paid social y módulos de storefront.",
        speed: "Ultra rápida",
        bestFor: "Traducción en volumen",
      },
      {
        badge: "Más natural",
        name: "Estudio de voz",
        description:
          "Genera voces regionales claras para demos de producto, guiones de creadores y videos del fundador.",
        speed: "Rápida",
        bestFor: "Claridad de voz",
      },
      {
        badge: "Mayor impacto",
        name: "Estudio de lip sync",
        description:
          "Alinea el movimiento de labios con el audio traducido para mantener la confianza en cada idioma.",
        speed: "Equilibrada",
        bestFor: "Impulsar conversión",
      },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "Empieza con una línea de producto y escala a todos tus mercados",
    description:
      "La estructura de precios está pensada para equipos ecommerce que prueban primero y luego escalan la localización.",
    cards: [
      {
        name: "Starter",
        price: "$29",
        detail: "Para probar una creativa ganadora en algunos mercados nuevos.",
        features: [
          "20 renders localizados",
          "Exportación de subtítulos y voz",
          "Hasta 3 mercados por proyecto",
        ],
        cta: "Elegir Starter",
      },
      {
        name: "Growth",
        price: "$99",
        detail: "Para equipos ecommerce que escalan videos de producto cada semana.",
        features: [
          "100 renders localizados",
          "Flujo completo de lip sync",
          "Exportes por lote para varios canales",
        ],
        cta: "Elegir Growth",
        featured: true,
      },
      {
        name: "Scale",
        price: "Personalizado",
        detail: "Para marcas con catálogos grandes, agencias y operadores de marketplace.",
        features: [
          "Configuración ilimitada de mercados",
          "Procesamiento prioritario",
          "Soporte dedicado",
        ],
        cta: "Hablar con ventas",
      },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Temas de contenido que hablan el idioma del operador cross-border",
    description:
      "El contenido educativo ayuda a mostrar autoridad y a reforzar que el producto entiende el ecommerce global.",
    cards: [
      {
        tag: "Guía",
        title: "Cómo adaptar un video PDP de Amazon a 8 regiones",
        description:
          "Un flujo ligero para vender en más mercados sin rehacer cada edición manualmente.",
        cta: "Leer más",
      },
      {
        tag: "Guía",
        title: "Cuándo el lip sync importa más que los subtítulos",
        description:
          "Por qué la confianza visual puede hacer que un video traducido parezca realmente nativo.",
        cta: "Leer más",
      },
      {
        tag: "Guía",
        title: "Un playbook más rápido para TikTok Shop",
        description:
          "Convierte clips de creadores con buen rendimiento en variantes multilingües para paid social y live commerce.",
        cta: "Leer más",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas clave antes de localizar videos de producto a gran escala",
    items: [
      {
        question: "¿Qué tipos de videos funcionan mejor con este flujo?",
        answer:
          "Demos con persona hablando, videos del fundador, testimonios UGC, unboxings y clips educativos funcionan especialmente bien.",
      },
      {
        question:
          "¿El mismo video puede generar subtítulos, audio traducido y lip sync a la vez?",
        answer:
          "Sí. El flujo está diseñado para obtener esas tres capas a partir del mismo video original.",
      },
      {
        question: "¿Esto sirve solo para videos de redes sociales?",
        answer:
          "No. También encaja en videos para listings, módulos de tienda, anuncios, short-form commerce y landing pages regionales.",
      },
      {
        question: "¿Por qué destacar el lip sync en ecommerce cross-border?",
        answer:
          "Porque el audio traducido se siente más creíble cuando el movimiento de labios también acompaña. Eso mejora la sensación de contenido nativo.",
      },
    ],
  },
  cta: {
    eyebrow: "Listo para transformar tus videos",
    title: "Lleva un video ganador de ecommerce a un despliegue global.",
    description:
      "Empieza con un solo clip y exporta subtítulos, audio y lip sync para cada mercado importante este trimestre.",
    primaryCta: "Solicitar demo",
    secondaryCta: "Volver arriba",
  },
};

landingPageCopy.fr = {
  metadata: {
    title: "ShopSync.show | Localisation vidéo IA pour l’e-commerce international",
    description:
      "Importez une seule vidéo produit et générez des versions multilingues avec sous-titres, voix et lip sync.",
  },
  nav: {
    showcase: "Vitrine",
    pricing: "Tarifs",
    blog: "Blog",
    models: "Modèles IA",
    signIn: "Connexion",
    languageLabel: "Langue",
  },
  platformStripLabel: "Conçu pour les équipes qui vendent sur plusieurs canaux",
  hero: {
    eyebrow: "Localisation vidéo pour l’e-commerce international",
    titleBefore: "",
    titleHighlight: "Localisez",
    titleAfter: " n’importe quelle vidéo produit avec voix, sous-titres et lip sync",
    description:
      "Importez une seule vidéo e-commerce et transformez-la instantanément en contenus multilingues avec sous-titres traduits, voix adaptées au marché et synchronisation labiale.",
    primaryCta: "Commencer",
    secondaryCta: "Voir les modèles",
  },
  signals: [
    { value: "1 import", label: "Une seule source vidéo pour chaque marché" },
    { value: "20+ langues", label: "Sous-titres, voix et lip sync" },
    { value: "Quelques minutes", label: "Exports prêts sans remonter la vidéo" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "FR",
    sourceTitle: "Vidéo source",
    sourceSubtitle: "Clip original du créateur",
    outputTitle: "Version localisée",
    outputSubtitle: "Voix et lip sync",
    translate: "Traduire",
  },
  showcase: {
    eyebrow: "Vitrine",
    title: "Un seul import devient un ensemble complet de vidéos prêtes pour chaque marché",
    description:
      "Réutilisez une vidéo produit sur les marketplaces, en acquisition payante et sur vos canaux propriétaires sans refaire le montage.",
    cards: [
      {
        tag: "Vidéos marketplace",
        title: "Transformez une vidéo PDP en assets localisés pour vos fiches",
        text: "Conservez les arguments produit, le CTA et le rythme des sous-titres sur Amazon, Shopify et chaque storefront régional.",
      },
      {
        tag: "Paid social",
        title: "Déployez vos meilleures publicités UGC dans de nouveaux marchés",
        text: "Traduisez la prise de parole, remplacez la voix et gardez des lèvres synchronisées pour un rendu plus natif.",
      },
      {
        tag: "Canaux propriétaires",
        title: "Publiez des vidéos régionales sans refaire toute l’édition",
        text: "Exportez des versions prêtes pour landing pages, emails, parcours post-achat et modules boutique.",
      },
    ],
  },
  workflow: {
    eyebrow: "Fonctionnement",
    title: "Assez simple pour aller vite, assez solide pour des marques globales",
    description:
      "Importez une fois, traduisez une fois, puis exportez plusieurs variantes synchronisées sans rouvrir la timeline.",
    cards: [
      {
        index: "01",
        title: "Importez votre vidéo produit d’origine",
        description:
          "Ajoutez une présentation fondateur, un clip créateur, une démo, un unboxing ou une vidéo pédagogique en un geste.",
      },
      {
        index: "02",
        title: "Choisissez marchés, voix et style de sous-titres",
        description:
          "Générez sous-titres traduits, voix naturelles et formulations adaptées au marché à partir de la même source.",
      },
      {
        index: "03",
        title: "Exportez des vidéos lip-sync pour chaque storefront",
        description:
          "Publiez des versions multilingues qui semblent vraiment locales, et non simplement recyclées.",
      },
    ],
  },
  models: {
    eyebrow: "Modèles IA",
    title: "Trois moteurs spécialisés pour la vitesse, la qualité et le réalisme",
    description:
      "Choisissez l’approche la plus adaptée à la production de sous-titres, à la qualité vocale ou au réalisme du lip sync.",
    speedLabel: "Vitesse",
    bestForLabel: "Idéal pour",
    cards: [
      {
        badge: "Le plus rapide",
        name: "Moteur de sous-titres",
        description:
          "Créez des pistes multilingues précises pour les fiches produit, les publicités et les modules storefront.",
        speed: "Ultra rapide",
        bestFor: "Traduction à volume",
      },
      {
        badge: "Le plus naturel",
        name: "Studio voix",
        description:
          "Générez des voix régionales claires pour les démos produit, scripts créateurs et vidéos fondateur.",
        speed: "Rapide",
        bestFor: "Clarté vocale",
      },
      {
        badge: "Le plus impactant",
        name: "Studio lip sync",
        description:
          "Synchronisez les lèvres avec la voix traduite pour conserver la confiance quel que soit le marché.",
        speed: "Équilibré",
        bestFor: "Hausse de conversion",
      },
    ],
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "Commencez par une gamme produit, puis étendez-vous à tous vos marchés",
    description:
      "La tarification est pensée pour les équipes e-commerce qui testent d’abord, puis industrialisent la localisation vidéo.",
    cards: [
      {
        name: "Starter",
        price: "$29",
        detail: "Pour tester un créatif performant dans quelques nouveaux marchés.",
        features: [
          "20 rendus localisés",
          "Export sous-titres et voix",
          "Jusqu’à 3 marchés par projet",
        ],
        cta: "Choisir Starter",
      },
      {
        name: "Growth",
        price: "$99",
        detail: "Pour les équipes e-commerce qui localisent des vidéos produit chaque semaine.",
        features: [
          "100 rendus localisés",
          "Workflow complet lip sync",
          "Exports batch multi-canaux",
        ],
        cta: "Choisir Growth",
        featured: true,
      },
      {
        name: "Scale",
        price: "Sur mesure",
        detail: "Pour les marques à gros catalogue, les agences et les opérateurs marketplace.",
        features: [
          "Configuration illimitée des marchés",
          "Traitement prioritaire",
          "Accompagnement dédié",
        ],
        cta: "Contacter l’équipe",
      },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Des sujets éditoriaux pensés pour les opérateurs cross-border",
    description:
      "Le contenu éducatif renforce la crédibilité et montre que le produit comprend les enjeux du commerce international.",
    cards: [
      {
        tag: "Guide",
        title: "Comment adapter une vidéo PDP Amazon à 8 régions",
        description:
          "Une méthode légère pour localiser plus vite sans reconstruire chaque montage à la main.",
        cta: "Lire",
      },
      {
        tag: "Guide",
        title: "Quand le lip sync compte plus que les sous-titres",
        description:
          "Pourquoi la confiance visuelle peut rendre une vidéo traduite beaucoup plus native.",
        cta: "Lire",
      },
      {
        tag: "Guide",
        title: "Un playbook plus rapide pour TikTok Shop",
        description:
          "Transformez des clips créateurs performants en variantes multilingues pour l’acquisition et le live commerce.",
        cta: "Lire",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les questions clés avant de localiser des vidéos produit à grande échelle",
    items: [
      {
        question: "Quels types de vidéos fonctionnent le mieux ?",
        answer:
          "Les démos face caméra, vidéos fondateur, témoignages créateurs, unboxings et vidéos pédagogiques sont particulièrement adaptés.",
      },
      {
        question:
          "Peut-on générer sous-titres, audio traduit et lip sync à partir d’une même vidéo ?",
        answer:
          "Oui. Le workflow est conçu pour produire ces trois couches à partir d’une seule source vidéo.",
      },
      {
        question: "Est-ce réservé aux vidéos social media ?",
        answer:
          "Non. Cela convient aussi aux vidéos de fiches produit, modules storefront, campagnes payantes et landing pages régionales.",
      },
      {
        question: "Pourquoi mettre autant l’accent sur le lip sync ?",
        answer:
          "Parce qu’une voix traduite paraît bien plus crédible quand le mouvement des lèvres suit aussi. Cela renforce l’impression de contenu natif.",
      },
    ],
  },
  cta: {
    eyebrow: "Prêt à transformer vos vidéos",
    title: "Déployez à l’international une vidéo e-commerce déjà gagnante.",
    description:
      "Partez d’un seul clip et exportez sous-titres, voix et lip sync pour tous les marchés prioritaires de ce trimestre.",
    primaryCta: "Demander une démo",
    secondaryCta: "Retour en haut",
  },
};

landingPageCopy.de = {
  metadata: {
    title: "ShopSync.show | KI-Videolokalisierung für globalen E-Commerce",
    description:
      "Lade ein Produktvideo hoch und erstelle mehrsprachige Versionen mit Untertiteln, Voice-over und Lip Sync.",
  },
  nav: {
    showcase: "Showcase",
    pricing: "Preise",
    blog: "Blog",
    models: "KI-Modelle",
    signIn: "Anmelden",
    languageLabel: "Sprache",
  },
  platformStripLabel: "Entwickelt für Teams, die über mehrere Kanäle verkaufen",
  hero: {
    eyebrow: "Videolokalisierung für internationalen E-Commerce",
    titleBefore: "",
    titleHighlight: "Lokalisiere",
    titleAfter: " jedes Produktvideo mit Voice-over, Untertiteln und Lip Sync",
    description:
      "Lade ein einziges E-Commerce-Video hoch und verwandle es sofort in mehrsprachige Assets mit übersetzten Untertiteln, marktgerechter Stimme und synchronen Lippenbewegungen.",
    primaryCta: "Jetzt starten",
    secondaryCta: "Modelle ansehen",
  },
  signals: [
    { value: "1 Upload", label: "Eine Videoquelle für jeden Markt" },
    { value: "20+ Sprachen", label: "Untertitel, Voice-over und Lip Sync" },
    { value: "In Minuten", label: "Fertig exportiert ohne Neu-Schnitt" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "DE",
    sourceTitle: "Quellvideo",
    sourceSubtitle: "Originaler Creator-Clip",
    outputTitle: "Lokalisierte Ausgabe",
    outputSubtitle: "Stimme plus Lip Sync",
    translate: "Übersetzen",
  },
  showcase: {
    eyebrow: "Showcase",
    title: "Ein Upload wird zu einem kompletten Paket marktreifer Video-Varianten",
    description:
      "Nutze ein Produktvideo für Marktplätze, Paid Social und eigene Kanäle, ohne den Schnitt jedes Mal neu aufzubauen.",
    cards: [
      {
        tag: "Marktplatz-Videos",
        title: "Verwandle ein PDP-Video in lokalisierte Listing-Assets",
        text: "Halte Produktversprechen, CTA und Untertitel-Timing über Amazon, Shopify und regionale Storefronts hinweg konsistent.",
      },
      {
        tag: "Paid Social",
        title: "Skaliere erfolgreiche UGC-Anzeigen in neue Märkte",
        text: "Übersetze die Creator-Stimme, ersetze die Tonspur und behalte passende Lippenbewegungen für einen nativen Eindruck.",
      },
      {
        tag: "Eigene Kanäle",
        title: "Veröffentliche regionale Erklärvideos ohne Neu-Schnitt",
        text: "Exportiere sofort einsatzbereite Versionen für Landingpages, E-Mails, After-Sales-Flows und Shop-Module.",
      },
    ],
  },
  workflow: {
    eyebrow: "So funktioniert’s",
    title: "Einfach genug für schnelle Teams und stark genug für globale Marken",
    description:
      "Einmal hochladen, einmal übersetzen und mehrere synchronisierte Varianten exportieren, ohne die Timeline erneut zu öffnen.",
    cards: [
      {
        index: "01",
        title: "Originales Produktvideo hochladen",
        description:
          "Füge Founder-Statement, Creator-Clip, Demo, Unboxing oder Erklärvideo in einem Schritt hinzu.",
      },
      {
        index: "02",
        title: "Märkte, Stimmen und Untertitelstil wählen",
        description:
          "Erzeuge übersetzte Captions, natürliche Voice-overs und marktspezifische Formulierungen aus derselben Videoquelle.",
      },
      {
        index: "03",
        title: "Lip-Sync-Videos für jede Storefront exportieren",
        description:
          "Veröffentliche mehrsprachige Versionen, die wirklich lokal wirken und nicht nur recycelt aussehen.",
      },
    ],
  },
  models: {
    eyebrow: "KI-Modelle",
    title: "Drei spezialisierte Engines für Geschwindigkeit, Qualität und Realismus",
    description:
      "Wähle je nach Fokus auf Untertitel-Output, Sprachqualität oder Lip-Sync-Realismus den passenden Workflow.",
    speedLabel: "Geschwindigkeit",
    bestForLabel: "Ideal für",
    cards: [
      {
        badge: "Am schnellsten",
        name: "Subtitle Engine",
        description:
          "Erstellt präzise mehrsprachige Untertitelspuren für Listings, Anzeigen und Storefront-Module.",
        speed: "Ultra schnell",
        bestFor: "Übersetzung in Menge",
      },
      {
        badge: "Am natürlichsten",
        name: "Voice Studio",
        description:
          "Erzeugt klare regionale Stimmen für Produktdemos, Creator-Skripte und Founder-Videos.",
        speed: "Schnell",
        bestFor: "Sprachklarheit",
      },
      {
        badge: "Größter Effekt",
        name: "Lip Sync Studio",
        description:
          "Passt Lippenbewegungen an die übersetzte Sprache an und stärkt so Vertrauen in jedem Markt.",
        speed: "Ausgewogen",
        bestFor: "Mehr Conversion",
      },
    ],
  },
  pricing: {
    eyebrow: "Preise",
    title: "Starte mit einer Produktlinie und skaliere dann in alle Zielmärkte",
    description:
      "Die Preislogik passt zu E-Commerce-Teams, die erst testen und danach die Videolokalisierung breit ausrollen.",
    cards: [
      {
        name: "Starter",
        price: "$29",
        detail: "Zum Testen eines starken Creatives in einigen neuen Märkten.",
        features: [
          "20 lokalisierte Renderings",
          "Untertitel- und Voice-Export",
          "Bis zu 3 Märkte pro Projekt",
        ],
        cta: "Starter wählen",
      },
      {
        name: "Growth",
        price: "$99",
        detail: "Für E-Commerce-Teams, die Produktvideos jede Woche skalieren.",
        features: [
          "100 lokalisierte Renderings",
          "Vollständiger Lip-Sync-Workflow",
          "Batch-Exports für mehrere Kanäle",
        ],
        cta: "Growth wählen",
        featured: true,
      },
      {
        name: "Scale",
        price: "Individuell",
        detail: "Für katalogstarke Marken, Agenturen und Marketplace-Betreiber.",
        features: [
          "Unbegrenzte Markt-Setups",
          "Priorisierte Verarbeitung",
          "Dedizierter Support",
        ],
        cta: "Sales kontaktieren",
      },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Content-Themen, die direkt zu Cross-Border-Teams sprechen",
    description:
      "Bildungsinhalte stärken die Glaubwürdigkeit und zeigen, dass das Produkt globale Commerce-Workflows versteht.",
    cards: [
      {
        tag: "Guide",
        title: "Wie du ein Amazon-PDP-Video auf 8 Regionen ausrollst",
        description:
          "Ein schlanker Ablauf für Seller, die schneller lokalisieren wollen, ohne jeden Schnitt neu zu bauen.",
        cta: "Mehr lesen",
      },
      {
        tag: "Guide",
        title: "Wann Lip Sync wichtiger ist als Untertitel allein",
        description:
          "Warum visuelles Vertrauen übersetzte Produktvideos deutlich nativer wirken lässt.",
        cta: "Mehr lesen",
      },
      {
        tag: "Guide",
        title: "Ein schnelleres TikTok-Shop-Lokalisierungs-Playbook",
        description:
          "Verwandle starke Creator-Clips in mehrsprachige Anzeigen für Paid Social und Live Commerce.",
        cta: "Mehr lesen",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen, die Käufer vor der Skalierung von Produktvideo-Lokalisierung stellen",
    items: [
      {
        question: "Welche Videotypen funktionieren am besten?",
        answer:
          "Talking-Head-Demos, Founder-Videos, Creator-Testimonials, Unboxings und erklärende Produktvideos sind besonders geeignet.",
      },
      {
        question:
          "Kann derselbe Clip Untertitel, übersetztes Audio und Lip Sync gleichzeitig erzeugen?",
        answer:
          "Ja. Der Workflow ist genau dafür aufgebaut: drei Ergebnis-Ebenen aus einer einzigen Videoquelle.",
      },
      {
        question: "Ist das nur für Social-Media-Videos gedacht?",
        answer:
          "Nein. Es passt ebenso zu Listing-Videos, Shop-Modulen, Paid Ads, Short-Form-Commerce und regionalen Landingpages.",
      },
      {
        question: "Warum ist Lip Sync im Cross-Border-E-Commerce so wichtig?",
        answer:
          "Weil übersetzte Sprache glaubwürdiger wirkt, wenn auch die Lippenbewegung passt. Das erhöht das Gefühl von nativem Content.",
      },
    ],
  },
  cta: {
    eyebrow: "Bereit, deine Videos zu transformieren",
    title: "Rolle ein starkes E-Commerce-Video weltweit aus.",
    description:
      "Starte mit einem einzigen Clip und exportiere Untertitel, Audio und Lip Sync für alle relevanten Märkte dieses Quartals.",
    primaryCta: "Demo anfragen",
    secondaryCta: "Nach oben",
  },
};

landingPageCopy.ja = {
  metadata: {
    title: "ShopSync.show | グローバルEC向けAI動画ローカライズ",
    description:
      "1本の商品動画から、多言語字幕、吹き替え音声、口パク同期付きの各国向け動画を生成します。",
  },
  nav: {
    showcase: "導入イメージ",
    pricing: "料金",
    blog: "ブログ",
    models: "AIモデル",
    signIn: "サインイン",
    languageLabel: "言語",
  },
  platformStripLabel: "複数チャネルで販売するチーム向けに設計",
  hero: {
    eyebrow: "越境EC向け動画ローカライズ",
    titleBefore: "あらゆる商品動画を",
    titleHighlight: "ローカライズ",
    titleAfter: "して字幕・音声・口パク同期を一括生成",
    description:
      "1本のEC動画をアップロードするだけで、翻訳字幕、各市場向けの自然な音声、話し方に合った口パク同期付きの多言語動画へ変換できます。",
    primaryCta: "今すぐ開始",
    secondaryCta: "モデルを見る",
  },
  signals: [
    { value: "1回のアップロード", label: "1本の元動画で複数市場に対応" },
    { value: "20以上の言語", label: "字幕・音声・口パク同期" },
    { value: "数分で出力", label: "再編集なしですぐに公開可能" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "JA",
    sourceTitle: "元動画",
    sourceSubtitle: "オリジナルのクリエイター動画",
    outputTitle: "ローカライズ結果",
    outputSubtitle: "音声と口パク同期",
    translate: "翻訳",
  },
  showcase: {
    eyebrow: "導入イメージ",
    title: "1回のアップロードで各市場向けの動画アセット一式を生成",
    description:
      "商品動画をマーケットプレイス、広告、保有チャネル向けに展開しても、毎回編集をやり直す必要はありません。",
    cards: [
      {
        tag: "マーケットプレイス動画",
        title: "PDP動画を多言語の商品詳細動画に変換",
        text: "Amazon、Shopify、各地域ストアでも、訴求、CTA、字幕タイミングを揃えたまま展開できます。",
      },
      {
        tag: "広告運用",
        title: "成果の高いUGC広告を各国向けに横展開",
        text: "クリエイター音声を翻訳し、吹き替えに差し替え、口パクも合わせることで自然な広告に仕上げます。",
      },
      {
        tag: "自社チャネル",
        title: "編集を作り直さずに各国向け説明動画を公開",
        text: "LP、メール、購入後フロー、ストアモジュール向けの動画をすぐに書き出せます。",
      },
    ],
  },
  workflow: {
    eyebrow: "使い方",
    title: "スピード重視のチームにも、グローバルブランドにも使いやすい設計",
    description:
      "一度アップロードして一度翻訳すれば、編集タイムラインを開き直さずに複数言語版を出力できます。",
    cards: [
      {
        index: "01",
        title: "元の商品動画をアップロード",
        description:
          "創業者メッセージ、UGC、デモ、開封動画、解説動画などを1ステップで追加できます。",
      },
      {
        index: "02",
        title: "対象市場、音声、字幕スタイルを選択",
        description:
          "同じ動画ソースから、翻訳字幕、自然な吹き替え、各市場向けの言い回しを生成します。",
      },
      {
        index: "03",
        title: "各ストア向けの口パク同期動画を書き出し",
        description:
          "単なる翻訳動画ではなく、現地向けに作られたように見える多言語版を公開できます。",
      },
    ],
  },
  models: {
    eyebrow: "AIモデル",
    title: "速度・品質・自然さに合わせた3つの専用エンジン",
    description:
      "字幕量産、音声品質、口パクの自然さなど、目的に応じて最適なワークフローを選べます。",
    speedLabel: "速度",
    bestForLabel: "向いている用途",
    cards: [
      {
        badge: "最速",
        name: "字幕エンジン",
        description:
          "商品ページ動画、広告、ストアモジュール向けに高精度な多言語字幕トラックを生成します。",
        speed: "超高速",
        bestFor: "大量翻訳",
      },
      {
        badge: "最も自然",
        name: "音声スタジオ",
        description:
          "商品デモ、クリエイタースクリプト、創業者動画に合う自然な各地域向け音声を生成します。",
        speed: "高速",
        bestFor: "音声品質",
      },
      {
        badge: "最も高効果",
        name: "口パク同期スタジオ",
        description:
          "翻訳音声に合わせて口の動きを同期し、どの言語でも動画の信頼感を保ちます。",
        speed: "バランス型",
        bestFor: "CV向上",
      },
    ],
  },
  pricing: {
    eyebrow: "料金",
    title: "まずは1つの主力商品から始め、次にすべての市場へ拡張",
    description:
      "電商チームが小さく試して成果を確認し、その後動画ローカライズを拡張しやすい料金設計です。",
    cards: [
      {
        name: "Starter",
        price: "$29",
        detail: "成果の高い1つのクリエイティブを少数市場で試すのに最適です。",
        features: ["20回のローカライズ生成", "字幕と音声を書き出し", "1プロジェクト3市場まで"],
        cta: "Starterを選ぶ",
      },
      {
        name: "Growth",
        price: "$99",
        detail: "毎週商品動画を増やしていくECチーム向けです。",
        features: ["100回のローカライズ生成", "口パク同期を含むフル機能", "複数チャネルへ一括出力"],
        cta: "Growthを選ぶ",
        featured: true,
      },
      {
        name: "Scale",
        price: "要相談",
        detail: "SKU数が多いブランド、代理店、マーケットプレイス運営向けです。",
        features: ["市場設定は無制限", "優先処理", "専任サポート"],
        cta: "営業に相談",
      },
    ],
  },
  blog: {
    eyebrow: "ブログ",
    title: "越境運用チームに刺さるコンテンツテーマ",
    description:
      "教育コンテンツによって、このプロダクトがグローバルECの業務を理解していることを伝えられます。",
    cards: [
      {
        tag: "ガイド",
        title: "AmazonのPDP動画を8地域向けに展開する方法",
        description: "毎回編集し直さずに、より速くローカライズしたいセラー向けの実践フローです。",
        cta: "続きを読む",
      },
      {
        tag: "ガイド",
        title: "字幕だけでなく口パク同期が重要な理由",
        description: "映像上の自然さが増すことで、翻訳された商品動画でもより現地向けに見せられます。",
        cta: "続きを読む",
      },
      {
        tag: "ガイド",
        title: "TikTok Shop向け動画ローカライズをもっと速く行う方法",
        description: "成果の良いクリエイター動画を、多言語の広告素材やライブコマース向けに変換します。",
        cta: "続きを読む",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "商品動画を多言語展開する前に、よく聞かれる質問",
    items: [
      {
        question: "どんな動画がこのワークフローに向いていますか？",
        answer:
          "顔出しのデモ動画、創業者動画、クリエイターUGC、開封動画、教育系動画が特に相性が良いです。",
      },
      {
        question: "1本の動画から字幕、翻訳音声、口パク同期をまとめて作れますか？",
        answer:
          "はい。1回のアップロードでこの3つをまとめて出力する前提で設計されています。",
      },
      {
        question: "SNS向け動画だけを想定していますか？",
        answer:
          "いいえ。商品詳細動画、ストアモジュール、広告、ショート動画コマース、各国向けLPにも適しています。",
      },
      {
        question: "なぜ越境ECで口パク同期が重要なのですか？",
        answer:
          "翻訳音声だけでなく口の動きも一致すると、動画全体がより自然に見え、現地向けの信頼感が高まるからです。",
      },
    ],
  },
  cta: {
    eyebrow: "動画を次の段階へ",
    title: "成果の出ている1本のEC動画を、世界展開できる形に。",
    description:
      "1本の元動画から始めて、今期重要な各市場向けに字幕、音声、口パク同期版を出力しましょう。",
    primaryCta: "デモを依頼",
    secondaryCta: "トップへ戻る",
  },
};
