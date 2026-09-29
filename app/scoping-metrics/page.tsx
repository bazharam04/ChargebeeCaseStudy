import { opportunityRestatement, scopePhases, successMetrics } from "@/lib/content";

export default function ScopingMetricsPage() {
  const leading = successMetrics.filter((m) => m.type === "Leading");
  const lagging = successMetrics.filter((m) => m.type === "Lagging");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Scoping & Metrics</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">{opportunityRestatement}</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-zinc-900">V1 Scope — Crawl / Walk / Run</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {scopePhases.map((phase) => (
            <div key={phase.phase} className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold text-zinc-900">{phase.phase}</h3>
              <p className="mt-2 text-sm text-zinc-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-zinc-900">Success Metrics</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-900">Leading</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-blue-800">
              {leading.map((m, i) => (
                <li key={i}>{m.metric}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-900">Lagging</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-emerald-800">
              {lagging.map((m, i) => (
                <li key={i}>{m.metric}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
