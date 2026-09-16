import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing - free tier and premium",
  description:
    "SunScout pricing: a free tier that completes the core discovery loop, a premium subscription, and quote-based plans for institutions. Proposed pricing, subject to validation.",
};

const freeTier = [
  "Smart Discovery with at least three results",
  "Basic weather and tide",
  "Full beach detail pages",
  "Check-in",
  "Up to 50 saved beaches",
  "One active trip",
  "Basic reservation and booking history",
];

const premiumTier = [
  "Full discovery results",
  "14-day forecast",
  "Golden hour alerts",
  "Offline trip packs",
  "Unlimited trips and wishlists",
  "Ad-free experience",
  "Premium family and profile depth",
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          The free tier completes the core discovery loop without a card. Premium adds
          forecasting depth and alerts. Institutions contract separately.
        </p>
        <p className="mt-4 rounded-2xl border border-line bg-shell px-4 py-3 text-sm text-driftwood">
          Proposed pricing, subject to validation. Nothing on this page is charged
          today; the app is in private preview.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section
          aria-labelledby="free-heading"
          className="rounded-2xl border border-line bg-shell p-8"
        >
          <h2 id="free-heading" className="text-2xl font-semibold">
            Free
          </h2>
          <p className="mt-2 text-4xl font-semibold">
            $0
            <span className="text-base font-normal text-driftwood"> forever</span>
          </p>
          <ul className="mt-6 space-y-3">
            {freeTier.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-seagreen"
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/#install"
            className="mt-8 inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get the app
          </Link>
        </section>

        <section
          aria-labelledby="premium-heading"
          className="rounded-2xl border-2 border-teal bg-shell p-8"
        >
          <h2 id="premium-heading" className="text-2xl font-semibold">
            Premium
          </h2>
          <p className="mt-2 text-4xl font-semibold">
            $1.99
            <span className="text-base font-normal text-driftwood">
              {" "}
              per month, proposed
            </span>
          </p>
          <ul className="mt-6 space-y-3">
            {premiumTier.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-seagreen"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-driftwood">Includes everything in Free.</p>
        </section>
      </div>

      <section
        aria-labelledby="institutions-heading"
        className="mt-12 rounded-2xl border border-line bg-marine p-8 text-sand"
      >
        <h2 id="institutions-heading" className="text-2xl font-semibold">
          For municipalities and tourism boards
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand/80">
          Quote-based annual contracts covering dashboards, API access, exports, embeds
          and compliance reporting. Scope depends on beaches monitored and delivery
          terms.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20institutional%20enquiry`}
          className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
        >
          Request a quote
        </a>
      </section>

      <section aria-labelledby="pricing-notes" className="mt-12 max-w-2xl">
        <h2 id="pricing-notes" className="text-xl font-semibold">
          Notes
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-driftwood">
          <li className="flex items-start gap-2">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-coral-deep" />
            Live condition data and Beach Pulse rankings are never sold or altered by
            paid placement.
          </li>
          <li className="flex items-start gap-2">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-coral-deep" />
            Premium does not buy ranking position; match scores are computed the same
            way for everyone.
          </li>
          <li className="flex items-start gap-2">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-coral-deep" />
            No card is required to use the free tier.
          </li>
        </ul>
      </section>
    </div>
  );
}
