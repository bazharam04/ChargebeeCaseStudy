import { bucketCompetitors, competitiveFinding, gapBuckets } from "@/lib/content";

export default function CompetitorsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          4. How Competitors Solve These Gaps
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-500">
          Read through the lens of the 5 gap buckets from Task 3 — who wins where, and why.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
              <th className="w-72 px-4 py-3 font-medium">Bucket</th>
              <th className="w-56 px-4 py-3 font-medium">Best Competitor(s)</th>
              <th className="px-4 py-3 font-medium">Key Reason</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {bucketCompetitors.map((row) => {
              const bucket = gapBuckets.find((b) => b.id === row.bucketId)!;
              return (
                <tr key={row.bucketId} className="align-top hover:bg-zinc-50">
                  <td className="px-4 py-4">
                    <span className="font-medium text-zinc-900">
                      B{bucket.id} · {bucket.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-medium text-zinc-800">
                    {row.bestCompetitors}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">{row.keyReason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="font-semibold text-amber-900">Notable finding</h2>
        <p className="mt-2 text-sm text-amber-800">{competitiveFinding}</p>
      </div>
    </div>
  );
}
