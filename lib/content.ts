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

export interface RiceScore {
  bucketId: number;
  reach: number;
  reachRationale: string;
  impact: number;
  impactRationale: string;
  confidence: number;
  confidenceRationale: string;
  effort: number;
  effortRationale: string;
  score: number;
}

export const riceScores: RiceScore[] = [
  {
    bucketId: 1,
    reach: 9,
    reachRationale: "Segments 1 & 3, near-existential for foundation-model providers.",
    impact: 3,
    impactRationale: "Massive — blocks Chargebee's most immediate AI-native segments outright.",
    confidence: 0.9,
    confidenceRationale: "Amberflo/Meteroid prove both demand and feasibility.",
    effort: 12,
    effortRationale:
      "Real-time enforcement + high-volume ingestion rework — two hard problems bundled in one bucket.",
    score: 2.03,
  },
  {
    bucketId: 4,
    reach: 5,
    reachRationale:
      "Segment 4 (UBB-3) plus general correction needs (CB-9) across all UBB customers.",
    impact: 2,
    impactRationale: "High — trust/compliance matters a lot for enterprise deals.",
    confidence: 0.6,
    confidenceRationale:
      "Orb/Lago/BillingPlatform solve data integrity broadly, but nobody solves UBB-3 outcome-validation — an industry-wide gap.",
    effort: 6,
    effortRationale: "Audit trail + dispute workflow — contained scope.",
    score: 1.0,
  },
  {
    bucketId: 2,
    reach: 6,
    reachRationale:
      "Broad — touches any UBB customer wanting ramps/mid-term changes, especially Segments 1 & 6.",
    impact: 2,
    impactRationale: "High — blocks smooth pricing evolution, though workarounds exist (wait for renewal).",
    confidence: 0.8,
    confidenceRationale: "Orb/Metronome prove demand; Chargebee's core subscription model needs real changes.",
    effort: 10,
    effortRationale: "4 gaps bundled — ramps, mixed frequencies, mid-term changes, entitlement overrides.",
    score: 0.96,
  },
  {
    bucketId: 5,
    reach: 3,
    reachRationale: "Single gap, narrower reach but relevant across segments with metered components.",
    impact: 1,
    impactRationale: "Medium.",
    confidence: 0.9,
    confidenceRationale: "Zuora/Maxio prove it's a solved problem elsewhere — high confidence.",
    effort: 3,
    effortRationale: "Single, contained gap.",
    score: 0.9,
  },
  {
    bucketId: 3,
    reach: 5,
    reachRationale: "Mostly enterprise ops hygiene (Segment 5 + general).",
    impact: 1,
    impactRationale: "Medium.",
    confidence: 0.7,
    confidenceRationale: "Zuora/BillingPlatform prove feasibility, but it's a moderate architectural lift.",
    effort: 8,
    effortRationale: "Calendar-billing engine changes are a real lift.",
    score: 0.44,
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
    bucketIds: [1, 5],
    rationale:
      "B1 is the top RICE score and competitively urgent — Amberflo/Meteroid are AI-native specialists directly threatening Chargebee's AI-segment expansion. B5 runs in parallel as a cheap, low-effort quick win on a different engineering surface, so it doesn't compete with B1 for the same resources.",
  },
  {
    id: 2,
    name: "Next",
    bucketIds: [4, 2],
    rationale:
      "B4 is a chance to lead, not just catch up — nobody in the market solves UBB-3 today. B2 is broad-reach, table-stakes catch-up against Orb/Metronome for pricing evolution.",
  },
  {
    id: 3,
    name: "Later",
    bucketIds: [3],
    rationale:
      "Lowest RICE score, most enterprise-specific, and the least differentiation upside — catching up to Zuora/BillingPlatform here can wait.",
  },
];

export interface ValueHorizon {
  horizonId: number;
  investment: string;
  unlocks: string;
  valueType: string;
  narrative: string;
}

export const valueHorizons: ValueHorizon[] = [
  {
    horizonId: 1,
    investment: "15 person-months (B1 + B5)",
    unlocks: "Credible entry into Segments 1 & 3 (AI Coding/Dev Tools, Foundation Model/API Providers)",
    valueType: "Growth — removes a sales disqualifier",
    narrative:
      "Without real-time enforcement, Chargebee cannot win logos like Replit- or OpenAI-scale accounts at all — this isn't an incremental improvement, it's the entry ticket to the fastest-growing AI-native segments.",
  },
  {
    horizonId: 2,
    investment: "16 person-months (B4 + B2)",
    unlocks:
      "B4: first-mover position in Segment 4 (Outcome-Based AI) since no competitor solves UBB-3; B2: unblocks pricing evolution for all existing UBB customers",
    valueType: "Category leadership (B4) + retention/expansion (B2)",
    narrative:
      "B4 is a chance to define the outcome-billing category rather than follow Orb/Metronome/Zuora into it. B2 protects expansion revenue on customers already on UBB who currently can't get a ramp or mid-term change without waiting for renewal.",
  },
  {
    horizonId: 3,
    investment: "8 person-months (B3)",
    unlocks: "Enterprise scheduling parity (Segment 5 + general ops)",
    valueType: "Defensive retention",
    narrative:
      "Lowest urgency — protects existing enterprise relationships from Zuora/BillingPlatform-style poaching, but doesn't open new segments.",
  },
];

export const whyNowNote =
  "The market consolidated in 2026 (Stripe+Metronome, Adyen+Orb, Salesforce+m3ter) — competitors aren't point solutions anymore, they're bundled into platforms Chargebee's own prospects already use. Every quarter of delay compounds this gap.";

export const costOfInactionNote =
  "Staying flat means ceding Segments 1, 3, and 4 to Stripe+Metronome, Adyen+Orb, and Flexprice by default — not because Chargebee loses deals on price, but because it's structurally disqualified before pricing even comes up.";
