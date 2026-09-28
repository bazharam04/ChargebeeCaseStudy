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
          href="/prioritization"
          className={`mt-4 flex items-center gap-2 px-3 py-3 transition-colors ${
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
      </nav>

      <div className="border-t border-zinc-200 p-3 text-xs text-zinc-400">
        Chargebee Staff PM Interview
      </div>
    </aside>
  );
}
