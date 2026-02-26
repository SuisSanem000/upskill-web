# PROJECT G — MongoDB + WebSockets + Redis (NoSQL & Real-Time)

> **Contact List Application** reimagined with MongoDB (NoSQL), Redis caching,
> and Socket.io for real-time updates. Learn the alternatives to SQL + polling.

---

## Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js + TypeScript |
| **Backend** | Express |
| **Database** | MongoDB + Mongoose |
| **Caching** | Redis (ioredis) |
| **Real-Time** | Socket.io |
| **Job Queue** | BullMQ (Redis-backed) |
| **Testing** | Vitest |

---

## What This Project Covers

- **MongoDB** — document design, CRUD, aggregation pipeline, indexing
- **Mongoose** — schemas, models, virtuals, middleware, population, discriminators
- **Embedding vs referencing** — when to embed and when to reference documents
- **Redis** — caching patterns (cache-aside), session store, pub/sub
- **ioredis** — Redis client for Node.js
- **BullMQ** — background job queue (e.g., send email on contact creation)
- **Socket.io** — real-time events (new contact → push to all clients)
- **WebSocket patterns** — rooms, namespaces, acknowledgements

---

## MVP Features

1. **Contact CRUD** — MongoDB-backed with Mongoose
2. **Real-time updates** — create/edit/delete broadcasts via Socket.io
3. **Cached reads** — Redis cache for contact list (cache-aside pattern)
4. **Background jobs** — BullMQ job on contact creation (e.g., log, notify)
5. **Aggregation** — MongoDB aggregation pipeline (contacts per company, tag stats)
6. **Full-text search** — MongoDB text index on name/notes

---

## Folder Structure

```
project-g-mongo-realtime/
├── backend/
│   ├── src/
│   │   ├── server.ts              ← Express + Socket.io setup
│   │   ├── config/
│   │   │   ├── db.ts              ← MongoDB connection (Mongoose)
│   │   │   └── redis.ts           ← Redis connection (ioredis)
│   │   ├── models/
│   │   │   └── contact.model.ts   ← Mongoose schema + model
│   │   ├── routes/
│   │   │   └── contacts.ts        ← REST routes
│   │   ├── services/
│   │   │   └── contacts.service.ts ← Business logic + cache
│   │   ├── websocket/
│   │   │   └── events.ts          ← Socket.io event handlers
│   │   ├── cache/
│   │   │   └── redis.ts           ← Cache helper (get, set, invalidate)
│   │   ├── jobs/
│   │   │   ├── queue.ts           ← BullMQ queue config
│   │   │   ├── processors/
│   │   │   │   └── contact-created.ts ← Process new contact job
│   │   │   └── workers.ts         ← Worker startup
│   │   └── tests/
│   │       ├── contacts.test.ts
│   │       └── cache.test.ts
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml             ← Express + MongoDB + Redis
└── README.md
```

---

## Task List

### Phase 1 — MongoDB + Mongoose
- [ ] Set up Mongoose connection to MongoDB
- [ ] Define Contact schema (fields, types, required, defaults)
- [ ] Add virtuals (fullName computed field)
- [ ] Add mongoose middleware (pre-save: update timestamp)
- [ ] Implement CRUD operations in service
- [ ] Build REST routes (same shape as Project A)
- [ ] Seed database with sample contacts

### Phase 2 — Indexing & Aggregation
- [ ] Add compound index on (lastName, firstName)
- [ ] Add text index on (firstName, lastName, notes)
- [ ] Implement full-text search using `$text` operator
- [ ] Write aggregation pipeline: contacts grouped by company
- [ ] Write aggregation pipeline: most common tags
- [ ] Write aggregation pipeline: contacts created per month

### Phase 3 — Redis Caching
- [ ] Set up ioredis client
- [ ] Implement cache-aside pattern for GET /contacts
- [ ] Cache individual contacts by ID
- [ ] Invalidate cache on create / update / delete
- [ ] Add TTL (time-to-live) to cached entries
- [ ] Test cache hit vs miss behaviour

### Phase 4 — Socket.io Real-Time
- [ ] Set up Socket.io on the Express server
- [ ] Define events: `contact:created`, `contact:updated`, `contact:deleted`
- [ ] Emit events from service layer after mutations
- [ ] Build a simple client page that listens and updates live
- [ ] Add rooms (e.g., per-user or per-workspace)

### Phase 5 — BullMQ Job Queue
- [ ] Set up BullMQ queue (backed by Redis)
- [ ] Add job on contact creation (process in background)
- [ ] Create worker that processes the job (log, mock email)
- [ ] Add job retry and failure handling
- [ ] (optional) BullMQ dashboard with bull-board

### Phase 6 — Docker
- [ ] docker-compose.yml with Express + MongoDB + Redis
- [ ] Test full stack runs

---

## MongoDB vs PostgreSQL — Key Differences

| Feature | PostgreSQL | MongoDB |
|---|---|---|
| **Data model** | Tables, rows, columns | Collections, documents (JSON) |
| **Schema** | Strict (migrations) | Flexible (schema-less, Mongoose adds structure) |
| **Relations** | JOINs (normalised) | Embedding or `$lookup` (denormalised) |
| **Query** | SQL | MongoDB Query Language (MQL) |
| **Transactions** | Mature, ACID | Supported since 4.0 (multi-doc) |
| **Search** | Full-text with tsvector | `$text` index or Atlas Search |
| **Best for** | Complex relations, reporting | Rapid prototyping, flexible schemas |

## Redis Caching Patterns

| Pattern | Description |
|---|---|
| **Cache-Aside** | App checks cache → miss → query DB → store in cache |
| **Write-Through** | App writes to cache + DB together |
| **Write-Behind** | App writes to cache → async flush to DB |
| **TTL** | Auto-expire cached data after N seconds |
