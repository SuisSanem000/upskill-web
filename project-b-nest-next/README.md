# PROJECT B — NestJS + Next.js (Enterprise Stack)

> **Contact List Application** built with the enterprise-grade NestJS backend
> and Next.js App Router frontend. This is the most in-demand stack for
> mid-to-senior fullstack roles.

---

## Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js + TypeScript |
| **Backend** | NestJS (with Fastify adapter) |
| **Frontend** | Next.js 14+ (App Router) |
| **Database** | PostgreSQL |
| **ORM** | TypeORM |
| **API** | REST + GraphQL (code-first) |
| **Auth** | JWT via @nestjs/passport + Guards |
| **Validation** | class-validator + class-transformer |
| **Docs** | Swagger via @nestjs/swagger |
| **Testing** | Jest (unit + e2e) |
| **Containerisation** | Docker + docker-compose |
| **CI/CD** | GitHub Actions |

---

## What This Project Covers

- NestJS module architecture (Modules → Controllers → Providers → DI)
- Fastify as HTTP adapter inside NestJS (performance)
- TypeORM entities, repositories, migrations
- REST controllers with decorators (@Get, @Post, @Body, @Param)
- GraphQL module — code-first approach (resolvers, @ObjectType, @Field)
- DTOs with class-validator decorators
- Pipes (ValidationPipe), Guards (JwtAuthGuard), Interceptors (logging, transform)
- Exception filters (global + custom)
- Swagger auto-generated API documentation
- Next.js App Router: Server Components, Client Components, Layouts
- Server-side data fetching (fetch with revalidation, server actions)
- Next.js API routes (Route Handlers) as BFF proxy
- ISR, SSG, SSR rendering strategies
- Full-stack Docker composition
- GitHub Actions CI/CD

---

## MVP Features (Contact List)

1. **List contacts (SSR)** — server-rendered list with search
2. **View contact (SSR)** — server-rendered detail page
3. **Create contact** — client-side form with validation
4. **Edit contact** — client-side form, optimistic UI
5. **Delete contact** — with confirmation modal
6. **Toggle favourite** — server action
7. **GraphQL endpoint** — alternative way to query contacts
8. **Auth** — login/register with JWT, protected pages via middleware

---

## Folder Structure

```
project-b-nest-next/
├── backend/
│   ├── src/
│   │   ├── main.ts                     ← Bootstrap NestJS + Fastify
│   │   ├── app.module.ts               ← Root module
│   │   ├── contacts/
│   │   │   ├── contacts.module.ts
│   │   │   ├── contacts.controller.ts  ← REST endpoints
│   │   │   ├── contacts.resolver.ts    ← GraphQL resolver
│   │   │   ├── contacts.service.ts     ← Business logic
│   │   │   ├── dto/
│   │   │   │   ├── create-contact.dto.ts
│   │   │   │   └── update-contact.dto.ts
│   │   │   └── entities/
│   │   │       └── contact.entity.ts   ← TypeORM entity
│   │   ├── auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.guard.ts           ← JWT Guard
│   │   │   ├── auth.service.ts
│   │   │   └── strategies/
│   │   │       └── jwt.strategy.ts
│   │   ├── common/
│   │   │   ├── interceptors/           ← Logging, transform
│   │   │   ├── filters/               ← HTTP exception filter
│   │   │   └── pipes/                 ← Custom pipes
│   │   └── graphql/
│   │       └── (code-first — auto-generated from decorators)
│   ├── test/
│   │   └── app.e2e-spec.ts
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx                  ← Root layout (fonts, nav)
│   │   ├── page.tsx                    ← Home → redirect to /contacts
│   │   ├── contacts/
│   │   │   ├── page.tsx               ← List (Server Component)
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx           ← Detail (Server Component)
│   │   │   └── new/
│   │   │       └── page.tsx           ← Form (Client Component)
│   │   └── api/
│   │       └── contacts/
│   │           └── route.ts           ← BFF Route Handler
│   ├── components/
│   │   ├── ContactList.tsx            ← Server Component
│   │   ├── ContactForm.tsx            ← Client Component
│   │   └── SearchBar.tsx              ← Client Component
│   ├── lib/
│   │   └── api.ts                     ← Fetch wrapper
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .github/workflows/ci.yml
└── README.md
```

---

## Task List

### Phase 1 — NestJS Backend Foundation
- [ ] Scaffold NestJS with Fastify adapter
- [ ] Create AppModule, configure global pipes, filters
- [ ] Set up TypeORM with PostgreSQL connection
- [ ] Create Contact entity (TypeORM decorators)
- [ ] Run initial migration
- [ ] Create ContactsModule (module, controller, service)
- [ ] Implement CRUD endpoints in controller
- [ ] Add DTOs with class-validator decorators
- [ ] Add global ValidationPipe

### Phase 2 — GraphQL
- [ ] Install @nestjs/graphql + @nestjs/apollo
- [ ] Add @ObjectType decorators to Contact entity
- [ ] Create ContactsResolver with @Query and @Mutation
- [ ] Add GraphQL playground access
- [ ] Test queries and mutations via playground

### Phase 3 — Auth & Guards
- [ ] Create AuthModule with JWT strategy
- [ ] Implement register/login endpoints
- [ ] Create JwtAuthGuard
- [ ] Protect contact routes with @UseGuards

### Phase 4 — Swagger & Polish
- [ ] Add @nestjs/swagger decorators to all DTOs and controllers
- [ ] Configure Swagger UI at /api/docs
- [ ] Add logging interceptor
- [ ] Add global HTTP exception filter with proper error shape

### Phase 5 — Testing (Backend)
- [ ] Unit test ContactsService (mock repository)
- [ ] E2E test with supertest (test module bootstrap)

### Phase 6 — Next.js Frontend
- [ ] Create Next.js app with App Router
- [ ] Build root layout with navigation
- [ ] Build contacts list page (Server Component — fetch from backend)
- [ ] Build contact detail page (Server Component — dynamic route)
- [ ] Build contact form page (Client Component — "use client")
- [ ] Add search functionality
- [ ] Implement Next.js middleware for auth redirect

### Phase 7 — Advanced Next.js
- [ ] Implement server actions for create/update/delete
- [ ] Add loading.tsx and error.tsx for each route
- [ ] Add ISR with revalidation for list page
- [ ] Create API Route Handler as BFF proxy

### Phase 8 — Docker & CI/CD
- [ ] Dockerfile for NestJS backend
- [ ] Dockerfile for Next.js frontend
- [ ] docker-compose.yml (backend + frontend + Postgres)
- [ ] GitHub Actions: lint → test → build → docker push

---

## Key NestJS Concepts to Master

| Concept | Why It Matters |
|---|---|
| **Modules** | Organise features into self-contained units |
| **Dependency Injection** | NestJS DI container auto-injects services |
| **Controllers** | Handle HTTP requests with decorators |
| **Providers/Services** | Business logic, injected into controllers |
| **Pipes** | Transform / validate input data |
| **Guards** | Authentication / authorisation checks |
| **Interceptors** | Cross-cutting: logging, caching, transform response |
| **Filters** | Handle exceptions globally or per-route |

## Key Next.js Concepts to Master

| Concept | Why It Matters |
|---|---|
| **Server Components** | Default in App Router — render on server, zero JS shipped |
| **Client Components** | `"use client"` — for interactivity (forms, state) |
| **Layouts** | Shared UI that persists across navigations |
| **Server Actions** | Mutate data from Server Components without API routes |
| **Route Handlers** | Build API endpoints inside Next.js |
| **Middleware** | Run before requests (auth, redirects) |
| **ISR** | Revalidate static pages at intervals |
