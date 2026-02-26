# PROJECT A — Express + React (Classic Stack)

> **Contact List Application** built with the most common Node.js + React stack.
> This is where you solidify fundamentals and add production-grade practices.

---

## Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js + TypeScript |
| **Backend** | Express.js |
| **Frontend** | React 19 + Vite |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **State Mgmt** | Zustand |
| **Data Fetching** | Axios + TanStack React Query |
| **Auth** | JWT (jsonwebtoken + bcrypt) |
| **Validation** | Zod |
| **Testing** | Jest + Supertest (backend), Vitest + React Testing Library (frontend) |
| **Containerisation** | Docker + docker-compose |
| **CI/CD** | GitHub Actions |

---

## What This Project Covers

- Classic REST API with Express (middleware chain, modular routers)
- Prisma ORM (schema, migrations, seed, relations)
- JWT authentication middleware
- Input validation with Zod (reusable schemas shared with frontend)
- Global error handling middleware
- React functional components with hooks
- React Router v6 (nested routes)
- React Query for server-state (queries, mutations, cache invalidation)
- Zustand for client-side UI state
- Axios interceptors (auth token, error handling)
- Unit + integration testing on both sides
- Multi-stage Docker builds
- GitHub Actions CI: lint → test → build

---

## MVP Features (Contact List)

1. **List contacts** — paginated, with search by name/email
2. **View contact** — detail page with all fields
3. **Create contact** — form with validation
4. **Edit contact** — update any field
5. **Delete contact** — with confirmation
6. **Toggle favourite** — star/unstar a contact
7. **Tag filtering** — filter contacts by tag
8. **Auth** — register / login / protected routes

---

## Folder Structure

```
project-a-express-react/
├── backend/
│   ├── src/
│   │   ├── server.ts              ← Express app setup, listen
│   │   ├── routes/
│   │   │   ├── contacts.ts        ← /api/contacts CRUD routes
│   │   │   └── auth.ts            ← /api/auth register/login
│   │   ├── controllers/
│   │   │   ├── contacts.controller.ts
│   │   │   └── auth.controller.ts
│   │   ├── services/
│   │   │   ├── contacts.service.ts  ← Business logic
│   │   │   └── auth.service.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts            ← JWT verification
│   │   │   ├── validation.ts      ← Zod middleware factory
│   │   │   └── error-handler.ts   ← Global error handler
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── tests/
│   │       ├── contacts.test.ts   ← Unit tests
│   │       └── contacts.e2e.ts    ← Supertest integration
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── components/           ← Reusable UI components
│   │   ├── hooks/                ← useContacts, useAuth
│   │   ├── store/                ← Zustand stores
│   │   ├── pages/                ← Route pages
│   │   ├── tests/                ← Component tests
│   │   └── styles/               ← CSS Modules or Tailwind
│   ├── Dockerfile
│   ├── vite.config.ts
│   └── package.json
│
├── docker-compose.yml
├── .github/workflows/ci.yml
└── README.md                     ← This file
```

---

## Task List

### Phase 1 — Backend Foundation
- [ ] Set up Express + TypeScript boilerplate
- [ ] Configure Prisma with PostgreSQL
- [ ] Define Contact schema in Prisma
- [ ] Create migration and seed script
- [ ] Build CRUD routes: `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- [ ] Add Zod validation middleware
- [ ] Add global error handler
- [ ] Add pagination and search query params

### Phase 2 — Authentication
- [ ] Add User model to Prisma schema
- [ ] Build `POST /auth/register` and `POST /auth/login`
- [ ] Implement JWT token generation (jsonwebtoken)
- [ ] Create auth middleware to protect contact routes
- [ ] Hash passwords with bcrypt

### Phase 3 — Testing (Backend)
- [ ] Write unit tests for contacts.service.ts (Jest + mocks)
- [ ] Write integration tests with Supertest
- [ ] Add test database config

### Phase 4 — Frontend Foundation
- [ ] Scaffold React + Vite + TypeScript
- [ ] Set up React Router v6 with layouts
- [ ] Build ContactList page (fetches from API)
- [ ] Build ContactForm page (create + edit)
- [ ] Build ContactDetail page
- [ ] Implement SearchBar component

### Phase 5 — State Management & Data Fetching
- [ ] Set up Axios client with base URL and interceptors
- [ ] Set up React Query provider and hooks (useContacts, useContact)
- [ ] Add Zustand store for UI state (search term, filters, modals)
- [ ] Add auth flow (login form, store token, protected routes)

### Phase 6 — Testing (Frontend)
- [ ] Write component tests with React Testing Library + Vitest
- [ ] Test hooks in isolation

### Phase 7 — Docker & CI/CD
- [ ] Write multi-stage Dockerfile for backend
- [ ] Write multi-stage Dockerfile for frontend
- [ ] Create docker-compose.yml (backend + frontend + Postgres)
- [ ] Create GitHub Actions workflow: lint → test → build

---

## Key Learning Outcomes

After completing this project you should be comfortable with:
- Express middleware pattern (request → middleware chain → response)
- Prisma schema design, migrations, and typed queries
- JWT auth flow (register → login → token → protect routes)
- Zod validation (parse, safeParse, shared schemas)
- React hooks, context, and component composition
- React Query cache management (staleTime, invalidation)
- Zustand minimal stores
- Writing meaningful tests (not just coverage)
- Docker multi-stage builds for Node.js apps
- GitHub Actions CI pipelines
