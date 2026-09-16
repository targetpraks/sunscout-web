import type { Metadata } from "next";
import { FileDown, Database, Landmark, Lock } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "For institutions - beach data for municipalities and tourism boards",
  description:
    "Anonymised beach analytics for municipalities and tourism boards: dashboards, exports, embeds and contractual data access with clear data-residency and privacy terms.",
};

const features = [
  {
    title: "Portfolio dashboards",
    body: "Crowd trends, condition histories and hazard records across every beach you monitor, in one view.",
    icon: Landmark,
  },
  {
    title: "Exports and embeds",
    body: "Structured exports for reporting, plus embeddable live cards for your own tourism website.",
    icon: FileDown,
  },
  {
    title: "API access",
    body: "Contractual read access to the anonymised dataset, with per-contract export quotas.",
    icon: Database,
  },
  {
    title: "Privacy by design",
    body: "Crowd signals are aggregates, never individuals. No background location, no personal tracking, POPIA and GDPR alignment.",
    icon: Lock,
  },
];

export default function InstitutionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">
          For municipalities, tourism boards and environmental teams
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          The beach data your council actually needs
        </h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          SunScout aggregates what is happening at your beaches: crowd levels,
          conditions, hazards and amenity status. Institutional contracts package it as
          dashboards, exports and embeds.
        </p>
      </header>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-2xl border border-line bg-shell p-6"
          >
            <feature.icon aria-hidden="true" className="size-6 text-teal" />
            <h2 className="mt-3 text-lg font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-driftwood">
              {feature.body}
            </p>
          </li>
        ))}
      </ul>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-line bg-shell p-6">
          <h2 className="text-lg font-semibold">Crowd trends</h2>
          <p className="mt-2 text-sm leading-relaxed text-driftwood">
            Anonymised, aggregated crowd-density signals per beach and hour, built for
            capacity planning and seasonal reporting.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-shell p-6">
          <h2 className="text-lg font-semibold">Condition records</h2>
          <p className="mt-2 text-sm leading-relaxed text-driftwood">
            Rolling sea-state and water-quality records with sources and freshness
            states, suitable for environmental monitoring briefs.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-shell p-6">
          <h2 className="text-lg font-semibold">Hazard histories</h2>
          <p className="mt-2 text-sm leading-relaxed text-driftwood">
            Advisory and warning records per beach, useful for lifeguard planning and
            public-safety reporting.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-marine p-8 text-sand">
        <h2 className="text-2xl font-semibold tracking-tight">
          Request an institutional dossier
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand/80">
          Tell us your remit, the beaches in scope, and the reporting you owe your
          stakeholders. We will respond with scope and a quote. Quote-based annual
          contracts, proposed band.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20institutional%20dossier%20request`}
          className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
        >
          Request the dossier
        </a>
      </section>
    </div>
  );
}
