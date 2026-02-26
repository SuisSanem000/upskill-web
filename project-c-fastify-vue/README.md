# PROJECT C — Fastify + Vue.js (Alternative Stack)

> **Contact List Application** built with Fastify's plugin architecture and
> Vue 3 Composition API. Learn the main alternatives to Express and React.

---

## Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js + TypeScript |
| **Backend** | Fastify |
| **Frontend** | Vue 3 + Vite |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **State Mgmt** | Pinia |
| **Data Fetching** | Axios (via composables) |
| **Auth** | @fastify/jwt |
| **Validation** | JSON Schema (Fastify built-in) + Typebox |
| **Docs** | @fastify/swagger (auto-generated) |
| **GraphQL** | mercurius (Fastify GraphQL adapter) |
| **Testing** | Vitest + fastify.inject() |

---

## What This Project Covers

- Fastify plugin architecture (encapsulation, decorators, hooks)
- JSON Schema validation and serialisation (built into Fastify)
- Typebox for type-safe JSON Schemas
- Fastify lifecycle hooks (onRequest, preHandler, onSend, etc.)
- fastify.inject() for testing without starting a server
- @fastify/swagger for auto-generated API docs
- mercurius for GraphQL (Fastify-native, much faster than Apollo)
- Vue 3 Composition API (ref, reactive, computed, watch, watchEffect)
- `<script setup>` single-file components
- Vue Router (route guards, lazy loading, nested routes)
- Pinia stores (state, getters, actions)
- Composables (reusable logic — Vue's equivalent of React hooks)

---

## MVP Features (Contact List)

1. **List contacts** — paginated with search
2. **View contact** — detail view
3. **Create / Edit contact** — form with validation
4. **Delete contact** — confirmation dialog
5. **Toggle favourite** — quick action
6. **GraphQL endpoint** — via mercurius
7. **Auth** — register/login with @fastify/jwt
8. **Swagger docs** — auto-generated at /docs

---

## Folder Structure

```
project-c-fastify-vue/
├── backend/
│   ├── src/
│   │   ├── server.ts               ← Fastify app bootstrap
│   │   ├── plugins/
│   │   │   ├── auth.ts             ← @fastify/jwt plugin
│   │   │   ├── prisma.ts           ← Prisma as Fastify plugin
│   │   │   ├── swagger.ts          ← @fastify/swagger config
│   │   │   └── cors.ts             ← @fastify/cors
│   │   ├── routes/
│   │   │   ├── contacts.ts         ← CRUD + JSON Schema validation
│   │   │   └── auth.ts             ← Register/login
│   │   ├── services/
│   │   │   └── contacts.service.ts
│   │   ├── graphql/
│   │   │   ├── schema.ts           ← GraphQL SDL
│   │   │   └── resolvers.ts        ← Query/Mutation resolvers
│   │   └── tests/
│   │       └── contacts.test.ts    ← fastify.inject() tests
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.vue                 ← Root component
│   │   ├── main.ts                 ← Create app, mount
│   │   ├── router/
│   │   │   └── index.ts            ← Vue Router config
│   │   ├── stores/
│   │   │   └── contacts.ts         ← Pinia store
│   │   ├── views/
│   │   │   ├── HomeView.vue        ← Contact list page
│   │   │   ├── ContactDetailView.vue
│   │   │   └── ContactFormView.vue
│   │   ├── components/
│   │   │   ├── ContactList.vue
│   │   │   ├── ContactCard.vue
│   │   │   ├── ContactForm.vue
│   │   │   └── SearchBar.vue
│   │   └── composables/
│   │       ├── useContacts.ts      ← Fetch, create, update, delete
│   │       └── useAuth.ts          ← Login, register, token mgmt
│   ├── Dockerfile
│   ├── vite.config.ts
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## Task List

### Phase 1 — Fastify Backend
- [ ] Bootstrap Fastify app with TypeScript
- [ ] Register plugins: cors, jwt, swagger
- [ ] Create Prisma plugin (decorator: `fastify.prisma`)
- [ ] Define Contact model in Prisma schema
- [ ] Create migration and seed
- [ ] Build CRUD route handlers with JSON Schema validation
- [ ] Add Typebox schemas for type-safe validation
- [ ] Add preHandler hook for JWT auth
- [ ] Test with fastify.inject()

### Phase 2 — GraphQL with Mercurius
- [ ] Install mercurius
- [ ] Define GraphQL schema (SDL)
- [ ] Write resolvers for contacts
- [ ] Test via GraphiQL playground

### Phase 3 — Swagger Docs
- [ ] Configure @fastify/swagger
- [ ] Verify auto-generated docs at /docs
- [ ] Add route descriptions and tags

### Phase 4 — Vue 3 Frontend
- [ ] Scaffold Vue 3 + Vite + TypeScript
- [ ] Set up Vue Router with lazy-loaded routes
- [ ] Build views: Home, ContactDetail, ContactForm
- [ ] Build components: ContactList, ContactCard, SearchBar
- [ ] Create composables: useContacts, useAuth

### Phase 5 — Pinia State Management
- [ ] Create contacts store (state, getters, actions)
- [ ] Integrate store with composables
- [ ] Add auth store (token, user, login/logout)

### Phase 6 — Docker
- [ ] Dockerfile for Fastify backend
- [ ] Dockerfile for Vue frontend
- [ ] docker-compose.yml

---

## Fastify vs Express — Key Differences to Learn

| Feature | Express | Fastify |
|---|---|---|
| **Architecture** | Middleware chain | Plugin system |
| **Validation** | External (Zod, Joi) | Built-in JSON Schema |
| **Performance** | Good | ~2x faster |
| **Hooks** | `app.use()` | Lifecycle hooks (onRequest, preHandler, etc.) |
| **Testing** | Supertest | `fastify.inject()` (no HTTP needed) |
| **TypeScript** | Manual types | First-class Typebox integration |

## Vue 3 vs React — Key Differences to Learn

| Feature | React | Vue 3 |
|---|---|---|
| **Reactivity** | useState + re-renders | Proxy-based (ref, reactive) |
| **Components** | JSX functions | SFC (.vue files) |
| **Logic reuse** | Custom hooks | Composables |
| **State mgmt** | Zustand / Redux | Pinia |
| **Templates** | JSX (JS-centric) | HTML templates (template-centric) |
