import type { Metadata } from "next";
import Link from "next/link";
import { withBasePath } from "@/config/site";
import SampleNote from "@/components/SampleNote";

export const metadata: Metadata = {
  title: "Data and methods - how SunScout sources beach conditions",
  description:
    "How SunScout collects, labels and refreshes beach conditions: sources, provenance, freshness states and the honest-degradation policy behind every number shown.",
};

const sources = [
  {
    title: "Beach conditions",
    body: "Sea temperature, wave height, UV index and crowd levels are recorded per beach with a source, an observed time and a received time. Where a shore sensor feed exists the reading is marked as sensor-backed; otherwise the entry is marked as provider data.",
  },
  {
    title: "Tide and daylight",
    body: "Tide readings and golden-hour windows are computed per beach timezone from provider data, and shown with the date they apply to.",
  },
  {
    title: "Amenities and hazards",
    body: "Amenity lists carry a verification date and source. Hazard advisories carry a severity level and a plain-language detail line. Both degrade visibly when stale.",
  },
  {
    title: "Crowd signals",
    body: "Crowd levels are aggregates: forecasts from historical patterns plus anonymised check-in signals. They are estimates, never headcounts, and are labelled as such in the app.",
  },
];

export default function DataPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Data and methods</h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          The beach is a data product, not a postcard. Every number SunScout shows
          carries a source and a freshness state, and when a reading is delayed the app
          says so instead of smoothing it over.
        </p>
      </header>

      <section aria-labelledby="sources-heading" className="mt-10">
        <h2 id="sources-heading" className="text-2xl font-semibold tracking-tight">
          What we track and how
        </h2>
        <dl className="mt-6 space-y-6">
          {sources.map((source) => (
            <div key={source.title}>
              <dt className="text-lg font-semibold">{source.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-driftwood">
                {source.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="freshness-heading" className="mt-10">
        <h2 id="freshness-heading" className="text-2xl font-semibold tracking-tight">
          Freshness and provenance
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-driftwood">
          Each condition reading records four facts: when it was observed, when it was
          received, which source produced it, and what state it is in (fresh, delayed or
          stale). The app surfaces these facts on the beach detail screen. A stale
          reading is displayed as stale or dropped, never re-dated.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-driftwood">
          Verification claims are made conservatively. No production claim of sensor
          verification is made where real data rights do not exist.
        </p>
      </section>

      <section aria-labelledby="website-heading" className="mt-10">
        <h2 id="website-heading" className="text-2xl font-semibold tracking-tight">
          What this website shows
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-driftwood">
          This website renders a build-time snapshot of the app dataset. The app
          refreshes from its providers on a short cycle; these pages do not refresh
          between builds. Every figure here is labelled as sample data for that reason.
        </p>
        <div className="mt-4">
          <SampleNote compact={false} />
        </div>
      </section>

      <section aria-labelledby="privacy-heading" className="mt-10">
        <h2 id="privacy-heading" className="text-2xl font-semibold tracking-tight">
          Personal data
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-driftwood">
          The app collects no background location. Location is requested only for
          explicit nearby search, check-in or sighting capture, and discarded after use.
          People follow beaches on SunScout; there is no person-following, no personal
          feed, and no sale of ranking positions.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link
              href="/privacy"
              className="font-medium text-teal underline underline-offset-2"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              href="/data-retention"
              className="font-medium text-teal underline underline-offset-2"
            >
              Data retention schedule
            </Link>
          </li>
        </ul>
      </section>

      <figure className="mt-12 overflow-hidden rounded-2xl border border-line bg-shell">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/assets/beaches/praia-do-camilo-golden.svg")}
          alt="Golden-hour illustration of Praia do Camilo, Lagos, Portugal"
          width={860}
          height={344}
          loading="lazy"
          className="w-full"
        />
        <figcaption className="px-4 py-3 text-xs text-driftwood">
          Beach art is generated per beach from the app dataset, one variant per time of
          day.
        </figcaption>
      </figure>
    </div>
  );
}
