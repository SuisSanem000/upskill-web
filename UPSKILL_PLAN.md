# Mid-Level Fullstack Developer — Upskill Plan

> **Goal**: Learn every skill most mid-level fullstack job postings require, organised
> around a single **Contact List** application built multiple ways.

---

## 1  Expanded Skill Map

Below is your original list **plus additions marked with ✅ NEW**.
Only widely-required skills are added — no niche frameworks.

### Front-End

| Skill | Status |
|---|---|
| React (hooks, context, React Query / TanStack Query) | already know basics |
| React Native (Expo, navigation, native modules) | on your list |
| Next.js (App Router, SSR, ISR, RSC, API routes) | on your list |
| Vue.js 3 (Composition API, Pinia, Vue Router) | on your list |
| ✅ NEW — **TypeScript in the browser** (generics, utility types, strict config) | essential everywhere |
| ✅ NEW — **State management** (Redux Toolkit, Zustand, Pinia) | asked in almost every React/Vue role |
| ✅ NEW — **CSS / Styling** (Tailwind CSS, CSS Modules, Styled Components) | expected knowledge |
| ✅ NEW — **Testing (front-end)** (Jest, React Testing Library, Vitest, Cypress / Playwright) | required for mid+ |
| ✅ NEW — **Accessibility (a11y)** (ARIA, semantic HTML, screen-reader basics) | increasingly required |
| ✅ NEW — **Build tooling** (Vite, Webpack basics, ESLint, Prettier) | expected knowledge |
| Axios / Fetch / ✅ NEW — **tRPC** | data fetching |

### Back-End

| Skill | Status |
|---|---|
| Node.js (event loop, streams, clustering, worker threads) | have experience |
| Express | have experience |
| Fastify | on your list |
| NestJS (modules, providers, guards, pipes, interceptors) | on your list |
| RESTful API design (versioning, HATEOAS, pagination) | on your list |
| GraphQL (Apollo Server, type-defs, resolvers, subscriptions) | on your list |
| ✅ NEW — **Authentication & Authorisation** (JWT, OAuth 2.0, Passport.js, session vs token) | required everywhere |
| ✅ NEW — **Validation & Error handling** (Zod, class-validator, global error middleware) | expected |
| ✅ NEW — **WebSockets** (Socket.io / ws, real-time events) | common requirement |
| ✅ NEW — **Message queues / event-driven** (Redis pub/sub, BullMQ basics) | growing requirement |
| ✅ NEW — **Rate limiting, caching** (Redis, in-memory caching, HTTP caching headers) | expected |
| ✅ NEW — **Testing (back-end)** (Jest, Supertest, integration tests, mocking) | required for mid+ |
| ✅ NEW — **API documentation** (Swagger / OpenAPI via NestJS or express-swagger) | expected |
| ✅ NEW — **Logging & monitoring** (Winston, Pino, structured logging) | expected |

### Databases & Data Layer

| Skill | Status |
|---|---|
| PostgreSQL (joins, indexes, transactions, CTEs, migrations) | have experience |
| ✅ NEW — **ORM / Query Builders** (Prisma, TypeORM, Drizzle) | one of these is always required |
| ✅ NEW — **MongoDB** (documents, aggregation pipeline, Mongoose) | frequently required |
| ✅ NEW — **Redis** (caching, sessions, pub/sub, sorted sets) | very common |
| ✅ NEW — **Database design** (normalisation, ERD, indexing strategy) | expected knowledge |
| ✅ NEW — **Migrations** (Prisma migrate, TypeORM migrations, Knex) | expected |

### DevOps, Cloud & Deployment

| Skill | Status |
|---|---|
| AWS basics (EC2, S3, Lambda, RDS, IAM, CloudWatch) | on your list |
| ✅ NEW — **Docker** (Dockerfile, docker-compose, multi-stage builds) | required everywhere |
| ✅ NEW — **CI/CD** (GitHub Actions workflows, automated tests, deploy pipelines) | required |
| ✅ NEW — **Container orchestration basics** (Docker Compose for dev, awareness of K8s) | growing requirement |
| ✅ NEW — **Nginx / reverse proxy** (serve static, proxy_pass, SSL termination) | common |
| ✅ NEW — **Environment management** (.env, secrets, 12-factor app principles) | expected |
| ✅ NEW — **Serverless basics** (AWS Lambda + API Gateway, Vercel serverless functions) | growing |
| ✅ NEW — **Infrastructure as Code awareness** (Terraform basics, CDK awareness) | nice to have → becoming common |

### AI Engineering

| Skill | Status |
|---|---|
| LLM integration (OpenAI / Anthropic SDKs, streaming responses) | have experience |
| RAG (retrieval-augmented generation pipeline) | on your list |
| Vector databases (pgvector, Pinecone, Weaviate) | on your list |
| Embeddings (text-embedding models, similarity search) | on your list |
| Elasticsearch (full-text search, hybrid search) | on your list |
| Prompt & context engineering | on your list |
| ✅ NEW — **LangChain.js / LlamaIndex.ts** (chains, agents, tools) | becoming standard |
| ✅ NEW — **Function calling / tool use** (OpenAI function calling, structured output) | increasingly required |
| ✅ NEW — **Streaming & Server-Sent Events** for AI chat UIs | expected in AI roles |
| ✅ NEW — **AI-powered features** (semantic search, summarisation, classification) | practical applications |
| ✅ NEW — **Cost & token management** (token counting, caching, rate limiting LLM calls) | real-world concern |

### General / Cross-Cutting (✅ ALL NEW)

| Skill | Notes |
|---|---|
| **Git workflows** | branching strategy, rebasing, conventional commits, PR reviews |
| **Monorepo tooling** | Turborepo or Nx basics |
| **Security basics** | OWASP top 10, CORS, CSP, input sanitisation, HTTPS |
| **Performance** | profiling, lazy loading, code splitting, lighthouse |
| **System design basics** | load balancers, CDN, horizontal scaling, microservices vs monolith |
| **Agile / Scrum** | sprint planning, story points, retrospectives |

---

## 2  What to Learn in Each Framework (Key Topics)

### 2.1 React
- Functional components, hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`)
- Custom hooks
- Context API vs Redux Toolkit vs Zustand
- React Router v6 (nested routes, loaders, actions)
- React Query / TanStack Query (data fetching, mutations, caching)
- Error boundaries, Suspense, lazy loading
- Forms (React Hook Form + Zod validation)
- Testing with React Testing Library + Vitest

### 2.2 Next.js (App Router)
- File-based routing, layouts, loading/error UI
- Server Components vs Client Components (`"use client"`)
- Data fetching (server actions, `fetch` with revalidation)
- ISR (Incremental Static Regeneration), SSR, SSG
- API routes / Route Handlers
- Middleware (auth, redirects)
- Image & Font optimisation
- Deployment on Vercel

### 2.3 Vue.js 3
- Composition API (`ref`, `reactive`, `computed`, `watch`)
- Vue Router (guards, lazy routes)
- Pinia (store, getters, actions)
- Single-File Components, `<script setup>`
- Lifecycle hooks
- Slots, provide/inject
- Vite tooling

### 2.4 React Native (Expo)
- Expo setup, managed vs bare workflow
- Core components (`View`, `Text`, `FlatList`, `TextInput`, `TouchableOpacity`)
- Navigation (React Navigation — stack, tab, drawer)
- AsyncStorage / MMKV for local data
- Native device features (camera, contacts, notifications)
- Platform-specific code
- Building & publishing (EAS Build)

### 2.5 Express
- Middleware chain (built-in, third-party, custom error middleware)
- Router modularisation
- Validation (Zod middleware)
- Authentication (Passport.js, JWT, sessions)
- File uploads (Multer)
- Rate limiting, helmet, cors
- Testing with Supertest

### 2.6 Fastify
- Plugin architecture, decorators, hooks lifecycle
- Schema-based validation & serialisation (JSON Schema / Typebox)
- Fastify vs Express performance & patterns
- Authentication plugin
- Swagger auto-generation
- Testing with `fastify.inject()`

### 2.7 NestJS
- Modules, Controllers, Providers (DI)
- DTOs & Pipes (class-validator, class-transformer)
- Guards (auth), Interceptors (logging, transform)
- TypeORM / Prisma integration
- GraphQL module (`@nestjs/graphql`, code-first approach)
- WebSockets gateway
- Microservices module basics
- Testing (unit with mocks, e2e with supertest)
- Swagger (`@nestjs/swagger`)

### 2.8 GraphQL
- Schema definition (SDL vs code-first)
- Queries, Mutations, Subscriptions
- Resolvers, DataLoader (N+1 problem)
- Apollo Server + Apollo Client
- Authentication in GraphQL context
- Error handling
- Pagination (cursor-based)

### 2.9 PostgreSQL + ORMs
- Advanced SQL (CTEs, window functions, JSONB, full-text search)
- Indexing strategies (B-tree, GIN, GiST)
- Transactions & isolation levels
- Prisma (schema, migrations, relations, raw queries)
- TypeORM (entities, repositories, migrations, query builder)

### 2.10 MongoDB
- Document modelling (embedding vs referencing)
- CRUD operations, aggregation pipeline
- Mongoose (schemas, virtuals, middleware, population)
- Indexing (compound, text, TTL)

### 2.11 Redis
- Data structures (strings, hashes, lists, sets, sorted sets)
- Caching patterns (cache-aside, write-through)
- Session storage
- Pub/Sub for real-time events
- BullMQ for job queues

### 2.12 Docker & CI/CD
- Dockerfile (multi-stage builds, layer caching)
- docker-compose (services, networks, volumes, depends_on)
- GitHub Actions (workflow YAML, jobs, steps, secrets, matrix builds)
- Automated test → build → deploy pipeline
- Environment variables & secrets management

### 2.13 AWS
- EC2 (launch, security groups, SSH)
- S3 (uploads, presigned URLs, static hosting)
- RDS (PostgreSQL on AWS)
- Lambda + API Gateway (serverless functions)
- IAM (roles, policies, least privilege)
- CloudWatch (logs, alarms)
- Elastic Beanstalk or ECS for container deployment

### 2.14 AI Engineering
- OpenAI / Anthropic SDK integration (chat completions, streaming)
- Function calling & structured output (tool_use, JSON mode)
- RAG pipeline: chunk → embed → store → retrieve → generate
- pgvector (vector column, `<=>` distance operator, HNSW index)
- Elasticsearch (full-text search, hybrid with vector search)
- LangChain.js (chains, agents, retrieval chains, memory)
- Prompt engineering (system prompts, few-shot, chain-of-thought)
- Token management & cost optimisation
- Streaming responses to UI (SSE / ReadableStream)

---

## 3  Project Structure — Contact List Application

The idea: **one domain (contacts)** implemented across multiple stacks so you can
compare frameworks side-by-side and build a real portfolio.

```
upskill-web/
│
├── README.md                  ← You are here
├── UPSKILL_PLAN.md            ← This file
│
├── shared/                    ← Shared assets across all projects
│   ├── types/                 ← Shared TypeScript interfaces & types
│   │   └── contact.ts         ← Contact, CreateContactDto, etc.
│   ├── seed-data/             ← Sample data JSON for seeding DBs
│   │   └── contacts.json
│   ├── api-spec/              ← OpenAPI spec (used by all backends)
│   │   └── openapi.yaml
│   └── docker/                ← Shared docker-compose infra
│       └── docker-compose.infra.yml  ← Postgres, Redis, Elasticsearch
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT A — Express + React (Classic Stack)
│  Stack: Express · React · PostgreSQL · Prisma · REST · Axios
│  ══════════════════════════════════════════════════════════════════
│
├── project-a-express-react/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── server.ts              ← Express app setup
│   │   │   ├── routes/
│   │   │   │   └── contacts.ts        ← CRUD REST routes
│   │   │   ├── controllers/
│   │   │   │   └── contacts.controller.ts
│   │   │   ├── services/
│   │   │   │   └── contacts.service.ts
│   │   │   ├── middleware/
│   │   │   │   ├── auth.ts            ← JWT auth middleware
│   │   │   │   ├── validation.ts      ← Zod validation
│   │   │   │   └── error-handler.ts   ← Global error handler
│   │   │   ├── prisma/
│   │   │   │   └── schema.prisma
│   │   │   └── tests/
│   │   │       ├── contacts.test.ts   ← Unit tests (Jest)
│   │   │       └── contacts.e2e.ts    ← Integration (Supertest)
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   │   ├── ContactList.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── ContactCard.tsx
│   │   │   │   └── SearchBar.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useContacts.ts     ← React Query + Axios
│   │   │   ├── store/
│   │   │   │   └── contactStore.ts    ← Zustand store
│   │   │   ├── pages/
│   │   │   │   ├── HomePage.tsx
│   │   │   │   └── ContactDetailPage.tsx
│   │   │   ├── tests/
│   │   │   │   └── ContactList.test.tsx   ← RTL + Vitest
│   │   │   └── styles/
│   │   │       └── index.css          ← Tailwind or CSS Modules
│   │   ├── Dockerfile
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   ├── docker-compose.yml             ← Full stack compose
│   ├── .github/
│   │   └── workflows/
│   │       └── ci.yml                 ← GitHub Actions pipeline
│   └── README.md
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT B — NestJS + Next.js (Enterprise Stack)
│  Stack: NestJS (Fastify adapter) · Next.js App Router · PostgreSQL
│         · TypeORM · REST + GraphQL · tRPC optional
│  ══════════════════════════════════════════════════════════════════
│
├── project-b-nest-next/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── main.ts                     ← NestJS + Fastify adapter
│   │   │   ├── app.module.ts
│   │   │   ├── contacts/
│   │   │   │   ├── contacts.module.ts
│   │   │   │   ├── contacts.controller.ts  ← REST endpoints
│   │   │   │   ├── contacts.resolver.ts    ← GraphQL resolver
│   │   │   │   ├── contacts.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-contact.dto.ts
│   │   │   │   │   └── update-contact.dto.ts
│   │   │   │   ├── entities/
│   │   │   │   │   └── contact.entity.ts   ← TypeORM entity
│   │   │   │   └── contacts.service.spec.ts
│   │   │   ├── auth/
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.guard.ts           ← JWT Guard
│   │   │   │   └── auth.service.ts
│   │   │   ├── common/
│   │   │   │   ├── interceptors/
│   │   │   │   ├── filters/
│   │   │   │   └── pipes/
│   │   │   └── graphql/
│   │   │       └── schema.gql              ← (or code-first)
│   │   ├── test/
│   │   │   └── app.e2e-spec.ts
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── frontend/                           ← Next.js App Router
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                    ← Home / contact list
│   │   │   ├── contacts/
│   │   │   │   ├── page.tsx               ← SSR list
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx           ← Contact detail (SSR)
│   │   │   │   └── new/
│   │   │   │       └── page.tsx           ← Create form (Client)
│   │   │   └── api/
│   │   │       └── contacts/
│   │   │           └── route.ts           ← Next.js API route (proxy or BFF)
│   │   ├── components/
│   │   │   ├── ContactList.tsx             ← Server Component
│   │   │   ├── ContactForm.tsx             ← Client Component
│   │   │   └── SearchBar.tsx
│   │   ├── lib/
│   │   │   └── api.ts                     ← Fetch wrapper
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── docker-compose.yml
│   ├── .github/
│   │   └── workflows/
│   │       └── ci.yml
│   └── README.md
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT C — Fastify + Vue.js (Alternative Stack)
│  Stack: Fastify · Vue 3 · PostgreSQL · Prisma · REST · GraphQL
│  ══════════════════════════════════════════════════════════════════
│
├── project-c-fastify-vue/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── server.ts               ← Fastify app
│   │   │   ├── plugins/
│   │   │   │   ├── auth.ts             ← JWT plugin
│   │   │   │   ├── prisma.ts           ← Prisma plugin
│   │   │   │   └── swagger.ts          ← Auto-docs
│   │   │   ├── routes/
│   │   │   │   └── contacts.ts         ← Route handler + JSON schema
│   │   │   ├── services/
│   │   │   │   └── contacts.service.ts
│   │   │   ├── graphql/
│   │   │   │   ├── schema.ts
│   │   │   │   └── resolvers.ts
│   │   │   └── tests/
│   │   │       └── contacts.test.ts    ← fastify.inject() tests
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── frontend/                       ← Vue 3 + Vite
│   │   ├── src/
│   │   │   ├── App.vue
│   │   │   ├── main.ts
│   │   │   ├── router/
│   │   │   │   └── index.ts            ← Vue Router
│   │   │   ├── stores/
│   │   │   │   └── contacts.ts         ← Pinia store
│   │   │   ├── views/
│   │   │   │   ├── HomeView.vue
│   │   │   │   └── ContactDetailView.vue
│   │   │   ├── components/
│   │   │   │   ├── ContactList.vue
│   │   │   │   ├── ContactForm.vue
│   │   │   │   └── SearchBar.vue
│   │   │   └── composables/
│   │   │       └── useContacts.ts      ← Composition API fetching
│   │   ├── Dockerfile
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   ├── docker-compose.yml
│   └── README.md
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT D — React Native Mobile App
│  Stack: Expo · React Native · connects to any backend above
│  ══════════════════════════════════════════════════════════════════
│
├── project-d-react-native/
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── index.tsx              ← Contact list screen
│   │   │   └── settings.tsx
│   │   ├── contact/
│   │   │   └── [id].tsx               ← Detail screen
│   │   └── _layout.tsx
│   ├── components/
│   │   ├── ContactCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── SearchInput.tsx
│   ├── services/
│   │   └── api.ts                     ← Axios client → backend
│   ├── hooks/
│   │   └── useContacts.ts
│   ├── app.json
│   ├── package.json
│   └── README.md
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT E — AI-Enhanced Contacts
│  Stack: any backend from above + AI features
│  ══════════════════════════════════════════════════════════════════
│
├── project-e-ai-features/
│   ├── src/
│   │   ├── rag/
│   │   │   ├── chunker.ts             ← Text chunking logic
│   │   │   ├── embedder.ts            ← OpenAI embeddings
│   │   │   ├── vector-store.ts        ← pgvector operations
│   │   │   └── retriever.ts           ← Similarity search
│   │   ├── llm/
│   │   │   ├── client.ts              ← OpenAI / Anthropic SDK
│   │   │   ├── function-calling.ts    ← Tool/function definitions
│   │   │   ├── streaming.ts           ← SSE streaming helper
│   │   │   └── prompts/
│   │   │       ├── contact-summary.ts ← Summarise contact notes
│   │   │       └── smart-search.ts    ← Natural language search
│   │   ├── langchain/
│   │   │   ├── chain.ts               ← LangChain.js chains
│   │   │   └── agent.ts               ← Agent with tools
│   │   ├── elasticsearch/
│   │   │   ├── client.ts              ← ES connection
│   │   │   ├── index-contacts.ts      ← Indexing logic
│   │   │   └── hybrid-search.ts       ← Full-text + vector
│   │   └── tests/
│   │       ├── rag.test.ts
│   │       └── search.test.ts
│   ├── prisma/
│   │   └── schema.prisma              ← Contact + pgvector extension
│   ├── docker-compose.yml             ← Postgres+pgvector, ES, Redis
│   ├── package.json
│   └── README.md
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT F — DevOps & Cloud
│  Stack: Docker, GitHub Actions, AWS, Nginx, Terraform
│  ══════════════════════════════════════════════════════════════════
│
├── project-f-devops/
│   ├── terraform/
│   │   ├── main.tf                    ← AWS resources (EC2, RDS, S3)
│   │   ├── variables.tf
│   │   └── outputs.tf
│   ├── nginx/
│   │   └── nginx.conf                 ← Reverse proxy config
│   ├── docker/
│   │   ├── Dockerfile.backend
│   │   ├── Dockerfile.frontend
│   │   └── docker-compose.prod.yml
│   ├── .github/
│   │   └── workflows/
│   │       ├── ci.yml                 ← Test → Build → Push to ECR
│   │       ├── cd.yml                 ← Deploy to EC2/ECS
│   │       └── preview.yml            ← PR preview deployments
│   ├── scripts/
│   │   ├── deploy.sh
│   │   └── seed-db.sh
│   ├── aws-lambda/
│   │   └── contact-webhook/
│   │       ├── handler.ts             ← Serverless function
│   │       └── serverless.yml
│   └── README.md
│
│
│  ══════════════════════════════════════════════════════════════════
│  PROJECT G — MongoDB + WebSockets + Redis (NoSQL Stack)
│  (Optional — if you want MongoDB experience)
│  ══════════════════════════════════════════════════════════════════
│
├── project-g-mongo-realtime/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── server.ts
│   │   │   ├── models/
│   │   │   │   └── contact.model.ts   ← Mongoose schema
│   │   │   ├── routes/
│   │   │   │   └── contacts.ts
│   │   │   ├── websocket/
│   │   │   │   └── events.ts          ← Socket.io real-time updates
│   │   │   └── cache/
│   │   │       └── redis.ts           ← Redis caching layer
│   │   └── package.json
│   └── README.md
│
│
└── docs/                              ← Cross-project learning notes
    ├── 01-typescript-advanced.md
    ├── 02-react-patterns.md
    ├── 03-nextjs-app-router.md
    ├── 04-vue3-composition.md
    ├── 05-express-deep-dive.md
    ├── 06-fastify-patterns.md
    ├── 07-nestjs-architecture.md
    ├── 08-graphql-guide.md
    ├── 09-postgres-advanced.md
    ├── 10-mongodb-mongoose.md
    ├── 11-redis-caching.md
    ├── 12-docker-devops.md
    ├── 13-aws-cloud.md
    ├── 14-cicd-github-actions.md
    ├── 15-testing-strategies.md
    ├── 16-auth-security.md
    ├── 17-ai-engineering.md
    ├── 18-system-design.md
    └── 19-react-native.md
```

---

## 4  Recommended Learning Order

Build them roughly in this order so that each project builds on the skills
from the previous one:

```
Phase 1 (weeks 1-3)  → Project A: Express + React
                        - Solidify fundamentals you already know
                        - Add Prisma, Zod, JWT auth, React Query, Zustand
                        - Add testing (Jest, Supertest, RTL, Vitest)
                        - Docker-compose the whole thing
                        - GitHub Actions CI pipeline

Phase 2 (weeks 3-5)  → Project B: NestJS + Next.js
                        - NestJS with Fastify adapter
                        - TypeORM, GraphQL (code-first), Swagger
                        - Next.js App Router (SSR, Server Components)
                        - Guards, interceptors, pipes in Nest
                        - Docker + CI/CD

Phase 3 (weeks 5-6)  → Project C: Fastify + Vue.js
                        - Fastify plugins, JSON Schema validation
                        - Vue 3 Composition API, Pinia, Vue Router
                        - Compare patterns with Express/React

Phase 4 (weeks 6-7)  → Project G: MongoDB + WebSockets + Redis
                        - Mongoose, Redis caching, Socket.io
                        - Real-time contact updates

Phase 5 (weeks 7-8)  → Project D: React Native
                        - Expo setup, navigation, native API
                        - Connect to existing backend (Project A or B)

Phase 6 (weeks 8-10) → Project E: AI Features
                        - RAG pipeline with pgvector
                        - LangChain.js agents
                        - Elasticsearch hybrid search
                        - Streaming AI responses to UI

Phase 7 (weeks 10-12)→ Project F: DevOps & Cloud
                        - Deploy Project B to AWS (EC2 + RDS)
                        - Terraform IaC
                        - Nginx reverse proxy
                        - Lambda webhook function
                        - Full CI/CD pipeline

(ongoing)             → docs/ folder
                        - Write notes as you learn each topic
                        - These become your interview review sheets
```

---

## 5  Skills Coverage Matrix

Every required skill maps to at least one project:

| Skill | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| TypeScript | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| React | ✓ | | | ✓ | | | |
| Next.js | | ✓ | | | | | |
| Vue.js | | | ✓ | | | | |
| React Native | | | | ✓ | | | |
| Express | ✓ | | | | | | |
| Fastify | | ✓* | ✓ | | | | |
| NestJS | | ✓ | | | | | |
| REST API | ✓ | ✓ | ✓ | | | | ✓ |
| GraphQL | | ✓ | ✓ | | | | |
| PostgreSQL | ✓ | ✓ | ✓ | | ✓ | | |
| MongoDB | | | | | | | ✓ |
| Redis | | | | | | | ✓ |
| Prisma | ✓ | | ✓ | | ✓ | | |
| TypeORM | | ✓ | | | | | |
| JWT Auth | ✓ | ✓ | ✓ | | | | |
| WebSockets | | | | | | | ✓ |
| Testing | ✓ | ✓ | ✓ | | ✓ | | |
| Docker | ✓ | ✓ | ✓ | | ✓ | ✓ | |
| CI/CD | ✓ | ✓ | | | | ✓ | |
| AWS | | | | | | ✓ | |
| Nginx | | | | | | ✓ | |
| Terraform | | | | | | ✓ | |
| AI / RAG | | | | | ✓ | | |
| pgvector | | | | | ✓ | | |
| Elasticsearch | | | | | ✓ | | |
| LangChain.js | | | | | ✓ | | |

*\* Project B uses NestJS with Fastify as the HTTP adapter*

---

## 6  How Each Project Differs

| Project | Front-End | Back-End | DB | ORM | API Style | Special Focus |
|---|---|---|---|---|---|---|
| **A** | React + Vite | Express | PostgreSQL | Prisma | REST | Fundamentals, testing, state mgmt |
| **B** | Next.js | NestJS (Fastify) | PostgreSQL | TypeORM | REST + GraphQL | SSR, DI, enterprise patterns |
| **C** | Vue 3 + Vite | Fastify | PostgreSQL | Prisma | REST + GraphQL | Plugin architecture, Composition API |
| **D** | React Native | (uses A or B) | — | — | REST | Mobile, navigation, native APIs |
| **E** | (uses A or B) | AI service | PostgreSQL + pgvector | Prisma | REST | RAG, embeddings, LLM, search |
| **F** | — | — | — | — | — | Docker, AWS, Terraform, CI/CD |
| **G** | (minimal) | Express | MongoDB | Mongoose | REST | NoSQL, WebSockets, Redis caching |

---

> **Tip**: Start each project with a `README.md` that lists what you'll learn,
> then check items off as you implement them. The `docs/` folder is your
> personal knowledge base — write notes after completing each topic.
> These double as interview review material.
