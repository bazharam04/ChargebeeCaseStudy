import { opportunityRestatement, scopePhases } from "@/lib/content";

export default function ScopePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Scope</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">{opportunityRestatement}</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-zinc-900">Scope by Stage</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {scopePhases.map((phase) => (
            <div key={phase.phase} className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold text-zinc-900">{phase.phase}</h3>
              <p className="mt-2 text-sm text-zinc-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
