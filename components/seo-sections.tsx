import type { CSSProperties } from "react";
import type { Locale } from "../lib/i18n";
import { getSeoContent } from "../lib/seo";

type SeoSectionsProps = {
  locale: Locale;
};

type MotionStyle = CSSProperties & {
  "--reveal-delay"?: string;
};

function getRevealDelayStyle(index: number): MotionStyle {
  return {
    "--reveal-delay": `${index * 0.08}s`,
  };
}

export function SeoSections({ locale }: SeoSectionsProps) {
  const seo = getSeoContent(locale);

  return (
    <>
      <section className="section" id="keywords">
        <div className="section-head reveal">
          <span className="eyebrow">{seo.keywordSection.eyebrow}</span>
          <h2>{seo.keywordSection.title}</h2>
          <p>{seo.keywordSection.description}</p>
        </div>

        <div className="card-grid card-grid-two">
          {seo.keywordSection.clusters.map((cluster, index) => (
            <article
              className="panel-card keyword-cluster-card reveal"
              key={cluster.title}
              style={getRevealDelayStyle(index)}
            >
              <span className="card-tag">{cluster.tag}</span>
              <h3>{cluster.title}</h3>
              <p>{cluster.description}</p>

              <ul
                className="keyword-pill-list"
                aria-label={`${cluster.title} keywords`}
              >
                {cluster.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="search-intent">
        <div className="section-head reveal">
          <span className="eyebrow">{seo.searchIntentSection.eyebrow}</span>
          <h2>{seo.searchIntentSection.title}</h2>
          <p>{seo.searchIntentSection.description}</p>
        </div>

        <div className="card-grid card-grid-three">
          {seo.searchIntentSection.cards.map((card, index) => (
            <article
              className="panel-card seo-intent-card reveal"
              key={card.title}
              style={getRevealDelayStyle(index)}
            >
              <span className="card-tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <ul className="seo-term-list" aria-label={`${card.title} terms`}>
                {card.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
