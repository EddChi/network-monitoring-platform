# Network Monitoring Platform

A backend monitoring platform built with Spring Boot and PostgreSQL that simulates real-time network monitoring behaviour. The system tracks agents, records activity events, collects system metrics, generates alerts, and provides dashboard analytics through REST APIs.

## Features

### Agent Management
- Create, retrieve and delete network agents
- Search agents by hostname and status
- Track ONLINE/OFFLINE state

### Heartbeat Monitoring
- Heartbeat endpoint for agent check-ins
- Automatic `lastSeen` updates
- Agent status recovery through heartbeat updates

### Automated Monitoring
- Scheduled background task for inactive agents
- Automatic OFFLINE detection after inactivity

### Event Logging
- Stores historical activity events
- Agent-specific event timelines
- Recent activity feed

### System Metrics
- CPU usage monitoring
- Memory usage monitoring
- Disk usage monitoring
- Network latency tracking
- Timestamped metric history

### Analytics
- Average metric calculations
- Maximum metric calculations
- Dashboard summary statistics

### Alert System
- HIGH_CPU alerts
- HIGH_MEMORY alerts
- HIGH_LATENCY alerts
- Severity levels (HIGH / CRITICAL / MEDIUM)

### API Improvements
- DTO-based responses
- Global exception handling
- Custom error responses

---

## Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Gradle

### Database
- PostgreSQL 16
- Docker Compose

### Development Tools
- IntelliJ IDEA
- Postman
- Git/GitHub

---

## Project Architecture

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
PostgreSQL Database
```

---

## API Endpoints

### Agents

```http
POST   /api/agents
GET    /api/agents
GET    /api/agents/{id}
DELETE /api/agents/{id}
GET    /api/agents/search
PUT    /api/agents/{id}/heartbeat
```

### Events

```http
GET /api/events
GET /api/events/agent/{id}
```

### Metrics

```http
POST /api/metrics/agent/{id}
GET  /api/metrics/agent/{id}
GET  /api/metrics/agent/{id}/summary
```

### Alerts

```http
GET /api/alerts
GET /api/alerts/agent/{id}
```

### Dashboard

```http
GET /api/dashboard/summary
```

### Activity Feed

```http
GET /api/activity/recent
```

---

## Future Improvements

- React frontend dashboard
- Authentication with Spring Security + JWT
- WebSocket live updates
- Charts for metrics visualisation
- Deployment to cloud infrastructure
- Real agent monitoring clients