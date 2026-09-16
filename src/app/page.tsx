import Link from "next/link";
import type { Metadata } from "next";
import { beaches, GOLDEN_HOUR } from "@/lib/beaches";
import { SITE_NAME, SITE_TAGLINE, withBasePath, CONTACT_EMAIL } from "@/config/site";
import BeachCard from "@/components/BeachCard";
import SampleNote from "@/components/SampleNote";
import { Sun, Waves, Thermometer, Users, MapPin, Wind } from "lucide-react";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: `${SITE_NAME} - ${SITE_TAGLINE}`,
  description:
    "SunScout turns live sea, weather and crowd data into one simple answer: which beach is worth your day. Conditions, amenities and booking in a single app.",
};

const pillars = [
  {
    title: "Live conditions",
    body: "Sea temperature, wave height, UV and crowd levels for every listed beach, each reading carrying its source and timestamp.",
    icon: Waves,
  },
  {
    title: "Right-beach ranking",
    body: "A match score that weighs conditions, amenities and crowd against what you need from the day: family space, calm water or a social shore.",
    icon: Sun,
  },
  {
    title: "Golden hour planning",
    body: "Sunrise, sunset and light direction per beach, so photographers and planners arrive at the right time, not just any time.",
    icon: MapPin,
  },
  {
    title: "Amenities and booking",
    body: "Verified amenities, live sunbed and umbrella availability, and prepaid booking with QR redemption where beach clubs have joined.",
    icon: Users,
  },
  {
    title: "Honest data, labelled",
    body: "Every figure on this site carries its provenance. When a reading is delayed, the app degrades honestly rather than pretending.",
    icon: Thermometer,
  },
  {
    title: "Beach-scoped, not person-scoped",
    body: "People follow beaches on SunScout, not people. No personal feeds, no background location, no selling of rank.",
    icon: Wind,
  },
];

const steps = [
  {
    title: "Describe the day you want",
    body: "Family space, calm water, a party shore or a quiet cove. Filters and audience tags translate the day into beach matches.",
  },
  {
    title: "Compare beaches on data",
    body: "Ranked results show sea state, crowd forecast, hazards and amenities side by side, each with its source and freshness.",
  },
  {
    title: "Plan and book",
    body: "Save beaches, build trips, and prepay sunbeds or activities at partner clubs, redeemable on arrival by QR code.",
  },
];

export default function HomePage() {
  const featured = beaches.slice(0, 6);

  return (
    <>
      {/* Hero: left-aligned copy, real beach art as the asset. */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-2 md:pb-24 md:pt-16">
        <div className="rise" style={{ "--step": 0 } as CSSProperties}>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Which beach is worth your day, right now?
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-driftwood">
            SunScout turns live sea, weather and crowd data into one simple answer.
            Conditions, amenities and booking in a single app.
          </p>
          <p className="mt-3 text-sm text-driftwood">{SITE_TAGLINE}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#install"
              className="rounded-full bg-teal px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get the app
            </Link>
            <Link
              href="/beaches"
              className="rounded-full border border-marine/20 px-6 py-3 text-base font-semibold text-marine transition-colors hover:bg-marine/5"
            >
              Browse beaches
            </Link>
          </div>
          <p className="mt-6 text-xs text-driftwood">
            Private preview. Booking rolls out in pilot markets first.
          </p>
        </div>

        <div className="rise md:pl-8" style={{ "--step": 1 } as CSSProperties}>
          <figure className="overflow-hidden rounded-2xl border border-line bg-shell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/assets/beaches/praia-da-marinha.svg")}
              alt="Illustration of Praia da Marinha, Lagoa, Portugal: an arch of golden rock above clear water"
              width={860}
              height={344}
            />
            <figcaption className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
              <span className="text-xs text-driftwood">Praia da Marinha, Lagoa</span>
              <SampleNote />
            </figcaption>
          </figure>
          <p className="mt-3 text-xs text-driftwood/80">
            Beach art is generated from the app dataset.
          </p>
        </div>
      </section>

      {/* Conditions snapshot: build-time data, honestly labelled. */}
      <section
        aria-labelledby="conditions-heading"
        className="border-y border-line bg-sand-deep/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="conditions-heading" className="text-xl font-semibold">
              Conditions snapshot
            </h2>
            <SampleNote />
          </div>
          <p className="mt-2 max-w-2xl text-sm text-driftwood">
            A build-time snapshot from the app dataset. The app refreshes these readings
            from its providers; this page does not.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
            {beaches.slice(0, 5).map((beach) => (
              <li
                key={beach.slug}
                className="rounded-2xl border border-line bg-shell p-4"
              >
                <p className="text-xs font-medium text-driftwood">{beach.name}</p>
                <p className="mt-1 text-2xl font-semibold text-teal">
                  {beach.seaTempC}°C
                </p>
                <p className="text-xs text-driftwood">{beach.waveHeightM} m waves</p>
                <p className="text-xs text-driftwood">{beach.crowdPercent}% crowd</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-driftwood/80">
            Golden hour today (Algarve, sample values): {GOLDEN_HOUR.goldenHour}.
          </p>
        </div>
      </section>

      {/* How it works: 3 steps. */}
      <section
        aria-labelledby="how-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
      >
        <h2 id="how-heading" className="text-3xl font-semibold tracking-tight">
          How it works
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-line bg-shell p-6"
            >
              <p className="text-sm font-semibold text-teal">
                {i + 1}. {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-driftwood">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Feature pillars. */}
      <section
        aria-labelledby="pillars-heading"
        className="border-t border-line bg-sand-deep/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 id="pillars-heading" className="text-3xl font-semibold tracking-tight">
            What SunScout does
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="rounded-2xl border border-line bg-shell p-6"
              >
                <pillar.icon aria-hidden="true" className="size-6 text-teal" />
                <h3 className="mt-3 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-driftwood">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beach showcase. */}
      <section
        aria-labelledby="showcase-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="showcase-heading" className="text-3xl font-semibold tracking-tight">
            Algarve launch beaches
          </h2>
          <Link
            href="/beaches"
            className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
          >
            All {beaches.length} beaches
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-driftwood">
          The first twelve Algarve beaches are live in the app dataset, each with
          conditions, hazards, amenities and a match score.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((beach) => (
            <li key={beach.slug}>
              <BeachCard beach={beach} />
            </li>
          ))}
        </ul>
      </section>

      {/* Install CTA. */}
      <section
        id="install"
        aria-labelledby="install-heading"
        className="border-t border-line bg-marine text-sand"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <h2
            id="install-heading"
            className="text-3xl font-semibold tracking-tight text-sand"
          >
            Add SunScout to your home screen
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/80">
            SunScout is a progressive web app: install it from the browser with Add to
            Home Screen. No app-store detour, no separate download.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20preview%20access`}
              className="rounded-full bg-coral px-6 py-3 text-base font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
            >
              Request preview access
            </a>
            <Link
              href="/beaches"
              className="rounded-full border border-sand/30 px-6 py-3 text-base font-semibold text-sand transition-colors hover:bg-sand/10"
            >
              See the data first
            </Link>
          </div>
          <p className="mt-6 text-xs text-sand/60">
            Private preview. App access is granted as pilot markets open.
          </p>
        </div>
      </section>
    </>
  );
}
