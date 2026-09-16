import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        This page drifted out
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-driftwood">
        The address does not match a page on this site. The beach index is the best
        place to restart.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/beaches"
          className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Browse beaches
        </Link>
        <Link
          href="/"
          className="rounded-full border border-marine/20 px-6 py-3 text-sm font-semibold text-marine transition-colors hover:bg-marine/5"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
