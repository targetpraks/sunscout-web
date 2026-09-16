import Link from "next/link";
import { withBasePath } from "@/config/site";
import type { Beach } from "@/lib/beaches";

// Time-of-day art variants drawn from the app's illustration set (the same
// dataset that powers the beach pages). The morning variant is deliberately
// absent: it is a near-duplicate of the base art and adds no variety, so the
// homepage rotates only the three visually distinct moods.
const TIME_LABELS = {
  golden: "Golden hour",
  blue: "Blue hour",
  midday: "Midday",
} as const;

export type TimeOfDay = keyof typeof TIME_LABELS;

export default function ShowcaseCard({
  beach,
  time,
}: {
  beach: Beach;
  time: TimeOfDay;
}) {
  return (
    <Link
      href={`/beaches/${beach.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-shell transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath(`/assets/beaches/${beach.slug}-${time}.svg`)}
          alt={`Illustration of ${beach.name}, ${beach.region}, Portugal, in ${TIME_LABELS[time].toLowerCase()} light`}
          width={860}
          height={344}
          loading="lazy"
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-xs font-medium uppercase tracking-wide text-driftwood">
            {beach.region}, Portugal
          </p>
          <p className="shrink-0 text-xs font-medium text-coral-deep">
            {TIME_LABELS[time]}
          </p>
        </div>
        <h3 className="wrap-anywhere text-lg font-semibold leading-snug">
          {beach.name}
        </h3>
        <p className="text-sm leading-relaxed text-driftwood">{beach.decision}</p>
        <dl className="mt-2 grid grid-cols-3 gap-2 border-t border-line pt-3 text-center text-xs text-driftwood">
          <div>
            <dt className="sr-only">Sea temperature</dt>
            <dd>
              <span className="font-semibold text-marine">{beach.seaTempC}°C</span> sea
            </dd>
          </div>
          <div>
            <dt className="sr-only">Waves</dt>
            <dd>
              <span className="font-semibold text-marine">{beach.waveHeightM} m</span>{" "}
              waves
            </dd>
          </div>
          <div>
            <dt className="sr-only">Crowd level</dt>
            <dd>
              <span className="font-semibold text-marine">{beach.crowdPercent}%</span>{" "}
              crowd
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
