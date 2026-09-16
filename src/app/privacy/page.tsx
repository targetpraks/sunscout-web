import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How SunScout handles personal data: minimal collection, no background location, no third-party trackers, honest retention windows.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Privacy policy</h1>
        <p className="mt-4 text-sm text-driftwood">
          Last updated 16 September 2026. {SITE_NAME} is in private preview; this policy
          states current practice, not future intentions.
        </p>
      </header>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-driftwood">
        <section>
          <h2 className="text-xl font-semibold text-marine">
            What this website collects
          </h2>
          <p className="mt-2">
            Nothing. This website is fully static. It sets no cookies, runs no
            third-party scripts and embeds no trackers. Enquiry links open your own
            email client; nothing is submitted to a server on this site. When we add
            analytics it will be self-hosted, aggregate and disclosed here before it
            goes live.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">What the app collects</h2>
          <p className="mt-2">
            The SunScout app collects the minimum needed to work: an account identifier,
            your saved beaches, trips and bookings, and coarse crowd signals from
            check-ins. Location is requested only for explicit nearby search, check-in
            or sighting capture, and is discarded after use. There is no background
            location collection.
          </p>
          <p className="mt-2">
            Crowd levels shown in the app and on this site are aggregates, never
            individual traces. People follow beaches on SunScout; there is no
            person-following and no personal feed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Retention and deletion</h2>
          <p className="mt-2">
            Each data class has a stated retention window, published in full on the data
            retention page. Account deletion is honoured within a 30-day grace window,
            after which user-owned records are purged; only legally required financial
            records and deletion proofs are kept.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Your rights</h2>
          <p className="mt-2">
            You may request access, correction, export or erasure of your data at any
            time. Requests are handled under GDPR for EU users and POPIA for South
            African users, whichever applies to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Contact</h2>
          <p className="mt-2">
            Privacy questions and data requests:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20privacy%20request`}
              className="font-medium text-teal underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
