# Enterprise DevOps CI/CD Pipeline Project

## Project Overview

This project demonstrates an end-to-end Enterprise DevOps CI/CD Pipeline using GitHub Actions, Docker, MongoDB, React, Node.js, Kubernetes, Helm, SonarQube, and Trivy.

The objective is to automate the complete software delivery lifecycle from code commit to deployment using modern DevOps practices.

---

## Architecture

```text
+-------------+
|  Developer  |
+-------------+
       |
       v
+----------------------+
|  GitHub Repository   |
+----------------------+
       |
       v
+----------------------+
| GitHub Actions CI    |
+----------------------+
| 1. Code Quality      |
| 2. Unit Testing      |
| 3. Docker Build      |
| 4. Trivy Scan        |
+----------------------+
       |
       v
+----------------------+
| GitHub Actions CD    |
+----------------------+
| 1. Deploy Containers |
| 2. Smoke Testing     |
+----------------------+
       |
       v
+----------------------+
| Docker Environment   |
+----------------------+
       |
       v
+----------------------+
| React Frontend       |
| Node.js Backend      |
| MongoDB Database     |
+----------------------+
```

## Technology Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### DevOps Tools
- Git
- GitHub
- GitHub Actions
- Docker
- Docker Compose
- Self Hosted Runner
- Kubernetes
- Helm
- SonarQube
- Trivy

---

## Project Structure

```text
enterprise-devops-project
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   └── mongodb-deployment.yaml
│
├── helm/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── docker-compose.yml
└── README.md
```

---

## Application Features

- Enterprise DevOps Dashboard
- React Frontend
- Node.js REST APIs
- MongoDB Database Integration
- Dockerized Application
- CI/CD Automation
- Security Scanning
- Kubernetes Deployment
- Automated Localhost Deployment

---

## CI Pipeline

The CI pipeline is triggered automatically on:

- Push to feature branches
- Push to develop branch
- Pull Request creation
- Merge to main branch

### CI Stages

1. Source Code Checkout
2. Dependency Installation
3. Code Quality Validation
4. Unit Testing
5. Docker Image Build
6. Security Scan using Trivy
7. Artifact Validation

---

## CD Pipeline

The CD pipeline starts automatically after CI success.

### CD Stages

1. Checkout Source Code
2. Stop Existing Containers
3. Remove Old Images
4. Build New Images
5. Deploy Containers
6. Health Checks
7. Smoke Testing

---

## Git Branch Strategy

### Feature Branch

```bash
feature/*
```

Developer changes are committed here.

### Development Branch

```bash
develop
```

Integration testing environment.

### Main Branch

```bash
main
```

Production-ready code.

---

## Running Locally

### Clone Repository

```bash
git clone <repository-url>
```

### Build and Start Application

```bash
docker compose up --build -d
```

### View Running Containers

```bash
docker ps
```

---

## Application URLs

Frontend

```text
http://localhost:3000
```

Backend

```text
http://localhost:5000
```

Backend Health Check

```text
http://localhost:5000/api/health
```

MongoDB

```text
mongodb://localhost:27017
```

SonarQube

```text
http://localhost:9000
```

---

## Security

### Trivy

Used to scan Docker images for:

- Vulnerabilities
- Misconfigurations
- Secrets
- Security Risks

### SonarQube

Used for:

- Code Quality Analysis
- Code Smell Detection
- Technical Debt Analysis
- Security Hotspot Detection

---

## Kubernetes Deployment

Deploy application:

```bash
kubectl apply -f k8s/
```

Check resources:

```bash
kubectl get all
```

---

## Helm Deployment

Install chart:

```bash
helm install enterprise-app ./helm
```

Upgrade deployment:

```bash
helm upgrade enterprise-app ./helm
```

Rollback deployment:

```bash
helm rollback enterprise-app 1
```

---

## Rollback Strategy

In case of deployment failure:

### Docker

```bash
docker compose down
docker compose up -d
```

### Helm

```bash
helm rollback enterprise-app 1
```

---

## CI/CD Workflow

Code Commit
↓
GitHub Actions Trigger
↓
Code Validation
↓
Unit Testing
↓
Docker Build
↓
Trivy Scan
↓
Deployment
↓
Smoke Testing
↓
Application Available

---

## Key DevOps Concepts Demonstrated

- Continuous Integration
- Continuous Deployment
- Infrastructure as Code
- Containerization
- Security Scanning
- Branching Strategy
- Automated Testing
- Automated Deployment
- Rollback Mechanism
- Kubernetes Orchestration

---

## Project Outcome

This project successfully implements an enterprise-grade CI/CD pipeline that automates build, testing, security validation, containerization, deployment, and application verification using modern DevOps practices.