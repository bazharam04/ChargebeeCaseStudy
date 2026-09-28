import {
  gapAnalysisSummary,
  gapBuckets,
  noMaterialGapNote,
  noMaterialGapSourceLabel,
  noMaterialGapSourceUrl,
} from "@/lib/content";

export default function GapsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          3. Gaps in Chargebee&apos;s Current Subscription Model
        </h1>
        <p className="mt-2 max-w-3xl text-zinc-600">
          Combines usage-based-billing gaps (UBB) with core subscription/billing constraints
          (CB) found across Chargebee&apos;s public API &amp; user docs, grouped into 5 themed
          buckets rather than one flat list.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {gapBuckets.map((bucket) => (
          <article key={bucket.id} className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex items-baseline gap-2">
              <span>{bucket.emoji}</span>
              <h2 className="font-semibold text-zinc-900">
                Bucket {bucket.id}: {bucket.name}
              </h2>
            </div>
            <p className="mt-1 text-sm italic text-zinc-500">{bucket.tagline}</p>

            <div className="mt-4 overflow-x-auto rounded-md border border-zinc-100">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                    <th className="w-20 px-3 py-2 font-medium">#</th>
                    <th className="px-3 py-2 font-medium">Gap</th>
                    <th className="w-72 px-3 py-2 font-medium">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {bucket.gaps.map((gap) => (
                    <tr key={gap.id} className="align-top">
                      <td className="px-3 py-3">
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-700">
                          {gap.id}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-zinc-800">{gap.title}</td>
                      <td className="px-3 py-3 text-zinc-600">{gap.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {bucket.rootCause && (
              <p className="mt-3 text-sm text-zinc-600">
                <span className="font-medium text-zinc-800">Root cause: </span>
                {bucket.rootCause}
              </p>
            )}
          </article>
        ))}

        <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="font-semibold text-emerald-900">No material gap</h2>
          <p className="mt-2 text-sm text-emerald-800">{noMaterialGapNote}</p>
          <a
            href={noMaterialGapSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs font-medium text-blue-600 hover:underline"
          >
            {noMaterialGapSourceLabel}
          </a>
        </article>

        <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="font-semibold text-zinc-900">TL;DR</h2>
          <p className="mt-2 text-sm text-zinc-700">{gapAnalysisSummary}</p>
        </article>
      </div>
    </div>
  );
}
