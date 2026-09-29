import { implementationChoiceNote, implementationFlowSteps } from "@/lib/content";

export default function ImplementationApproachPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          7. Implementation Approach
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">{implementationChoiceNote}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white p-6">
        <svg viewBox="0 0 700 940" className="mx-auto w-full max-w-2xl">
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

          {/* 1. Customer App */}
          <rect x="220" y="15" width="260" height="55" rx="10" className="fill-blue-50 stroke-blue-400" strokeWidth="1.5" />
          <text x="350" y="48" textAnchor="middle" className="fill-blue-900 text-[13px] font-semibold">Customer App</text>

          <line x1="350" y1="70" x2="350" y2="105" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="360" y="92" className="fill-zinc-500 text-[10px]">Reserve(estimated usage)</text>

          {/* 2. Real-Time Balance Service */}
          <rect x="190" y="108" width="320" height="60" rx="10" className="fill-blue-50 stroke-blue-400" strokeWidth="1.5" />
          <text x="350" y="134" textAnchor="middle" className="fill-blue-900 text-[13px] font-semibold">Real-Time Balance Service</text>
          <text x="350" y="152" textAnchor="middle" className="fill-blue-700 text-[10px]">checks fast in-memory balance cache</text>

          <line x1="350" y1="168" x2="350" y2="205" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Decision diamond */}
          <polygon points="350,205 450,255 350,305 250,255" className="fill-amber-50 stroke-amber-400" strokeWidth="1.5" />
          <text x="350" y="251" textAnchor="middle" className="fill-amber-900 text-[11px] font-semibold">Balance</text>
          <text x="350" y="264" textAnchor="middle" className="fill-amber-900 text-[11px] font-semibold">sufficient?</text>

          {/* No branch -> Denied */}
          <line x1="450" y1="255" x2="560" y2="255" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="465" y="247" className="fill-zinc-500 text-[10px]">No</text>
          <rect x="560" y="228" width="120" height="55" rx="10" className="fill-rose-50 stroke-rose-400" strokeWidth="1.5" />
          <text x="620" y="252" textAnchor="middle" className="fill-rose-900 text-[11px] font-semibold">Denied</text>
          <text x="620" y="267" textAnchor="middle" className="fill-rose-700 text-[10px]">app blocks action</text>

          {/* Yes branch */}
          <line x1="350" y1="305" x2="350" y2="340" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="360" y="327" className="fill-zinc-500 text-[10px]">Yes — Approved, hold placed</text>

          {/* 3. App runs action */}
          <rect x="220" y="343" width="260" height="55" rx="10" className="fill-emerald-50 stroke-emerald-400" strokeWidth="1.5" />
          <text x="350" y="376" textAnchor="middle" className="fill-emerald-900 text-[13px] font-semibold">App runs the metered action</text>

          <line x1="350" y1="398" x2="350" y2="433" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 4. Confirm */}
          <rect x="220" y="436" width="260" height="55" rx="10" className="fill-emerald-50 stroke-emerald-400" strokeWidth="1.5" />
          <text x="350" y="461" textAnchor="middle" className="fill-emerald-900 text-[13px] font-semibold">App calls Confirm</text>
          <text x="350" y="477" textAnchor="middle" className="fill-emerald-700 text-[10px]">(actual usage, finalizes the hold)</text>

          {/* branch to cache sync (left) and event queue (down) */}
          <line x1="220" y1="463" x2="130" y2="463" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <line x1="130" y1="463" x2="130" y2="138" className="stroke-zinc-400" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <text x="10" y="300" className="fill-zinc-500 text-[10px]">keeps cache in sync</text>

          <line x1="350" y1="491" x2="350" y2="526" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="360" y="513" className="fill-zinc-500 text-[10px]">publish (async, high-throughput)</text>

          {/* 5. Event Queue */}
          <rect x="220" y="529" width="260" height="55" rx="10" className="fill-purple-50 stroke-purple-400" strokeWidth="1.5" />
          <text x="350" y="562" textAnchor="middle" className="fill-purple-900 text-[13px] font-semibold">Event Queue</text>

          <line x1="350" y1="584" x2="350" y2="619" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 6. Existing rating pipeline */}
          <rect x="170" y="622" width="360" height="60" rx="10" className="fill-zinc-100 stroke-zinc-400" strokeWidth="1.5" />
          <text x="350" y="648" textAnchor="middle" className="fill-zinc-800 text-[13px] font-semibold">Existing Batch Metering &amp; Rating Pipeline</text>
          <text x="350" y="666" textAnchor="middle" className="fill-zinc-600 text-[10px]">unchanged</text>

          <line x1="350" y1="682" x2="350" y2="717" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 7. Invoice */}
          <rect x="220" y="720" width="260" height="55" rx="10" className="fill-zinc-100 stroke-zinc-400" strokeWidth="1.5" />
          <text x="350" y="753" textAnchor="middle" className="fill-zinc-800 text-[13px] font-semibold">Invoice generated at cycle end</text>
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
    </div>
  );
}
