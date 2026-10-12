export const caseStudyMeta = {
  title: "Chargebee Staff PM Interview — Case Study",
  mandate:
    "Stepping into the role of a Product Owner at Chargebee, driving the company's Billing initiative (subscriptions & invoices module). The mandate: reimagine how Chargebee's billing platform can fit the billing use cases of new-age AI companies (Replit, Replika, Mistral, etc.) while continuing to serve existing businesses.",
  problemStatement:
    "Chargebee is exploring how to reimagine its billing platform to serve the diverse billing use cases of AI-native companies and SaaS companies undergoing AI transformation.",
};

export interface TaskStatus {
  id: number;
  title: string;
  done: boolean;
}

export const tasks: TaskStatus[] = [
  { id: 1, title: "Create ICP segments Chargebee will serve in AI & SaaS", done: true },
  { id: 2, title: "Map ICP segment → billing needs → preferred billing model", done: true },
  { id: 3, title: "Identify gaps in Chargebee's current subscription model", done: true },
  { id: 4, title: "Explore how competition solves these problems", done: false },
  { id: 5, title: "Develop a prioritized roadmap", done: false },
  { id: 6, title: "Showcase value to drive organizational buy-in", done: false },
  { id: 7, title: "Guide the team on building one capability (POC)", done: false },
];

export interface IcpSegment {
  id: number;
  name: string;
  examples: string;
  billingShape: string;
  whyDistinct: string;
  goal: string[];
}

export const icpSegments: IcpSegment[] = [
  {
    id: 1,
    name: "AI Coding / Dev Tool Platforms",
    examples: "Replit, Cursor",
    billingShape:
      "Seat tiers (Replit Core $20/mo, Pro $100/mo; Cursor Pro $20/mo, Pro+ $60/mo, Ultra $200/mo) bundled with a pooled monthly usage credit for agent/compute consumption, with pay-as-you-go overage once the pool is exhausted.",
    whyDistinct:
      "Hybrid seat+usage where the usage pool is sized to the seat tier — overage billing has to reconcile against a plan-specific allowance, not a flat rate.",
    goal: [
      "Provide an AI-assisted coding / dev environment (agent-driven code generation, compute-heavy).",
      "Goal: keep the entry seat price low and predictable, while converting heavy agent/compute usage into overage revenue instead of forcing an abrupt plan upgrade.",
    ],
  },
  {
    id: 2,
    name: "Consumer AI Companion / Chat Apps",
    examples: "Replika, Character.AI",
    billingShape:
      "Flat consumer subscription (Character.AI c.ai+ at $9.99/mo or $94.99/yr) plus an in-app virtual currency (Replika's Coins & Gems; Character.AI's Charms) for cosmetic/feature unlocks.",
    whyDistinct:
      "High-volume, low-ACV consumer billing — dunning, involuntary-churn recovery, and card-decline handling matter more than metering precision; virtual-currency micro-transactions are a second, emerging revenue lever.",
    goal: [
      "Provide a consumer AI companion / chat experience at consumer-app price points.",
      "Goal: maximize subscriber retention (minimize involuntary churn from failed payments) while opening a second, incremental revenue lever through virtual-currency micro-transactions.",
    ],
  },
  {
    id: 3,
    name: "Foundation Model / API Providers",
    examples: "OpenAI, Mistral AI",
    billingShape:
      "Pure per-token metering drawn down against a prepaid credit balance (min. $5 top-up, credits expire), with custom-quoted enterprise contracts layered on top for large accounts.",
    whyDistinct:
      "Metering has to operate at extreme volume and granularity (billions of events/day, sub-cent unit economics) with real-time balance enforcement — a materially different scale problem than seat billing.",
    goal: [
      "Provide raw compute and intelligence (model inference at API scale).",
      "Goal: maximize GPU utilization while ensuring every single token processed is billed accurately.",
    ],
  },
  {
    id: 4,
    name: "Outcome-Based AI Platforms",
    examples: "Intercom Fin",
    billingShape:
      "Billed per resolved outcome, not per token or seat — Fin charges $0.99 per resolution (or event-specific rates like $9.99 per qualified lead), with a $49/mo plan bundling 50 resolutions.",
    whyDistinct:
      "The billable unit is a business outcome defined by the customer's own product logic, not a platform-observable usage event — Chargebee would need to ingest an external \"outcome\" signal rather than meter usage itself.",
    goal: [
      "Provide an AI agent that resolves customer-support outcomes, not just usage.",
      "Goal: price and bill strictly on delivered business value (a resolved ticket), so customers pay for outcomes, not effort or tokens.",
    ],
  },
  {
    id: 5,
    name: "Vertical Enterprise AI-Native (High-ACV, Quote-Based)",
    examples: "Harvey (legal AI)",
    billingShape:
      "No public pricing at all — pure enterprise sales-quoted, seat-based licensing with 20-50 seat minimums and 12-month terms (third-party estimates: $100-2,400/mo per seat depending on bundle).",
    whyDistinct:
      "Billing is essentially a contract-management problem, not a metering problem — the platform needs to support negotiated multi-year quotes, minimum commitments, and custom invoicing rather than self-serve plans.",
    goal: [
      "Provide a high-trust, vertical AI product (e.g. legal) to enterprise buyers.",
      "Goal: capture large, multi-year contract value through negotiated seat licensing, not self-serve volume.",
    ],
  },
  {
    id: 6,
    name: "Traditional Seat-Based SaaS Layering In AI",
    examples: "Notion AI, Salesforce Einstein / Agentforce",
    billingShape:
      "AI capability gated into an existing seat tier (Notion bundles full AI only into its $20/member/mo Business plan) and/or sold as a metered add-on on top of seat contracts (Notion's Custom Agents at $10/1,000 credits; Salesforce's Einstein/Agentforce add-ons at $50-125/user/mo plus \"Flex Credits\" pools).",
    whyDistinct:
      "Billing must coexist with a legacy seat contract already on the books — the challenge isn't inventing a new model, it's layering a consumption or add-on charge onto an existing subscription without disrupting the base contract or renewal cycle.",
    goal: [
      "Provide AI capability as an enhancement to an already-adopted seat-based product.",
      "Goal: monetize AI as incremental revenue on the existing subscription base, without disrupting the base contract or renewal cycle.",
    ],
  },
  {
    id: 7,
    name: "AI Infrastructure / Inference & Compute Providers",
    examples: "CoreWeave, Together AI, Fireworks AI",
    billingShape:
      "Capacity-based and token-based pricing side by side: on-demand per GPU-hour (CoreWeave lists H100 from about $6.16/GPU-hr), reserved contracts discounted by up to about 60%, spot capacity up to about 60% below on-demand; Together AI sells pay-per-token serverless plus dedicated endpoints and hourly GPU rates; Fireworks sells per-token serverless plus Provisioned Throughput Units. (Figures from third-party comparisons, not the vendors' own pricing pages.)",
    whyDistinct:
      "The billable commitment is reserved or provisioned capacity (a time-based commitment), with on-demand or serverless burst on top — billing has to reconcile committed vs. burst usage and handle mixed units (GPU-hours, tokens, throughput units) in one account. Segment 3 is pure token drawdown; this segment adds the capacity-commitment mechanic.",
    goal: [
      "Provide GPU compute and managed inference as a service, to AI builders who need dependable capacity.",
      "Goal: lock in committed revenue through reservations while monetizing burst demand, and keep expensive GPU capacity highly utilized.",
    ],
  },
];

export interface BillingMapping {
  segmentId: number;
  segmentName: string;
  billingNeeds: string[];
  preferredModel: string[];
}

export const billingMappings: BillingMapping[] = [
  {
    segmentId: 1,
    segmentName: "AI Coding / Dev Tool Platforms",
    billingNeeds: [
      "Multiple seat tiers, each with a different usage allowance",
      "Monthly-resetting usage-credit pool sized per tier",
      "Real-time metering against that pool with depletion alerts",
      "Overage billed only after the tier's pool is exhausted, at a rate/logic tied to that specific tier (not a flat global rate)",
      "Pro-rated re-scoping of the usage pool on mid-cycle tier upgrade/downgrade",
    ],
    preferredModel: [
      "Hybrid seat + pooled usage credit with plan-scoped overage",
      "A tiered subscription where each tier carries its own usage allowance, plus metered overage billing keyed to the active tier",
    ],
  },
  {
    segmentId: 2,
    segmentName: "Consumer AI Companion / Chat Apps",
    billingNeeds: [
      "High-volume, low-ACV recurring billing at consumer scale",
      "Strong dunning / involuntary-churn recovery (retry logic, smart card-decline handling, account updater)",
      "Support for one-off virtual-currency micro-transactions alongside the base subscription",
      "Simple flat-rate plan structure — metering precision is not the priority",
      "Localized pricing/payment methods for global consumer reach",
    ],
    preferredModel: [
      "Flat consumer subscription + virtual-currency micro-transactions",
      "Dunning-optimized recurring billing rather than usage metering",
    ],
  },
  {
    segmentId: 3,
    segmentName: "Foundation Model / API Providers",
    billingNeeds: [
      "Per-token metering at extreme volume/granularity (billions of events/day, sub-cent unit economics)",
      "Prepaid credit balance with real-time balance enforcement (block usage at zero)",
      "Minimum top-up thresholds and credit-expiration handling",
      "High-throughput rating/aggregation pipeline that keeps billing near-real-time at that event volume",
      "Custom-quoted enterprise layer on top (committed spend, volume discounts, true-up against prepaid)",
    ],
    preferredModel: [
      "Prepaid metered/token balance with real-time enforcement",
      "Enterprise committed-spend contracts for large accounts",
    ],
  },
  {
    segmentId: 4,
    segmentName: "Outcome-Based AI Platforms",
    billingNeeds: [
      "Ability to ingest an externally-asserted \"outcome\" event via API (not a platform-observed usage event)",
      "Per-outcome pricing with event-specific rates",
      "Base plan bundling an included outcome allotment, with per-unit overage beyond it",
      "Outcome validation/reconciliation & audit trail, since the platform isn't the source of truth for what counts as billable",
      "Flexible, customer-configurable rate cards per outcome type",
    ],
    preferredModel: [
      "Per-outcome/event billing driven by externally ingested outcome signals",
      "Bundled-allotment base plan plus per-unit overage",
    ],
  },
  {
    segmentId: 5,
    segmentName: "Vertical Enterprise AI-Native",
    billingNeeds: [
      "No self-serve pricing — fully sales-quoted, negotiated contracts",
      "Seat-based licensing with minimum seat commitments",
      "Multi-year/12-month term support with custom renewal cycles",
      "Custom invoicing reflecting negotiated terms, milestone billing, and bespoke payment schedules",
      "Contract lifecycle management (amendments, renewals, seat-count true-ups mid-term)",
      "Support for per-deal discounting/bundling",
    ],
    preferredModel: [
      "Quote-based enterprise licensing",
      "Negotiated seat-minimum contracts with custom invoicing and contract-lifecycle management, not self-serve plans",
    ],
  },
  {
    segmentId: 6,
    segmentName: "Traditional Seat-Based SaaS Layering In AI",
    billingNeeds: [
      "Ability to layer a metered/credit-based add-on onto an existing seat contract without disrupting its renewal cycle or terms",
      "Support for gating AI into a specific existing tier as an upsell alternative to an add-on",
      "Mid-term add-on attach with proration aligned to the base contract's billing cycle (not a separate cycle)",
      "Credit-pool purchase/top-up mechanism for the add-on independent of base renewal timing",
      "Consolidated invoicing so add-on and base seat charges appear on one bill/relationship",
    ],
    preferredModel: [
      "Seat subscription + metered/credit add-on layered on the existing contract",
      "Cycle-aligned to the base subscription with consolidated invoicing",
    ],
  },
  {
    segmentId: 7,
    segmentName: "AI Infrastructure / Inference & Compute Providers",
    billingNeeds: [
      "Reserved / provisioned capacity commitments with terms and discounts",
      "On-demand and spot rates alongside reserved capacity",
      "Multiple units in one account (GPU-hours, tokens, throughput units)",
      "Commit drawdown first, then overage at the on-demand rate",
      "Metering per resource (instance, endpoint, cluster) rolled up to the customer",
      "Utilization and spend visibility, with limits as balances run down",
      "Enterprise contract terms for large reservations",
    ],
    preferredModel: [
      "Commit + burst: reserved / provisioned capacity commitment with on-demand or per-token overage",
      "Multi-unit metering rolled up per customer",
    ],
  },
];

export interface Gap {
  id: string;
  title: string;
  impact: string;
}

export interface GapBucket {
  id: number;
  emoji: string;
  name: string;
  tagline: string;
  gaps: Gap[];
  rootCause?: string;
}

export const gapBuckets: GapBucket[] = [
  {
    id: 1,
    emoji: "🪣",
    name: "Real-Time Enforcement & Scale",
    tagline: "The platform is batch-oriented and passive — it records and rates, but doesn't act.",
    gaps: [
      {
        id: "UBB-1",
        title: "No hard-stop blocking when usage pool or prepaid balance hits zero",
        impact: "Segment 1 (pooled overage), Segment 3 (prepaid token wallets)",
      },
      {
        id: "UBB-2",
        title: "Metering/rating is end-of-cycle batch, not built for extreme-volume or sub-cent unit economics",
        impact: "Segment 3 (Foundation Model / API Providers) — near-existential",
      },
    ],
    rootCause: "Chargebee is designed as a billing system of record, not a real-time usage control plane.",
  },
  {
    id: 2,
    emoji: "🪣",
    name: "Pricing & Plan Flexibility",
    tagline: "Structural constraints that limit how you can design and evolve pricing.",
    gaps: [
      {
        id: "CB-1",
        title: "No Subscription Ramps + Usage-Based Billing together",
        impact: "Can't do gradual price introductions with metered billing",
      },
      {
        id: "CB-4",
        title: "Mixed billing frequencies in one subscription not supported",
        impact: "Can't bundle monthly seats + annual add-ons under UBB",
      },
      {
        id: "CB-5",
        title: "No mid-term changes to usage-based subscriptions",
        impact: "Any pricing changes wait until next renewal",
      },
      {
        id: "CB-7",
        title: "No entitlement overrides on UBB subscriptions",
        impact: "Can't manually adjust limits for individual customers",
      },
    ],
  },
  {
    id: 3,
    emoji: "🪣",
    name: "Billing Cycle & Scheduling Constraints",
    tagline: "When and how billing cycles work is rigid.",
    gaps: [
      {
        id: "CB-2",
        title: "No Calendar Billing alignment with UBB",
        impact: "All customers bill on their own cycle, not a unified date",
      },
      {
        id: "CB-8",
        title: "No backdated changes to term start",
        impact: "Corrections can only go forward, not retroactive",
      },
      {
        id: "CB-3",
        title: "Trial subscription UBB management under evaluation",
        impact: "Can't meter usage during free trials",
      },
    ],
  },
  {
    id: 4,
    emoji: "🪣",
    name: "Data Integrity & Audit",
    tagline: "Once data is in, you can't easily fix or validate it.",
    gaps: [
      {
        id: "CB-9",
        title: "Usage data cannot be deleted once recorded",
        impact: "Errors require workarounds (credits, adjustments)",
      },
      {
        id: "UBB-3",
        title: "No native outcome-validation, dispute, or audit-trail workflow",
        impact: "Segment 4 (Outcome-Based AI Platforms) — correctness of billable unit is unverifiable inside Chargebee",
      },
    ],
  },
  {
    id: 5,
    emoji: "🪣",
    name: "Subscription Lifecycle Operations",
    tagline: "Standard lifecycle actions break down when metering is involved.",
    gaps: [
      {
        id: "CB-6",
        title: "Pause / resume / reactivation not supported for metered subscriptions",
        impact: "Customers can't temporarily halt metered plans",
      },
    ],
  },
];

export const gapAnalysisSummary =
  "Chargebee handles post-hoc billing well — it records, rates, and invoices usage reliably at cycle end. Where it falls short is anything requiring real-time control (blocking, validation), high-volume ingestion, outcome-based audit, or mid-term flexibility — exactly the capabilities that AI-native and API-first business models depend on.";

export const noMaterialGapNote =
  "Segment 5 (Vertical Enterprise AI-Native) and Segment 6 (Traditional Seat-Based SaaS Layering In AI) are already well-served by existing capabilities — Chargebee CPQ + Contract Terms + Price Override handle negotiated, quote-based enterprise deals maturely, and the addon-item model is purpose-built for layering recurring/metered charges onto an existing seat contract on the same billing cycle.";

export const noMaterialGapSourceUrl = "https://www.chargebee.com/recurring-billing-invoicing/sales-quotes/";
export const noMaterialGapSourceLabel = "Chargebee CPQ";

export interface BucketCompetitor {
  bucketId: number;
  bestCompetitors: string;
  keyReason: string;
}

export const bucketCompetitors: BucketCompetitor[] = [
  {
    bucketId: 1,
    bestCompetitors: "Scale: Metronome, Orb. Hard stop: Stigg, Credyt (separate runtimes)",
    keyReason:
      "Billing vendors ingest at very high volume and expose live balances and alerts, but the customer's app does the blocking. Dedicated enforcement runtimes make the allow/deny decision before the request runs. Amberflo and Meteroid were named in an earlier draft; their hard-stop claims could not be verified.",
  },
  {
    bucketId: 2,
    bestCompetitors: "Orb, Metronome",
    keyReason:
      "Ramps + UBB, mid-term changes, and overrides as first-class primitives.",
  },
  {
    bucketId: 3,
    bestCompetitors: "Zuora, BillingPlatform",
    keyReason:
      "Calendar billing, backdating, and trial metering are core enterprise capabilities.",
  },
  {
    bucketId: 4,
    bestCompetitors: "Orb, Lago, BillingPlatform",
    keyReason:
      "Raw event retention + structured dispute workflows + immutable audit trails.",
  },
  {
    bucketId: 5,
    bestCompetitors: "Zuora, Maxio",
    keyReason:
      "Pause/resume with metered components is a solved problem in subscription-first platforms.",
  },
];

export const competitiveFinding =
  "Billing vendors (Metronome, Orb) solve scale and give live balances and alerts, but their docs tell the customer to block access in their own app. Hard-stop enforcement is being solved by a separate category — enforcement runtimes such as Stigg (which lists Stripe, Zuora and Chargebee as billing systems it works alongside) and Credyt — that decide before the request runs. So on UBB-1 Chargebee's choice is build natively vs. partner or integrate; a native build pays off only if it is plug-and-play and tied to the same event stream that drives balances, insights and invoicing. No platform was found that natively solves the UBB-3 outcome-validation gap (Bucket 4, tied to Segment 4); that claim was not re-verified in this pass.";

export interface CapabilityCompetitor {
  name: string;
  category: string;
  scale: string;
  enforcement: string;
  status: string;
}

export const capabilityCompetitors: CapabilityCompetitor[] = [
  {
    name: "Metronome",
    category: "Billing vendor",
    scale:
      "Up to 110,000 events/sec without pre-aggregation (default limit 5,000/sec, raisable); batches of 100 events per request; 34-day ingest and dedup window.",
    enforcement:
      "Live balances, threshold alerts, and auto-recharge. Zero-dollar fallback rate stops overage billing but \"does not stop usage from being submitted\"; docs say to gate access in your own app.",
    status: "Verified in Metronome docs",
  },
  {
    name: "Orb",
    category: "Billing vendor",
    scale:
      "Idempotent ingestion; 250,000+ events/sec stress-tested, 1M+ claimed in production.",
    enforcement:
      "Alerts (balance depleted, cost exceeded) and credit balances; docs instruct the app to block access. Caps what the customer is billed at a set maximum.",
    status: "Enforcement verified in Orb docs; throughput from secondary sources",
  },
  {
    name: "Stigg",
    category: "Enforcement runtime",
    scale: "Claims 1M+ events/sec and metering events reaching enforcement within seconds.",
    enforcement:
      "Separate layer upstream of billing. Hard limits deny before the request completes (e.g. 12 credits left, 15-credit action: denied). Sub-5 ms evaluation, sub-10 ms P99. Its announcement page lists Stripe Billing, Zuora and Chargebee among billing systems (the Chargebee entry links to a generic workflows page, not a native-integration page); no Chargebee-side documentation of an integration was found.",
    status: "Vendor's own announcement; not independently verified",
  },
  {
    name: "Credyt",
    category: "AI-first billing / wallet",
    scale: "Not found.",
    enforcement:
      "Query wallet balance before work starts, authorize usage in real time, debit when the usage event lands; no invoice cycle.",
    status: "Press release; not independently verified",
  },
  {
    name: "Amberflo",
    category: "Metering / billing",
    scale: "Not confirmed.",
    enforcement:
      "Prepaid credit wallets with drawdown, threshold alerts, real-time AI usage tracking. Hard-stop blocking not confirmed in the docs reachable.",
    status: "Unverified",
  },
  {
    name: "Meteroid",
    category: "Open-source billing",
    scale: "Rust-based; throughput not found.",
    enforcement:
      "Entitlements and limits (fair use or hard limits) and real-time metering, per third-party descriptions.",
    status: "Unverified",
  },
];

export interface RiceScore {
  bucketId: number;
  reach: number;
  reachRationale: string;
  impact: number;
  impactRationale: string;
  confidence: number;
  confidenceRationale: string;
  effort: number;
  effortSize: "S" | "M" | "L";
  effortRationale: string;
  score: number;
}

export const riceScores: RiceScore[] = [
  {
    bucketId: 1,
    reach: 9,
    reachRationale: "Segments 1 & 3, near-existential for foundation-model providers.",
    impact: 3,
    impactRationale: "Massive \u2014 blocks Chargebee's most immediate AI-native segments outright.",
    confidence: 0.9,
    confidenceRationale: "Metronome and Orb publish ingestion at scale; Stigg and Credyt show hard-stop enforcement is feasible.",
    effort: 4,
    effortSize: "L",
    effortRationale: "Real-time enforcement + high-volume ingestion rework — two hard problems bundled in one bucket.",
    score: 6.08,
  },
  {
    bucketId: 2,
    reach: 7,
    reachRationale: "Broad \u2014 touches any usage-billing customer wanting ramps, mid-term changes or overrides (Segments 1 & 6), and the commit-plus-burst contracts of Segment 7. Raised from 6 after adding Segment 7.",
    impact: 2,
    impactRationale: "High \u2014 blocks smooth pricing evolution, though workarounds exist (wait for renewal).",
    confidence: 0.8,
    confidenceRationale: "Orb/Metronome prove demand; Chargebee's core subscription model needs real changes.",
    effort: 2,
    effortSize: "M",
    effortRationale: "4 gaps bundled — ramps, mixed frequencies, mid-term changes, entitlement overrides.",
    score: 5.6,
  },
  {
    bucketId: 3,
    reach: 6,
    reachRationale: "Calendar billing alignment and trial metering affect every usage-billing customer, not just enterprise ops (Segment 5). Raised from 5.",
    impact: 1.5,
    impactRationale: "Medium-high \u2014 trial metering (CB-3) is part of the self-serve conversion path and shares the enforcement model with B1. Raised from 1.",
    confidence: 0.7,
    confidenceRationale: "Zuora/BillingPlatform prove feasibility, but it's a moderate architectural lift.",
    effort: 2,
    effortSize: "M",
    effortRationale: "Calendar-billing engine changes are a real lift.",
    score: 3.15,
  },
  {
    bucketId: 4,
    reach: 5,
    reachRationale: "Segment 4 (UBB-3) plus general correction needs (CB-9) across all usage-billing customers.",
    impact: 2,
    impactRationale: "High \u2014 trust/compliance matters a lot for enterprise deals.",
    confidence: 0.5,
    confidenceRationale: "Orb/Lago/BillingPlatform solve data integrity broadly, but no platform was found that solves UBB-3 outcome validation, so there is no proof of feasibility. Lowered from 60%.",
    effort: 2,
    effortSize: "M",
    effortRationale: "Audit trail + dispute workflow + usage correction touches the ledger and relies on the event stream.",
    score: 2.5,
  },
  {
    bucketId: 5,
    reach: 3,
    reachRationale: "Single gap, narrower reach but relevant across segments with metered components.",
    impact: 1,
    impactRationale: "Medium.",
    confidence: 0.8,
    confidenceRationale: "Zuora/Maxio prove it's solved elsewhere, but pause/resume for metered plans depends on the balance and limit model from B1. Lowered from 90%.",
    effort: 1,
    effortSize: "S",
    effortRationale: "Contained gap, but not a standalone quick win — it builds on B1's balance model.",
    score: 2.4,
  },
];

export interface RoadmapHorizon {
  id: number;
  name: string;
  bucketIds: number[];
  rationale: string;
}

export const roadmapHorizons: RoadmapHorizon[] = [
  {
    id: 1,
    name: "Now",
    bucketIds: [1, 2],
    rationale:
      "B1 is the top RICE score and the entry ticket to Segments 1 & 3: billing competitors (Metronome, Orb) already publish ingestion at scale and give live balances, while hard-stop enforcement is being solved by separate runtimes (Stigg, Credyt). B2 goes with it because it removes the incompatibilities between usage billing and ramps, mixed frequencies, mid-term changes and overrides, and builds directly on B1's balance and limit model — together they make usage billing work end to end.",
  },
  {
    id: 2,
    name: "Later",
    bucketIds: [3],
    rationale:
      "B3 completes the core-engine work (calendar billing, backdating, trial metering with usage billing). It is enterprise-leaning and offers the least differentiation, but it finishes the job of making usage billing a first-class citizen of the subscription engine.",
  },
];

export const roadmapSequencingNote =
  "B4 (Data Integrity & Audit) and B5 (Subscription Lifecycle Ops) are intentionally not sequenced in this roadmap; their order relative to each other is left open. RICE inputs were revised after the competitor and dependency review: B2 and B3 reach rose, B3 impact rose (trial metering shares B1's enforcement model), and B4 confidence and B5 effort and confidence moved to reflect no proven UBB-3 solution and B5's dependency on B1. Scores are judgment-based inputs, not measured data.";

export interface ValueHorizon {
  horizonId: number;
  unlocks: string;
  valueType: string;
  narrative: string;
}

export const valueHorizons: ValueHorizon[] = [
  {
    horizonId: 1,
    unlocks:
      "B1: credible entry into Segments 1 & 3 (AI Coding/Dev Tools, Foundation Model/API Providers). B2: pricing evolution for all existing usage-billing customers (ramps, mixed frequencies, mid-term changes, overrides).",
    valueType: "Growth (B1) + retention and expansion (B2)",
    narrative:
      "Without real-time enforcement, Chargebee cannot win logos like Replit- or OpenAI-scale accounts at all — it's the entry ticket to the fastest-growing AI-native segments. B2 protects expansion revenue on customers already on usage billing who can't get a ramp or mid-term change without waiting for renewal, and keeps Chargebee level with Orb and Metronome on pricing flexibility.",
  },
  {
    horizonId: 2,
    unlocks: "Enterprise scheduling parity (Segment 5 + general ops) and calendar billing with usage",
    valueType: "Defensive retention",
    narrative:
      "Protects existing enterprise relationships from Zuora/BillingPlatform-style poaching and completes the core-engine compatibility work, but doesn't open new segments.",
  },
];

export const whyNowNote =
  "The market consolidated in 2026 (Stripe+Metronome, Adyen+Orb, Salesforce+m3ter) — competitors aren't point solutions anymore, they're bundled into platforms Chargebee's own prospects already use. Every quarter of delay compounds this gap.";

export const costOfInactionNote =
  "Staying flat means ceding Segments 1 and 3 to Stripe+Metronome, Adyen+Orb, and Flexprice by default — not because Chargebee loses deals on price, but because it's structurally disqualified before pricing even comes up.";

export const implementationChoiceNote =
  "Bucket 1 (Real-Time Enforcement & Scale) is the capability this approach covers, through two gaps: UBB-2 (high-volume event ingestion and exact rating) and UBB-1 (real-time enforcement and a hard stop). Chargebee builds both natively, as a layer beside its existing batch billing and not as a rewrite. Chargebee already owns the plans, allowances and balances that enforcement depends on, so a native build avoids a second source of truth. UBB-2 is built first because it is the foundation: UBB-1 reads from it, and UBB-1's next steps are decided from what UBB-2 shows.";

export interface ImplementationFlowStep {
  id: number;
  title: string;
  description: string;
}

export const implementationFlowSteps: ImplementationFlowStep[] = [
  {
    id: 1,
    title: "App calls Reserve",
    description:
      "Before running a metered action (e.g. an inference call), the customer's app calls Reserve on the Real-Time Balance Service, passing an estimated usage amount.",
  },
  {
    id: 2,
    title: "Check the balance",
    description:
      "The service checks a fast balance built from the UBB-2 running totals, not the batch-rated ledger, which is too slow for this path.",
  },
  {
    id: 3,
    title: "Approve or deny",
    description:
      "If the balance covers the reserve, the service holds the amount and returns Approved. If not, it returns Denied and the app blocks the action before it runs. This is the hard stop UBB-1 delivers.",
  },
  {
    id: 4,
    title: "App proceeds",
    description:
      "The app only runs the metered action after receiving Approved.",
  },
  {
    id: 5,
    title: "App calls Confirm",
    description:
      "Once the action completes, the app calls Confirm with the actual consumed amount (which may differ from the estimate), and the service settles the hold.",
  },
  {
    id: 6,
    title: "Events feed the UBB-2 stream",
    description:
      "The usage event goes to the UBB-2 event stream, which updates the running totals the balance reads, and feeds the existing rating pipeline that still generates the invoice at period close.",
  },
];

export const implementationSequenceNote =
  "UBB-2 comes first. It produces the running usage totals, the event stream and the observability that UBB-1 needs. UBB-1 is not designed in isolation: once UBB-2 is live with a pilot customer, the team reviews what it shows (below) and uses those readings to decide how UBB-1 should be built and in what order.";

export interface ImplementationItem {
  title: string;
  description: string;
}

export const ubb2Components: ImplementationItem[] = [
  {
    "title": "Ingest API",
    "description": "Authenticated, batched endpoint for usage events. Each event carries a unique transaction ID (the idempotency key), a customer, an event type, a timestamp and flexible properties. Acknowledges quickly and processes asynchronously. Accepts an alias for the customer so senders don't need Chargebee IDs."
  },
  {
    "title": "Durable event stream",
    "description": "Events are partitioned by customer, delivered at least once and de-duplicated on the transaction ID, so the effect is exactly-once. Supports backpressure and replay, with a long dedup window so events can be re-sent after an incident without double-charging."
  },
  {
    "title": "Meters (billable metrics)",
    "description": "Filter and aggregate events into quantities: count, sum, max, unique count, latest. One event can feed several meters. Meters follow the subscription's billing period."
  },
  {
    "title": "Rating",
    "description": "Applies Chargebee's existing pricing models (flat, per-unit, tiered, volume, stair-step) to metered quantities, with exact decimal precision for sub-cent prices, custom units (credits, tokens) with conversion, and plan-scoped allowances."
  },
  {
    "title": "Running-totals store",
    "description": "Current usage per customer, meter and period, available through a read API. This is what UBB-1 reads from."
  },
  {
    "title": "Late events and corrections",
    "description": "A defined window for backdated events, with the ability to correct or remove bad usage (addresses CB-9)."
  },
  {
    "title": "Replay and backfill",
    "description": "Raw events are retained so meters can be re-aggregated after a definition changes. Metronome's metrics are not retroactive, so this is a deliberate improvement."
  },
  {
    "title": "Observability",
    "description": "Event search, ingest lag, rejected-event counts and completeness measures, so customers can trust the pipeline and the team can read how it behaves."
  }
];

export const ubb2Pipeline = [
  "App, gateway or provider logs",
  "Ingest API",
  "Event stream (dedup, replay)",
  "Meters",
  "Rating",
  "Running totals"
];

export const ubb2PipelineOutputs = [
  {
    "title": "Usage and alerts API",
    "description": "Customer-visible usage and threshold alerts (first customer value)"
  },
  {
    "title": "UBB-1 balance service",
    "description": "Reads running totals to decide allow or deny"
  },
  {
    "title": "Existing invoicing",
    "description": "Exact totals at period close feed the current invoice flow"
  }
];

export interface LearningGate {
  reading: string;
  decision: string;
}

export const ubb2LearningGates: LearningGate[] = [
  {
    "reading": "How fresh the running totals are (delay from event sent to total updated)",
    "decision": "Whether the balance service can read running totals directly, or needs holds and local leases to stay ahead of the delay."
  },
  {
    "reading": "Late and duplicate event rates",
    "decision": "How much overshoot to allow, the default for failing open or closed, and how large a hold should be."
  },
  {
    "reading": "Gap between running totals and the exact final rating",
    "decision": "The reconciliation method, and how much drift a hard stop can tolerate."
  },
  {
    "reading": "Burst and spike profile of real customer usage",
    "decision": "Default thresholds (for example alert, throttle and block levels), hold sizes, and whether to throttle or block."
  },
  {
    "reading": "Who actually sends events (app, gateway, provider logs) and how clean they are",
    "decision": "Which entry tier to build first (gateway or connector versus SDK), and whether apps need to estimate usage at all."
  },
  {
    "reading": "Which meters and plans customers want limits on",
    "decision": "Which balances and limits UBB-1 enforces first."
  },
  {
    "reading": "Event volume by segment",
    "decision": "Whether Segment 1-style holds are enough, or leases and local counters are needed for Segments 3 and 7."
  }
];

export interface ImplementationStage {
  name: string;
  points: string[];
}

export const implementationStages: ImplementationStage[] = [
  {
    "name": "Stage 1 · UBB-2 foundation",
    "points": [
      "Ingest API, event stream with dedup and replay, meters, rating, running totals",
      "Event search and observability",
      "Usage visibility and threshold alerts for the pilot customer (the first customer-visible value)"
    ]
  },
  {
    "name": "Gate · Review UBB-2 readings",
    "points": [
      "The team reviews the readings above from the pilot and decides how UBB-1 is built and in what order"
    ]
  },
  {
    "name": "Stage 2 · UBB-1 crawl",
    "points": [
      "Reserve, Confirm and Release, with shadow mode (log would-have-blocked) and thresholds",
      "One pilot customer, balance read from running totals"
    ]
  },
  {
    "name": "Stage 3 · UBB-1 walk",
    "points": [
      "Live balance API, hosted out-of-credits and top-up page, auto-recharge, webhooks",
      "Gateway and connector entry point for a hard stop without code changes"
    ]
  },
  {
    "name": "Stage 4 · Run and scale",
    "points": [
      "Higher-volume rating, leases and local counters, multi-region, a latency commitment",
      "Consumption insights (runaway detection, burn-rate forecasts), and Segment 3 and 7 volumes"
    ]
  }
];

export const entryTiers: ImplementationItem[] = [
  {
    "title": "Tier 0",
    "description": "Connect, run in shadow mode and get alerts and webhooks. No enforcement, no code change beyond sending events."
  },
  {
    "title": "Tier 1",
    "description": "A gateway or connector for AI gateways and SDKs the customer already uses. Gives a hard stop with a base-URL change and no application code."
  },
  {
    "title": "Tier 2",
    "description": "SDK and API (Reserve, Confirm, Release) for custom flows and non-HTTP workloads."
  }
];

export const implementationOpenDecisions: string[] = [
  "Extend Chargebee's current usage handling or run a new pipeline beside it (the recommendation is a new pipeline for high-volume customers, and the existing path for low-volume ones).",
  "The scale target. Metronome's published figure of about 100,000 events per second is the first benchmark; Orb has reported higher figures from secondary sources.",
  "How long raw events are retained, which drives replay, backfill and storage cost.",
  "Fail open or fail closed by default, and whether that differs by segment.",
  "How apps estimate usage before a call, since the estimate sets the hold.",
  "Whether a gateway sees prompts: meter from counts only, retain no payloads, or offer a self-hosted option.",
  "Who owns the denied-state experience: Chargebee's hosted page or the vendor's own UI."
];

export const implementationRisks: string[] = [
  "Customer value arrives later if enforcement waits behind the pipeline. Mitigation: ship usage visibility and alerts in Stage 1.",
  "Correctness at volume (rounding, duplicates, late events) is harder than raw throughput.",
  "Adoption friction on the customer side. Mitigation: the entry tiers.",
  "Drift between the fast balance and the exact ledger. Mitigation: reconciliation, and the readings from the gate.",
  "Chargebee in the request path adds latency and uptime obligations a batch billing system never had.",
  "Chargebee's real architecture has not been reviewed; engineering must confirm feasibility."
];

export const opportunityRestatement =
  "Bucket 1 (Real-Time Enforcement & Scale) has the highest RICE score and sits in the roadmap's 'Now' horizon (Task 5). Building it unlocks credible entry into Segments 1 & 3 (AI Coding/Dev Tool Platforms and Foundation Model/API Providers), the two fastest-growing AI-native segments, where billing competitors already publish ingestion at scale and separate enforcement runtimes are solving the hard stop (Task 4). UBB-2 is built first and UBB-1 follows, informed by what UBB-2 shows.";

export interface ScopePhase {
  phase: string;
  description: string;
}

export const scopePhases: ScopePhase[] = [
  {
    phase: "Stage 1 · UBB-2 foundation",
    description:
      "Event pipeline live with one pilot customer from Segment 1 or 3: ingest, meters, running totals, observability, plus usage visibility and threshold alerts. Manual reconciliation against the existing invoice is acceptable.",
  },
  {
    phase: "Gate",
    description:
      "Review the UBB-2 readings and decide how UBB-1 is built.",
  },
  {
    phase: "Stage 2 · UBB-1 crawl",
    description:
      "Reserve, Confirm and Release with shadow mode and thresholds for the pilot customer, reading from the running totals.",
  },
  {
    phase: "Stage 3 · UBB-1 walk",
    description:
      "Live balance, hosted top-up page, auto-recharge, webhooks and the gateway or connector entry point, with automated reconciliation.",
  },
  {
    phase: "Stage 4 · Run and scale",
    description:
      "Higher-volume rating, leases and local counters, multi-region, a committed latency SLA, insights, and Segments 3 and 7.",
  },
];

export interface SystemLoop {
  id: string;
  type: "Reinforcing" | "Balancing";
  name: string;
  path: string;
  pmImplication: string;
}

export const systemMapIntro =
  "The swimlane shows one transaction. A Staff PM also shows how the capability reshapes the wider system — where it compounds and where it pushes back. '+' means the two move in the same direction; '−' means they move in opposite directions.";

export const systemLoops: SystemLoop[] = [
  {
    id: "R1",
    type: "Reinforcing",
    name: "Growth flywheel",
    path: "Real-time enforcement → Segment 1/3 deals won → more AI-native customers & usage volume → revenue funds further hardening of the capability.",
    pmImplication:
      "Landing the first design-partner logo matters disproportionately — it starts the loop.",
  },
  {
    id: "B1",
    type: "Balancing",
    name: "Scale drag",
    path: "More customers & volume → more load and latency on the real-time path → more false blocks and customer friction → fewer customers.",
    pmImplication:
      "The UBB-2 event pipeline and the balance built from it exist to weaken this loop. Set a latency SLO and cap pilot volume in Stage 2 (UBB-1 crawl).",
  },
  {
    id: "B2",
    type: "Balancing",
    name: "Strictness vs. friction",
    path: "Stricter hard-stops → more false blocks → pressure to loosen hard-stops. Stricter hard-stops also cut leaked/unbilled revenue, so loosening brings leakage back.",
    pmImplication:
      "This is the fail-open vs. fail-closed decision. Mitigate with hold expiry, grace overage, and low-balance warnings before the hard stop.",
  },
  {
    id: "R2",
    type: "Reinforcing",
    name: "Event-data flywheel (UBB-2 feeds UBB-1)",
    path: "More usage events sent through the UBB-2 pipeline → better readings (freshness, late and duplicate rates, burst profile) → better thresholds and hold sizes, so fewer false blocks → more trust in the hard stop → customers connect more traffic and meters.",
    pmImplication:
      "This is why UBB-2 is built first and UBB-1's next steps are decided from its readings. It also means event quality and Tier 0 and Tier 1 adoption are growth levers, not just plumbing.",
  },
];

export interface ApiEndpoint {
  name: string;
  phase: "Foundation" | "Crawl" | "Walk";
  purpose: string;
  sends: string[];
  returns: string[];
}

export const apiContractIntro =
  "A behavioral draft the PM writes and engineering formalizes (e.g. into OpenAPI). It says which calls exist and what information moves in each — not field types or versioning. Illustrative only; these are not existing Chargebee endpoints.";

export const apiEndpoints: ApiEndpoint[] = [
  {
    name: "Ingest Events",
    phase: "Foundation",
    purpose: "Send usage events into the pipeline in batches.",
    sends: ["Batch of events, each with a unique transaction ID, customer, event type, timestamp and properties"],
    returns: ["Accepted or rejected per event (with reason)", "Duplicate indication"],
  },
  {
    name: "Get Usage",
    phase: "Foundation",
    purpose: "Read current usage against a meter for a customer and period.",
    sends: ["Customer", "Meter", "Period"],
    returns: ["Current usage", "Last-updated time", "Threshold status"],
  },
  {
    name: "Reserve",
    phase: "Crawl",
    purpose: "Ask permission and hold an estimated amount before a metered action.",
    sends: ["Customer", "What is being metered", "Estimated quantity", "Unique request ID"],
    returns: ["Approved or Denied (with reason)", "Hold reference", "Remaining balance", "Hold expiry"],
  },
  {
    name: "Confirm",
    phase: "Crawl",
    purpose: "Settle a hold with what was actually used.",
    sends: ["Hold reference", "Actual quantity", "Unique request ID"],
    returns: ["Amount charged", "New balance"],
  },
  {
    name: "Release",
    phase: "Crawl",
    purpose: "Cancel a hold when the action failed or was abandoned.",
    sends: ["Hold reference"],
    returns: ["Confirmation", "Balance restored"],
  },
  {
    name: "Get Balance",
    phase: "Walk",
    purpose: "Let the app or customer see what is left.",
    sends: ["Customer", "What is being metered"],
    returns: ["Current balance", "Amount on hold", "Low-balance flag"],
  },
];

export const apiBusinessRules: string[] = [
  "How long a hold lives before it auto-releases.",
  "What happens when actual usage exceeds the hold (allow negative balance, or cap).",
  "Repeated calls with the same request ID must be safe (no double charge).",
  "What the app does if the service is unreachable — fail open or fail closed.",
  "Ingest: the maximum number of events per request, and the response when a batch is partly rejected.",
  "Ingest: how long a transaction ID is remembered, so a replayed event is not counted twice.",
  "Ingest: how old a backdated event may be, and how a late event changes totals that have already been read.",
  "Ingest: what happens to rejected events (returned with a reason, held for review, or dropped).",
];

export const valueCanvasCustomer = {
  name: "AI-native company with usage or hybrid pricing",
  segments: "Segments 1, 3 and partly 4",
  buyer: "CFO or Head of Finance / RevOps (economic buyer)",
  users: "Product / engineering (instrument usage) and finance ops (reconcile invoices)",
};

export const valueCanvasProfile = {
  jobs: [
    "Launch and change pricing (seats, credits, overage) quickly",
    "Meter usage accurately and bill it correctly",
    "Keep AI compute costs from eating margin",
    "Give customers predictable, trustworthy bills",
    "Close the books and recognise revenue with confidence",
  ],
  pains: [
    "Heavy users burn through credits and the vendor eats the cost (UBB-1)",
    "No hard stop at zero balance, so overage is a surprise for both sides (UBB-1)",
    "Metering and rating at extreme volume and sub-cent prices doesn't scale (UBB-2)",
    "Every pricing change needs engineering work; mid-term changes wait for renewal (CB-5, CB-1)",
    "Can't override limits per customer, meter trials, or pause metered plans (CB-7, CB-3, CB-6)",
    "Can't fix bad usage data or prove a billable outcome (CB-9, UBB-3)",
    "Engineers build billing glue instead of product",
  ],
  gains: [
    "Price changes shipped in days, not quarters",
    "Margin protection with predictable gross margin per plan",
    "Bills customers trust, with fewer disputes",
    "Finance close without manual reconciliation",
    "One platform for seats, usage and contracts as the model evolves",
  ],
};

export const valueCanvasMap = {
  productsServices: [
    "Real-time balance and enforcement: hard stop, throttle, top-up (UBB-1)",
    "High-scale metering and rating (UBB-2)",
    "Usage billing that works with ramps, add-ons, mid-term changes, trials and pause/resume (CB-1 to CB-7)",
    "Outcome validation, audit trail and usage correction (UBB-3, CB-9)",
    "Existing strengths: CPQ, contracts, dunning, tax, rev-rec, invoicing",
  ],
  painRelievers: [
    "Hard stop and alerts at pool or balance exhaustion",
    "Customer-visible live balance and top-up flow",
    "Real-time ingestion and balance engine for scale and sub-cent rating",
    "Mid-term plan changes and ramps that work with usage",
    "Entitlement overrides, trial metering, pause/resume",
    "Usage correction, audit trail and outcome validation",
  ],
  gainCreators: [
    "Pricing agility without re-platforming",
    "Predictable margin through plan-scoped allowances and guardrails",
    "Fewer disputes through live balances and audit trails",
    "A single platform that grows from seats to usage to outcomes",
    "Less engineering time spent on billing",
  ],
};

export const valueCanvasFit =
  "For AI-native companies whose pricing is hybrid and whose costs are variable, Chargebee becomes the billing platform that enforces limits in real time and lets them change pricing without engineering work, so they protect margin and keep customers' trust.";

export const valueCanvasCaveat =
  "Jobs, pains and gains are hypotheses drawn from the segment analysis and gap list, not customer interviews. Validate with customers before committing.";


export const paradigmShifts: { title: string; detail: string }[] = [
  {
    title: "From selling inputs to selling outcomes.",
    detail:
      "Software and services used to be priced on effort (licences, hours, headcount). AI products increasingly deliver the finished work, so price moves toward the result (a resolved ticket, a qualified lead).",
  },
  {
    title: "Seats stop tracking value.",
    detail:
      "When agents do the work, the number of human users says little about what the customer gets. Pricing units shift to credits, runtime, tasks and outcomes.",
  },
  {
    title: "Cost now scales with use.",
    detail:
      "Every AI call costs real compute, unlike traditional software where extra use was nearly free. Pricing has to protect margin as well as capture value.",
  },
  {
    title: "Hybrid models are the reality.",
    detail:
      "Few companies are fully usage- or outcome-based. Most combine a base subscription, a pooled credit allowance and pay-as-you-go overage.",
  },
  {
    title: "Pricing becomes continuous.",
    detail:
      "Models, costs and customer behaviour change quickly, so pricing is revised often, not once a year. Billing has to make those changes cheap and safe.",
  },
];
