Enterprise DevOps CI/CD Pipeline Project

Project Overview

This project demonstrates an end-to-end DevOps CI/CD Pipeline using GitHub Actions, Docker, React, Node.js, MongoDB, and a Self-Hosted GitHub Runner.

The pipeline automatically builds, tests, containerizes, and deploys the application to a local Docker environment whenever code changes are pushed to GitHub.

Architecture
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
| 1. Code Validation   |
| 2. Unit Testing      |
| 3. Docker Build      |
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
| Self Hosted Runner   |
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
Technology Stack
Frontend
React.js
Axios
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
DevOps Tools
Git
GitHub
GitHub Actions
Docker
Docker Compose
Self Hosted Runner
Project Structure
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
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── docker-compose.yml
│
└── README.md
Application Features
Responsive React Dashboard
Node.js REST API
MongoDB Integration
Dockerized Application
Automated CI/CD Pipeline
Automatic Localhost Deployment
Self-Hosted Runner Deployment
Git Branch Strategy
Feature Branch
feature/*

Developer changes are implemented here.

Development Branch
develop

Used for integration testing.

Main Branch
main

Production-ready code.

CI Pipeline

The CI pipeline runs automatically on:

Push to feature branches
Push to develop branch
Pull Requests
Merge to main branch
CI Stages
Source Code Checkout
Install Dependencies
Code Validation
Unit Testing
Docker Image Build
CD Pipeline

The CD pipeline starts automatically after successful CI execution.

CD Stages
Checkout Repository
Stop Existing Containers
Remove Old Docker Images
Build New Docker Images
Deploy Containers
Health Verification
Smoke Testing
Running Locally
Clone Repository
git clone <repository-url>
cd enterprise-devops-project
Start Application
docker compose up --build -d
View Running Containers
docker ps
Stop Application
docker compose down
Application URLs
Frontend
http://localhost:3000
Backend
http://localhost:5000
Health Endpoint
http://localhost:5000/api/health
MongoDB
mongodb://localhost:27017
MongoDB Usage

MongoDB acts as the application's database.

Current implementation stores:

Dashboard data
Application records
API-generated data

MongoDB runs as a Docker container and is automatically started through Docker Compose.

View MongoDB container:

docker ps

Access MongoDB shell:

docker exec -it <mongodb-container-name> mongosh

Show databases:

show dbs

Use application database:

use enterpriseDB

View collections:

show collections
Self Hosted Runner

The deployment pipeline uses a GitHub Self-Hosted Runner running on Windows.

Benefits:

Localhost deployment
Full control over deployment environment
No cloud infrastructure required
Faster deployment testing
CI/CD Workflow
Developer Commit
       |
       v
GitHub Repository
       |
       v
GitHub Actions CI
       |
       v
Code Validation
       |
       v
Unit Testing
       |
       v
Docker Image Build
       |
       v
GitHub Actions CD
       |
       v
Self Hosted Runner
       |
       v
Docker Deployment
       |
       v
Smoke Testing
       |
       v
Application Available
DevOps Concepts Demonstrated
Continuous Integration (CI)
Continuous Deployment (CD)
Git Branching Strategy
Docker Containerization
Infrastructure Automation
Automated Testing
Automated Deployment
Self-Hosted Runners
Local Environment Deployments
Project Outcome

This project demonstrates a complete DevOps workflow where application changes are automatically built, tested, containerized, and deployed to a local Docker environment using GitHub Actions and a Self-Hosted Runner.