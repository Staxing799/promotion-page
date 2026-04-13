import type { LandingPageContent, Locale } from "../lib/i18n";
import { platformItems } from "../lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

type LandingPageProps = {
  content: LandingPageContent;
  locale: Locale;
};

export function LandingPage({ content, locale }: LandingPageProps) {
  return (
    <main className="page-shell">
      <div className="ambient ambient-top" />
      <div className="ambient ambient-center" />
      <div className="ambient ambient-bottom" />

      <header className="topbar">
        <a className="brand" href="#hero" aria-label="ShopSync.show home">
          <span className="brand-mark">
            <span className="brand-core" />
          </span>
          <span className="brand-name">
            ShopSync<span>.show</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#showcase">{content.nav.showcase}</a>
          <a href="#pricing">{content.nav.pricing}</a>
          <a href="#blog">{content.nav.blog}</a>
          <a href="#models">{content.nav.models}</a>
        </nav>

        <div className="topbar-actions">
          <LanguageSwitcher
            currentLocale={locale}
            label={content.nav.languageLabel}
          />
          <a className="button button-sign" href="#cta">
            {content.nav.signIn}
          </a>
        </div>
      </header>

      <section className="hero section" id="hero">
        <div className="hero-copy reveal">
          <span className="eyebrow">{content.hero.eyebrow}</span>
          <h1>
            {content.hero.titleBefore}
            <span className="text-gradient">{content.hero.titleHighlight}</span>
            {content.hero.titleAfter}
          </h1>
          <p className="hero-text">{content.hero.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#cta">
              {content.hero.primaryCta}
            </a>
            <a className="button button-secondary" href="#models">
              {content.hero.secondaryCta}
            </a>
          </div>

          <ul className="signal-grid" aria-label="Key signals">
            {content.signals.map((signal) => (
              <li key={signal.value} className="signal-card">
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

            <div className="avatar-card avatar-card-left">
              <span className="avatar-badge">{content.visual.sourceBadge}</span>
              <div className="avatar-art avatar-art-source" />
              <div className="avatar-footer">
                <strong>{content.visual.sourceTitle}</strong>
                <span>{content.visual.sourceSubtitle}</span>
              </div>
            </div>

            <div className="sync-bridge">
              <span>{content.visual.translate}</span>
              <div className="bridge-line" />
            </div>

            <div className="avatar-card avatar-card-right">
              <span className="avatar-badge">{content.visual.outputBadge}</span>
              <div className="avatar-art avatar-art-output" />
              <div className="avatar-footer">
                <strong>{content.visual.outputTitle}</strong>
                <span>{content.visual.outputSubtitle}</span>
              </div>
            </div>

            <div className="voice-pill">
              <div className="voice-icon">
                <span />
              </div>
              <div className="voice-wave">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-strip reveal">
        <p>{content.platformStripLabel}</p>
        <div className="platform-marquee" aria-label="Supported channels">
          {platformItems.map((platform) => (
            <span key={platform}>{platform}</span>
          ))}
        </div>
      </section>

      <section className="section" id="showcase">
        <div className="section-head reveal">
          <span className="eyebrow">{content.showcase.eyebrow}</span>
          <h2>{content.showcase.title}</h2>
          <p>{content.showcase.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.showcase.cards.map((card, index) => (
            <article
              className="panel-card showcase-card reveal"
              key={card.title}
              style={{ animationDelay: `${index * 0.08}s` }}
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
          <span className="eyebrow">{content.workflow.eyebrow}</span>
          <h2>{content.workflow.title}</h2>
          <p>{content.workflow.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.workflow.cards.map((step, index) => (
            <article
              className="panel-card step-card reveal"
              key={step.index}
              style={{ animationDelay: `${index * 0.08}s` }}
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
          <span className="eyebrow">{content.models.eyebrow}</span>
          <h2>{content.models.title}</h2>
          <p>{content.models.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.models.cards.map((model, index) => (
            <article
              className="panel-card model-card reveal"
              key={model.name}
              style={{ animationDelay: `${index * 0.08}s` }}
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
        <div className="section-head reveal">
          <span className="eyebrow">{content.pricing.eyebrow}</span>
          <h2>{content.pricing.title}</h2>
          <p>{content.pricing.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.pricing.cards.map((plan, index) => (
            <article
              className={`panel-card pricing-card reveal${
                plan.featured ? " pricing-card-featured" : ""
              }`}
              key={plan.name}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="card-tag">{plan.name}</span>
              <h3>{plan.price}</h3>
              <p>{plan.detail}</p>
              <ul className="feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button-secondary" href="#cta">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="blog">
        <div className="section-head reveal">
          <span className="eyebrow">{content.blog.eyebrow}</span>
          <h2>{content.blog.title}</h2>
          <p>{content.blog.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {content.blog.cards.map((post, index) => (
            <article
              className="panel-card blog-card reveal"
              key={post.title}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="card-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a className="text-link" href="#cta">
                {post.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-head reveal">
          <span className="eyebrow">{content.faq.eyebrow}</span>
          <h2>{content.faq.title}</h2>
        </div>

        <div className="card-grid card-grid-two">
          {content.faq.items.map((item, index) => (
            <article
              className="panel-card faq-card reveal"
              key={item.question}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section" id="cta">
        <div className="cta-panel reveal">
          <span className="eyebrow">{content.cta.eyebrow}</span>
          <h2>{content.cta.title}</h2>
          <p>{content.cta.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="mailto:demo@shopsync.show">
              {content.cta.primaryCta}
            </a>
            <a className="button button-secondary" href="#hero">
              {content.cta.secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
