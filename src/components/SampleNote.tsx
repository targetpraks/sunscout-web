import { DATA_NOTE, DATA_NOTE_LONG } from "@/config/site";

// Honest-data label. Rendered beside every figure derived from the seeded
// sample dataset. Never present these numbers as live readings.
export default function SampleNote({ compact = true }: { compact?: boolean }) {
  if (compact) {
    return (
      <span
        title={DATA_NOTE_LONG}
        className="inline-flex items-center rounded-full border border-line bg-shell px-2 py-0.5 text-[11px] font-medium text-driftwood"
      >
        {DATA_NOTE}
      </span>
    );
  }
  return (
    <p className="rounded-2xl border border-line bg-shell px-4 py-3 text-sm leading-relaxed text-driftwood">
      {DATA_NOTE_LONG}{" "}
      <a href="/data" className="font-medium text-teal underline underline-offset-2">
        How we handle data
      </a>
    </p>
  );
}
