import { costOfInactionNote, roadmapHorizons, valueHorizons, whyNowNote } from "@/lib/content";

export default function ValuePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          6. Value Story for Organizational Buy-In
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-500">
          What this roadmap is worth, framed by value type per horizon — not fabricated
          revenue/TAM figures, since the research doesn&apos;t support that precision.
        </p>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <h2 className="font-semibold text-blue-900">Why now</h2>
        <p className="mt-2 text-sm text-blue-800">{whyNowNote}</p>
      </div>

      <div className="flex flex-col gap-4">
        {valueHorizons.map((v) => {
          const horizon = roadmapHorizons.find((h) => h.id === v.horizonId)!;
          return (
            <article key={v.horizonId} className="rounded-lg border border-zinc-200 bg-white p-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <h2 className="font-semibold text-zinc-900">{horizon.name}</h2>
                <span className="text-xs font-medium text-zinc-500">{v.investment}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-zinc-800">{v.valueType}</p>
              <p className="mt-2 text-sm text-zinc-600">
                <span className="font-medium text-zinc-800">Unlocks: </span>
                {v.unlocks}
              </p>
              <p className="mt-2 text-sm text-zinc-600">{v.narrative}</p>
            </article>
          );
        })}
      </div>

      <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
        <h2 className="font-semibold text-rose-900">Cost of inaction</h2>
        <p className="mt-2 text-sm text-rose-800">{costOfInactionNote}</p>
      </div>
    </div>
  );
}
