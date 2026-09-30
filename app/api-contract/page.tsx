import { apiBusinessRules, apiContractIntro, apiEndpoints } from "@/lib/content";

export default function ApiContractPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          API Contract (High-Level Draft)
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">{apiContractIntro}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {apiEndpoints.map((api) => (
          <div key={api.name} className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-zinc-900">{api.name}</h2>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                {api.phase}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{api.purpose}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-blue-200 bg-blue-50 p-3">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-900">
                  App sends
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-blue-800">
                  {api.sends.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-900">
                  Service returns
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-emerald-800">
                  {api.returns.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="font-semibold text-amber-900">Business rules the contract must state</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-amber-800">
          {apiBusinessRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
