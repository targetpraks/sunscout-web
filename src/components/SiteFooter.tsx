import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, DATA_NOTE_LONG } from "@/config/site";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/beaches", label: "Beaches" },
      { href: "/pricing", label: "Pricing" },
      { href: "/data", label: "Data and methods" },
    ],
  },
  {
    heading: "For business",
    links: [
      { href: "/merchants", label: "For merchants" },
      { href: "/coordinators", label: "For coordinators" },
      { href: "/institutions", label: "For institutions" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/data-retention", label: "Data retention" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sand-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <span
              aria-hidden="true"
              className="inline-block size-4 rounded-full bg-teal"
            />
            {SITE_NAME}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-driftwood">
            {SITE_TAGLINE}
          </p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-driftwood">
            {DATA_NOTE_LONG}
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <p className="text-sm font-semibold">{column.heading}</p>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-driftwood transition-colors hover:text-marine"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-driftwood sm:px-6">
          {SITE_NAME} is in private preview. This site is a working preview, not a
          public launch. Built by INFX Labs.
        </p>
      </div>
    </footer>
  );
}
