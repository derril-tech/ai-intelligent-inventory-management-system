# THE PROJECT BRIEF #

# Project Name #
Intelligent Inventory Management System

# Product Description / Presentation #


# StockSense AI — Intelligent Inventory Management System

**Tagline:** *Right stock, right place, right time—predict, optimize, and execute.*

> **Important:** StockSense provides decision support for planning and execution. It is **not** a substitute for financial or regulatory advice. Always review AI‑generated plans before execution in production systems.

---

## 1) Product Description / Presentation

### Executive Summary

StockSense AI is an **end‑to‑end inventory intelligence platform** that unifies **demand forecasting**, **policy optimization** (s,S / Min‑Max / EOQ / base‑stock / MRP), and **multi‑echelon replenishment** across DCs, stores, and vendors. Built with **Next.js 14**, **FastAPI**, **PostgreSQL + pgvector (+ optional TimescaleDB & PostGIS)**, and **Redis**, orchestrated via **LangGraph** with **LangChain** tools (and optional **CrewAI** roles), it blends **time‑series ML**, **RAG‑grounded reasoning**, and **operational automation** to cut stockouts, slash overstock, and boost OTIF.

**Business Outcomes**

* Stockouts ↓ **30–60%** with accurate forecasts + optimized safety stock.
* Working capital ↓ **15–30%** via right‑sizing inventory and cycle stock.
* OTIF ↑ and expedites ↓ through lead‑time modeling and vendor collaboration.

---

### Core Capabilities

* **Data Connect & Cleanse**: Ingest POS/orders, on‑hand, receipts, returns, supplier catalogs, lead times, promos, seasons; schema mappers; anomaly detection (bad spikes, negative stock).
* **Forecasting Workbench**: Hierarchical forecasts (SKU→Category→Region); classical + ML (ETS/ARIMA/Prophet/XGBoost) with **model ensembling**; cold‑start & sparse demand (Croston/TSB); promo/price elasticity features; **MAPE/WAPE** dashboards and backtests.
* **Policy Optimization**: Service‑level targets; **safety stock** via service curves and lead‑time distributions; EOQ with carrying/ordering cost; **(s,S)** / Min‑Max / base‑stock computation per item‑location; perishables with shelf‑life.
* **Multi‑Echelon Replenishment (MEO)**: Propagate demand across network; push/pull strategies; DC→store allocations; truck/case pack rounding; vendor MOQs/tiers.
* **Lead‑Time Intelligence**: Learned lead‑time distributions by supplier/route; variability alerts; ETA predictions.
* **Allocation & ATP/CTP**: Available‑to‑Promise and Capable‑to‑Promise considering open POs, in‑transit, constraints.
* **What‑If & Scenarios**: Simulate shocks (promo, new store, supplier delay); compare KPIs; export plans.
* **Execution Automation**: Auto‑create POs/transfers (approval gated); vendor collab portal; exception queues (stockout risk, excess, shrinkage, quality).
* **Warehouse Ops Assist**: Wave suggestions, slotting hints, cycle counts, ABC/XYZ classification; RFID/barcode reconciliation; shrinkage outlier detection.
* **Governance & Explainability**: Every recommendation includes rationale: forecast drivers, policy math, and source citations.

---

### Multi‑Agent Team (optional CrewAI roles)

* **Demand Forecaster** — builds/chooses models, explains accuracy and drift.
* **Replenishment Optimizer** — sets policies, computes orders/transfers, validates constraints.
* **Allocation Planner** — distributes limited stock by priority/SLA.
* **Supplier Liaison** — negotiates MOQs/lead‑time updates, shares forecasts.
* **Risk Sentinel** — monitors disruptions, flags exceptions, proposes mitigations.
* **Ops Coach** — WMS tips (slotting, waves, cycle counts) and labor smoothing.

---

### User Journeys

1. **Connect** ERPs/WMS/e‑commerce → map SKUs/locations → baseline health.
2. **Forecast** categories/SKUs with seasonality & promos → approve.
3. **Optimize** service levels and policies → compute safety stock & reorder points.
4. **Plan** multi‑echelon replenishment → allocations → truck‑fit rounding.
5. **Execute** create POs/transfers (via connectors) → vendor confirms → track.
6. **Monitor** dashboards (fill rate, turns, DOS, OTIF, MAPE) → exceptions.
7. **Improve** feedback loops retrain models & adjust policies.

---

### Frontend (Next.js 14 + React 18 + TS + Tailwind)

* **Control Tower**: network map, KPI tiles (fill rate, stockouts, turns, DOS, OTIF), alerts.
* **Forecast Studio**: accuracy charts, feature views, backtests, model selection.
* **Policy Lab**: service curves, (s,S)/Min‑Max calculators, carrying vs stockout cost slider.
* **MEO Planner**: DC→store flows, case/truck rounding, vendor MOQs; allocation matrix.
* **Lead‑Time Explorer**: histograms, variability trends, supplier scorecards.
* **Execution**: PO/TO queue, approvals, vendor portal status.
* **What‑If Sandbox**: scenario runner, KPI deltas, export.
* **Ops Console**: ABC/XYZ, slotting hints, cycle count picks.
* **UX**: WebSockets streaming (jobs, forecasts), dark/light, keyboard palette, WCAG 2.1 AA.

---

### Backend (FastAPI + Python 3.11 + Async SQLAlchemy 2.0)

* **Auth & RBAC**: JWT + SSO (SAML/OIDC), row‑level security by org.
* **Services**: ingestion, cleansing, forecasting, policies, replenishment, allocations, lead‑time, execution (PO/TO), vendors, analytics, exceptions, audits.
* **Pipelines**: workers (Redis) for ETL → feature build → train/backtest → optimize → plan → execute; scheduled + event‑driven.
* **Data**: PostgreSQL + **pgvector** (text embeddings for RAG); optional **TimescaleDB** for time‑series; **PostGIS** for geo (stores, routes).
* **Observability**: OpenTelemetry traces; Prometheus/Grafana; structured JSON logs; cost ledger.

---

### Integrations (Core)

* **ERP/WMS**: SAP, Oracle NetSuite, Microsoft Dynamics 365, Infor, Blue Yonder, Manhattan.
* **Commerce**: Shopify, Magento, BigCommerce, Amazon Seller/Vendor Central.
* **Logistics**: EDI (850/855/856/810), carrier APIs (UPS/FedEx/DHL), 3PLs.
* **Data Lakes/Files**: S3/GCS/Azure, SFTP/CSV/Parquet; barcode/RFID readers.
* **Comms**: Slack/Teams, email, webhooks for approvals.

---

### AI Orchestration & Retrieval

* **Framework Choice**: **LangGraph** for deterministic pipelines (ingest → forecast → optimize → plan → execute → monitor); **LangChain** tools for loaders/retrievers; **RAG** over SOPs, policy math, vendor contracts, and historical exceptions; optional **CrewAI** agent layer.
* **Models**: GPT‑4 family & Claude for reasoning/explanations; traditional TS/ML for forecasts (libraries via Python workers).
* **Guardrails**: cite‑or‑refuse, unit checks (quantities, pack sizes), cost‑sanity tests, and approval gates before execution.

---

### Data Model (selected)

* **organizations**, **users**(roles)
* **items**(sku, upc, category, unit, case\_pack, shelf\_life)
* **locations**(type\[store/DC], geo, capacity)
* **inventory\_balances**(item\_id, location\_id, on\_hand, allocated, in\_transit, safety\_stock, updated\_at)
* **forecasts**(item\_id, location\_id, horizon, version, values\[], mape, params)
* **lead\_times**(supplier\_id, route, mean, std, dist\_json, updated\_at)
* **suppliers**(terms, moq, tier\_prices, score)
* **orders**(type\[PO/TO/SO], lines\[], status, eta)
* **policies**(item\_id, location\_id, method, service\_level, s, S, eoq, review\_cycle)
* **allocations**(plan\_id, qty, priority, rationale)
* **events**(promo, outage, holiday)
* **audits**(actor, action, resource, purpose, timestamp)

---

### API Surface (sample)

**REST**

* `POST /ingest/run` (source config) — start ETL job
* `POST /forecast/run` — train/backtest; `GET /forecast/{sku}/{loc}`
* `POST /policy/optimize` — compute (s,S)/Min‑Max/EOQ
* `POST /plan/replenishment` — multi‑echelon plan; `POST /allocate`
* `POST /orders` — create PO/TO draft; `POST /orders/{id}/approve`
* `GET /kpi/dashboard` — fill rate, WAPE, DOS, turns, OTIF

**WebSockets**

* `/ws/jobs/{id}` streaming job status; `/ws/plan/{id}` plan diffs

---

### Security, Privacy & Compliance

* Tenant isolation (RLS), principle of least privilege, secrets rotation.
* PII minimization, data retention policies, full audit trail of recommendations and approvals.
* EDI handling with encryption in transit/at rest.

---

### Deployment & Scaling

* **Frontend**: Vercel (ISR, edge cache).
* **Backend**: Render autoscaling; workers for ETL/ML/optimization; Redis queues & rate limits.
* **DB**: PostgreSQL (+TimescaleDB/PostGIS optional) with **pgvector**; PITR; nightly backups.

**Env Vars (excerpt)**

```
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
S3_BUCKET=
ERP_CONNECTORS=
EDI_CONFIG=
ALLOWED_ORIGINS=
```

---

## Success Metrics

* **Service Level**: ≥ target (e.g., 95–98%) across A items.
* **Forecast Accuracy**: WAPE ≤ **15%** (category‑dependent) with continuous backtests.
* **Capital Efficiency**: inventory turns ↑ **20%**; DOS ↓.
* **Execution**: OTIF ≥ **98%**; expedite spend ↓.
* **Quality**: > **95%** of recommendations with rationale and constraint checks.

---

## 2) Framework Choice (LangGraph + LangChain + RAG \[+ CrewAI])

* **LangGraph** delivers **deterministic, auditable** flows with retries/timeouts—vital for supply chain.
* **LangChain** provides mature connectors, retrievers, output parsers, vector store interfaces (pgvector).
* **RAG** grounds recommendations in **policies, contracts, and history**, reducing hallucinations.
* **CrewAI (optional)** lets us map to operational roles for human‑in‑the‑loop collaboration.

---

## 3) Dev Team Brief

### Goals

Ship a **Fortune‑500‑ready** inventory platform that forecasts, optimizes policies, plans replenishment, and automates execution—**explainably and safely**.

### Deliverables

1. Next.js frontend (Control Tower, Forecast Studio, Policy Lab, MEO Planner, Lead‑Time Explorer, Execution, Sandbox).
2. FastAPI backend (ingestion, forecasting, policies, planning, execution, vendors, exceptions) with WebSockets.
3. PostgreSQL schema (+pgvector/+TimescaleDB + PostGIS), Redis queues, hybrid search.
4. LangGraph workflows + LangChain retrievers; guardrails; RAG corpora.
5. Connectors (ERP/WMS/Commerce/EDI/3PL) + notifications + vendor portal.
6. CI/CD, tests (unit/integration/e2e), OpenAPI docs; Vercel + Render configs.

### Milestones

* **M1 (Weeks 1–2)**: Repos, auth/SSO, connectors, ingestion/cleansing, base KPIs.
* **M2 (Weeks 3–4)**: Forecast Studio + backtesting; Policy Lab; lead‑time learning.
* **M3 (Weeks 5–6)**: MEO Planner + allocation + execution drafts (PO/TO) with approvals.
* **M4 (Weeks 7–8)**: Exception management, scenario sandbox, hardening, GA.

### Definition of Done

* Recommendations include math + citations; approval gates enforced.
* WCAG AA; Lighthouse ≥95; tests >90%; OpenAPI published; audit logs immutable.
* Connectors pass reliability + idempotency tests; rollbacks validated.

### Coding Standards

* Ruff/Black/mypy; eslint/prettier; pre‑commit; conventional commits; feature flags & DB migrations.

### Repo Structure

```
/apps
  /web (Next.js 14)
  /api (FastAPI)
/packages
  /ui (tailwind components)
  /workflows (LangGraph graphs)
  /retrievers (LangChain tools)
  /connectors (ERP/WMS/EDI/3PL/e‑com)
  /lib (shared types/clients)
/infra (IaC, deploy configs)
/tests (backend, frontend, e2e)
```

---

## Critical Prompts for Claude (Intelligent Inventory Management)

**Prompt 1 — Project Setup & Architecture**

> "Create the complete project structure and architecture for **StockSense AI**. Set up Next.js 14 + TypeScript + Tailwind, FastAPI with async SQLAlchemy + JWT/SSO/MFA, PostgreSQL with **pgvector** (+ optional TimescaleDB & PostGIS), Redis, deploy configs for Vercel (frontend) and Render (backend). Include CI workflows, env templates, and scaffolding for **LangGraph** workflows with **LangChain** tools and an inventory **RAG** layer."

**Prompt 2 — Core Backend Implementation**

> "Implement the FastAPI backend: items/locations/inventory\_balances/forecasts/lead\_times/suppliers/policies/allocations/orders/events/audits models and endpoints; ETL pipelines (cleanse → feature build → train/backtest → optimize → plan → execute); embeddings into pgvector; hybrid retrieval (BM25 + dense); JWT + RBAC + RLS; WebSockets for streaming; logging/OTel; immutable audit trails; connectors for ERP/WMS/EDI/3PL and e‑commerce."

**Prompt 3 — Frontend Components & UI**

> "Build the Next.js UI: Control Tower, Forecast Studio, Policy Lab, MEO Planner, Lead‑Time Explorer, Execution queue with approvals, What‑If Sandbox, and vendor portal. Ensure dark/light themes and WCAG 2.1 AA."

**Prompt 4 — AI Integration & Features**

> "Wire **LangGraph** flows (ingest → forecast → optimize → plan → execute → monitor) using **LangChain** retrievers over SOPs, contracts, and historical exceptions. Enforce cite‑or‑refuse, unit/capacity sanity checks, service‑level targets, and human approval gates. Add backtesting dashboards (MAPE/WAPE), scenario analysis, and exception classification with remediation playbooks."

**Prompt 5 — Deployment & Optimization**

> "Prepare for production: Vercel + Render configs, TimescaleDB & pgvector tuning, Redis rate limits/queues, Playwright e2e tests, load/perf tests, OpenAPI docs, monitoring/alerts (Prometheus/Grafana), backups/PITR, a11y/perf audits, and SLO dashboards (fill rate, WAPE, DOS, OTIF, expedite spend)."

---

## Roadmap (90 Days)

* **Day 30**: Ingestion/cleansing MVP, Forecast Studio, baseline KPIs.
* **Day 60**: Policy Lab + MEO Planner, vendor portal alpha, execution drafts.
* **Day 90**: Exception management GA, scenario sandbox, SSO/SAML, multi‑region scale.

---

## One‑Slide Pitch

**What**: An AI platform that forecasts, optimizes, plans, and executes inventory decisions—end to end.
**Why it wins**: Deterministic orchestration + explainable math + multi‑echelon optimization + robust connectors.
**Who**: Retail, CPG, e‑commerce, wholesale, and manufacturing networks.
**CTA**: *“Stop guessing. Stock smart.”*



FOLLOW THIS 8 STEP PLAN TO PREPARE THE INFRASTRUCTURE
-----------------------------------------------------

# 🚀 Claude Fullstack Repo Prep – Optimized 8 Step Plan

  
The goal: build an extensive frontend + backend scaffold so Claude Code only has to finish ~20% of the work.  
Each step must be **completed ** before advancing  (this is important).
IMPORTANT: YOU ARE BUILDING ONLY THE INFRASTRUCTURE OF THE APPLICATION NOT THE APPLICATION ITSELF !!!. FOLLOW THE STEPS IN NUMERICAL ORDER !!! starting from step 1.
You are doing the groundwork for the application, including setting up the folder structure, configuration files, and any necessary boilerplate code.
IMPORTANT: the checklist in each step has to be checked off 100% before moving to the next step. And always provide comments to your code blocks so that even a non-tech person can understand what you have done.

---

## STEP 1 — Build the Rich Infrastructure
Create a **deep scaffold** for both frontend and backend so Claude code can recognize the architecture immediately.

- Build a **frontend app shell** with routing, placeholder pages, components, and styling setup.  
- Build a **backend app shell** with API structure, health endpoint, and config in place.  
- Include `REPO_MAP.md`, `API_SPEC.md`, and a draft `CLAUDE.md` in the `docs/` folder.  (create the docs folder if it does not  already exist)
- Add **TODO markers and folder-level `_INSTRUCTIONS.md`** files so Claude knows exactly where to add logic.

**Deliverables**
- Frontend app shell with routing, placeholder pages, components, and styling setup  
- Backend app shell with API structure, health endpoint, and config  
- `docs/REPO_MAP.md`, `docs/API_SPEC.md` (stub), and draft `docs/CLAUDE.md`  
- TODO markers + folder-level `_INSTRUCTIONS.md` files  

**Checklist**
- [ ] Frontend scaffold built  
- [ ] Backend scaffold built 
- [ ] Docs folder created with drafts (`REPO_MAP.md`, `API_SPEC.md`, `CLAUDE.md`)  
- [ ] TODO markers and `_INSTRUCTIONS.md` stubs in place  

---

## STEP 2 — Enrich the Scaffold
If the repo looks shallow, enrich it so Claude needs fewer leaps of imagination.  

Add:
- Sample frontend routes and components (`/`, `/about`, `/dashboard`)  
- Domain model stubs and types/interfaces  
- Mock data + fixtures for UI flows  
- README files with quick run instructions for both frontend and backend  
- Instructions embedded in folders (e.g. `CLAUDE_TASK: …`)

**Deliverables**
- Sample routes and pages (`/`, `/about`, `/dashboard`)  
- Domain model stubs and type definitions  
- Mock data and fixtures for UI flows  
- README files for frontend and backend with run instructions  
- Folder-level instructions (`_INSTRUCTIONS.md`)  

**Checklist**
- [ ] At least 2–3 sample routes/pages exist  
- [ ] Domain types/interfaces stubbed out  
- [ ] Mock data + fixtures included  
- [ ] README_FRONTEND.md and README_BACKEND.md added  
- [ ] Each folder has `_INSTRUCTIONS.md` where relevant 

---

## STEP 3 — Audit for Alignment
Check that the scaffold actually matches the product brief, tech specs, and UX /UI goals.
Add additional UI/UX elements (if needed) to make the application visually appealing (and update the design requirements after that)

- Do navigation and pages reflect the product’s main flows?  
- Do API endpoints match the UI needs?  
- Is the chosen tech stack consistent (no unused or conflicting libraries)?  
- Is the UX direction reflected (design tokens, layout, component stubs)?

**Deliverables**
- Alignment review across Product ↔ UI/UX ↔ Tech  
- Identify any missing flows, mismatched libraries, or conflicting instructions  

**Checklist**
- [ ] Navigation structure matches product journeys  
- [ ] Components/pages map to required features  
- [ ] API endpoints cover MVP needs  
- [ ] No contradictory or unused technologies  

---

## STEP 4 — Document the Architecture
Now make the docs **Claude-ready**:

- **REPO_MAP.md**: Full repo breakdown with roles of each folder  
- **API_SPEC.md**: Endpoints, payloads, error handling  
- **CLAUDE.md**: Editing rules, coding conventions, AI collaboration guidelines  

These three files are the **context backbone** Claude will use to understand the repo.

**Deliverables**
- `REPO_MAP.md`: full repo breakdown with folder purposes  
- `API_SPEC.md`: endpoints, models, error conventions  
- `CLAUDE.md`: collaboration rules, editing boundaries  

**Checklist**
- [ ] REPO_MAP.md fully describes structure  
- [ ] API_SPEC.md covers all MVP endpoints and schemas  
- [ ] CLAUDE.md includes project overview, editing rules, examples  

---

## STEP 5 — Improve the Prompt
Enhance the prompt (in `docs/PROMPT_DECLARATION.md`) with details Claude needs:

- FE/BE boundaries and data contracts  
- UX guidelines (states, accessibility, interaction patterns)  
- Performance budgets (bundle size, API latency)  
- Security constraints (auth, rate limits, PII handling)  
- Testing expectations (unit, integration, end-to-end)

**Deliverables**
- FE/BE boundaries and contracts  
- UX guidelines (states, accessibility, patterns)  
- Performance budgets (bundle size, latency targets)  
- Security constraints (auth, PII, rate limits)  
- Testing expectations  

**Checklist**
- [ ] Prompt includes FE/BE division of responsibility  
- [ ] UX principles and design tokens specified  
- [ ] Performance/security/testing requirements added  
- [ ] Prompt is concrete and actionable for Claude  

---

## STEP 6 — Expert Audit of the Prompt
Now do a **meticulous audit** of the one-page prompt declaration.

- Add Frontend Architecture, Backend Architecture, Design requirements, Core Integrations, Success Criteria, Implementation Guidelines and Security & Compliance categories from this Project Brief to the prompt declaration.
- Remove inconsistencies, duplicates, or unused technologies  
- Ensure Tech Stack → Product → Scaffold alignment (no mismatches)  
- Add UI/UX details that make the product visually appealing and usable  
- Double-check frontend and backend folders are ready  
- Confirm editing boundaries are clear (what Claude can/can’t touch)  
- Make the declaration **battle-tested and handoff-ready**

**Deliverables**
- Remove inconsistencies/duplicates  
- Ensure stack ↔ product ↔ scaffold alignment  
- Add UI/UX and accessibility details  
- Clarify file boundaries (editable vs do-not-touch)  
- Confirm prompt uses Claude-friendly syntax  

**Checklist**
- [ ] No unused or contradictory tech remains  
- [ ] UI/UX directives are product-specific and sufficient  
- [ ] Editing boundaries explicitly defined  
- [ ] Prompt syntax uses clear, imperative instructions  

---

## STEP 7 — Bird’s-Eye Repo Review
Do a quick top-level scan for missing pieces:

- All folders contain either code or `_INSTRUCTIONS.md`  
- `.env.example` files exist for both frontend and backend  
- CI/CD config is present and not trivially broken  
- Run scripts (`npm run dev`, `uvicorn …`) work end-to-end  
- No orphan TODOs without clear ownership

**Deliverables**
- Verify all core files exist  
- Confirm environment, CI, and scripts work end-to-end  

**Checklist**
- [ ] Every folder has code or `_INSTRUCTIONS.md`  
- [ ] `.env.example` present for both frontend and backend  
- [ ] CI pipeline triggers and passes basic checks  
- [ ] Dev script (`scripts/dev.sh`) runs both FE and BE  

---

## STEP 8 — Finalize CLAUDE.md
This is where Claude gets its **onboarding pack**. Make sure `CLAUDE.md` includes:

- **Project Overview**: one-paragraph purpose, stack, goals, target users  
- **Folder & File Structure**: what’s editable vs do-not-touch  
- **Coding Conventions**: style guides, naming rules, commenting expectations  
- **AI Collaboration Rules**: response format, edit rules, ambiguity handling  
- **Editing Rules**: full-file vs patches, locked files  
- **Dependencies & Setup**: frameworks, services, env vars  
- **Workflow & Tools**: how to run locally, FE/BE boundary, deployment notes  
- **Contextual Knowledge**: product quirks, domain rules, business logic caveats  
- **Examples**: good vs bad AI answer

**Deliverables**
- Project overview (purpose, stack, goals, users)  
- Folder & file structure with editable vs do-not-touch  
- Coding conventions (style, naming, commenting)  
- AI collaboration rules (response style, edit rules, ambiguity handling)  
- Dependencies and setup instructions  
- Workflow, deployment notes, contextual knowledge  
- Good vs bad answer examples  
- Fill out all the missing information in the CLAUDE.md file

**Checklist**
- [ ] Project overview section filled in  
- [ ] File boundaries clearly defined  
- [ ] Coding/style conventions included  
- [ ] AI collaboration & editing rules written  
- [ ] Dependencies & env notes covered  
- [ ] Workflow & deployment info added  
- [ ] Contextual knowledge documented  
- [ ] Good vs bad examples included  
- [ ] CLAUDE.md file does not miss any important information

---

# ✅ Outcome
When this 8-step plan is followed:
- The repo is a **rich, opinionated scaffold** (80% done).  
- Docs give Claude **clear boundaries + context**.  
- The one-page prompt is **battle-tested** and aligned.  
- Claude Code can safely and efficiently generate the missing 20%.  












