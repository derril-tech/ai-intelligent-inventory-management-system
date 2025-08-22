# Repository Map - StockSense AI

This document provides a comprehensive overview of the StockSense AI repository structure, explaining the purpose and organization of each folder and file.

## 📁 Root Structure

```
ai-intelligent-inventory-management-system/
├── apps/                    # Main application code
│   ├── web/                # Next.js 14 frontend application
│   └── api/                # FastAPI backend application
├── packages/               # Shared packages and libraries
├── docs/                   # Documentation and guides
├── infra/                  # Infrastructure and deployment
├── tests/                  # End-to-end and integration tests
└── scripts/                # Development and deployment scripts
```

## 🎯 Apps Directory

### `/apps/web/` - Frontend Application (Next.js 14)

**Purpose**: The main user interface for StockSense AI, built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

**Key Features**:
- Modern React with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design with dark/light themes
- Accessibility (WCAG 2.1 AA compliant)

**Structure**:
```
apps/web/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (dashboard)/   # Dashboard pages
│   │   ├── api/           # API routes
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components
│   │   ├── forms/        # Form components
│   │   ├── charts/       # Data visualization
│   │   └── layout/       # Layout components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── services/         # API service layer
│   ├── store/            # State management
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Helper functions
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

### `/apps/api/` - Backend Application (FastAPI)

**Purpose**: The backend API server providing business logic, data processing, and AI/ML capabilities.

**Key Features**:
- FastAPI with async support
- PostgreSQL with pgvector for embeddings
- Redis for caching and queues
- LangGraph for AI orchestration
- Comprehensive authentication and authorization

**Structure**:
```
apps/api/
├── app/
│   ├── api/              # API endpoints
│   │   └── v1/           # Version 1 API routes
│   ├── core/             # Core application logic
│   │   ├── config.py     # Configuration settings
│   │   ├── database.py   # Database connection
│   │   ├── security.py   # Authentication & security
│   │   └── logging.py    # Logging configuration
│   ├── models/           # Database models
│   ├── schemas/          # Pydantic schemas
│   ├── services/         # Business logic services
│   ├── crud/             # Database operations
│   └── utils/            # Utility functions
├── alembic/              # Database migrations
├── tests/                # Backend tests
├── requirements.txt      # Python dependencies
└── main.py              # Application entry point
```

## 📦 Packages Directory

### `/packages/ui/` - Shared UI Components

**Purpose**: Reusable UI components that can be shared between frontend applications.

**Contents**:
- Button components
- Form components
- Data display components
- Navigation components
- Theme providers

### `/packages/workflows/` - LangGraph Workflows

**Purpose**: AI workflow definitions using LangGraph for inventory management processes.

**Contents**:
- Demand forecasting workflows
- Policy optimization workflows
- Replenishment planning workflows
- Exception handling workflows

### `/packages/retrievers/` - LangChain Retrievers

**Purpose**: RAG (Retrieval-Augmented Generation) components for AI-powered insights.

**Contents**:
- Document retrievers
- Vector store integrations
- Embedding generators
- Search utilities

### `/packages/connectors/` - External Integrations

**Purpose**: Connectors for ERP, WMS, EDI, and other external systems.

**Contents**:
- SAP connector
- Oracle NetSuite connector
- Shopify connector
- EDI processors
- 3PL integrations

### `/packages/lib/` - Shared Libraries

**Purpose**: Common utilities, types, and functions shared across the application.

**Contents**:
- Type definitions
- Utility functions
- Constants
- Validation schemas

## 🏗️ Infrastructure Directory

### `/infra/` - Infrastructure as Code

**Purpose**: Infrastructure configuration and deployment scripts.

**Contents**:
- Docker configurations
- Kubernetes manifests
- Terraform configurations
- CI/CD pipelines
- Environment configurations

## 🧪 Tests Directory

### `/tests/` - Testing Infrastructure

**Purpose**: End-to-end tests, integration tests, and test utilities.

**Contents**:
- E2E tests (Playwright)
- Integration tests
- Performance tests
- Test data and fixtures

## 📚 Documentation Directory

### `/docs/` - Project Documentation

**Purpose**: Comprehensive documentation for developers, users, and stakeholders.

**Contents**:
- `REPO_MAP.md` - This file (repository structure)
- `API_SPEC.md` - API documentation and specifications
- `CLAUDE.md` - AI collaboration guidelines
- `PROMPT_DECLARATION.md` - Project requirements and specifications
- User guides
- Developer guides
- Architecture diagrams

## 🔧 Scripts Directory

### `/scripts/` - Development Scripts

**Purpose**: Automation scripts for development, testing, and deployment.

**Contents**:
- Development setup scripts
- Database migration scripts
- Deployment scripts
- Code quality checks
- Performance monitoring

## 📋 Key Configuration Files

### Root Level
- `package.json` - Monorepo configuration
- `turbo.json` - Build system configuration
- `.env.example` - Environment variable templates
- `.gitignore` - Git ignore rules
- `README.md` - Project overview

### Frontend (apps/web/)
- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### Backend (apps/api/)
- `requirements.txt` - Python dependencies
- `alembic.ini` - Database migration configuration
- `pyproject.toml` - Python project configuration
- `Dockerfile` - Container configuration

## 🎯 Development Workflow

1. **Setup**: Use scripts in `/scripts/` to initialize the development environment
2. **Frontend**: Develop in `/apps/web/` with hot reloading
3. **Backend**: Develop in `/apps/api/` with auto-reload
4. **Testing**: Run tests from `/tests/` directory
5. **Deployment**: Use configurations in `/infra/` directory

## 🔒 Security Considerations

- Authentication handled in `/apps/api/app/core/security.py`
- Environment variables managed through `.env` files
- Secrets stored securely (not in repository)
- CORS configured in FastAPI middleware
- Input validation with Pydantic schemas

## 📊 Monitoring and Observability

- Structured logging configured in both frontend and backend
- Health check endpoints available
- Performance monitoring with custom middleware
- Error tracking and reporting
- Metrics collection for business KPIs

## 🚀 Deployment Strategy

- **Frontend**: Deployed to Vercel with ISR and edge caching
- **Backend**: Deployed to Render with auto-scaling
- **Database**: PostgreSQL with pgvector extension
- **Cache**: Redis for session and data caching
- **CDN**: Global content delivery network

This structure ensures a clean separation of concerns, maintainable codebase, and scalable architecture for the StockSense AI platform.
