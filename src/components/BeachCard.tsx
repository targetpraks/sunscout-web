import Link from "next/link";
import { withBasePath } from "@/config/site";
import type { Beach } from "@/lib/beaches";

export default function BeachCard({ beach }: { beach: Beach }) {
  return (
    <Link
      href={`/beaches/${beach.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-shell transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath(`/assets/beaches/${beach.slug}.svg`)}
          alt={`Illustration of ${beach.name}, ${beach.region}, Portugal`}
          width={860}
          height={344}
          loading="lazy"
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-driftwood">
          {beach.region}, Portugal
        </p>
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
