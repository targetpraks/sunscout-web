import Link from "next/link";
import type { Metadata } from "next";
import { beaches, GOLDEN_HOUR } from "@/lib/beaches";
import { SITE_NAME, SITE_TAGLINE, withBasePath, CONTACT_EMAIL } from "@/config/site";
import ShowcaseCard from "@/components/ShowcaseCard";
import type { TimeOfDay } from "@/components/ShowcaseCard";
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

/* Time-of-day rotation for the showcase row. Golden and blue carry the mood
 * variety the base art cannot; midday is the neutral daylight slot. The
 * morning variant is a near-duplicate of base art and stays unused. */
const showcaseTime: Record<string, TimeOfDay> = {
  "praia-da-coelha": "golden",
  "praia-do-camilo": "midday",
  "praia-da-marinha": "blue",
  "meia-praia": "golden",
  "praia-do-carvalho": "midday",
  "praia-da-rocha": "blue",
};

/* Golden-hour timeline geometry, derived from the GOLDEN_HOUR block the
 * seeded Algarve dataset shares. Every edge comes from that block, so the
 * timeline can never drift from the dataset values. */
function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function splitRange(range: string): [string, string] {
  const [from, to] = range.split("-");
  return [from, to];
}

const [dayStart] = splitRange(GOLDEN_HOUR.blueHourMorning);
const [, dayEnd] = splitRange(GOLDEN_HOUR.blueHourEvening);
const DAY_START = toMin(dayStart);
const DAY_END = toMin(dayEnd);

function pct(minutes: number): string {
  return `${(((minutes - DAY_START) / (DAY_END - DAY_START)) * 100).toFixed(2)}%`;
}

function span(from: string, to: string): { left: string; width: string } {
  const a = toMin(from);
  const b = toMin(to);
  return {
    left: pct(a),
    width: `${(((b - a) / (DAY_END - DAY_START)) * 100).toFixed(2)}%`,
  };
}

export default function HomePage() {
  const featured = beaches.slice(0, 6);
  const top = [...beaches].sort((a, b) => b.match - a.match)[0];

  const [mbFrom, mbTo] = splitRange(GOLDEN_HOUR.blueHourMorning);
  const [ghFrom, ghTo] = splitRange(GOLDEN_HOUR.goldenHour);
  const [ebFrom, ebTo] = splitRange(GOLDEN_HOUR.blueHourEvening);
  const morningBlue = span(mbFrom, mbTo);
  const day = span(mbTo, ghFrom);
  const golden = span(ghFrom, ghTo);
  const eveningBlue = span(ebFrom, ebTo);

  return (
    <>
      {/* Preload the hero art: it is the likely LCP element on this page.
       * React hoists this link into <head> for the static export. */}
      <link
        rel="preload"
        as="image"
        href={withBasePath("/assets/beaches/praia-da-marinha-golden.svg")}
      />

      {/* Hero: asymmetric split, copy left, golden-hour beach art right. */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.05fr_1fr] md:pb-24 md:pt-16">
        <div className="rise" style={{ "--step": 0 } as CSSProperties}>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Which beach is worth your day, right now?
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-driftwood">
            SunScout turns live sea, weather and crowd data into one simple answer.
            Conditions, amenities and booking in a single app.
          </p>
          <p className="mt-1 text-sm font-medium text-teal">{SITE_TAGLINE}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#install"
              className="rounded-full bg-coral px-6 py-3 text-base font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
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
        </div>

        <div className="rise" style={{ "--step": 1 } as CSSProperties}>
          <figure className="overflow-hidden rounded-2xl border border-line bg-shell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/assets/beaches/praia-da-marinha-golden.svg")}
              alt="Illustration of Praia da Marinha, Lagoa, Portugal at golden hour: an arch of golden rock above clear water"
              width={860}
              height={344}
              fetchPriority="high"
            />
            <figcaption className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
              <span className="text-xs text-driftwood">
                Praia da Marinha, Lagoa at golden hour
              </span>
              <SampleNote />
            </figcaption>
          </figure>
          <p className="mt-3 text-xs text-driftwood">
            Beach art is generated from the app dataset.
          </p>
        </div>
      </section>

      {/* Conditions snapshot: full-bleed marine band. The data is the product,
       * so it gets the loudest visual treatment on the page. */}
      <section aria-labelledby="conditions-heading" className="bg-marine text-sand">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2
              id="conditions-heading"
              className="text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Conditions snapshot
            </h2>
            <SampleNote />
          </div>
          <p className="mt-3 max-w-2xl text-sm text-sand/70">
            A build-time snapshot from the app dataset. The app refreshes these readings
            from its providers; this page does not.
          </p>

          <p className="mt-10 text-sm text-sand/80">
            Top match in the sample dataset:{" "}
            <Link
              href={`/beaches/${top.slug}`}
              className="font-semibold text-sand underline underline-offset-4"
            >
              {top.name}
            </Link>
            , match score {top.match}.
          </p>

          {/* Asymmetric stat row: sea temperature leads at display size. */}
          <dl className="mt-6 grid gap-8 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:items-end">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-sand/60">
                Sea temperature
              </dt>
              <dd className="mt-1 font-semibold tabular-nums">
                <span className="text-6xl md:text-7xl">{top.seaTempC}</span>
                <span className="text-2xl text-sand/80">°C</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-sand/60">
                Air temperature
              </dt>
              <dd className="mt-1 font-semibold tabular-nums">
                <span className="text-5xl md:text-6xl">{top.airTempC}</span>
                <span className="text-xl text-sand/80">°C</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-sand/60">
                Wave height
              </dt>
              <dd className="mt-1 font-semibold tabular-nums">
                <span className="text-5xl md:text-6xl">{top.waveHeightM}</span>
                <span className="text-xl text-sand/80">m</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-sand/60">
                UV index
              </dt>
              <dd className="mt-1 font-semibold tabular-nums">
                <span className="text-5xl md:text-6xl">{top.uvIndex}</span>
              </dd>
            </div>
          </dl>

          {/* Golden-hour timeline for the region. */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold">Golden hour today</h3>
            <p className="mt-1 text-sm text-sand/70">
              Algarve, Europe/Lisbon. Sample values from the app dataset.
            </p>
            <div
              aria-hidden="true"
              className="relative mt-4 h-3 overflow-hidden rounded-full bg-white/10"
            >
              <span
                className="absolute inset-y-0 bg-teal/60"
                style={{ left: morningBlue.left, width: morningBlue.width }}
              />
              <span
                className="absolute inset-y-0 bg-sand/40"
                style={{ left: day.left, width: day.width }}
              />
              <span
                className="absolute inset-y-0 bg-coral"
                style={{ left: golden.left, width: golden.width }}
              />
              <span
                className="absolute inset-y-0 bg-teal/60"
                style={{ left: eveningBlue.left, width: eveningBlue.width }}
              />
            </div>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-sand/70">
              <span>
                Sunrise <span className="text-sand">{GOLDEN_HOUR.sunrise}</span>
              </span>
              <span>
                Golden hour{" "}
                <span className="font-semibold text-coral">
                  {GOLDEN_HOUR.goldenHour}
                </span>
              </span>
              <span>
                Sunset <span className="text-sand">{GOLDEN_HOUR.sunset}</span>
              </span>
              <span>
                Blue hour (evening){" "}
                <span className="text-sand">{GOLDEN_HOUR.blueHourEvening}</span>
              </span>
            </p>
          </div>

          {/* Crowd meters across the full dataset. Coral marks busy shores. */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold">
              Crowd levels, all {beaches.length} beaches
            </h3>
            <p className="mt-1 text-sm text-sand/70">
              Sample crowd levels from the app dataset. Coral marks the busiest shores,
              at 60% and above.
            </p>
            <ul className="mt-4 grid gap-x-12 md:grid-cols-2">
              {beaches.map((beach) => (
                <li key={beach.slug} className="flex items-center gap-3 py-1.5">
                  <span className="wrap-anywhere w-36 shrink-0 text-sm text-sand/90">
                    {beach.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15"
                  >
                    <span
                      className={`block h-full rounded-full ${
                        beach.crowdPercent >= 60 ? "bg-coral" : "bg-sand"
                      }`}
                      style={{ width: `${beach.crowdPercent}%` }}
                    />
                  </span>
                  <span className="w-14 shrink-0 text-right text-sm font-medium tabular-nums">
                    {beach.crowdPercent}%<span className="sr-only"> crowd level</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works: borderless steps, staggered, display numerals. */}
      <section
        aria-labelledby="how-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
      >
        <h2
          id="how-heading"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          How it works
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={i === 1 ? "md:mt-10" : i === 2 ? "md:mt-20" : ""}
            >
              <span
                aria-hidden="true"
                className="text-6xl font-bold leading-none text-coral-deep md:text-7xl"
              >
                {i + 1}
              </span>
              <span className="sr-only">Step {i + 1} of 3.</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-driftwood">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Feature pillars: editorial two-and-three column list, no cards. */}
      <section
        aria-labelledby="pillars-heading"
        className="border-y border-line bg-sand-deep/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <h2
            id="pillars-heading"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            What SunScout does
          </h2>
          <ul className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
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

      {/* Beach showcase: the one card grid, rotating time-of-day art. */}
      <section
        aria-labelledby="showcase-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2
            id="showcase-heading"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
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
        <p className="mt-2 text-xs text-driftwood">
          Beach art rotates through golden hour, blue hour and midday light.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((beach) => (
            <li key={beach.slug}>
              <ShowcaseCard beach={beach} time={showcaseTime[beach.slug] ?? "midday"} />
            </li>
          ))}
        </ul>
      </section>

      {/* Install CTA: full-bleed coral. Marine text throughout (6.03:1). */}
      <section
        id="install"
        aria-labelledby="install-heading"
        className="bg-coral text-marine"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h2
            id="install-heading"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Add SunScout to your home screen
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed">
            SunScout is a progressive web app: install it from the browser with Add to
            Home Screen. No app-store detour, no separate download.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20preview%20access`}
              className="rounded-full bg-marine px-6 py-3 text-base font-semibold text-sand transition-transform duration-200 hover:-translate-y-0.5"
            >
              Request preview access
            </a>
            <Link
              href="/beaches"
              className="rounded-full border border-marine/60 px-6 py-3 text-base font-semibold text-marine transition-colors hover:bg-marine/10"
            >
              See the data first
            </Link>
          </div>
          <p className="mt-6 text-sm">
            Private preview. App access is granted as pilot markets open. Booking rolls
            out in pilot markets first.
          </p>
        </div>
      </section>
    </>
  );
}
