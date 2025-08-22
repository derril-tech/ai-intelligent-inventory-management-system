# Backend Development Instructions - StockSense AI

## 🎯 Overview

This directory contains the FastAPI backend application for StockSense AI. The backend provides RESTful APIs, WebSocket connections, and AI/ML capabilities for intelligent inventory management, including demand forecasting, policy optimization, and multi-echelon replenishment planning.

## 🏗️ Architecture

### Tech Stack
- **Framework**: FastAPI with async support
- **Language**: Python 3.11+
- **Database**: PostgreSQL with pgvector extension
- **Cache**: Redis for sessions and job queues
- **AI/ML**: LangGraph + LangChain + OpenAI/Anthropic
- **Authentication**: JWT with refresh tokens
- **Documentation**: OpenAPI/Swagger
- **Monitoring**: OpenTelemetry + Prometheus

### Key Features
- **Data Ingestion**: ETL pipelines for ERP/WMS integration
- **Forecasting Engine**: ML models for demand prediction
- **Policy Optimization**: (s,S), Min-Max, EOQ algorithms
- **Multi-Echelon Planning**: Network optimization
- **Real-time Processing**: WebSocket streaming
- **Vendor Portal**: Supplier collaboration
- **Analytics**: KPI calculation and reporting

## 📁 Directory Structure

```
app/
├── api/                    # API endpoints
│   └── v1/                # Version 1 API routes
│       ├── auth.py        # Authentication endpoints
│       ├── items.py       # Item management
│       ├── inventory.py   # Inventory operations
│       ├── forecast.py    # Forecasting endpoints
│       ├── policy.py      # Policy optimization
│       ├── planning.py    # Replenishment planning
│       ├── orders.py      # Order management
│       └── analytics.py   # Analytics and KPIs
├── core/                  # Core application logic
│   ├── config.py         # Configuration settings
│   ├── database.py       # Database connection
│   ├── security.py       # Authentication & security
│   └── logging.py        # Logging configuration
├── models/               # Database models
├── schemas/              # Pydantic schemas
├── services/             # Business logic services
├── crud/                 # Database operations
├── utils/                # Utility functions
└── ai/                   # AI/ML components
    ├── workflows/        # LangGraph workflows
    ├── retrievers/       # LangChain retrievers
    └── models/           # ML model definitions
```

## 🚀 Development Guidelines

### Code Standards
1. **Type Hints**: Use type hints for all functions
2. **Async/Await**: Use async functions for I/O operations
3. **Error Handling**: Implement proper exception handling
4. **Documentation**: Docstrings for all functions
5. **Testing**: Unit and integration tests required

### API Design
1. **RESTful**: Follow REST principles
2. **Versioning**: Use URL versioning (/api/v1/)
3. **Pagination**: Implement cursor-based pagination
4. **Filtering**: Support query parameter filtering
5. **Sorting**: Allow field-based sorting

### Database Design
1. **Migrations**: Use Alembic for schema changes
2. **Indexing**: Optimize query performance
3. **Constraints**: Enforce data integrity
4. **Partitioning**: Use table partitioning for large datasets
5. **Backup**: Regular automated backups

### Security
1. **Authentication**: JWT with refresh tokens
2. **Authorization**: Role-based access control
3. **Input Validation**: Pydantic schema validation
4. **Rate Limiting**: Prevent abuse
5. **Audit Logging**: Track all changes

## 🔧 Development Workflow

### Setup
1. Install Python 3.11+
2. Create virtual environment: `python -m venv venv`
3. Install dependencies: `pip install -r requirements.txt`
4. Set up environment variables: Copy `.env.example` to `.env`
5. Run database migrations: `alembic upgrade head`
6. Start development server: `uvicorn main:app --reload`

### Code Quality
1. **Formatting**: Black for code formatting
2. **Linting**: Flake8 for code quality
3. **Type Checking**: MyPy for type validation
4. **Import Sorting**: isort for import organization
5. **Pre-commit**: Automated quality checks

### Testing
1. **Unit Tests**: pytest for individual functions
2. **Integration Tests**: Test API endpoints
3. **Database Tests**: Test with test database
4. **Coverage**: > 90% test coverage target
5. **Performance Tests**: Load testing for critical endpoints

## 📊 Performance Targets

### Response Times
- **Simple Queries**: < 100ms
- **Complex Queries**: < 500ms
- **ML Operations**: < 30s
- **File Uploads**: < 60s

### Throughput
- **Read Operations**: 1000+ requests/second
- **Write Operations**: 100+ requests/second
- **Concurrent Users**: 1000+ simultaneous users

### Resource Usage
- **Memory**: < 2GB per instance
- **CPU**: < 80% utilization
- **Database**: < 1000 connections

## 🔒 Security Requirements

### Authentication
- **JWT Tokens**: 1-hour expiration
- **Refresh Tokens**: 7-day expiration
- **Password Policy**: Minimum 8 characters, complexity required
- **MFA**: Optional for admin users

### Data Protection
- **Encryption**: TLS 1.3 for data in transit
- **Storage**: Encrypted at rest
- **PII**: Minimal collection and processing
- **GDPR**: Full compliance

### API Security
- **CORS**: Configured for specific origins
- **Rate Limiting**: Per-user and per-endpoint limits
- **Input Sanitization**: Prevent injection attacks
- **Audit Trail**: Log all API access

## 🧪 Testing Strategy

### Unit Tests
- **Models**: Test database models
- **Services**: Test business logic
- **Utils**: Test utility functions
- **Schemas**: Test data validation

### Integration Tests
- **API Endpoints**: Test complete request/response cycles
- **Database**: Test with real database
- **External Services**: Mock external dependencies
- **Authentication**: Test auth flows

### Performance Tests
- **Load Testing**: Simulate high traffic
- **Stress Testing**: Test system limits
- **Endurance Testing**: Long-running tests
- **Spike Testing**: Sudden traffic increases

## 🚀 Deployment

### Environments
- **Development**: Local development
- **Staging**: Pre-production testing
- **Production**: Live application

### Infrastructure
- **Application**: Render with auto-scaling
- **Database**: PostgreSQL with pgvector
- **Cache**: Redis for sessions and queues
- **Monitoring**: Prometheus + Grafana
- **Logging**: Structured JSON logs

### CI/CD Pipeline
1. **Code Quality**: Run linting and tests
2. **Security Scan**: Check for vulnerabilities
3. **Build**: Create Docker image
4. **Deploy**: Deploy to target environment
5. **Health Check**: Verify deployment success

## 📚 API Documentation

### OpenAPI/Swagger
- **Interactive Docs**: Available at `/docs`
- **ReDoc**: Alternative docs at `/redoc`
- **Schema**: Auto-generated from Pydantic models
- **Examples**: Include request/response examples

### Endpoint Categories
1. **Authentication**: Login, refresh, logout
2. **Items**: CRUD operations for inventory items
3. **Inventory**: Stock levels and movements
4. **Forecasting**: Demand prediction models
5. **Policies**: Inventory policy optimization
6. **Planning**: Replenishment planning
7. **Orders**: Purchase and transfer orders
8. **Analytics**: KPIs and reporting

## 🔍 Monitoring & Observability

### Metrics
- **Application**: Request rate, response time, error rate
- **Database**: Query performance, connection pool
- **Infrastructure**: CPU, memory, disk usage
- **Business**: KPIs, user activity, feature usage

### Logging
- **Structured Logs**: JSON format with correlation IDs
- **Log Levels**: DEBUG, INFO, WARNING, ERROR
- **Centralized**: Send to log aggregation service
- **Retention**: 30 days for production logs

### Alerting
- **Error Rate**: Alert on high error rates
- **Response Time**: Alert on slow responses
- **Resource Usage**: Alert on high utilization
- **Business Metrics**: Alert on KPI thresholds

## 🎯 Next Steps

### Immediate Tasks
1. [ ] Set up database models and migrations
2. [ ] Implement authentication system
3. [ ] Create core API endpoints
4. [ ] Set up AI/ML workflows
5. [ ] Add comprehensive testing

### Future Enhancements
1. [ ] Real-time WebSocket streaming
2. [ ] Advanced ML model training
3. [ ] Multi-tenant architecture
4. [ ] Advanced analytics
5. [ ] Mobile API optimization

## 🆘 Getting Help

### Common Issues
1. **Database Connection**: Check connection string and credentials
2. **Authentication**: Verify JWT token format and expiration
3. **Performance**: Use database query analysis tools
4. **Deployment**: Check environment variables and dependencies

### Support Channels
- **Slack**: #backend-dev channel
- **GitHub**: Issues and discussions
- **Documentation**: Internal wiki
- **Code Reviews**: PR comments and feedback

---

**Remember**: This is a production system handling critical business data. Always prioritize security, reliability, and performance over development speed.
