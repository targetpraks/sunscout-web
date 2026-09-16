import type { Metadata } from "next";
import { beaches, beachesByRegion } from "@/lib/beaches";
import BeachCard from "@/components/BeachCard";
import SampleNote from "@/components/SampleNote";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algarve beaches - conditions, amenities and best time to go",
  description:
    "Every SunScout beach in the Algarve launch set: live-style condition snapshots, water quality, amenities, hazards and suitability for families, couples and parties.",
};

export default function BeachesPage() {
  const byRegion = beachesByRegion();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Algarve beaches</h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          The launch set: {beaches.length} beaches from the app dataset, each with its
          condition snapshot, water quality, amenities, hazards and a match score. The
          same pages expand as the app adds beaches.
        </p>
        <div className="mt-4">
          <SampleNote compact={false} />
        </div>
      </header>

      <div className="mt-12 space-y-14">
        {byRegion.map((group) => (
          <section key={group.region} aria-labelledby={`region-${group.region}`}>
            <h2
              id={`region-${group.region}`}
              className="text-2xl font-semibold tracking-tight"
            >
              {group.region}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.beaches.map((beach) => (
                <li key={beach.slug}>
                  <BeachCard beach={beach} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-line bg-shell p-8">
        <h2 className="text-xl font-semibold">Why a page per beach?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-driftwood">
          Beach searches are specific: conditions at one beach, the best time to go,
          whether it suits a family. One page per beach answers those questions with the
          app&apos;s data instead of a generic travel blurb.
        </p>
        <Link
          href="/data"
          className="mt-4 inline-block text-sm font-semibold text-teal underline-offset-4 hover:underline"
        >
          How this data is sourced
        </Link>
      </section>
    </div>
  );
}
