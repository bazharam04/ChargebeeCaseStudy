import { billingMappings, icpSegments } from "@/lib/content";

export default function IcpSegmentsPage() {
  const rows = icpSegments.map((segment) => ({
    segment,
    mapping: billingMappings.find((m) => m.segmentId === segment.id),
  }));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          ICP Segments &amp; Billing Needs
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-500">
          Six segments, each representing a genuinely different billing mechanic, mapped to
          their billing-perspective goal, the billing needs each one demands, and the
          preferred model for serving it.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full min-w-[1000px] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
              <th className="w-10 px-4 py-3 font-medium">#</th>
              <th className="w-72 px-4 py-3 font-medium">Segment</th>
              <th className="px-4 py-3 font-medium">Key Billing Needs</th>
              <th className="w-64 px-4 py-3 font-medium">Preferred Billing Model</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {rows.map(({ segment, mapping }) => (
              <tr key={segment.id} className="align-top hover:bg-zinc-50">
                <td className="px-4 py-4 text-zinc-400">{segment.id}</td>
                <td className="px-4 py-4">
                  <div className="font-medium text-zinc-900">{segment.name}</div>
                  <div className="mt-1 text-xs text-zinc-500">{segment.examples}</div>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-xs text-zinc-500">
                    {segment.goal.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-4 text-zinc-600">
                  <ul className="list-disc space-y-1.5 pl-4">
                    {mapping?.billingNeeds.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-4 font-medium text-zinc-800">
                  <ul className="list-disc space-y-1.5 pl-4">
                    {mapping?.preferredModel.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
