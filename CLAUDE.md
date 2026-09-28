@AGENTS.md

# Project Context: Chargebee Billing Case Study App

This app presents the findings of the case study at `../case study.md` (a Chargebee Staff PM
interview exercise). That file is the source of truth for content — when it's updated, update
`lib/content.ts` and the corresponding pages to match.

## Case study mandate

Reimagine Chargebee's billing platform for AI-native companies (Replit, Replika, Mistral, etc.)
while continuing to serve existing SaaS businesses. Seven deliverables:

1. ICP segments — done
2. ICP segment → billing needs → preferred billing model — done
3. Gaps in Chargebee's current subscription model (via its API & user docs) — done
4. How competitors solve these gaps — pending
5. Prioritized roadmap — pending
6. Value story for organizational buy-in — pending
7. Guide for building one capability as a POC — pending

## What this app currently renders

- `/icp-segments` — the 6 ICP segments merged with their billing needs & preferred model, as one table.
- `/gaps` — the 4 cross-cutting capability gaps (each tagged with the segment(s) it affects) plus a
  "no material gap" note on Segments 5 & 6.
- Content lives in `lib/content.ts` as typed data; pages (`app/**/page.tsx`) are presentational only —
  extend the data file first, then the pages, as later tasks (4-7) get drafted in `case study.md`.

## Styling

Light theme only — there is no dark-mode auto-switch (deliberately removed from `app/globals.css`,
since it silently overrode the light background when the OS/browser was in dark mode). The left
sidebar (`components/Sidebar.tsx`) is styled after Chargebee's own admin UI: a dark brand pill at
top, plain-text grouped nav items (no icon library), light backgrounds throughout. Keep any new
pages consistent with this look.
