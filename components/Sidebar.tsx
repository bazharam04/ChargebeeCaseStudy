"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const asIsItems = [
  { href: "/icp-segments", label: "ICP Segments & Billing Needs" },
  { href: "/gaps", label: "Gaps" },
  { href: "/competitors", label: "Competitors" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="p-3">
        <div className="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-2.5">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-white/20 text-xs font-semibold text-white">
            C
          </span>
          <span className="text-sm font-semibold text-white">Billing Case Study</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-6">
        <div className="flex items-center gap-2 px-3 py-3 text-zinc-800">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-5 w-5 shrink-0 text-zinc-500"
          >
            <rect x="2.5" y="4" width="15" height="3" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="2.5" y="9.5" width="15" height="3" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="2.5" y="15" width="9" height="1.6" rx="0.8" fill="currentColor" />
          </svg>
          <span className="text-base text-zinc-900">AS-IS State</span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="ml-auto h-4 w-4 text-zinc-400"
          >
            <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <ul className="flex flex-col">
          {asIsItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-3 pl-10 pr-3 text-base transition-colors ${
                  isActive(item.href)
                    ? "font-medium text-zinc-900"
                    : "text-zinc-700 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/value-proposition"
          className={`mt-4 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/value-proposition") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <rect x="2.5" y="4" width="7" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="14" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className={`text-base ${isActive("/value-proposition") ? "font-medium" : ""}`}>
            Value Proposition Canvas
          </span>
        </Link>

        <Link
          href="/prioritization"
          className={`mt-1 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/prioritization") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <circle cx="6" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 12.5L12 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className={`text-base ${isActive("/prioritization") ? "font-medium" : ""}`}>
            Prioritization
          </span>
        </Link>

        <Link
          href="/value"
          className={`mt-1 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/value") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <path d="M10 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L10 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          <span className={`text-base ${isActive("/value") ? "font-medium" : ""}`}>
            Value Story
          </span>
        </Link>

        <Link
          href="/implementation-approach"
          className={`mt-1 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/implementation-approach") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <rect x="3" y="3" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
            <rect x="11" y="11" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M6 9v3a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
          <span className={`text-base ${isActive("/implementation-approach") ? "font-medium" : ""}`}>
            Implementation Approach
          </span>
        </Link>

        <Link
          href="/scoping-metrics"
          className={`mt-1 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/scoping-metrics") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <path d="M4 16V8M10 16V4M16 16v-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className={`text-base ${isActive("/scoping-metrics") ? "font-medium" : ""}`}>
            Scoping & Metrics
          </span>
        </Link>

        <Link
          href="/system-map"
          className={`mt-1 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/system-map") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <path d="M15 7a6 6 0 0 0-10-2M5 13a6 6 0 0 0 10 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M5 2.5V5h2.5M15 17.5V15h-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={`text-base ${isActive("/system-map") ? "font-medium" : ""}`}>
            System Map
          </span>
        </Link>

        <Link
          href="/api-contract"
          className={`mt-1 flex items-center gap-2 px-3 py-3 transition-colors ${
            isActive("/api-contract") ? "text-zinc-900" : "text-zinc-800 hover:text-zinc-900"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-zinc-500">
            <path d="M7 5L3 10l4 5M13 5l4 5-4 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={`text-base ${isActive("/api-contract") ? "font-medium" : ""}`}>
            API Contract
          </span>
        </Link>
      </nav>

      <div className="border-t border-zinc-200 p-3 text-xs text-zinc-400">
        Chargebee Staff PM Interview
      </div>
    </aside>
  );
}
