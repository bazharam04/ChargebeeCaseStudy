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
          <text x="575" y="84" textAnchor="middle" className="fill-blue-700 text-[10px]">checks fast in-memory balance cache</text>

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
          <text x="575" y="462" textAnchor="middle" className="fill-purple-900 text-[12px] font-semibold">Event Queue (high-throughput)</text>

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
    </div>
  );
}
