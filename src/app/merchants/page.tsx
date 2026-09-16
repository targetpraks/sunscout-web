import type { Metadata } from "next";
import { QrCode, CalendarCheck, BarChart3, ShieldCheck } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "For merchants - list your beach club on SunScout",
  description:
    "SunScout gives beach clubs live inventory, prepaid bookings and QR redemption. Pilot terms: 10 percent commission on prepaid bookings, zero percent for the first 90 days.",
};

const features = [
  {
    title: "Live inventory",
    body: "Sunbeds and umbrellas shown with real availability on the beach page, so guests book what is actually free.",
    icon: BarChart3,
  },
  {
    title: "Prepaid bookings",
    body: "Guests pay in the app before they arrive. Bookings produce a confirmation and an offline-readable QR code.",
    icon: CalendarCheck,
  },
  {
    title: "QR redemption",
    body: "Scan on arrival, no paper vouchers. Redemption and settlement records are kept per booking.",
    icon: QrCode,
  },
  {
    title: "Fair ranking",
    body: "Paid placement never alters the Beach Pulse ranking or live condition data. Sponsored surfaces are labelled.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    q: "What does it cost?",
    a: "Pilot terms: 10 percent commission on prepaid bookings, and 0 percent for the first 90 days for each pilot merchant. Standard terms are confirmed at the end of the pilot.",
  },
  {
    q: "How do settlements work?",
    a: "Each booking produces a settlement record with gross, commission and net amounts, redeemable and auditable in the merchant dashboard.",
  },
  {
    q: "When can I join?",
    a: "Pilot onboarding opens market by market as booking rolls out. Enquire now and you will be contacted when your beach opens.",
  },
];

export default function MerchantsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">
          For beach clubs and activity operators
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Sell the beach day while it is happening
        </h1>
        <p className="mt-4 text-base leading-relaxed text-driftwood">
          Guests arrive at your beach already decided. SunScout shows your inventory on
          the beach page, takes prepaid bookings, and redeems them by QR code on
          arrival.
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

      <section
        aria-labelledby="terms-heading"
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-2xl border border-line bg-shell p-8">
          <h2 id="terms-heading" className="text-2xl font-semibold">
            Pilot terms
          </h2>
          <p className="mt-4 text-4xl font-semibold">
            10%
            <span className="text-base font-normal text-driftwood">
              {" "}
              on prepaid bookings
            </span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-driftwood">
            Zero percent for the first 90 days for each pilot merchant. These are pilot
            terms, labelled as such, and confirmed in writing before onboarding.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-shell p-8">
          <h2 className="text-2xl font-semibold">Questions</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-sm font-semibold">{faq.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-driftwood">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-marine p-8 text-sand">
        <h2 className="text-2xl font-semibold tracking-tight">Join the pilot</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand/80">
          Send your beach club or activity business name, the beach you operate on, and
          what you rent or sell. Enquiries are reviewed as pilot markets open.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SunScout%20merchant%20pilot%20enquiry`}
          className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-marine transition-transform duration-200 hover:-translate-y-0.5"
        >
          Enquire about the pilot
        </a>
      </section>
    </div>
  );
}
