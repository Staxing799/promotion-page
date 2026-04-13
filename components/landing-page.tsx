import type { CSSProperties } from "react";
import type { LandingPageContent, Locale } from "../lib/i18n";
import { platformItems } from "../lib/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { PricingSection } from "./pricing-section";
import { RevealObserver } from "./reveal-observer";
import { ScrollLink } from "./scroll-link";
import { ScrollReset } from "./scroll-reset";

type LandingPageProps = {
  content: LandingPageContent;
  locale: Locale;
};

const heroVideoUrl =
  "https://rs.magicface.co/indiesites/lipsync-show/landingpage/hero-video-2.webm";

type MotionStyle = CSSProperties & {
  "--reveal-delay"?: string;
  "--card-index"?: number;
};

function getRevealDelayStyle(index: number): MotionStyle {
  return {
    "--reveal-delay": `${index * 0.08}s`,
  };
}

export function LandingPage({ content, locale }: LandingPageProps) {
  const platformLoop = [...platformItems, ...platformItems];

  return (
    <main className="page-shell">
      <RevealObserver />
      <ScrollReset />
      <div className="ambient ambient-top" />
      <div className="ambient ambient-center" />
      <div className="ambient ambient-bottom" />
      <div className="ambient ambient-side ambient-side-left" />
      <div className="ambient ambient-side ambient-side-right" />

      <header className="topbar">
        <ScrollLink
          className="brand"
          targetId="hero"
          aria-label="ShopSync.show home"
        >
          <span className="brand-mark">
            <span className="brand-core" />
          </span>
          <span className="brand-name">
            ShopSync<span>.show</span>
          </span>
        </ScrollLink>

        <nav className="nav-links" aria-label="Primary">
          <ScrollLink targetId="showcase">{content.nav.showcase}</ScrollLink>
          <ScrollLink targetId="pricing">{content.nav.pricing}</ScrollLink>
          <ScrollLink targetId="blog">{content.nav.blog}</ScrollLink>
          <ScrollLink targetId="models">{content.nav.models}</ScrollLink>
        </nav>

        <div className="topbar-actions">
          <LanguageSwitcher
            currentLocale={locale}
            label={content.nav.languageLabel}
          />
        </div>
      </header>

      <section className="hero section" id="hero">
        <div className="hero-copy reveal">
          <h1>
            {content.hero.titleBefore}
            <span className="text-gradient">{content.hero.titleHighlight}</span>
            {content.hero.titleAfter}
          </h1>
          <p className="hero-text">{content.hero.description}</p>

          <div className="hero-actions">
            <ScrollLink className="button button-primary" targetId="cta">
              {content.hero.primaryCta}
            </ScrollLink>
          </div>

          <ul className="signal-grid" aria-label="Key signals">
            {content.signals.map((signal, index) => (
              <li
                key={signal.value}
                className="signal-card"
                style={{ "--card-index": index } as MotionStyle}
              >
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual reveal reveal-delay-1" aria-hidden="true">
          <div className="hero-stage">
            <div className="stage-beam" />
            <div className="stage-glow" />
            <div className="stage-orbit stage-orbit-large" />
            <div className="stage-orbit stage-orbit-small" />
            <div className="stage-particle stage-particle-a" />
            <div className="stage-particle stage-particle-b" />
            <div className="stage-particle stage-particle-c" />

            <div className="avatar-card avatar-card-left">
              <span className="avatar-badge">{content.visual.sourceBadge}</span>
              <div className="avatar-art avatar-art-source">
                <video
                  className="avatar-video avatar-video-source"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  src={heroVideoUrl}
                />
              </div>
              <div className="avatar-footer">
                <strong>{content.visual.sourceTitle}</strong>
                <span>{content.visual.sourceSubtitle}</span>
              </div>
            </div>

            <div className="avatar-card avatar-card-right">
              <span className="avatar-badge">{content.visual.outputBadge}</span>
              <div className="avatar-art avatar-art-output">
                <video
                  className="avatar-video avatar-video-output"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  src={heroVideoUrl}
                />
              </div>
              <div className="avatar-footer">
                <strong>{content.visual.outputTitle}</strong>
                <span>{content.visual.outputSubtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-strip reveal">
        <p>{content.platformStripLabel}</p>
        <div className="platform-marquee" aria-label="Supported channels">
          <div className="platform-track">
            {platformLoop.map((platform, index) => (
              <span key={`${platform}-${index}`}>{platform}</span>
            ))}
          </div>
          <div className="platform-track" aria-hidden="true">
            {platformLoop.map((platform, index) => (
              <span key={`${platform}-clone-${index}`}>{platform}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="showcase">
        <div className="section-head reveal">
          <h2>{content.showcase.title}</h2>
          <p>{content.showcase.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.showcase.cards.map((card, index) => (
            <article
              className="panel-card showcase-card reveal"
              key={card.title}
              style={getRevealDelayStyle(index)}
            >
              <span className="card-tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="mini-preview">
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="section-head reveal">
          <h2>{content.workflow.title}</h2>
          <p>{content.workflow.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.workflow.cards.map((step, index) => (
            <article
              className="panel-card step-card reveal"
              key={step.index}
              style={getRevealDelayStyle(index)}
            >
              <span className="step-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="models">
        <div className="section-head reveal">
          <h2>{content.models.title}</h2>
          <p>{content.models.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.models.cards.map((model, index) => (
            <article
              className="panel-card model-card reveal"
              key={model.name}
              style={getRevealDelayStyle(index)}
            >
              <span className="card-tag">{model.badge}</span>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <div className="model-meta">
                <div>
                  <span>{content.models.speedLabel}</span>
                  <strong>{model.speed}</strong>
                </div>
                <div>
                  <span>{content.models.bestForLabel}</span>
                  <strong>{model.bestFor}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="pricing">
        <PricingSection pricing={content.pricing} />
      </section>

      <section className="section" id="blog">
        <div className="section-head reveal">
          <h2>{content.blog.title}</h2>
          <p>{content.blog.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.blog.cards.map((post, index) => (
            <article
              className="panel-card blog-card reveal"
              key={post.title}
              style={getRevealDelayStyle(index)}
            >
              <span className="card-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <ScrollLink className="text-link" targetId="cta">
                {post.cta}
              </ScrollLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-head reveal">
          <h2>{content.faq.title}</h2>
        </div>

        <div className="card-grid card-grid-two">
          {content.faq.items.map((item, index) => (
            <article
              className="panel-card faq-card reveal"
              key={item.question}
              style={getRevealDelayStyle(index)}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
