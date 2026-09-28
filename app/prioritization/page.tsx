import { gapBuckets, riceScores, roadmapHorizons } from "@/lib/content";

export default function PrioritizationPage() {
  const maxScore = riceScores[0].score;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          5. Prioritized Roadmap
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-500">
          The 5 gap buckets from Task 3, RICE-scored using the competitive urgency signal from
          Task 4, sequenced into roadmap horizons.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-zinc-900">RICE Scoring</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-500">
          Each bucket scored on Reach (1-10), Impact (0.25-3), Confidence (%), and Effort
          (person-months). RICE = (Reach × Impact × Confidence) / Effort.
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-4 py-3 font-medium">Bucket</th>
                <th className="px-4 py-3 font-medium">Reach</th>
                <th className="px-4 py-3 font-medium">Impact</th>
                <th className="px-4 py-3 font-medium">Confidence</th>
                <th className="px-4 py-3 font-medium">Effort (mo)</th>
                <th className="px-4 py-3 font-medium">RICE Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {riceScores.map((row, index) => {
                const bucket = gapBuckets.find((b) => b.id === row.bucketId)!;
                return (
                  <tr key={row.bucketId} className="align-top hover:bg-zinc-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-zinc-900">
                          B{bucket.id} · {bucket.name}
                        </span>
                        {index === 0 && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                            Top Priority
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-zinc-600" title={row.reachRationale}>
                      {row.reach}
                    </td>
                    <td className="px-4 py-4 text-zinc-600" title={row.impactRationale}>
                      {row.impact}
                    </td>
                    <td className="px-4 py-4 text-zinc-600" title={row.confidenceRationale}>
                      {Math.round(row.confidence * 100)}%
                    </td>
                    <td className="px-4 py-4 text-zinc-600" title={row.effortRationale}>
                      {row.effort}
                    </td>
                    <td className="px-4 py-4 font-semibold text-zinc-900">{row.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-5">
          {riceScores.map((row) => {
            const bucket = gapBuckets.find((b) => b.id === row.bucketId)!;
            const widthPct = Math.max((row.score / maxScore) * 100, 4);
            return (
              <div key={row.bucketId} className="flex items-center gap-3">
                <span className="w-56 shrink-0 text-sm text-zinc-700">
                  B{bucket.id} · {bucket.name}
                </span>
                <div className="h-3 flex-1 rounded-full bg-zinc-100">
                  <div
                    className="h-3 rounded-full bg-indigo-500"
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
                <span className="w-12 shrink-0 text-right text-sm font-medium text-zinc-800">
                  {row.score}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-zinc-900">Roadmap Horizons</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {roadmapHorizons.map((horizon) => (
            <div key={horizon.id} className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold text-zinc-900">{horizon.name}</h3>
              <p className="mt-1 text-xs font-medium text-zinc-500">
                {horizon.bucketIds
                  .map((id) => `B${id} · ${gapBuckets.find((b) => b.id === id)!.name}`)
                  .join(" + ")}
              </p>
              <p className="mt-3 text-sm text-zinc-600">{horizon.rationale}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
