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
  annualBilling: string;
  credits: string;
  name: string;
  monthlyPrice: string;
  perMonthLabel: string;
  seconds: string;
  subtitle: string;
  yearlyPrice: string;
  features: string[];
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
    billingCycleLabel: string;
    monthlyLabel: string;
    yearlyLabel: string;
    saveLabel: string;
    subscribeLabel: string;
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
    billingCycleLabel: "Billing cycle",
    monthlyLabel: "Monthly",
    yearlyLabel: "Yearly",
    saveLabel: "Save 20%",
    subscribeLabel: "Subscribe",
    cards: [
      {
        name: "Base",
        subtitle: "Base Plan of LipSyncShow",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        annualBilling: "Billed annually ($84/year)",
        credits: "600 credits per month",
        seconds: "≈ 600 seconds per month",
        perMonthLabel: "/month",
        features: [
          "Multiple lip sync models",
          "Video uploaded < 50MB",
          "Audio uploaded < 10MB",
        ],
      },
      {
        name: "Premium",
        subtitle: "Premium Plan of LipSyncShow",
        monthlyPrice: "$19",
        yearlyPrice: "$15",
        annualBilling: "Billed annually ($180/year)",
        credits: "1800 credits per month",
        seconds: "≈ 1800 seconds per month",
        perMonthLabel: "/month",
        features: [
          "Multiple lip sync models",
          "Select video loop mode",
          "Private video visibility",
          "Video uploaded < 100MB",
          "Audio uploaded < 20MB",
          "Unlimited text to audio",
        ],
      },
      {
        name: "Pro",
        subtitle: "Pro Plan of LipSyncShow",
        monthlyPrice: "$69",
        yearlyPrice: "$60",
        annualBilling: "Billed annually ($720/year)",
        credits: "9600 credits per month",
        seconds: "≈ 9600 seconds per month",
        perMonthLabel: "/month",
        features: [
          "Multiple lip sync models",
          "Select video loop mode",
          "Private video visibility",
          "Unlimited video upload",
          "Unlimited audio upload",
          "Unlimited text to audio",
          "Permanent Cloud Storage",
        ],
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
    title: "ShopSync.show | 跨境商品视频本地化工具",
    description:
      "把一条商品视频快速做成多语言字幕、配音和口型同步版本，适合上架、投放和独立站复用。",
  },
  nav: {
    showcase: "应用场景",
    pricing: "价格",
    blog: "内容",
    models: "核心能力",
    signIn: "登录",
    languageLabel: "语言",
  },
  platformStripLabel: "适合同时做上架、投放和多市场扩量的团队",
  hero: {
    eyebrow: "商品视频本地化",
    titleBefore: "一条商品视频，",
    titleHighlight: "直接做成",
    titleAfter: "多个市场都能用的版本",
    description:
      "不用为每个语种重新拍、重新剪。上传原视频后，字幕、配音和口型同步版本可以一起产出，适合商品页、广告和独立站直接使用。",
    primaryCta: "立即体验",
    secondaryCta: "查看模型",
  },
  signals: [
    { value: "1 条视频", label: "同一份素材延展到多个市场" },
    { value: "20+ 语言", label: "字幕、配音和口型同步可一起完成" },
    { value: "当天可用", label: "不用再为每个语种单独重剪" },
  ],
  visual: {
    sourceBadge: "EN",
    outputBadge: "ZH",
    sourceTitle: "原视频素材",
    sourceSubtitle: "原始讲解版本",
    outputTitle: "本地化版本",
    outputSubtitle: "中文字幕 + 配音 + 口型同步",
    translate: "翻译",
  },
  showcase: {
    eyebrow: "应用场景",
    title: "同一条视频，可以直接用在上架、投放和独立站",
    description:
      "不只是把字幕翻成另一种语言，而是把同一条素材整理成适合不同渠道、不同地区的可发布版本。",
    cards: [
      {
        tag: "商品详情页",
        title: "商品页视频不用再按语种逐个重剪",
        text: "保留原本的卖点节奏，把字幕、配音和口型整理成各地区都能直接上架的版本。",
      },
      {
        tag: "广告投放",
        title: "一条跑得好的素材，可以继续放大到更多市场",
        text: "把达人口播换成目标语言，同时保留画面节奏，让广告延展时不再像生硬翻译。",
      },
      {
        tag: "独立站与私域",
        title: "站内讲解、邮件和复购触达都能复用",
        text: "同一份视频可以导出给落地页、邮件、售后说明和店铺模块，不必来回返工。",
      },
    ],
  },
  workflow: {
    eyebrow: "使用流程",
    title: "流程很短，但出来的是能直接用的版本",
    description:
      "从上传到导出，不需要回到剪辑软件里重复做多语种版本。",
    cards: [
      {
        index: "01",
        title: "上传原始商品视频",
        description:
          "达人种草、创始人讲解、产品演示、开箱和教程视频，都可以直接导入。",
      },
      {
        index: "02",
        title: "选择语言、声音和字幕样式",
        description:
          "按目标市场选择语种和配音风格，系统会一起处理字幕、音轨和口型匹配。",
      },
      {
        index: "03",
        title: "导出可发布版本",
        description:
          "拿到能直接用于商品页、广告和落地页的多语言视频，不用再做二次拼装。",
      },
    ],
  },
  models: {
    eyebrow: "核心能力",
    title: "把多语言视频里最费时间的三件事，一次做完",
    description:
      "字幕、配音和口型同步可以单独用，也可以组合用，按你现在的工作流接进去就行。",
    speedLabel: "速度",
    bestForLabel: "适合",
    cards: [
      {
        badge: "最快落地",
        name: "字幕处理",
        description:
          "把原始讲解整理成多语言字幕，适合先做上架和商品信息同步。",
        speed: "最快",
        bestFor: "批量上新",
      },
      {
        badge: "最像真人",
        name: "配音生成",
        description:
          "用更自然的语气替换原始音轨，适合广告、讲解和种草视频。",
        speed: "很快",
        bestFor: "口播替换",
      },
      {
        badge: "最完整",
        name: "口型同步",
        description:
          "让画面中的嘴型跟新音轨对上，成片观感更像原生版本。",
        speed: "均衡",
        bestFor: "重点素材",
      },
    ],
  },
  pricing: {
    eyebrow: "价格",
    title: "先拿一条素材验证，再决定要不要放大",
    description:
      "价格按团队常见的试跑节奏来设计，先跑通，再扩量，不需要一开始就投入太重。",
    billingCycleLabel: "计费周期",
    monthlyLabel: "月付",
    yearlyLabel: "年付",
    saveLabel: "省 20%",
    subscribeLabel: "立即订阅",
    cards: [
      {
        name: "Base",
        subtitle: "LipSyncShow 基础版",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        annualBilling: "按年付费 ($84/年)",
        credits: "每月 600 credits",
        seconds: "≈ 每月 600 秒",
        perMonthLabel: "/月",
        features: [
          "支持多种 lip sync 模型",
          "视频上传 < 50MB",
          "音频上传 < 10MB",
        ],
      },
      {
        name: "Premium",
        subtitle: "LipSyncShow 高级版",
        monthlyPrice: "$19",
        yearlyPrice: "$15",
        annualBilling: "按年付费 ($180/年)",
        credits: "每月 1800 credits",
        seconds: "≈ 每月 1800 秒",
        perMonthLabel: "/月",
        features: [
          "支持多种 lip sync 模型",
          "可选择视频循环模式",
          "支持私密视频可见性",
          "视频上传 < 100MB",
          "音频上传 < 20MB",
          "无限 text to audio",
        ],
      },
      {
        name: "Pro",
        subtitle: "LipSyncShow 专业版",
        monthlyPrice: "$69",
        yearlyPrice: "$60",
        annualBilling: "按年付费 ($720/年)",
        credits: "每月 9600 credits",
        seconds: "≈ 每月 9600 秒",
        perMonthLabel: "/月",
        features: [
          "支持多种 lip sync 模型",
          "可选择视频循环模式",
          "支持私密视频可见性",
          "无限视频上传",
          "无限音频上传",
          "无限 text to audio",
          "永久云存储",
        ],
      },
    ],
  },
  blog: {
    eyebrow: "内容",
    title: "给跨境视频团队准备的实操内容",
    description:
      "不讲空话，重点放在上架、投放和多市场复用这些真正会遇到的问题上。",
    cards: [
      {
        tag: "实战指南",
        title: "一条 Amazon 商品页视频，怎么快速做出多地区版本",
        description: "适合已经有成熟素材、想低成本试出新市场反馈的团队。",
        cta: "继续了解",
      },
      {
        tag: "实战指南",
        title: "什么时候值得做口型同步，而不只是换字幕",
        description: "如果视频里有人物出镜，这一步通常直接影响成片的可信度。",
        cta: "继续了解",
      },
      {
        tag: "实战指南",
        title: "把一条 TikTok 跑量素材改成多语言版本的实操思路",
        description: "从广告延展到店铺落地页，同一条素材怎么复用会更省事。",
        cta: "继续了解",
      },
    ],
  },
  faq: {
    eyebrow: "常见问题",
    title: "你可能会先问这几个问题",
    items: [
      {
        question: "什么类型的视频最适合先做本地化？",
        answer:
          "有人声讲解的商品视频最适合，例如达人种草、创始人出镜、开箱、测评和教程。",
      },
      {
        question: "字幕、配音和口型同步可以一次完成吗？",
        answer:
          "可以。你可以一次生成完整版本，也可以只选其中某一项，按现有流程接进去。",
      },
      {
        question: "只能用在短视频广告里吗？",
        answer:
          "不是。商品详情页、独立站、邮件、广告投放和售后说明视频都适合。",
      },
      {
        question: "为什么跨境电商尤其需要口型同步？",
        answer:
          "如果人物出镜但声音和嘴型对不上，用户会很容易觉得是后配的。对重点素材来说，这一步很影响信任感。",
      },
    ],
  },
  cta: {
    eyebrow: "开始扩量",
    title: "把已经跑出来的视频，继续放大到更多市场",
    description:
      "先从一条素材开始，做出能直接上线的多语言版本，再决定要铺到哪些国家和渠道。",
    primaryCta: "立即体验",
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
    billingCycleLabel: "Ciclo de facturación",
    monthlyLabel: "Mensual",
    yearlyLabel: "Anual",
    saveLabel: "Ahorra 20%",
    subscribeLabel: "Suscribirse",
    cards: [
      {
        name: "Base",
        subtitle: "Plan Base de LipSyncShow",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        annualBilling: "Facturado anualmente ($84/año)",
        credits: "600 credits por mes",
        seconds: "≈ 600 segundos por mes",
        perMonthLabel: "/mes",
        features: [
          "Múltiples modelos de lip sync",
          "Video subido < 50MB",
          "Audio subido < 10MB",
        ],
      },
      {
        name: "Premium",
        subtitle: "Plan Premium de LipSyncShow",
        monthlyPrice: "$19",
        yearlyPrice: "$15",
        annualBilling: "Facturado anualmente ($180/año)",
        credits: "1800 credits por mes",
        seconds: "≈ 1800 segundos por mes",
        perMonthLabel: "/mes",
        features: [
          "Múltiples modelos de lip sync",
          "Selección de modo loop de video",
          "Visibilidad privada del video",
          "Video subido < 100MB",
          "Audio subido < 20MB",
          "Texto a audio ilimitado",
        ],
      },
      {
        name: "Pro",
        subtitle: "Plan Pro de LipSyncShow",
        monthlyPrice: "$69",
        yearlyPrice: "$60",
        annualBilling: "Facturado anualmente ($720/año)",
        credits: "9600 credits por mes",
        seconds: "≈ 9600 segundos por mes",
        perMonthLabel: "/mes",
        features: [
          "Múltiples modelos de lip sync",
          "Selección de modo loop de video",
          "Visibilidad privada del video",
          "Carga de video ilimitada",
          "Carga de audio ilimitada",
          "Texto a audio ilimitado",
          "Almacenamiento permanente en la nube",
        ],
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
    billingCycleLabel: "Cycle de facturation",
    monthlyLabel: "Mensuel",
    yearlyLabel: "Annuel",
    saveLabel: "Économisez 20 %",
    subscribeLabel: "Souscrire",
    cards: [
      {
        name: "Base",
        subtitle: "Offre Base de LipSyncShow",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        annualBilling: "Facturé annuellement (84 $/an)",
        credits: "600 credits par mois",
        seconds: "≈ 600 secondes par mois",
        perMonthLabel: "/mois",
        features: [
          "Plusieurs modèles de lip sync",
          "Vidéo importée < 50MB",
          "Audio importé < 10MB",
        ],
      },
      {
        name: "Premium",
        subtitle: "Offre Premium de LipSyncShow",
        monthlyPrice: "$19",
        yearlyPrice: "$15",
        annualBilling: "Facturé annuellement (180 $/an)",
        credits: "1800 credits par mois",
        seconds: "≈ 1800 secondes par mois",
        perMonthLabel: "/mois",
        features: [
          "Plusieurs modèles de lip sync",
          "Sélection du mode loop vidéo",
          "Visibilité privée de la vidéo",
          "Vidéo importée < 100MB",
          "Audio importé < 20MB",
          "Text to audio illimité",
        ],
      },
      {
        name: "Pro",
        subtitle: "Offre Pro de LipSyncShow",
        monthlyPrice: "$69",
        yearlyPrice: "$60",
        annualBilling: "Facturé annuellement (720 $/an)",
        credits: "9600 credits par mois",
        seconds: "≈ 9600 secondes par mois",
        perMonthLabel: "/mois",
        features: [
          "Plusieurs modèles de lip sync",
          "Sélection du mode loop vidéo",
          "Visibilité privée de la vidéo",
          "Import vidéo illimité",
          "Import audio illimité",
          "Text to audio illimité",
          "Stockage cloud permanent",
        ],
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
    billingCycleLabel: "Abrechnungszeitraum",
    monthlyLabel: "Monatlich",
    yearlyLabel: "Jährlich",
    saveLabel: "20 % sparen",
    subscribeLabel: "Abonnieren",
    cards: [
      {
        name: "Base",
        subtitle: "Base-Plan von LipSyncShow",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        annualBilling: "Jährliche Abrechnung (84 $/Jahr)",
        credits: "600 credits pro Monat",
        seconds: "≈ 600 Sekunden pro Monat",
        perMonthLabel: "/Monat",
        features: [
          "Mehrere Lip-Sync-Modelle",
          "Video-Upload < 50MB",
          "Audio-Upload < 10MB",
        ],
      },
      {
        name: "Premium",
        subtitle: "Premium-Plan von LipSyncShow",
        monthlyPrice: "$19",
        yearlyPrice: "$15",
        annualBilling: "Jährliche Abrechnung (180 $/Jahr)",
        credits: "1800 credits pro Monat",
        seconds: "≈ 1800 Sekunden pro Monat",
        perMonthLabel: "/Monat",
        features: [
          "Mehrere Lip-Sync-Modelle",
          "Video-Loop-Modus auswählbar",
          "Private Videosichtbarkeit",
          "Video-Upload < 100MB",
          "Audio-Upload < 20MB",
          "Unbegrenztes Text-to-Audio",
        ],
      },
      {
        name: "Pro",
        subtitle: "Pro-Plan von LipSyncShow",
        monthlyPrice: "$69",
        yearlyPrice: "$60",
        annualBilling: "Jährliche Abrechnung (720 $/Jahr)",
        credits: "9600 credits pro Monat",
        seconds: "≈ 9600 Sekunden pro Monat",
        perMonthLabel: "/Monat",
        features: [
          "Mehrere Lip-Sync-Modelle",
          "Video-Loop-Modus auswählbar",
          "Private Videosichtbarkeit",
          "Unbegrenzter Video-Upload",
          "Unbegrenzter Audio-Upload",
          "Unbegrenztes Text-to-Audio",
          "Permanenter Cloud-Speicher",
        ],
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
    billingCycleLabel: "請求サイクル",
    monthlyLabel: "月額",
    yearlyLabel: "年額",
    saveLabel: "20%お得",
    subscribeLabel: "購読する",
    cards: [
      {
        name: "Base",
        subtitle: "LipSyncShow Baseプラン",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        annualBilling: "年額請求 ($84/年)",
        credits: "毎月 600 credits",
        seconds: "≈ 毎月 600 秒",
        perMonthLabel: "/月",
        features: [
          "複数の lip sync モデル",
          "動画アップロード < 50MB",
          "音声アップロード < 10MB",
        ],
      },
      {
        name: "Premium",
        subtitle: "LipSyncShow Premiumプラン",
        monthlyPrice: "$19",
        yearlyPrice: "$15",
        annualBilling: "年額請求 ($180/年)",
        credits: "毎月 1800 credits",
        seconds: "≈ 毎月 1800 秒",
        perMonthLabel: "/月",
        features: [
          "複数の lip sync モデル",
          "動画ループモードを選択可能",
          "非公開動画の可視性設定",
          "動画アップロード < 100MB",
          "音声アップロード < 20MB",
          "text to audio 無制限",
        ],
      },
      {
        name: "Pro",
        subtitle: "LipSyncShow Proプラン",
        monthlyPrice: "$69",
        yearlyPrice: "$60",
        annualBilling: "年額請求 ($720/年)",
        credits: "毎月 9600 credits",
        seconds: "≈ 毎月 9600 秒",
        perMonthLabel: "/月",
        features: [
          "複数の lip sync モデル",
          "動画ループモードを選択可能",
          "非公開動画の可視性設定",
          "動画アップロード無制限",
          "音声アップロード無制限",
          "text to audio 無制限",
          "永久クラウドストレージ",
        ],
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
