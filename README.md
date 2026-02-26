# Upskill Web — Contact List Application (7 Ways)

> Learn every framework a mid-level fullstack developer needs by building the
> **same contact list app** in 7 different stacks.

---

## Projects

| # | Project | Stack | Status |
|---|---|---|---|
| **A** | [Express + React](project-a-express-react/) | Express · React · Prisma · Zustand | ✅ Scaffolded |
| **B** | [NestJS + Next.js](project-b-nest-next/) | NestJS · Fastify · Next.js · TypeORM · GraphQL | ✅ Scaffolded |
| **C** | [Fastify + Vue](project-c-fastify-vue/) | Fastify · Vue 3 · Prisma · Mercurius | ✅ Scaffolded |
| **D** | [React Native](project-d-react-native/) | Expo · React Native | 🔧 Needs Expo init |
| **E** | [AI-Enhanced](project-e-ai-features/) | OpenAI · LangChain · pgvector · Elasticsearch | ✅ Scaffolded |
| **F** | [DevOps & Cloud](project-f-devops/) | Docker · AWS · Terraform · GitHub Actions | 📝 Config only |
| **G** | [MongoDB + Realtime](project-g-mongo-realtime/) | Mongoose · Redis · Socket.io · BullMQ | ✅ Scaffolded |

## Shared Resources

- **`shared/types/`** — Shared TypeScript interfaces (`Contact`, DTOs)
- **`shared/seed-data/`** — Sample contacts JSON for seeding any database
- **`shared/docker/`** — Docker Compose for infrastructure (Postgres, Redis, ES, Mongo)
- **`docs/`** — Learning notes (one per topic, doubles as interview review)

## Quick Start

```bash
# Start infrastructure (Postgres, Redis, Elasticsearch, MongoDB)
docker-compose -f shared/docker/docker-compose.infra.yml up -d

# Then pick a project and run it:
cd project-a-express-react/backend && npm run dev
cd project-a-express-react/frontend && npm run dev
```

## Full Learning Plan

See [UPSKILL_PLAN.md](UPSKILL_PLAN.md) for the complete skill map,
learning order, and topic details.

## Project D (React Native) Setup

Project D requires Expo CLI to properly initialize:

```bash
cd project-d-react-native
# Remove existing package.json and install properly via Expo:
npx create-expo-app@latest . --template blank-typescript
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @tanstack/react-query axios expo-secure-store
```
