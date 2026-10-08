# Whiteboard Notes

Interview prep for the Chargebee Staff PM whiteboarding session.

## 1. Framing: Two Types of Billing

Chargebee's customer base is split across two types of billing:

1. **Recurring subscription**
2. **Usage-based billing (UBB)**

### Recurring subscription

Usually consists of:

- Flat fee per unit
- Tiered / volume
- Stair-step
- Package subscriptions

- **How it works:** Customers pay a set amount for a fixed period (flat-rate, per-seat, or tiered) regardless of how much or little they use the product.
- **Revenue predictability:** High; companies can easily forecast Monthly Recurring Revenue (MRR) and Annual Recurring Revenue (ARR).
- **Customer experience:** Predictable bills with no surprises, though customers may feel overcharged if they underutilize the service ("shelfware").

### Usage-based billing

With the current trend, usage-based billing is the one that is growing. It already exists at AWS, Snowflake, Twilio, Jira, etc.

- **How it works:** Customers pay a "pay-as-you-go" rate tied directly to metered metrics (e.g., gigabytes stored, tokens processed, or active transactions).
- **Revenue predictability:** Low to variable; income fluctuates based on customer activity, seasonality, or scaling patterns.
- **Customer experience:** Fair and transparent because costs scale linearly with value received, though customers risk "sticker shock" from unexpected spikes in usage.

**The challenge now:** how is usage-based billing different with the influx of AI-related products in the market?

## 2. How AI Changes Usage-Based Billing

**One-liner:** Traditional usage billing meters cheap, predictable units. AI usage is expensive, volatile, and hard to define, so billing has to move from recording usage after the fact to controlling it in real time.

| Dimension | Traditional UBB (AWS, Snowflake, Twilio) | AI-era UBB |
|---|---|---|
| **Cost to serve** | Near-zero marginal cost, so margins are high and a billing error is cheap | Every call costs real GPU money, so one heavy user can be unprofitable. COGS tracking matters. |
| **Billable unit** | Clear and infrastructure-observable (GB, API call, message) | Fuzzy: tokens, credits, agent runs, resolved outcomes. The unit may be defined by the customer's product logic, not the platform. |
| **Volume and granularity** | High | Extreme: billions of events a day at sub-cent prices |
| **Usage pattern** | Fairly steady and forecastable | Spiky and unpredictable. One agent loop can burn a month's budget in minutes. |
| **Pricing shape** | Pure pay-as-you-go | Hybrid: seat plus pooled credits plus overage. Prepaid wallets, commits, and credits that expire. |
| **Price volatility** | Prices change rarely | Model prices fall fast and models change often, so pricing is revised constantly, sometimes mid-term |
| **Control** | Bill at the end of the cycle and invoice the bill shock | Needs real-time balance checks, hard caps, and alerts, because the damage happens before invoicing |
| **Trust and audit** | Metering is a technical fact | Outcome billing needs validation and disputes ("was that really a resolution?") |

### Four shifts to say out loud

1. **Margin risk.** Usage is now a cost, not just revenue, so billing has to connect price to cost and plan allowance.
2. **Unit ambiguity.** Tokens are not what customers understand, so vendors abstract them into credits or outcomes.
3. **Real-time enforcement.** Billing becomes part of the product's control plane (block, throttle, top up).
4. **Hybrid everything.** Customers want predictability, vendors want upside, so seat, credit pool, and overage get combined.

### Link to the gap analysis

- Real-time enforcement and scale -> Bucket 1
- Plan flexibility with UBB -> Bucket 2
- Outcome validation and audit -> Bucket 4

### Likely pushback

*"Isn't this just Twilio at higher volume?"* No. It differs in kind, not just scale: the unit isn't observable, the cost is material, and the control has to happen before the invoice.

## 3. AI-Native ICP Segments

Six segments, chosen so each represents a genuinely different **billing mechanic**, not just a different vertical. Each one demands a different capability from the platform.

| # | Segment | Examples | Billing shape | Why distinct |
|---|---|---|---|---|
| 1 | **AI coding / dev tool platforms** | Replit, Cursor | Seat tiers (Replit Core $20/mo, Pro $100/mo; Cursor Pro $20/mo, Pro+ $60/mo, Ultra $200/mo) with a pooled monthly usage credit, then pay-as-you-go overage | Usage pool is sized to the seat tier, so overage must reconcile against a plan-specific allowance, not a flat rate |
| 2 | **Consumer AI companion / chat apps** | Replika, Character.AI | Flat consumer subscription (c.ai+ $9.99/mo) plus in-app virtual currency (Replika Coins and Gems) | High-volume, low-contract-value billing: dunning and failed-payment recovery matter more than metering precision |
| 3 | **Foundation model / API providers** | OpenAI, Mistral AI | Per-token metering drawn down against a prepaid credit balance (min. $5 top-up, credits expire), plus custom enterprise commits | Extreme metering volume and granularity with real-time balance enforcement |
| 4 | **Outcome-based AI platforms** | Intercom Fin | Per resolved outcome ($0.99 per resolution, $9.99 per qualified lead), $49/mo plan bundling 50 resolutions | The billable unit is a business outcome defined by the customer's product logic, so Chargebee must ingest an external outcome signal |
| 5 | **Vertical enterprise AI-native** | Harvey (legal AI) | No public pricing; sales-quoted seats, 20-50 seat minimums, 12-month terms | A contract-management problem, not a metering problem |
| 6 | **Seat-based SaaS layering in AI** | Notion AI, Salesforce Agentforce | AI gated into an existing seat tier or sold as a metered add-on (Notion Custom Agents $10/1,000 credits; Salesforce Flex Credits $500/100K) | Must coexist with a legacy seat contract and its renewal cycle |

### Spectrum to draw

- **Billing = contract:** Segment 5
- **Billing = subscription:** Segments 1, 2, 6
- **Billing = event:** Segments 3, 4

The platform has to span all of them. That is the platform argument for the whole case.

### Likely pushback

- *Why not segment by company size or vertical?* Size and vertical don't predict which billing capability gets built. Mechanic does.
- *Which segment first?* Segments 5 and 6 are the existing-SaaS bridge, and the gap analysis found no material gap there. The new build goes to Segments 1, 3, and 4.
- *Isn't Segment 6 just regular SaaS?* Yes, which is the point: it is the migration path that serves the mandate to keep serving existing SaaS customers.

## 4. Industry Signals

### Webinar: "Monetization in Motion: Pricing Lessons for the Value Era"

Speakers: Alexandra Demopoulis (Monetization Leader, Aiven) and Andrew (Co-founder, Metronome / Stripe).

*Source note: taken from a third-party summary of the webinar. Metronome is a direct competitor to Chargebee in usage billing, so treat this as a competitor's framing, not neutral evidence.*

1. **Find the true value metric.** Price on the value delivered (reliability, performance, security, saved engineering hours), not on raw cost pass-through such as nodes, CPU, or RAM.
2. **Continuous pricing, not periodic reviews.** Annual or quarterly reviews are obsolete. Pricing is an operational loop combining usage observability, pricing strategy, and dynamic billing/metering.
3. **Seat-based models decay.** AI agents are becoming both the users and the buyers of software, which drives new metrics such as app runtime minutes and usage credits. Pure outcome pricing is an aspiration; most companies land on hybrid models (base subscription, usage meters, credit wallets).
4. **Cost guardrails and packaging.** AI has heavy, variable backend costs (LLM tokens, GPU compute). Use packaging, credit tiers, and usage guardrails to protect margins while keeping the public metric value-driven.

### How it maps to the case

| Webinar point | Case study link |
|---|---|
| Hybrid models win | Segments 1 and 6 preferred models (seat + pool + overage) |
| Credit wallets and guardrails | Bucket 1 gaps (hard stops, prepaid balance enforcement) |
| Continuous pricing loop | Bucket 2 gaps (mid-term changes, ramps with usage) |
| Outcome pricing is an aspiration | Segment 4 is real but a minority, so sequence it after Segments 1 and 3 |
| Seat decay | Segment 6 needs a migration path, not just add-ons |

### Caveats

- Speaker bias: the Metronome co-founder favors usage-first platforms.
- "Seats are dying" is a prediction. Replit, Cursor, Notion, and Harvey all still charge per seat.
- Cite as an industry signal, not as proof.

### One-liner for the value story

*"Even usage-first vendors say pricing is moving to hybrid and continuous, which means billing infrastructure has to support rapid, safe pricing change. That is a platform capability, not a feature."*

## 5. Value Proposition Canvas

**Customer:** AI-native company with usage or hybrid pricing (Segments 1, 3 and partly 4).
**Buyer:** CFO or Head of Finance / RevOps. **Users:** product / engineering (instrument usage) and finance ops (reconcile invoices).

### Customer profile

| Jobs to be done | Pains | Gains |
|---|---|---|
| Launch and change pricing (seats, credits, overage) quickly | Heavy users burn through credits and the vendor eats the cost (UBB-1) | Price changes shipped in days, not quarters |
| Meter usage accurately and bill it correctly | No hard stop at zero balance, so overage is a surprise for both sides (UBB-1) | Margin protection with predictable gross margin per plan |
| Keep AI compute costs from eating margin | Metering and rating at extreme volume and sub-cent prices doesn't scale (UBB-2) | Bills customers trust, with fewer disputes |
| Give customers predictable, trustworthy bills | Every pricing change needs engineering work; mid-term changes wait for renewal (CB-5, CB-1) | Finance close without manual reconciliation |
| Close the books and recognise revenue with confidence | Can't override limits per customer, meter trials, or pause metered plans (CB-7, CB-3, CB-6) | One platform for seats, usage and contracts as the model evolves |
| | Can't fix bad usage data or prove a billable outcome (CB-9, UBB-3) | |
| | Engineers build billing glue instead of product | |

### Value map

**Products & services**
- Real-time balance and enforcement: hard stop, throttle, top-up (UBB-1)
- High-scale metering and rating (UBB-2)
- Usage billing that works with ramps, add-ons, mid-term changes, trials and pause/resume (CB-1 to CB-7)
- Outcome validation, audit trail and usage correction (UBB-3, CB-9)
- Existing strengths: CPQ, contracts, dunning, tax, rev-rec, invoicing

**Pain relievers**
- Hard stop and alerts at pool or balance exhaustion
- Customer-visible live balance and top-up flow
- Real-time ingestion and balance engine for scale and sub-cent rating
- Mid-term plan changes and ramps that work with usage
- Entitlement overrides, trial metering, pause/resume
- Usage correction, audit trail and outcome validation

**Gain creators**
- Pricing agility without re-platforming
- Predictable margin through plan-scoped allowances and guardrails
- Fewer disputes through live balances and audit trails
- A single platform that grows from seats to usage to outcomes
- Less engineering time spent on billing

### Fit statement

For AI-native companies whose pricing is hybrid and whose costs are variable, Chargebee becomes the billing platform that enforces limits in real time and lets them change pricing without engineering work, so they protect margin and keep customers' trust.

*Caveat: jobs, pains and gains are hypotheses drawn from the segment analysis and gap list, not customer interviews. Validate with customers before committing.*
