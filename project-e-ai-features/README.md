# PROJECT E — AI-Enhanced Contacts

> **AI-powered features** layered on top of the Contact List application.
> Covers RAG, vector search, LLM integration, LangChain.js, embeddings,
> Elasticsearch, and streaming AI responses.

---

## Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js + TypeScript |
| **LLM SDKs** | OpenAI SDK, Anthropic SDK |
| **AI Framework** | LangChain.js |
| **Vector DB** | pgvector (PostgreSQL extension) |
| **Search** | Elasticsearch 8 |
| **Database** | PostgreSQL + Prisma |
| **Streaming** | Server-Sent Events (SSE) |
| **Testing** | Vitest |

---

## What This Project Covers

- **LLM Integration** — calling OpenAI / Anthropic chat completions
- **Streaming responses** — SSE to stream tokens to the browser in real-time
- **Function calling** — OpenAI tool_use / function_calling for structured output
- **RAG pipeline** — chunk documents → embed → store in pgvector → retrieve → generate
- **Embeddings** — text-embedding-3-small, cosine similarity, HNSW index
- **pgvector** — vector column, `<=>` / `<->` distance operators, indexing
- **Elasticsearch** — full-text search, hybrid search (BM25 + vector)
- **LangChain.js** — chains, agents, retrieval chains, memory, tools
- **Prompt engineering** — system prompts, few-shot, chain-of-thought
- **Token management** — counting tokens, caching, cost tracking
- **AI-powered features** — smart search, contact summarisation, auto-tagging

---

## MVP Features

1. **Smart Search** — "find people who work in AI" → natural language to SQL/filter
2. **Contact Summary** — LLM summarises a contact's notes and history
3. **Auto-Tagging** — LLM suggests tags for a contact based on their info
4. **Semantic Search** — embed contact notes, search by meaning (pgvector)
5. **Chat with Contacts** — ask questions about your contacts (RAG)
6. **Hybrid Search** — combine Elasticsearch full-text + vector similarity
7. **Streaming Chat UI** — tokens stream in real-time via SSE

---

## Folder Structure

```
project-e-ai-features/
├── src/
│   ├── rag/
│   │   ├── chunker.ts             ← Split text into chunks
│   │   ├── embedder.ts            ← Call OpenAI embeddings API
│   │   ├── vector-store.ts        ← pgvector CRUD operations
│   │   └── retriever.ts           ← Similarity search + re-ranking
│   ├── llm/
│   │   ├── client.ts              ← OpenAI / Anthropic SDK wrapper
│   │   ├── function-calling.ts    ← Tool definitions, structured output
│   │   ├── streaming.ts           ← SSE streaming helper
│   │   └── prompts/
│   │       ├── contact-summary.ts ← Summarise contact prompt
│   │       ├── smart-search.ts    ← NL → SQL prompt
│   │       └── auto-tag.ts        ← Auto-tag prompt
│   ├── langchain/
│   │   ├── chain.ts               ← RetrievalQA chain
│   │   └── agent.ts               ← Agent with contact tools
│   ├── elasticsearch/
│   │   ├── client.ts              ← ES connection
│   │   ├── index-contacts.ts      ← Create index, ingest contacts
│   │   └── hybrid-search.ts       ← BM25 + kNN vector search
│   └── tests/
│       ├── rag.test.ts
│       ├── llm.test.ts
│       └── search.test.ts
├── prisma/
│   └── schema.prisma              ← Contact + vector extension
├── docker-compose.yml             ← Postgres+pgvector, Elasticsearch
├── package.json
└── README.md
```

---

## Task List

### Phase 1 — LLM Basics
- [ ] Set up OpenAI SDK client
- [ ] Implement basic chat completion (ask a question, get an answer)
- [ ] Add streaming support (iterate over chunks)
- [ ] Build SSE endpoint to stream tokens to frontend
- [ ] Implement Anthropic SDK client (compare API shapes)

### Phase 2 — Function Calling & Structured Output
- [ ] Define tools/functions (e.g., "search_contacts", "get_contact")
- [ ] Implement function calling flow (LLM → tool call → result → LLM)
- [ ] Use JSON mode for structured responses (extract tags, entities)

### Phase 3 — Embeddings & pgvector
- [ ] Add pgvector extension to Prisma schema
- [ ] Create vector column on contacts table
- [ ] Write embedder.ts (call text-embedding-3-small)
- [ ] Embed all contact notes on seed
- [ ] Implement similarity search (cosine distance `<=>`)
- [ ] Add HNSW index for performance

### Phase 4 — RAG Pipeline
- [ ] Implement chunker.ts (split large text into overlapping chunks)
- [ ] Implement retriever.ts (embed query → search pgvector → return top K)
- [ ] Build RAG endpoint: user question → retrieve context → generate answer
- [ ] Test with "What does David work on?" style questions

### Phase 5 — LangChain.js
- [ ] Set up LangChain.js with OpenAI
- [ ] Build RetrievalQA chain (vector store retriever + LLM)
- [ ] Build agent with custom tools (search contacts, update contact)
- [ ] Add conversation memory (BufferWindowMemory)

### Phase 6 — Elasticsearch
- [ ] Set up ES client
- [ ] Create contacts index with mappings
- [ ] Index all contacts
- [ ] Implement full-text search (multi_match)
- [ ] Implement hybrid search (BM25 + kNN with vector field)

### Phase 7 — AI Features
- [ ] Contact Summary: LLM summarises notes → returns structured output
- [ ] Auto-Tagging: LLM suggests tags → function calling
- [ ] Smart Search: "people in AI" → LLM → SQL WHERE clause
- [ ] Token counting and cost tracking

---

## Key AI Concepts

| Concept | Description |
|---|---|
| **Embeddings** | Numerical vector representation of text, captures semantic meaning |
| **Cosine similarity** | Measures angle between vectors (1 = identical, 0 = unrelated) |
| **RAG** | Retrieve relevant docs → inject as context → generate LLM response |
| **Chunking** | Splitting large text into smaller overlapping pieces for embedding |
| **Function calling** | LLM returns structured JSON to invoke your functions |
| **HNSW** | Approximate nearest neighbour index for fast vector search |
| **Hybrid search** | Combine keyword (BM25) + semantic (vector) search for better results |
