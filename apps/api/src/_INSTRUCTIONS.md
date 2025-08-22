# Backend Source Directory Instructions

This directory contains the core FastAPI application code for the StockSense AI backend.

## Directory Structure

```
src/
├── api/                    # API routes and endpoints
├── core/                   # Core configuration and settings
├── models/                 # SQLAlchemy database models
├── schemas/                # Pydantic schemas for validation
├── services/               # Business logic and services
├── utils/                  # Utility functions and helpers
├── main.py                 # Application entry point
└── _INSTRUCTIONS.md        # This file
```

## Development Guidelines

### 1. Code Organization
- Keep related functionality together
- Use clear, descriptive file and directory names
- Follow Python naming conventions (snake_case)
- Group imports: standard library, third-party, local

### 2. Type Hints
- Use type hints for all function parameters and return values
- Use Optional[] for nullable parameters
- Use Union[] for multiple possible types
- Use List[], Dict[], etc. for collections

### 3. Documentation
- Use docstrings for all public functions and classes
- Follow Google docstring format
- Include examples for complex functions
- Document exceptions and edge cases

### 4. Error Handling
- Use custom exceptions for business logic errors
- Provide meaningful error messages
- Log errors with appropriate levels
- Return proper HTTP status codes

## API Routes (`api/`)

### Purpose
Define all API endpoints and route handlers.

### Structure
```
api/
├── __init__.py
├── v1/                     # API version 1
│   ├── __init__.py
│   ├── auth.py             # Authentication endpoints
│   ├── items.py            # Item management
│   ├── inventory.py        # Inventory operations
│   ├── forecasts.py        # Forecasting endpoints
│   ├── policies.py         # Policy optimization
│   ├── orders.py           # Purchase/transfer orders
│   ├── analytics.py        # Analytics and KPIs
│   └── exceptions.py       # Exception management
└── dependencies.py         # Shared dependencies
```

### Guidelines
- Use FastAPI dependency injection
- Implement proper authentication and authorization
- Validate input with Pydantic schemas
- Handle errors gracefully
- Include comprehensive logging

### Example Structure
```python
# api/v1/items.py
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from ..schemas.item import ItemCreate, ItemResponse
from ..services.item_service import ItemService
from ..dependencies import get_current_user

router = APIRouter(prefix="/items", tags=["items"])

@router.get("/", response_model=List[ItemResponse])
async def get_items(
    skip: int = 0,
    limit: int = 100,
    current_user = Depends(get_current_user)
):
    """Get list of items."""
    # Implementation
```

## Core Configuration (`core/`)

### Purpose
Application configuration, settings, and core utilities.

### Structure
```
core/
├── __init__.py
├── config.py               # Application settings
├── database.py             # Database configuration
├── security.py             # Security utilities
├── logging.py              # Logging configuration
└── exceptions.py           # Custom exceptions
```

### Guidelines
- Use Pydantic Settings for configuration
- Support environment-specific settings
- Implement proper security measures
- Configure logging appropriately

### Example Configuration
```python
# core/config.py
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    app_name: str = "StockSense AI"
    debug: bool = False
    database_url: str
    redis_url: str
    secret_key: str
    
    class Config:
        env_file = ".env"
```

## Database Models (`models/`)

### Purpose
SQLAlchemy models representing database entities.

### Structure
```
models/
├── __init__.py
├── base.py                 # Base model class
├── user.py                 # User and organization models
├── inventory.py            # Item, location, inventory models
├── forecasting.py          # Forecast models
├── policies.py             # Policy models
├── orders.py               # Order models
└── analytics.py            # Analytics models
```

### Guidelines
- Inherit from BaseModel
- Use proper relationships
- Include indexes for performance
- Implement soft deletes
- Use UUIDs for primary keys

### Example Model
```python
# models/item.py
from sqlalchemy import Column, String, Integer, Boolean
from sqlalchemy.dialects.postgresql import UUID, JSONB
from .base import BaseModel

class Item(BaseModel):
    __tablename__ = "items"
    
    sku = Column(String(100), unique=True, nullable=False, index=True)
    name = Column(String(255), nullable=False, index=True)
    description = Column(Text, nullable=True)
    # ... other fields
```

## Pydantic Schemas (`schemas/`)

### Purpose
Data validation and serialization schemas.

### Structure
```
schemas/
├── __init__.py
├── base.py                 # Base schemas
├── user.py                 # User schemas
├── item.py                 # Item schemas
├── inventory.py            # Inventory schemas
├── forecast.py             # Forecast schemas
├── policy.py               # Policy schemas
└── order.py                # Order schemas
```

### Guidelines
- Use Pydantic for validation
- Separate input and output schemas
- Include field validation
- Use proper field types
- Implement custom validators

### Example Schema
```python
# schemas/item.py
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ItemBase(BaseModel):
    sku: str = Field(..., min_length=1, max_length=100)
    name: str = Field(..., min_length=1, max_length=255)
    description: Optional[str] = None

class ItemCreate(ItemBase):
    pass

class ItemResponse(ItemBase):
    id: str
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
```

## Business Services (`services/`)

### Purpose
Business logic and service layer implementation.

### Structure
```
services/
├── __init__.py
├── base.py                 # Base service class
├── auth_service.py         # Authentication logic
├── item_service.py         # Item management
├── inventory_service.py    # Inventory operations
├── forecast_service.py     # Forecasting logic
├── policy_service.py       # Policy optimization
├── order_service.py        # Order processing
└── analytics_service.py    # Analytics calculations
```

### Guidelines
- Keep business logic separate from API layer
- Use dependency injection
- Implement proper error handling
- Include comprehensive logging
- Write unit tests for all services

### Example Service
```python
# services/item_service.py
from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from ..models.item import Item
from ..schemas.item import ItemCreate, ItemUpdate

class ItemService:
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create_item(self, item_data: ItemCreate) -> Item:
        """Create a new item."""
        # Implementation
    
    async def get_items(self, skip: int = 0, limit: int = 100) -> List[Item]:
        """Get list of items."""
        # Implementation
```

## Utilities (`utils/`)

### Purpose
Helper functions and utilities.

### Structure
```
utils/
├── __init__.py
├── security.py             # Security utilities
├── validation.py           # Validation helpers
├── formatting.py           # Data formatting
├── date_utils.py           # Date/time utilities
└── constants.py            # Application constants
```

### Guidelines
- Keep utilities pure and stateless
- Write comprehensive tests
- Document all functions
- Use type hints
- Handle edge cases

### Example Utility
```python
# utils/security.py
import hashlib
import secrets
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    """Hash a password using bcrypt."""
    return pwd_context.hash(password)

def verify_password(password: str, hashed: str) -> bool:
    """Verify a password against its hash."""
    return pwd_context.verify(password, hashed)
```

## Testing Guidelines

### Test Structure
```
tests/
├── conftest.py             # Test configuration
├── test_api/               # API endpoint tests
├── test_models/            # Model tests
├── test_services/          # Service tests
└── test_utils/             # Utility tests
```

### Testing Guidelines
- Use pytest for testing
- Mock external dependencies
- Test both success and failure cases
- Use factories for test data
- Maintain high test coverage

### Example Test
```python
# tests/test_services/test_item_service.py
import pytest
from ..services.item_service import ItemService
from ..schemas.item import ItemCreate

@pytest.mark.asyncio
async def test_create_item(db_session):
    service = ItemService(db_session)
    item_data = ItemCreate(sku="TEST-001", name="Test Item")
    
    item = await service.create_item(item_data)
    
    assert item.sku == "TEST-001"
    assert item.name == "Test Item"
```

## Performance Guidelines

### Database Optimization
- Use proper indexes
- Implement query optimization
- Use connection pooling
- Implement caching strategies

### API Performance
- Use async/await for I/O operations
- Implement proper pagination
- Use response compression
- Monitor response times

### Caching Strategy
- Cache frequently accessed data
- Use Redis for distributed caching
- Implement cache invalidation
- Monitor cache hit rates

## Security Guidelines

### Authentication
- Use JWT tokens
- Implement proper token refresh
- Use secure password hashing
- Implement rate limiting

### Authorization
- Use role-based access control
- Implement row-level security
- Validate user permissions
- Audit sensitive operations

### Data Protection
- Validate all inputs
- Use parameterized queries
- Implement proper CORS
- Use HTTPS in production

## Monitoring and Logging

### Logging
- Use structured logging
- Include correlation IDs
- Log at appropriate levels
- Monitor log volumes

### Metrics
- Track API response times
- Monitor error rates
- Track database performance
- Monitor resource usage

### Health Checks
- Implement health endpoints
- Monitor external dependencies
- Track application state
- Alert on failures

## Deployment Guidelines

### Environment Configuration
- Use environment variables
- Support multiple environments
- Secure sensitive data
- Use configuration validation

### Containerization
- Use multi-stage builds
- Optimize image size
- Include health checks
- Use proper base images

### CI/CD
- Automate testing
- Use code quality checks
- Implement security scanning
- Deploy with zero downtime

## Next Steps

1. **Implement missing API endpoints** based on requirements
2. **Add comprehensive tests** for all components
3. **Implement caching strategy** for performance
4. **Add monitoring and alerting** for production
5. **Optimize database queries** and add indexes
6. **Implement security measures** and audit logging
7. **Add API documentation** with examples
8. **Set up CI/CD pipeline** for automated deployment
