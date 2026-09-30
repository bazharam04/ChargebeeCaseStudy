import { systemLoops, systemMapIntro } from "@/lib/content";

export default function SystemMapPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          System Map — Causal Loops
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">{systemMapIntro}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white p-6">
        <svg viewBox="0 0 760 560" className="mx-auto w-full max-w-3xl">
          <defs>
            <marker
              id="loop-arrow"
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

          {/* Edges (drawn first so nodes sit on top) */}
          {/* R1: A -> B -> C -> A */}
          <path d="M500,60 Q630,60 630,135" className="stroke-emerald-500" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="596" y="84" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <line x1="630" y1="185" x2="630" y2="295" className="stroke-emerald-500" strokeWidth="1.5" markerEnd="url(#loop-arrow)" />
          <text x="640" y="245" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <path d="M530,320 Q380,300 380,88" className="stroke-emerald-500" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="428" y="240" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <text x="442" y="256" className="fill-zinc-500 text-[9px]">funds hardening</text>

          {/* B1: C -> D -> E -> C */}
          <line x1="630" y1="345" x2="630" y2="455" className="stroke-amber-500" strokeWidth="1.5" markerEnd="url(#loop-arrow)" />
          <text x="640" y="405" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <path d="M530,480 Q440,490 430,427" className="stroke-amber-500" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="478" y="502" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <path d="M480,392 Q560,390 585,347" className="stroke-amber-500" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="540" y="372" className="fill-rose-600 text-[16px] font-semibold">−</text>

          {/* B2: A -> F (enabler), F -> E, E -> F, F -> G */}
          <path d="M270,60 Q130,60 130,205" className="stroke-zinc-400" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="148" y="98" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <text x="162" y="98" className="fill-zinc-500 text-[9px]">enables</text>
          <path d="M170,255 Q170,400 280,410" className="stroke-amber-500" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="148" y="345" className="fill-zinc-700 text-[14px] font-semibold">+</text>
          <path d="M290,378 Q300,260 230,235" className="stroke-amber-500" strokeWidth="1.5" fill="none" markerEnd="url(#loop-arrow)" />
          <text x="296" y="275" className="fill-rose-600 text-[16px] font-semibold">−</text>
          <text x="310" y="275" className="fill-zinc-500 text-[9px]">pressure to loosen</text>
          <line x1="110" y1="255" x2="110" y2="445" className="stroke-zinc-400" strokeWidth="1.5" markerEnd="url(#loop-arrow)" />
          <text x="92" y="350" className="fill-rose-600 text-[16px] font-semibold">−</text>

          {/* Nodes */}
          <rect x="260" y="35" width="240" height="50" rx="10" className="fill-blue-100 stroke-blue-400" strokeWidth="1.5" />
          <text x="380" y="58" textAnchor="middle" className="fill-blue-900 text-[12px] font-semibold">Real-time enforcement</text>
          <text x="380" y="73" textAnchor="middle" className="fill-blue-700 text-[10px]">capability (Reserve / Confirm)</text>

          <rect x="530" y="135" width="200" height="50" rx="10" className="fill-emerald-50 stroke-emerald-400" strokeWidth="1.5" />
          <text x="630" y="158" textAnchor="middle" className="fill-emerald-900 text-[12px] font-semibold">Segment 1/3 deals won</text>
          <text x="630" y="173" textAnchor="middle" className="fill-emerald-700 text-[10px]">credible vs. Amberflo / Meteroid</text>

          <rect x="530" y="295" width="200" height="50" rx="10" className="fill-emerald-50 stroke-emerald-400" strokeWidth="1.5" />
          <text x="630" y="318" textAnchor="middle" className="fill-emerald-900 text-[12px] font-semibold">AI-native customers</text>
          <text x="630" y="333" textAnchor="middle" className="fill-emerald-700 text-[10px]">&amp; usage event volume</text>

          <rect x="530" y="455" width="200" height="50" rx="10" className="fill-purple-50 stroke-purple-400" strokeWidth="1.5" />
          <text x="630" y="478" textAnchor="middle" className="fill-purple-900 text-[12px] font-semibold">Load &amp; latency</text>
          <text x="630" y="493" textAnchor="middle" className="fill-purple-700 text-[10px]">on the real-time path</text>

          <rect x="280" y="375" width="200" height="50" rx="10" className="fill-rose-50 stroke-rose-400" strokeWidth="1.5" />
          <text x="380" y="398" textAnchor="middle" className="fill-rose-900 text-[12px] font-semibold">False blocks &amp;</text>
          <text x="380" y="413" textAnchor="middle" className="fill-rose-700 text-[10px]">customer friction</text>

          <rect x="30" y="205" width="200" height="50" rx="10" className="fill-amber-50 stroke-amber-400" strokeWidth="1.5" />
          <text x="130" y="228" textAnchor="middle" className="fill-amber-900 text-[12px] font-semibold">Hard-stop strictness</text>
          <text x="130" y="243" textAnchor="middle" className="fill-amber-700 text-[10px]">block at zero balance</text>

          <rect x="10" y="445" width="200" height="50" rx="10" className="fill-zinc-100 stroke-zinc-400" strokeWidth="1.5" />
          <text x="110" y="468" textAnchor="middle" className="fill-zinc-800 text-[12px] font-semibold">Leaked / unbilled</text>
          <text x="110" y="483" textAnchor="middle" className="fill-zinc-600 text-[10px]">usage revenue</text>

          {/* Loop labels */}
          <circle cx="545" cy="190" r="17" className="fill-emerald-100 stroke-emerald-500" strokeWidth="1.5" />
          <text x="545" y="195" textAnchor="middle" className="fill-emerald-800 text-[12px] font-bold">R1</text>

          <circle cx="570" cy="430" r="17" className="fill-amber-100 stroke-amber-500" strokeWidth="1.5" />
          <text x="570" y="435" textAnchor="middle" className="fill-amber-800 text-[12px] font-bold">B1</text>

          <circle cx="238" cy="328" r="17" className="fill-amber-100 stroke-amber-500" strokeWidth="1.5" />
          <text x="238" y="333" textAnchor="middle" className="fill-amber-800 text-[12px] font-bold">B2</text>

          {/* Legend */}
          <g transform="translate(10,530)">
            <line x1="0" y1="0" x2="24" y2="0" className="stroke-emerald-500" strokeWidth="2" />
            <text x="30" y="4" className="fill-zinc-500 text-[10px]">Reinforcing loop (R)</text>
            <line x1="170" y1="0" x2="194" y2="0" className="stroke-amber-500" strokeWidth="2" />
            <text x="200" y="4" className="fill-zinc-500 text-[10px]">Balancing loop (B)</text>
            <text x="340" y="4" className="fill-zinc-500 text-[10px]">+ same direction · − opposite direction</text>
          </g>
        </svg>
      </div>

      <div className="flex flex-col gap-3">
        {systemLoops.map((loop) => {
          const reinforcing = loop.type === "Reinforcing";
          return (
            <div key={loop.id} className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4">
              <span
                className={`flex h-7 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  reinforcing ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}
              >
                {loop.id}
              </span>
              <div>
                <p className="font-medium text-zinc-900">
                  {loop.name} <span className="text-sm font-normal text-zinc-500">· {loop.type}</span>
                </p>
                <p className="mt-1 text-sm text-zinc-600">{loop.path}</p>
                <p className="mt-2 text-sm text-zinc-800">
                  <span className="font-medium">PM implication:</span> {loop.pmImplication}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
