import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  beaches,
  getBeach,
  nearbyBeaches,
  GOLDEN_HOUR,
  audienceLabels,
} from "@/lib/beaches";
import { withBasePath, CONTACT_EMAIL } from "@/config/site";
import SampleNote from "@/components/SampleNote";
import BeachCard from "@/components/BeachCard";
import { AlertTriangle, Clock, Droplets, Sun, Waves, Wind } from "lucide-react";

// Static export: only the slugs listed in generateStaticParams are built.
export const dynamicParams = false;

export function generateStaticParams() {
  return beaches.map((beach) => ({ slug: beach.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const beach = getBeach(slug);
  if (!beach) return { title: "Beach not found" };

  const title = `${beach.name} - conditions, amenities and best time to go`;
  const description = `${beach.description} ${beach.decision}. Water quality: ${beach.waterQuality.toLowerCase()}. Amenities: ${beach.amenities.join(", ").toLowerCase()}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${beach.name}, ${beach.region}`,
      description: beach.description,
      images: [
        {
          url: `/og/beach-${beach.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${beach.name}, ${beach.region}, Portugal`,
        },
      ],
    },
  };
}

function ConditionsTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Waves;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-shell p-4">
      <Icon aria-hidden="true" className="size-5 shrink-0 text-teal" />
      <div>
        <p className="text-xs text-driftwood">{label}</p>
        <p className="text-lg font-semibold leading-tight">{value}</p>
      </div>
    </div>
  );
}

export default async function BeachPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const beach = getBeach(slug);
  if (!beach) notFound();

  const nearby = nearbyBeaches(beach.slug, 2);

  const faqs = [
    {
      q: `Is ${beach.name} good for families?`,
      a: `${beach.suitability.find((s) => s.audience === "families")?.label ?? "Not rated"} for families in the current dataset. ${beach.description}`,
    },
    {
      q: `What is the water quality at ${beach.name}?`,
      a: `The current dataset records water quality as ${beach.waterQuality.toLowerCase()}.`,
    },
    {
      q: `When is golden hour at ${beach.name}?`,
      a: `The sample dataset places golden hour at ${GOLDEN_HOUR.goldenHour} (Europe/Lisbon), with light from the ${beach.goldenDirection.toLowerCase()}.`,
    },
    {
      q: `What amenities does ${beach.name} have?`,
      a: beach.amenities.length
        ? `Listed amenities: ${beach.amenities.join(", ").toLowerCase()}.`
        : "No amenities are recorded for this beach in the current dataset.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Beach",
        name: beach.name,
        description: beach.description,
        url: `https://targetpraks.github.io/sunscout-web/beaches/${beach.slug}/`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: beach.lat,
          longitude: beach.lng,
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: beach.region,
          addressCountry: "PT",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-driftwood">
          <li>
            <Link href="/" className="hover:text-marine">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/beaches" className="hover:text-marine">
              Beaches
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-marine">
            {beach.name}
          </li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm font-medium text-driftwood">{beach.region}, Portugal</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h1 className="wrap-anywhere text-4xl font-semibold tracking-tight">
            {beach.name}
          </h1>
          <SampleNote />
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-driftwood">
          {beach.description}
        </p>
      </header>

      <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-shell">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath(`/assets/beaches/${beach.slug}.svg`)}
          alt={`Illustration of ${beach.name}, ${beach.region}, Portugal`}
          width={860}
          height={344}
          className="w-full"
        />
      </figure>

      {/* The call: the app's decision line for this beach. */}
      <section aria-labelledby="call-heading" className="mt-10">
        <h2
          id="call-heading"
          className="text-sm font-semibold uppercase tracking-wide text-teal"
        >
          The call
        </h2>
        <p className="mt-2 text-2xl font-semibold leading-snug">{beach.decision}</p>
      </section>

      {/* Conditions grid. */}
      <section aria-labelledby="conditions-heading" className="mt-10">
        <h2 id="conditions-heading" className="text-2xl font-semibold tracking-tight">
          Conditions
        </h2>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <li>
            <ConditionsTile
              icon={Droplets}
              label="Sea temperature"
              value={`${beach.seaTempC}°C`}
            />
          </li>
          <li>
            <ConditionsTile
              icon={Waves}
              label="Wave height"
              value={`${beach.waveHeightM} m`}
            />
          </li>
          <li>
            <ConditionsTile icon={Sun} label="UV index" value={`${beach.uvIndex}`} />
          </li>
          <li>
            <ConditionsTile icon={Wind} label="Wind" value={`${beach.windKmh} km/h`} />
          </li>
          <li>
            <ConditionsTile
              icon={Sun}
              label="Air temperature"
              value={`${beach.airTempC}°C`}
            />
          </li>
          <li>
            <ConditionsTile
              icon={Clock}
              label="Crowd level"
              value={`${beach.crowdPercent}%`}
            />
          </li>
        </ul>
        <p className="mt-4 text-sm text-driftwood">
          Water quality: <strong>{beach.waterQuality}</strong>. Match score in the app:{" "}
          <strong>{beach.match}/100</strong>.
        </p>
      </section>

      {/* Hazards: safety content from the dataset. */}
      {beach.hazards.length > 0 && (
        <section aria-labelledby="hazards-heading" className="mt-10">
          <h2 id="hazards-heading" className="text-2xl font-semibold tracking-tight">
            Hazards and advisories
          </h2>
          <ul className="mt-5 space-y-3">
            {beach.hazards.map((hazard) => (
              <li
                key={hazard.title}
                className="flex gap-3 rounded-2xl border border-coral/40 bg-coral/5 p-4"
              >
                <AlertTriangle
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-coral-deep"
                />
                <div>
                  <p className="font-semibold">
                    {hazard.title}
                    <span className="ml-2 rounded-full border border-coral/40 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-coral-deep">
                      {hazard.severity}
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-driftwood">
                    {hazard.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Suitability. */}
      <section aria-labelledby="suitability-heading" className="mt-10">
        <h2 id="suitability-heading" className="text-2xl font-semibold tracking-tight">
          Who it suits
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {beach.suitability.map((entry) => (
            <li
              key={entry.audience}
              className="rounded-full border border-line bg-shell px-4 py-2 text-sm"
            >
              <span className="font-medium">{audienceLabels[entry.audience]}:</span>{" "}
              {entry.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Amenities + golden hour. */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section
          aria-labelledby="amenities-heading"
          className="rounded-2xl border border-line bg-shell p-6"
        >
          <h2 id="amenities-heading" className="text-xl font-semibold">
            Amenities
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {beach.amenities.map((amenity) => (
              <li
                key={amenity}
                className="rounded-full bg-sand-deep px-3 py-1.5 text-sm"
              >
                {amenity}
              </li>
            ))}
          </ul>
          {beach.sunbeds > 0 && (
            <p className="mt-4 text-sm text-driftwood">
              Inventory in the dataset: {beach.sunbeds} sunbeds, {beach.umbrellas}{" "}
              umbrellas across{" "}
              {beach.clubsOpen > 0
                ? `${beach.clubsOpen} beach club${beach.clubsOpen > 1 ? "s" : ""}`
                : "no listed clubs"}
              .
            </p>
          )}
        </section>
        <section
          aria-labelledby="golden-heading"
          className="rounded-2xl border border-line bg-shell p-6"
        >
          <h2 id="golden-heading" className="text-xl font-semibold">
            Golden hour
          </h2>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-driftwood">Golden hour</dt>
              <dd className="font-semibold">{GOLDEN_HOUR.goldenHour}</dd>
            </div>
            <div>
              <dt className="text-driftwood">Light direction</dt>
              <dd className="font-semibold">{beach.goldenDirection}</dd>
            </div>
            <div>
              <dt className="text-driftwood">Sunrise</dt>
              <dd className="font-semibold">{GOLDEN_HOUR.sunrise}</dd>
            </div>
            <div>
              <dt className="text-driftwood">Sunset</dt>
              <dd className="font-semibold">{GOLDEN_HOUR.sunset}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-driftwood">
            Light score in the dataset: {beach.lightScore}/100.
          </p>
        </section>
      </div>

      {/* Time-of-day art strip: real generated beach art from the app. */}
      <section aria-labelledby="day-heading" className="mt-10">
        <h2 id="day-heading" className="text-2xl font-semibold tracking-tight">
          Through the day
        </h2>
        <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {(
            [
              ["morning", "Morning", "Calm water before the crowds"],
              ["midday", "Midday", "Peak sun and the busiest shore"],
              ["golden", "Golden hour", "Warm west-facing light"],
              ["blue", "Blue hour", "Soft light after sunset"],
            ] as const
          ).map(([suffix, label, caption]) => (
            <li key={suffix}>
              <figure className="overflow-hidden rounded-2xl border border-line bg-shell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(`/assets/beaches/${beach.slug}-${suffix}.svg`)}
                  alt={`${label} at ${beach.name}: ${caption}`}
                  width={860}
                  height={344}
                  loading="lazy"
                  className="w-full"
                />
                <figcaption className="px-3 py-2 text-xs text-driftwood">
                  {label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* Vibes + activities. */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Character</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[...beach.vibes, ...beach.activities].map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-shell px-3 py-1.5 text-sm text-driftwood"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      {/* Nearby. */}
      <section aria-labelledby="nearby-heading" className="mt-12">
        <h2 id="nearby-heading" className="text-2xl font-semibold tracking-tight">
          Nearby beaches
        </h2>
        <ul className="mt-5 grid gap-6 sm:grid-cols-2">
          {nearby.map((other) => (
            <li key={other.slug}>
              <BeachCard beach={other} />
            </li>
          ))}
        </ul>
      </section>

      {/* Install CTA. */}
      <section className="mt-14 rounded-2xl bg-marine p-8 text-sand">
        <h2 className="text-2xl font-semibold tracking-tight">
          See live conditions in the app
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand/80">
          This page is a snapshot. The app refreshes {beach.name}&apos;s conditions from
          its providers and adds booking, trips and alerts.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20preview%20access`}
          className="mt-5 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
        >
          Request preview access
        </a>
      </section>
    </div>
  );
}
