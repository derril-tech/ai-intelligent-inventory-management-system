# CLAUDE.md — Collaboration & Editing Guidelines

This document is Claude's onboarding guide for the StockSense AI project.  
It defines the **purpose of the project, coding conventions, editing rules, and collaboration workflow**.  
Claude should always respect these boundaries when generating code.

---

## 📌 Project Overview

**Name:** StockSense AI - Intelligent Inventory Management System  
**Purpose:** End-to-end inventory intelligence platform that unifies demand forecasting, policy optimization, and multi-echelon replenishment across DCs, stores, and vendors. Built with Next.js 14, FastAPI, PostgreSQL + pgvector, and Redis, orchestrated via LangGraph with LangChain tools.  
**Target Users:** Supply chain managers, inventory analysts, warehouse operators, and procurement teams at mid to enterprise-level companies.  
**Goals:** Reduce stockouts by 30-60%, cut working capital by 15-30%, improve OTIF through intelligent automation and AI-driven insights.  
**Tech Stack:**  
  - Frontend: Next.js 14 + React 18 + TypeScript + Tailwind CSS + React Query  
  - Backend: FastAPI + Python 3.11 + Async SQLAlchemy 2.0 + PostgreSQL + pgvector  
  - AI/ML: LangGraph + LangChain + OpenAI/Anthropic + Traditional ML (ETS/ARIMA/Prophet/XGBoost)  
  - Services: Redis, Celery, OpenTelemetry, Prometheus  

---

## 📂 Folder & File Structure

```
ai-intelligent-inventory-management-system/
├── apps/
│   ├── web/                    # Next.js 14 frontend application
│   │   ├── src/
│   │   │   ├── app/           # App Router pages and layouts
│   │   │   ├── components/    # React components (UI, forms, charts, etc.)
│   │   │   ├── lib/          # Utilities, hooks, API clients
│   │   │   ├── types/        # TypeScript type definitions
│   │   │   └── data/         # Mock data and fixtures
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   ├── next.config.js
│   │   └── tsconfig.json
│   └── api/                    # FastAPI backend application
│       ├── src/
│       │   ├── api/          # API routes and endpoints
│       │   ├── core/         # Configuration, security, database
│       │   ├── models/       # SQLAlchemy database models
│       │   ├── schemas/      # Pydantic request/response models
│       │   ├── services/     # Business logic and AI/ML services
│       │   └── utils/        # Utilities and helpers
│       ├── requirements.txt
│       └── main.py
├── packages/                   # Shared libraries and utilities
│   ├── ui/                   # Shared UI components
│   ├── workflows/            # LangGraph workflow definitions
│   ├── retrievers/           # LangChain retrievers
│   ├── connectors/           # External system connectors
│   └── lib/                  # Shared utilities
├── docs/                      # Documentation
│   ├── REPO_MAP.md          # Repository structure guide
│   ├── API_SPEC.md          # API documentation
│   ├── PROMPT_DECLARATION.md # Project requirements and guidelines
│   └── CLAUDE.md            # This file
├── infra/                     # Infrastructure configuration
│   ├── docker/              # Docker configurations
│   ├── terraform/           # Infrastructure as code
│   └── scripts/             # Deployment scripts
├── tests/                     # Test suites
│   ├── e2e/                 # End-to-end tests
│   ├── integration/         # Integration tests
│   └── performance/         # Performance tests
└── scripts/                   # Development and utility scripts
    ├── dev.sh               # Development environment setup
    ├── seed.sh              # Database seeding
    └── deploy.sh            # Deployment automation
```

### Editable by Claude
- `apps/web/src/**/*` (except `_INSTRUCTIONS.md`)  
- `apps/api/src/**/*` (except migrations unless asked)  
- `packages/**/*` (shared libraries)
- Tests in `tests/` directory
- Documentation in `docs/` (except this file)

### Do Not Touch
- Lockfiles (`package-lock.json`, `poetry.lock`, etc.)  
- CI/CD configs (`.github/workflows/*`) unless explicitly requested  
- Auto-generated code or migrations  
- This file (`CLAUDE.md`)  
- Environment files (`.env`) - only modify `.env.example`

---

## 🎨 Coding Conventions

### Languages & Frameworks
- **Frontend**: TypeScript (strict mode), React 18, Next.js 14 App Router
- **Backend**: Python 3.11+, FastAPI, SQLAlchemy 2.0 (async)
- **Database**: PostgreSQL with pgvector extension
- **Styling**: Tailwind CSS with custom design system

### Style Guides
- **Frontend**: Prettier + ESLint (Next.js config), TypeScript strict mode
- **Backend**: Black + isort + flake8 (PEP8), mypy for type checking

### Naming Conventions
- **Files**: kebab-case for components, camelCase for utilities
- **Components**: PascalCase (e.g., `InventoryCard.tsx`)
- **Functions**: camelCase (e.g., `getInventorySummary`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Database**: snake_case for tables and columns
- **API Routes**: kebab-case (e.g., `/api/v1/inventory-items`)

### Code Organization
- **Frontend**: Feature-based organization within components
- **Backend**: Layer-based architecture (API → Services → Models)
- **Shared**: Common utilities in packages
- **Tests**: Mirror source structure with `test_` prefix

---

## 🤖 AI Collaboration Rules

### Response Format
Always structure responses with:
1. **Summary** of what you're implementing
2. **Code changes** with clear file paths
3. **Explanation** of key decisions and trade-offs
4. **Next steps** or recommendations

### Edit Rules
- **Full files**: When creating new files or major refactoring
- **Patches**: For small changes, use search/replace with context
- **Atomic commits**: Each change should be self-contained
- **Backward compatibility**: Maintain API contracts

### Ambiguity Handling
- **Ask for clarification** when requirements are unclear
- **Provide options** when multiple approaches exist
- **Document assumptions** in code comments
- **Suggest improvements** when you see opportunities

### Quality Standards
- **Type safety**: Use TypeScript strict mode, Python type hints
- **Error handling**: Comprehensive try-catch blocks
- **Validation**: Input validation at API boundaries
- **Testing**: Unit tests for business logic
- **Documentation**: Clear docstrings and comments

---

## 🔧 Dependencies & Setup

### Frontend Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "@tanstack/react-query": "^5.0.0",
  "react-hook-form": "^7.45.0",
  "zod": "^3.22.0",
  "recharts": "^2.8.0",
  "framer-motion": "^10.16.0"
}
```

### Backend Dependencies
```txt
fastapi==0.104.0
uvicorn==0.24.0
sqlalchemy==2.0.23
asyncpg==0.29.0
pydantic==2.5.0
python-jose==3.3.0
passlib==1.7.4
python-multipart==0.0.6
redis==5.0.1
celery==5.3.0
langchain==0.0.350
langgraph==0.0.10
openai==1.3.0
anthropic==0.7.0
```

### Environment Variables
**Required for Frontend:**
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_APP_NAME`: Application name

**Required for Backend:**
- `DATABASE_URL`: PostgreSQL connection string
- `SECRET_KEY`: JWT secret key
- `REDIS_URL`: Redis connection string
- `OPENAI_API_KEY`: OpenAI API key

---

## 🔄 Workflow & Tools

### Development Workflow
1. **Setup**: Run `scripts/dev.sh` or `scripts/dev.bat`
2. **Frontend**: `cd apps/web && npm run dev`
3. **Backend**: `cd apps/api && uvicorn main:app --reload`
4. **Database**: PostgreSQL with pgvector extension
5. **Testing**: `npm run test` (frontend) / `pytest` (backend)

### Frontend/Backend Boundary
- **API-First**: Design APIs before implementing UI
- **Type Safety**: Shared TypeScript types for API contracts
- **Error Handling**: Consistent error responses
- **Validation**: Client and server-side validation

### Deployment Notes
- **Frontend**: Vercel (automatic on push to main)
- **Backend**: Render or Railway
- **Database**: Managed PostgreSQL (Supabase, Neon, etc.)
- **Environment**: Separate staging and production

### Contextual Knowledge

#### Domain-Specific Rules
- **Inventory Items**: SKU-based identification, hierarchical categories
- **Locations**: Multi-echelon (DC → Store → Supplier), geographic coordinates
- **Movements**: In/Out/Transfer/Adjustment types with audit trail
- **Forecasts**: Time-series data with confidence intervals
- **Policies**: (s,S), Min-Max, EOQ, Base-Stock optimization

#### Business Logic Caveats
- **Multi-tenancy**: Organization-based data isolation
- **Audit Trail**: All changes tracked with user and timestamp
- **Soft Deletes**: Items marked inactive, not physically deleted
- **Batch Operations**: Bulk updates for performance
- **Real-time Updates**: WebSocket for live inventory changes

#### Performance Considerations
- **Database**: Indexes on frequently queried fields
- **Caching**: Redis for session data and API responses
- **Pagination**: Large datasets paginated with cursor-based navigation
- **Async Operations**: Background tasks for heavy computations
- **CDN**: Static assets served via CDN

---

## 📝 Examples

### Good AI Answer
```
## Summary
I'm implementing the inventory item creation API endpoint with proper validation and error handling.

## Code Changes
**File: apps/api/src/api/inventory.py**
```python
@router.post("/items", response_model=ItemResponse)
async def create_item(
    item_data: ItemCreate,
    current_user: User = Depends(require_write_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Create a new inventory item."""
    service = InventoryService(db)
    return await service.create_item(item_data, current_user)
```

**File: apps/api/src/schemas/inventory.py**
```python
class ItemCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    sku: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    # ... other fields
```

## Explanation
- Used Pydantic for input validation with field constraints
- Implemented proper dependency injection for authentication and database
- Added comprehensive error handling and logging
- Followed RESTful API conventions

## Next Steps
- Add unit tests for the endpoint
- Implement item update and delete operations
- Add inventory movement tracking
```

### Bad AI Answer
```
Here's some code for creating items:

```python
@app.post("/create-item")
def create_item(request):
    item = Item()
    item.name = request.name
    item.save()
    return item
```

This is bad because:
- No input validation
- No error handling
- No authentication
- No proper response model
- No documentation
- No type hints
- No business logic separation
```

---

## 🚨 Common Pitfalls

### Frontend
- **State Management**: Don't over-engineer with global state
- **API Calls**: Use React Query for caching and error handling
- **Forms**: Always validate on both client and server
- **Performance**: Lazy load components and optimize bundle size

### Backend
- **Database**: Use async SQLAlchemy, avoid N+1 queries
- **Authentication**: Implement proper JWT with refresh tokens
- **Validation**: Validate at API boundaries, not just in models
- **Error Handling**: Return consistent error responses

### General
- **Security**: Never expose sensitive data in logs or responses
- **Testing**: Write tests for business logic, not implementation details
- **Documentation**: Keep API docs and README up to date
- **Performance**: Monitor and optimize database queries

---

## 🎯 Success Criteria

### Code Quality
- [ ] All tests pass
- [ ] No linting errors
- [ ] Type safety maintained
- [ ] Documentation updated
- [ ] Performance benchmarks met

### Functionality
- [ ] Features work as specified
- [ ] Error handling comprehensive
- [ ] Security requirements met
- [ ] Accessibility standards followed
- [ ] Mobile responsiveness

### Integration
- [ ] Frontend/backend integration works
- [ ] Database migrations successful
- [ ] Environment variables configured
- [ ] Deployment pipeline passes
- [ ] Monitoring and logging in place

---

## 📞 Support & Resources

### Documentation
- [API Specification](docs/API_SPEC.md)
- [Repository Map](docs/REPO_MAP.md)
- [Prompt Declaration](docs/PROMPT_DECLARATION.md)

### Tools
- **Frontend**: VS Code with TypeScript, Tailwind CSS IntelliSense
- **Backend**: PyCharm or VS Code with Python extensions
- **Database**: pgAdmin or DBeaver for PostgreSQL
- **API Testing**: Postman or Insomnia

### Community
- **Issues**: Create GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Code Review**: Submit pull requests for review

---

**Remember**: This is a production system handling real business data. Always prioritize security, performance, and maintainability over quick fixes. When in doubt, ask for clarification rather than making assumptions.




