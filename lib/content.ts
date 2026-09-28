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
    bestCompetitors: "Amberflo, Meteroid (OSS)",
    keyReason:
      "Only platforms with native hard-stop blocking + AI-scale event ingestion.",
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
  "Metronome tracks usage and generates billing data, but does not enforce access at runtime — teams need a separate entitlement system to control access before billing. This isn't Metronome handling it poorly; billing systems were never designed to operate as real-time enforcement infrastructure. This applies broadly — no platform in the market natively solves the UBB-3 outcome-validation gap (Bucket 4, tied to Segment 4). That remains an application-layer problem everywhere.";
