# StockSense AI - Backend API

The FastAPI backend for the StockSense AI Intelligent Inventory Management System.

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- PostgreSQL 14+
- Redis 6+
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   cd apps/api
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Set up database**
   ```bash
   # Create PostgreSQL database
   createdb stocksense_ai
   
   # Run migrations
   alembic upgrade head
   ```

6. **Start the server**
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

The API will be available at `http://localhost:8000`

## 📚 API Documentation

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`
- **OpenAPI JSON**: `http://localhost:8000/openapi.json`

## 🏗️ Architecture

### Core Components

- **FastAPI**: Modern, fast web framework for building APIs
- **SQLAlchemy 2.0**: Async ORM for database operations
- **PostgreSQL**: Primary database with pgvector extension
- **Redis**: Caching and message queuing
- **LangChain/LangGraph**: AI orchestration and workflows
- **OpenAI/Anthropic**: AI model integration

### Directory Structure

```
apps/api/
├── src/
│   ├── api/                 # API routes and endpoints
│   ├── core/                # Core configuration and settings
│   ├── models/              # SQLAlchemy database models
│   ├── schemas/             # Pydantic schemas for validation
│   ├── services/            # Business logic and services
│   ├── utils/               # Utility functions and helpers
│   └── main.py              # Application entry point
├── alembic/                 # Database migrations
├── tests/                   # Test suite
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables

Key environment variables (see `.env.example` for complete list):

```bash
# Application
APP_NAME=StockSense AI
DEBUG=true
SECRET_KEY=your-secret-key

# Database
DATABASE_URL=postgresql+asyncpg://user:pass@localhost/stocksense_ai

# Redis
REDIS_URL=redis://localhost:6379

# AI Services
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key

# Authentication
JWT_SECRET_KEY=your-jwt-secret
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### Database Setup

1. **Install PostgreSQL extensions**
   ```sql
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   CREATE EXTENSION IF NOT EXISTS "pgvector";
   ```

2. **Run migrations**
   ```bash
   alembic upgrade head
   ```

3. **Seed initial data (optional)**
   ```bash
   python scripts/seed_data.py
   ```

## 🧪 Testing

### Run Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=src

# Run specific test file
pytest tests/test_forecasting.py

# Run with verbose output
pytest -v
```

### Test Structure

```
tests/
├── conftest.py              # Test configuration and fixtures
├── test_api/                # API endpoint tests
├── test_models/             # Database model tests
├── test_services/           # Service layer tests
└── test_utils/              # Utility function tests
```

## 🚀 Deployment

### Docker Deployment

1. **Build image**
   ```bash
   docker build -t stocksense-api .
   ```

2. **Run container**
   ```bash
   docker run -p 8000:8000 --env-file .env stocksense-api
   ```

### Production Deployment

1. **Set production environment**
   ```bash
   export ENVIRONMENT=production
   export DEBUG=false
   ```

2. **Use production server**
   ```bash
   gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
   ```

3. **Set up reverse proxy (nginx)**
   ```nginx
   server {
       listen 80;
       server_name api.stocksense.ai;
       
       location / {
           proxy_pass http://127.0.0.1:8000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## 📊 Monitoring

### Health Checks

- **Health endpoint**: `GET /health`
- **Readiness check**: `GET /health/ready`
- **Liveness check**: `GET /health/live`

### Metrics

- **Prometheus metrics**: `GET /metrics`
- **Application metrics**: `GET /metrics/app`

### Logging

Structured logging with different levels:
- `DEBUG`: Detailed debugging information
- `INFO`: General information about application flow
- `WARNING`: Warning messages for potentially harmful situations
- `ERROR`: Error events that might still allow the application to continue
- `CRITICAL`: Critical errors that may prevent the application from running

## 🔐 Security

### Authentication

- JWT-based authentication
- Role-based access control (RBAC)
- API key authentication for external integrations

### Data Protection

- Input validation with Pydantic
- SQL injection prevention with SQLAlchemy
- XSS protection with proper content types
- CORS configuration for frontend integration

### Rate Limiting

- Request rate limiting per user/IP
- API endpoint-specific limits
- Burst protection

## 🔄 Development Workflow

### Code Quality

```bash
# Format code
black src/ tests/

# Sort imports
isort src/ tests/

# Lint code
flake8 src/ tests/

# Type checking
mypy src/
```

### Pre-commit Hooks

```bash
# Install pre-commit
pip install pre-commit

# Install hooks
pre-commit install

# Run manually
pre-commit run --all-files
```

### Database Migrations

```bash
# Create new migration
alembic revision --autogenerate -m "Description of changes"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes and test**: `pytest`
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Create Pull Request**

### Code Standards

- Follow PEP 8 style guide
- Use type hints for all functions
- Write docstrings for all public functions
- Maintain test coverage above 80%
- Use meaningful commit messages

## 📞 Support

- **Documentation**: [docs.stocksense.ai](https://docs.stocksense.ai)
- **Issues**: [GitHub Issues](https://github.com/stocksense/ai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/stocksense/ai/discussions)
- **Email**: support@stocksense.ai

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
