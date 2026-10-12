import {
  entryTiers,
  implementationChoiceNote,
  implementationFlowSteps,
  implementationOpenDecisions,
  implementationRisks,
  implementationSequenceNote,
  implementationStages,
  ubb2Components,
  ubb2LearningGates,
  ubb2Pipeline,
  ubb2PipelineOutputs,
} from "@/lib/content";

export default function ImplementationApproachPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          7. Implementation Approach
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">{implementationChoiceNote}</p>
        <p className="mt-3 max-w-3xl rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          {implementationSequenceNote}
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Part A · UBB-2: high-volume event pipeline (built first)
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-zinc-500">
            Modelled on how Metronome&apos;s documented pipeline works (events, billable metrics,
            rating, running balances), adapted to Chargebee&apos;s plans and invoicing.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-5">
          <div className="flex flex-wrap items-center gap-2">
            {ubb2Pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-purple-300 bg-purple-50 px-3 py-2 text-xs font-medium text-purple-900">
                  {step}
                </span>
                {i < ubb2Pipeline.length - 1 && <span className="text-zinc-400">→</span>}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
            Running totals feed
          </p>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {ubb2PipelineOutputs.map((out) => (
              <div key={out.title} className="rounded-md border border-zinc-200 bg-zinc-50 p-3">
                <p className="text-sm font-medium text-zinc-900">{out.title}</p>
                <p className="mt-1 text-xs text-zinc-600">{out.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {ubb2Components.map((c, i) => (
            <div key={c.title} className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="font-medium text-zinc-900">
                {i + 1}. {c.title}
              </p>
              <p className="mt-1 text-sm text-zinc-600">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Gate · What UBB-2 tells UBB-1
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-zinc-500">
            Before UBB-1 is built, the team reviews these readings from the UBB-2 pilot. Each one
            settles a specific UBB-1 decision.
          </p>
        </div>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-4 py-3 font-medium">What UBB-2 shows</th>
                <th className="px-4 py-3 font-medium">UBB-1 decision it informs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {ubb2LearningGates.map((g) => (
                <tr key={g.reading} className="align-top hover:bg-zinc-50">
                  <td className="px-4 py-3 text-zinc-800">{g.reading}</td>
                  <td className="px-4 py-3 text-zinc-600">{g.decision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Part B · UBB-1: real-time enforcement (built on UBB-2)
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-zinc-500">
            One transaction, end to end. The balance is built from the UBB-2 running totals.
          </p>
        </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white p-6">
        <svg viewBox="0 0 760 700" className="mx-auto w-full max-w-3xl">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 0L10 5L0 10z" className="fill-zinc-400" />
            </marker>
          </defs>

          {/* Swimlanes */}
          <rect x="10" y="5" width="350" height="680" rx="8" className="fill-blue-50/40" />
          <rect x="400" y="5" width="350" height="680" rx="8" className="fill-zinc-100/60" />
          <line x1="380" y1="5" x2="380" y2="685" className="stroke-zinc-300" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x="185" y="26" textAnchor="middle" className="fill-zinc-500 text-[11px] font-semibold uppercase tracking-wide">Application</text>
          <text x="575" y="26" textAnchor="middle" className="fill-zinc-500 text-[11px] font-semibold uppercase tracking-wide">Chargebee</text>

          {/* 1. App calls Reserve */}
          <rect x="30" y="45" width="310" height="55" rx="10" className="fill-blue-100 stroke-blue-400" strokeWidth="1.5" />
          <text x="185" y="68" textAnchor="middle" className="fill-blue-900 text-[12px] font-semibold">App calls Reserve</text>
          <text x="185" y="84" textAnchor="middle" className="fill-blue-700 text-[10px]">(estimated usage)</text>

          <line x1="340" y1="72" x2="400" y2="80" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 2. Real-Time Balance Service checks cache */}
          <rect x="410" y="45" width="330" height="60" rx="10" className="fill-blue-100 stroke-blue-400" strokeWidth="1.5" />
          <text x="575" y="68" textAnchor="middle" className="fill-blue-900 text-[12px] font-semibold">Real-Time Balance Service</text>
          <text x="575" y="84" textAnchor="middle" className="fill-blue-700 text-[10px]">reads balance built from UBB-2 totals</text>

          <line x1="575" y1="105" x2="575" y2="135" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Decision diamond */}
          <polygon points="575,135 655,190 575,245 495,190" className="fill-amber-50 stroke-amber-400" strokeWidth="1.5" />
          <text x="575" y="186" textAnchor="middle" className="fill-amber-900 text-[11px] font-semibold">Balance</text>
          <text x="575" y="199" textAnchor="middle" className="fill-amber-900 text-[11px] font-semibold">sufficient?</text>

          {/* Yes -> back to Application: Approved */}
          <line x1="495" y1="190" x2="340" y2="192" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="420" y="182" className="fill-emerald-700 text-[10px] font-medium">Yes</text>

          <rect x="30" y="165" width="310" height="55" rx="10" className="fill-emerald-50 stroke-emerald-400" strokeWidth="1.5" />
          <text x="185" y="188" textAnchor="middle" className="fill-emerald-900 text-[12px] font-semibold">Approved — hold placed</text>
          <text x="185" y="204" textAnchor="middle" className="fill-emerald-700 text-[10px]">App runs the metered action</text>

          {/* No -> back to Application: Denied */}
          <path d="M575,245 L575,277 L340,277" className="stroke-zinc-400" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
          <text x="585" y="262" className="fill-rose-700 text-[10px] font-medium">No</text>

          <rect x="190" y="250" width="150" height="55" rx="10" className="fill-rose-50 stroke-rose-400" strokeWidth="1.5" />
          <text x="265" y="273" textAnchor="middle" className="fill-rose-900 text-[11px] font-semibold">Denied</text>
          <text x="265" y="288" textAnchor="middle" className="fill-rose-700 text-[10px]">app blocks action (stop)</text>

          {/* Continue from Approved down to Confirm, routed left of the Denied box */}
          <path d="M100,220 L100,372 L30,372" className="stroke-zinc-400" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

          {/* 3. App calls Confirm */}
          <rect x="30" y="345" width="310" height="55" rx="10" className="fill-blue-100 stroke-blue-400" strokeWidth="1.5" />
          <text x="185" y="368" textAnchor="middle" className="fill-blue-900 text-[12px] font-semibold">App calls Confirm</text>
          <text x="185" y="384" textAnchor="middle" className="fill-blue-700 text-[10px]">(actual usage)</text>

          <line x1="340" y1="372" x2="400" y2="372" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 4. Chargebee finalizes hold + publishes event */}
          <rect x="410" y="345" width="330" height="55" rx="10" className="fill-blue-100 stroke-blue-400" strokeWidth="1.5" />
          <text x="575" y="368" textAnchor="middle" className="fill-blue-900 text-[12px] font-semibold">Finalize hold on cached balance</text>
          <text x="575" y="384" textAnchor="middle" className="fill-blue-700 text-[10px]">publish usage event (async)</text>

          <line x1="575" y1="400" x2="575" y2="430" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 5. Event Queue */}
          <rect x="410" y="430" width="330" height="55" rx="10" className="fill-purple-50 stroke-purple-400" strokeWidth="1.5" />
          <text x="575" y="462" textAnchor="middle" className="fill-purple-900 text-[12px] font-semibold">UBB-2 Event Stream</text>

          {/* loop back to sync the balance cache */}
          <path d="M410,445 L395,445 L395,75 L410,75" className="stroke-zinc-400" strokeWidth="1.5" strokeDasharray="4 4" fill="none" markerEnd="url(#arrow)" />

          <line x1="575" y1="485" x2="575" y2="515" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 6. Existing rating pipeline */}
          <rect x="410" y="515" width="330" height="60" rx="10" className="fill-zinc-100 stroke-zinc-400" strokeWidth="1.5" />
          <text x="575" y="541" textAnchor="middle" className="fill-zinc-800 text-[12px] font-semibold">Existing Batch Metering &amp; Rating Pipeline</text>
          <text x="575" y="558" textAnchor="middle" className="fill-zinc-600 text-[10px]">unchanged</text>

          <line x1="575" y1="575" x2="575" y2="605" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 7. Invoice */}
          <rect x="410" y="605" width="330" height="55" rx="10" className="fill-zinc-100 stroke-zinc-400" strokeWidth="1.5" />
          <text x="575" y="638" textAnchor="middle" className="fill-zinc-800 text-[12px] font-semibold">Invoice generated at cycle end</text>
        </svg>
      </div>


        <div className="flex flex-col gap-3">
          {implementationFlowSteps.map((step) => (
            <div key={step.id} className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
                {step.id}
              </span>
              <div>
                <p className="font-medium text-zinc-900">{step.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-zinc-900">Stages</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {implementationStages.map((stage) => (
            <div
              key={stage.name}
              className={`rounded-lg border p-4 ${
                stage.name.startsWith("Gate")
                  ? "border-amber-200 bg-amber-50"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <p className="font-medium text-zinc-900">{stage.name}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-600">
                {stage.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-zinc-900">Plug-and-play entry points</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {entryTiers.map((t) => (
            <div key={t.title} className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="font-medium text-zinc-900">{t.title}</p>
              <p className="mt-1 text-sm text-zinc-600">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-5">
          <h2 className="font-semibold text-zinc-900">Open decisions</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-zinc-600">
            {implementationOpenDecisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
          <h2 className="font-semibold text-rose-900">Risks</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-rose-800">
            {implementationRisks.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
