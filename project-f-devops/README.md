# PROJECT F — DevOps & Cloud

> **Infrastructure, deployment, and CI/CD** for the Contact List application.
> No application code here — this project wraps Projects A or B with
> production-grade Docker, Nginx, AWS, Terraform, and GitHub Actions.

---

## Stack

| Layer | Technology |
|---|---|
| **Containers** | Docker, docker-compose |
| **Reverse Proxy** | Nginx |
| **Cloud** | AWS (EC2, S3, RDS, Lambda, IAM, CloudWatch) |
| **IaC** | Terraform |
| **CI/CD** | GitHub Actions |
| **Serverless** | AWS Lambda + API Gateway |

---

## What This Project Covers

- **Docker** — multi-stage builds, layer caching, docker-compose for dev + prod
- **Nginx** — reverse proxy, static file serving, SSL termination, gzip
- **AWS EC2** — launch instance, security groups, SSH, deploy containers
- **AWS S3** — file uploads (contact avatars), presigned URLs, static hosting
- **AWS RDS** — managed PostgreSQL, connection pooling, backups
- **AWS Lambda** — serverless function (e.g., contact webhook, email notification)
- **AWS IAM** — roles, policies, least privilege
- **AWS CloudWatch** — logs, alarms, monitoring
- **Terraform** — define AWS infrastructure as code (EC2, RDS, S3, IAM)
- **GitHub Actions** — full CI/CD pipeline (test → build → push → deploy)

---

## Folder Structure

```
project-f-devops/
├── terraform/
│   ├── main.tf                    ← AWS resources (EC2, RDS, S3)
│   ├── variables.tf               ← Input variables
│   ├── outputs.tf                 ← Output values (IPs, URLs)
│   ├── providers.tf               ← AWS provider config
│   └── modules/
│       ├── ec2/                   ← EC2 instance module
│       ├── rds/                   ← RDS PostgreSQL module
│       └── s3/                    ← S3 bucket module
│
├── nginx/
│   ├── nginx.conf                 ← Main config
│   ├── conf.d/
│   │   └── app.conf               ← Server block for the app
│   └── ssl/                       ← SSL cert placeholder
│
├── docker/
│   ├── Dockerfile.backend         ← Production backend image
│   ├── Dockerfile.frontend        ← Production frontend image
│   ├── docker-compose.dev.yml     ← Dev environment
│   └── docker-compose.prod.yml    ← Production environment
│
├── .github/
│   └── workflows/
│       ├── ci.yml                 ← PR check: lint → test → build
│       ├── cd.yml                 ← Deploy to AWS on merge to main
│       └── preview.yml            ← PR preview deployment
│
├── scripts/
│   ├── deploy.sh                  ← SSH + deploy to EC2
│   ├── seed-db.sh                 ← Seed production database
│   └── backup-db.sh               ← RDS snapshot script
│
├── aws-lambda/
│   └── contact-webhook/
│       ├── handler.ts             ← Lambda function code
│       ├── package.json
│       └── tsconfig.json
│
└── README.md
```

---

## Task List

### Phase 1 — Docker
- [ ] Write multi-stage Dockerfile for backend (build → production image)
- [ ] Write multi-stage Dockerfile for frontend (build → nginx serve)
- [ ] Create docker-compose.dev.yml (backend + frontend + Postgres + volumes)
- [ ] Create docker-compose.prod.yml (production-ready, no source mounts)
- [ ] Test full stack runs with `docker-compose up`

### Phase 2 — Nginx
- [ ] Write nginx.conf for reverse proxy
- [ ] Proxy `/api` → backend container
- [ ] Serve frontend static files
- [ ] Add gzip compression
- [ ] Add basic security headers
- [ ] (Optional) Self-signed SSL for local testing

### Phase 3 — GitHub Actions CI
- [ ] Create ci.yml workflow triggered on PR
- [ ] Job 1: Lint (ESLint)
- [ ] Job 2: Test (Jest / Vitest)
- [ ] Job 3: Build Docker image
- [ ] Add caching (node_modules, Docker layers)
- [ ] Add matrix strategy (Node 18, 20)

### Phase 4 — AWS Setup
- [ ] Create AWS free-tier account (if needed)
- [ ] Set up IAM user with programmatic access
- [ ] Configure AWS CLI locally
- [ ] Launch EC2 instance (Ubuntu, t2.micro)
- [ ] Set up security group (ports 22, 80, 443)
- [ ] SSH into instance, install Docker

### Phase 5 — AWS Services
- [ ] Create RDS PostgreSQL instance
- [ ] Connect backend to RDS
- [ ] Create S3 bucket for file uploads
- [ ] Implement presigned URL generation for avatar uploads
- [ ] Set up CloudWatch log group
- [ ] Send backend logs to CloudWatch

### Phase 6 — GitHub Actions CD
- [ ] Create cd.yml triggered on push to main
- [ ] Build Docker images
- [ ] Push to Docker Hub or AWS ECR
- [ ] SSH deploy to EC2 (docker pull + docker-compose up)
- [ ] Add rollback strategy

### Phase 7 — Terraform
- [ ] Define EC2 instance resource
- [ ] Define RDS instance resource
- [ ] Define S3 bucket resource
- [ ] Define IAM role + policy
- [ ] Define security group
- [ ] Run `terraform plan` and `terraform apply`
- [ ] Store state in S3 backend

### Phase 8 — Serverless (Lambda)
- [ ] Write Lambda function (contact created → send webhook)
- [ ] Package and deploy to AWS Lambda
- [ ] Create API Gateway trigger
- [ ] Test end-to-end

---

## Key DevOps Concepts

| Concept | Description |
|---|---|
| **Multi-stage build** | Separate build and production stages in Dockerfile for smaller images |
| **IaC** | Infrastructure as Code — define infra in files, version-controlled |
| **CI** | Continuous Integration — auto test and build on every commit |
| **CD** | Continuous Deployment — auto deploy after CI passes |
| **Reverse proxy** | Nginx forwards requests to backend, serves static frontend |
| **Security group** | AWS firewall rules for EC2 instances |
| **Presigned URL** | Temporary S3 URL for direct browser uploads |
| **IAM** | Identity and Access Management — least privilege principle |
