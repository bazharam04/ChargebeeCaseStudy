import Image from "next/image";
import { paradigmShifts } from "@/lib/content";

export default function ChangingParadigmPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Changing Paradigm
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
          Evolution of Offerings and the Shift in Pricing Models
        </h1>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <Image
          src="/changing-paradigm.jpg"
          alt="Evolution of product and service offerings in the AI era: from the traditional input-based model (per-license software, hourly/headcount effort) to the emerging AI model of measured outcomes, with a fundamental shift in pricing."
          width={1024}
          height={559}
          className="h-auto w-full"
          priority
        />
      </div>

      <article className="rounded-lg border border-zinc-200 bg-white p-5">
        <h2 className="font-semibold text-zinc-900">What is changing in the product landscape</h2>
        <ol className="mt-3 flex list-decimal flex-col gap-2.5 pl-5 text-sm text-zinc-700">
          {paradigmShifts.map((shift) => (
            <li key={shift.title}>
              <span className="font-medium text-zinc-900">{shift.title}</span> {shift.detail}
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
