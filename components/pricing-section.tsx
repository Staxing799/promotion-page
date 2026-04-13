"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import type { LandingPageContent } from "../lib/i18n";

type PricingSectionProps = {
  pricing: LandingPageContent["pricing"];
};

type BillingCycle = "monthly" | "yearly";
type MotionStyle = CSSProperties & {
  "--reveal-delay"?: string;
};

export function PricingSection({ pricing }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <>
      <div className="section-head reveal">
        <h2>{pricing.title}</h2>
        <p>{pricing.description}</p>
      </div>

      <div className="pricing-switcher-wrap reveal reveal-delay-1">
        <div
          className="pricing-switcher"
          role="tablist"
          aria-label={pricing.billingCycleLabel}
        >
          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === "monthly"}
            className={`pricing-switch${
              billingCycle === "monthly" ? " pricing-switch-active" : ""
            }`}
            onClick={() => {
              setBillingCycle("monthly");
            }}
          >
            {pricing.monthlyLabel}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === "yearly"}
            className={`pricing-switch${
              billingCycle === "yearly" ? " pricing-switch-active" : ""
            }`}
            onClick={() => {
              setBillingCycle("yearly");
            }}
          >
            <span>{pricing.yearlyLabel}</span>
            <span className="pricing-switch-inline-save">{pricing.saveLabel}</span>
          </button>
        </div>
      </div>

      <div className="card-grid card-grid-three pricing-grid">
        {pricing.cards.map((plan, index) => {
          const isYearly = billingCycle === "yearly";
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

          return (
            <article
              className={`panel-card pricing-plan reveal${
                plan.name === "Base" ? " pricing-plan-accent" : ""
              }`}
              key={plan.name}
              style={
                {
                  "--reveal-delay": `${index * 0.08}s`,
                } as MotionStyle
              }
            >
              {isYearly ? (
                <span className="pricing-plan-save-badge">{pricing.saveLabel}</span>
              ) : null}

              <div className="pricing-plan-head">
                <h3>{plan.name}</h3>
                <p className="pricing-plan-subtitle">{plan.subtitle}</p>
              </div>

              <div className="pricing-plan-price-row">
                <span className="pricing-plan-price">{price}</span>
                <span className="pricing-plan-unit">{plan.perMonthLabel}</span>
              </div>

              {isYearly ? (
                <p className="pricing-plan-billing">{plan.annualBilling}</p>
              ) : null}

              <div className="pricing-plan-divider" />

              <ul className="pricing-plan-features">
                <li className="pricing-plan-feature pricing-plan-feature-credit">
                  <span
                    className="pricing-plan-feature-icon pricing-plan-feature-icon-coin"
                    aria-hidden="true"
                  />
                  <span>{plan.credits}</span>
                </li>
                <li className="pricing-plan-feature pricing-plan-feature-seconds">
                  <span
                    className="pricing-plan-feature-icon pricing-plan-feature-icon-grid"
                    aria-hidden="true"
                  />
                  <span>{plan.seconds}</span>
                </li>
                {plan.features.map((feature) => (
                  <li className="pricing-plan-feature" key={feature}>
                    <span
                      className="pricing-plan-feature-icon pricing-plan-feature-icon-check"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                className="button button-primary pricing-plan-button"
                href="https://www.lipsync.show/create"
              >
                {pricing.subscribeLabel}
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
}
