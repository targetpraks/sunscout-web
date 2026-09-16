import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms for using the SunScout website and app during private preview: illustrative data, no guarantees on beach safety, fair-use limits on commercial reuse.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Terms of use</h1>
        <p className="mt-4 text-sm text-driftwood">
          Last updated 16 September 2026. {SITE_NAME} is in private preview; these terms
          cover the website and the preview app.
        </p>
      </header>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-driftwood">
        <section>
          <h2 className="text-xl font-semibold text-marine">Preview status</h2>
          <p className="mt-2">
            {SITE_NAME} is unfinished software in private preview. Features described on
            this website may not be live yet, and pricing shown is proposed, not
            charged. The website renders a build-time snapshot of sample data; figures
            are labelled accordingly and are not live readings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">No safety guarantee</h2>
          <p className="mt-2">
            Conditions, hazards and crowd levels are informational estimates, not safety
            advice. Always obey lifeguards, posted signage and local authority guidance.
            Sea conditions change quickly; a reading that was accurate at observation
            time may be wrong by the time you swim. Never rely on {SITE_NAME} as your
            only safety input.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Booking and payments</h2>
          <p className="mt-2">
            Where booking is available in pilot markets, bookings are made in the app,
            prepaid, and confirmed with a QR code. Cancellation is free until 24 hours
            before the booking; inside 24 hours a 50 percent refund applies, subject to
            final legal review. Merchant pilot terms are stated on the merchants page
            and confirmed in writing before onboarding.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Fair use of content</h2>
          <p className="mt-2">
            Beach illustrations, copy and page content on this site are created by INFX
            Labs for {SITE_NAME}. You may link to any page freely. Republishing dataset
            content commercially requires permission; institutional licensing is handled
            on the institutions page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Ranking integrity</h2>
          <p className="mt-2">
            Paid placement and takeovers, where offered, never alter the Beach Pulse
            ranking or live condition data. Sponsored surfaces are labelled. Match
            scores are computed the same way for everyone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-marine">Contact</h2>
          <p className="mt-2">
            Questions about these terms:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20terms%20question`}
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
