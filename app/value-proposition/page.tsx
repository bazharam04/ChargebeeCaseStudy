import {
  valueCanvasCaveat,
  valueCanvasCustomer,
  valueCanvasFit,
  valueCanvasMap,
  valueCanvasProfile,
} from "@/lib/content";

function Block({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: string;
}) {
  return (
    <div className={`rounded-lg border p-4 ${tone}`}>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-700">{title}</h3>
      <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-4 text-sm text-zinc-800">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ValuePropositionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Value Proposition Canvas
        </h1>
        <p className="mt-2 max-w-3xl text-zinc-600">
          How Chargebee&apos;s proposed capabilities (left) fit the jobs, pains and gains of the
          AI-native customer (right).
        </p>
      </div>

      <article className="rounded-lg border border-zinc-200 bg-white p-5 text-sm text-zinc-700">
        <p>
          <span className="font-medium text-zinc-900">Customer: </span>
          {valueCanvasCustomer.name} ({valueCanvasCustomer.segments})
        </p>
        <p className="mt-1">
          <span className="font-medium text-zinc-900">Buyer: </span>
          {valueCanvasCustomer.buyer}
        </p>
        <p className="mt-1">
          <span className="font-medium text-zinc-900">Users: </span>
          {valueCanvasCustomer.users}
        </p>
      </article>

      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <section className="flex flex-col gap-3 rounded-xl border-2 border-zinc-900 bg-white p-4">
          <h2 className="text-center text-sm font-semibold text-zinc-900">
            Value Map — Chargebee
          </h2>
          <Block
            title="Gain creators"
            items={valueCanvasMap.gainCreators}
            tone="border-emerald-200 bg-emerald-50"
          />
          <Block
            title="Products & services"
            items={valueCanvasMap.productsServices}
            tone="border-zinc-200 bg-zinc-50"
          />
          <Block
            title="Pain relievers"
            items={valueCanvasMap.painRelievers}
            tone="border-rose-200 bg-rose-50"
          />
        </section>

        <div className="hidden flex-col items-center justify-center gap-2 text-xs font-medium text-zinc-500 lg:flex">
          <span>fit</span>
          <svg viewBox="0 0 40 12" className="h-3 w-10 text-zinc-400" fill="none">
            <path
              d="M2 6h34M30 1l6 5-6 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <section className="flex flex-col gap-3 rounded-[2rem] border-2 border-zinc-900 bg-white p-4">
          <h2 className="text-center text-sm font-semibold text-zinc-900">
            Customer Profile — AI-native company
          </h2>
          <Block
            title="Gains"
            items={valueCanvasProfile.gains}
            tone="border-emerald-200 bg-emerald-50"
          />
          <Block
            title="Jobs to be done"
            items={valueCanvasProfile.jobs}
            tone="border-zinc-200 bg-zinc-50"
          />
          <Block
            title="Pains"
            items={valueCanvasProfile.pains}
            tone="border-rose-200 bg-rose-50"
          />
        </section>
      </div>

      <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
        <h2 className="font-semibold text-zinc-900">Fit statement</h2>
        <p className="mt-2 text-sm text-zinc-700">{valueCanvasFit}</p>
        <p className="mt-3 text-xs text-zinc-500">{valueCanvasCaveat}</p>
      </article>
    </div>
  );
}
