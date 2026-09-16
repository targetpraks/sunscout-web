import type { Metadata } from "next";
import { SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Data retention schedule",
  description:
    "The published retention window for every SunScout data class: profiles, check-ins, bookings, conditions, analytics and audit records.",
};

type Row = {
  domain: string;
  retention: string;
  action: string;
};

// Transcribed from the app repository's docs/DATA_RETENTION.md
// (pre-beta baseline, PRD section 16: "Data retention schedule before beta").
const rows: Row[] = [
  {
    domain: "User profile",
    retention: "While active, plus 30 days after deletion request",
    action: "Hard delete after the grace window",
  },
  {
    domain: "Account deletion request",
    retention: "6 years (legal proof of erasure)",
    action: "Archive to cold storage, then purge",
  },
  {
    domain: "Saved beaches",
    retention: "While active, plus 30 days",
    action: "Cascade delete with user",
  },
  {
    domain: "Trips",
    retention: "While active, plus 90 days after trip end",
    action: "Keep beach-link metadata, drop user link",
  },
  {
    domain: "Check-ins",
    retention: "24 months",
    action: "Aggregate into crowd density, drop user link",
  },
  {
    domain: "Check-in photos",
    retention: "12 months",
    action: "Delete object and column",
  },
  {
    domain: "Gallery photos",
    retention: "Indefinite (provider or merchant owned)",
    action: "Removed on merchant or beach deletion",
  },
  {
    domain: "Bookings",
    retention: "7 years (financial record)",
    action: "Anonymise user link after 7 years",
  },
  {
    domain: "Settlements",
    retention: "7 years (financial record)",
    action: "Anonymise after 7 years",
  },
  {
    domain: "QR tokens",
    retention: "Expire 7 days after booking end",
    action: "Redemption rejects expired tokens",
  },
  {
    domain: "Conditions",
    retention: "90 days raw, indefinitely aggregated",
    action: "Drop raw rows older than 90 days",
  },
  {
    domain: "Tide readings",
    retention: "30 days",
    action: "Purged daily",
  },
  {
    domain: "Crowd forecasts",
    retention: "7 days",
    action: "Purged daily",
  },
  {
    domain: "Hazard alerts",
    retention: "While active, plus 30 days after expiry",
    action: "Purged",
  },
  {
    domain: "Vibe votes",
    retention: "While active, plus 12 months",
    action: "Drop user link after 12 months",
  },
  {
    domain: "Analytics events",
    retention: "24 months",
    action: "Drop user link after 12 months",
  },
  {
    domain: "Audit log",
    retention: "24 months",
    action: "Purged at 24 months",
  },
  {
    domain: "Notifications",
    retention: "90 days",
    action: "Purged",
  },
  {
    domain: "Institution exports",
    retention: "Rolling 12 months of usage",
    action: "Counter resets on contract renewal",
  },
];

export default function DataRetentionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">
          Data retention schedule
        </h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          Every {SITE_NAME} data class has a published retention window and an action at
          expiry. This is the pre-beta baseline, mirrored from the app&apos;s
          engineering documentation.
        </p>
      </header>

      <section aria-labelledby="table-heading" className="mt-10">
        <h2 id="table-heading" className="text-xl font-semibold">
          Retention by data class
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Data class
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Retention
                </th>
                <th scope="col" className="py-3 font-semibold">
                  Action at expiry
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.domain} className="border-b border-line/60">
                  <td className="py-3 pr-4 font-medium text-marine">{row.domain}</td>
                  <td className="py-3 pr-4 text-driftwood">{row.retention}</td>
                  <td className="py-3 text-driftwood">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-driftwood">
        <div>
          <h2 className="text-xl font-semibold text-marine">Location minimisation</h2>
          <p className="mt-2">
            Precise location is never stored. Check-ins persist only a coarse area
            bucket. There is no background location collection: location is requested
            for explicit nearby search, check-in or sighting capture, and discarded
            after use.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-marine">Erasure</h2>
          <p className="mt-2">
            Account deletion soft-deletes the user, records a deletion request and emits
            an audit event. A scheduled purge job hard-deletes user-owned rows after the
            30-day grace window, retaining only legally required financial and
            deletion-proof records.
          </p>
        </div>
      </section>
    </div>
  );
}
