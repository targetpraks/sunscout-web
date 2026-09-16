import type { Metadata } from "next";
import { Megaphone, CalendarRange, MapPinned, Flag } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "For coordinators - publish beach events and takeovers",
  description:
    "SunScout gives event coordinators a direct channel to people already at or heading to the beach: event publishing, beach pages and labelled takeovers.",
};

const features = [
  {
    title: "Publish to the beach",
    body: "Events appear on the beach page and in the app's events feed, reaching the people already planning that beach, not a general city audience.",
    icon: Megaphone,
  },
  {
    title: "Scheduled visibility",
    body: "Publish ahead with a start and end window. The event surfaces while it is relevant and drops off cleanly afterwards.",
    icon: CalendarRange,
  },
  {
    title: "Beach-scoped reach",
    body: "SunScout audiences follow beaches, not people. A surf comp at Praia da Batata reaches everyone tracking that beach.",
    icon: MapPinned,
  },
  {
    title: "Labelled takeovers",
    body: "Single-beach or regional takeovers are purchasable and always labelled. Takeovers own the branding layer, never the data or the ranking.",
    icon: Flag,
  },
];

export default function CoordinatorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">
          For event coordinators
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Reach the beach before anyone leaves home
        </h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          Beach parties, surf competitions, triathlons and takeovers: publish to the
          people for whom your event is actually relevant, with clear limits on what
          paid placement can and cannot touch.
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

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-shell p-8">
          <h2 className="text-2xl font-semibold">What coordinators can do</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-driftwood">
            <li>Publish events with dates, times and descriptions to beach pages.</li>
            <li>
              Buy labelled takeover placement: single beach, full island or region.
            </li>
            <li>Track how the event performs in the app&apos;s events feed.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-shell p-8">
          <h2 className="text-2xl font-semibold">What coordinators cannot do</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-driftwood">
            <li>Edit live conditions, water quality or hazard data.</li>
            <li>Alter the Beach Pulse ranking, directly or through payment.</li>
            <li>
              Present a takeover as organic content: paid placement is always labelled.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-marine p-8 text-sand">
        <h2 className="text-2xl font-semibold tracking-tight">Plan an event with us</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand/80">
          Send the event, the beach, the dates and what you need: publishing, takeover
          placement or both. Coordinator tools roll out with the pilot markets.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20coordinator%20enquiry`}
          className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
        >
          Enquire about events
        </a>
      </section>
    </div>
  );
}
