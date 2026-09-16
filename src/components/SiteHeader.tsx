import Link from "next/link";
import { SITE_NAME } from "@/config/site";

const navLinks = [
  { href: "/beaches", label: "Beaches" },
  { href: "/pricing", label: "Pricing" },
  { href: "/data", label: "Data" },
  { href: "/merchants", label: "For merchants" },
  { href: "/institutions", label: "For institutions" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${SITE_NAME} home`}
        >
          <span
            aria-hidden="true"
            className="inline-block size-6 rounded-full bg-teal"
          />
          <span className="text-lg">{SITE_NAME}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-driftwood transition-colors hover:text-marine"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#install"
            className="hidden rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-deep sm:inline-flex"
          >
            Get the app
          </Link>

          <details className="relative lg:hidden">
            <summary
              className="flex cursor-pointer list-none items-center rounded-lg border border-line px-3 py-2 text-sm font-semibold"
              aria-label="Open menu"
            >
              Menu
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-line bg-shell p-2 shadow-lg"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-marine hover:bg-sand-deep"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#install"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-teal hover:bg-sand-deep"
              >
                Get the app
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
